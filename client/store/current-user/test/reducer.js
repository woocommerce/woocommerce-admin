/**
 * External dependencies
 *
 * @format
 */

import deepFreeze from 'deep-freeze';

/**
 * Internal dependencies
 */
import currentUserReducer from '../reducer';

describe( 'currentUserReducer()', () => {
	it( 'returns an empty data object by default', () => {
		const state = currentUserReducer( undefined, {} );
		expect( state ).toEqual( { data: {} } );
	} );

	it( 'returns with received user data', () => {
		const originalState = deepFreeze( {} );
		const state = currentUserReducer( originalState, {
			type: 'SET_CURRENT_USER',
			user: {
				first_name: 'Testing',
				last_name: 'Tester',
			},
		} );

		expect( state ).toEqual( {
			data: {
				first_name: 'Testing',
				last_name: 'Tester',
			},
		} );
	} );
} );
