/**
 * Internal dependencies
 */
import reducer from '../reducer';
import TYPES from '../action-types';

const defaultState = {
	profileItems: {},
	errors: {},
};

describe( 'plugins reducer', () => {
	it( 'should return a default state', () => {
		const state = reducer( undefined, {} );
		expect( state ).toEqual( defaultState );
		expect( state ).not.toBe( defaultState );
	} );

	it( 'should handle SET_PROFILE_ITEMS', () => {
		const state = reducer( defaultState, {
			type: TYPES.SET_PROFILE_ITEMS,
			profileItems: { propertyName: 'value' },
		} );

		expect( state.errors ).not.toHaveProperty( 'getProfileItems' );
		expect( state.profileItems ).toHaveProperty( 'propertyName' );
		expect( state.profileItems.propertyName ).toBe( 'value' );
	} );

	it( 'should handle SET_ERROR', () => {
		const state = reducer( defaultState, {
			type: TYPES.SET_ERROR,
			selector: 'getProfileItems',
			error: { code: 'error' },
		} );

		/* eslint-disable dot-notation */
		expect( state.errors[ 'getProfileItems' ].code ).toBe( 'error' );
		/* eslint-enable dot-notation */
	} );
} );
