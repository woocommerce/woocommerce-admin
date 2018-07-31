/**
 * External dependencies
 *
 * @format
 */

import deepFreeze from 'deep-freeze';

/**
 * Internal dependencies
 */
import selectors from '../selectors';
import { select } from '@wordpress/data';

const { getCurrentUser, isRequestingCurrentUser } = selectors;
jest.mock( '@wordpress/data', () => ( {
	...require.requireActual( '@wordpress/data' ),
	select: jest.fn().mockReturnValue( {} ),
} ) );

describe( 'getCurrentUser()', () => {
	it( 'returns null when no user data is available', () => {
		const state = deepFreeze( {} );
		expect( getCurrentUser( state ) ).toEqual( null );
	} );
	it( 'returns current user information', () => {
		let state = deepFreeze( {
			currentUser: {
				data: {},
			},
		} );
		expect( getCurrentUser( state ) ).toEqual( {} );

		state = deepFreeze( {
			currentUser: {
				data: {
					first_name: 'Testing',
				},
			},
		} );
		expect( getCurrentUser( state ) ).toEqual( {
			first_name: 'Testing',
		} );
	} );
} );

describe( 'isRequestingCurrentUser()', () => {
	beforeAll( () => {
		select( 'core/data' ).isResolving = jest.fn().mockReturnValue( false );
	} );

	afterAll( () => {
		select( 'core/data' ).isResolving.mockRestore();
	} );

	function setIsResolving( isResolving ) {
		select( 'core/data' ).isResolving.mockImplementation(
			( reducerKey, selectorName ) =>
				isResolving && reducerKey === 'wc-admin' && selectorName === 'getCurrentUser'
		);
	}

	it( 'returns false if never requested', () => {
		const result = isRequestingCurrentUser();
		expect( result ).toBe( false );
	} );

	it( 'returns false if user resolution finished', () => {
		setIsResolving( false );
		const result = isRequestingCurrentUser();
		expect( result ).toBe( false );
	} );

	it( 'returns true if user resolution started', () => {
		setIsResolving( true );
		const result = isRequestingCurrentUser();
		expect( result ).toBe( true );
	} );
} );
