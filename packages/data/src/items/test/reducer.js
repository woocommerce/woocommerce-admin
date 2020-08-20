/**
 * Internal dependencies
 */
import reducer from '../reducer';
import TYPES from '../action-types';
import { getResourceName } from '../../utils';

const defaultState = {
	items: {},
	errors: {},
	data: {},
};

describe( 'items reducer', () => {
	it( 'should return a default state', () => {
		const state = reducer( undefined, {} );
		expect( state ).toEqual( defaultState );
		expect( state ).not.toBe( defaultState );
	} );

	it( 'should handle UPDATE_ITEMS', () => {
		const items = [
			{ id: 1, title: 'Yum!' },
			{ id: 2, title: 'Dynamite!' },
		];
		const totalCount = 45;
		const query = { status: 'flavortown' };
		const itemType = 'BBQ';
		const state = reducer( defaultState, {
			type: TYPES.UPDATE_ITEMS,
			items,
			itemType,
			query,
			totalCount,
		} );

		const resourceName = getResourceName( itemType, query );

		expect( state.items[ resourceName ].data ).toHaveLength( 2 );
		expect( state.items[ resourceName ].data.includes( 1 ) ).toBeTruthy();
		expect( state.items[ resourceName ].data.includes( 2 ) ).toBeTruthy();

		expect( state.items[ resourceName ].totalCount ).toBe( 45 );
		expect( state.data[ resourceName ][ '1' ] ).toBe( items[ 0 ] );
		expect( state.data[ resourceName ][ '2' ] ).toBe( items[ 1 ] );
	} );

	it( 'should handle SET_ERROR', () => {
		const query = { status: 'flavortown' };
		const itemType = 'BBQ';
		const resourceName = getResourceName( itemType, query );
		const error = 'Baaam!';
		const state = reducer( defaultState, {
			type: TYPES.SET_ERROR,
			itemType,
			query,
			error,
		} );

		expect( state.errors[ resourceName ] ).toBe( error );
	} );
} );
