/*
 * @format
 */

/**
 * External dependencies
 */
import deepFreeze from 'deep-freeze';

/**
 * Internal dependencies
 */
import { ERROR } from 'store/constants';
import selectors from '../selectors';
import { select } from '@wordpress/data';
import { getJsonString } from 'store/utils';

const { getCategories, isGetCategoriesRequesting, isGetCategoriesError } = selectors;
jest.mock( '@wordpress/data', () => ( {
	...require.requireActual( '@wordpress/data' ),
	select: jest.fn().mockReturnValue( {} ),
} ) );

const query = { orderby: 'date' };
const queryKey = getJsonString( query );

describe( 'getCategories', () => {
	it( 'returns an empty array when no query matches values in state', () => {
		const state = deepFreeze( {} );
		expect( getCategories( state, query ) ).toEqual( [] );
	} );

	it( 'returns categories for a given query', () => {
		const categories = [
			{
				id: 1,
				name: 'my-category',
			},
		];
		const state = deepFreeze( {
			categories: {
				[ queryKey ]: categories,
			},
		} );
		expect( getCategories( state, query ) ).toEqual( categories );
	} );
} );

describe( 'isGetCategoriesRequesting', () => {
	beforeAll( () => {
		select( 'core/data' ).isResolving = jest.fn().mockReturnValue( false );
	} );

	afterAll( () => {
		select( 'core/data' ).isResolving.mockRestore();
	} );

	function setIsResolving( isResolving ) {
		select( 'core/data' ).isResolving.mockImplementation(
			( reducerKey, selectorName ) =>
				isResolving && reducerKey === 'wc-admin' && selectorName === 'getCategories'
		);
	}

	it( 'returns false if never requested', () => {
		const result = isGetCategoriesRequesting( query );
		expect( result ).toBe( false );
	} );

	it( 'returns false if request finished', () => {
		setIsResolving( false );
		const result = isGetCategoriesRequesting( query );
		expect( result ).toBe( false );
	} );

	it( 'returns true if requesting', () => {
		setIsResolving( true );
		const result = isGetCategoriesRequesting( query );
		expect( result ).toBe( true );
	} );
} );

describe( 'isGetCategoriesError', () => {
	it( 'returns false by default', () => {
		const state = deepFreeze( {} );
		expect( isGetCategoriesError( state, query ) ).toEqual( false );
	} );
	it( 'returns true if ERROR constant is found', () => {
		const state = deepFreeze( {
			categories: {
				[ queryKey ]: ERROR,
			},
		} );
		expect( isGetCategoriesError( state, query ) ).toEqual( true );
	} );
} );
