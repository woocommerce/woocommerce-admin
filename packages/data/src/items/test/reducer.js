/**
 * Internal dependencies
 */
import reducer from '../reducer';
import TYPES from '../action-types';
import { getResourceName } from '../../utils';
import { getTotalCountResourceName } from '../utils';

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

	it( 'should handle SET_ITEM', () => {
		const itemType = 'guyisms';
		const initialState = {
			items: {
				[ itemType ]: {
					data: [ 1, 2 ],
				},
				'total-guyisms:{}': 2,
			},
			errors: {},
			data: {
				[ itemType ]: {
					'1': { id: 1, title: 'Donkey', status: 'flavortown' },
					'2': { id: 2, title: 'Sauce', status: 'flavortown' },
				},
			},
		};
		const update = {
			id: 2,
			status: 'bomb dot com',
		};

		const state = reducer( initialState, {
			type: TYPES.SET_ITEM,
			id: update.id,
			item: update,
			itemType,
		} );

		expect( state.items ).toEqual( initialState.items );
		expect( state.errors ).toEqual( initialState.errors );

		expect( state.data[ itemType ][ '1' ] ).toEqual(
			initialState.data[ itemType ][ '1' ]
		);
		expect( state.data[ itemType ][ '2' ].id ).toEqual(
			initialState.data[ itemType ][ '2' ].id
		);
		expect( state.data[ itemType ][ '2' ].title ).toEqual(
			initialState.data[ itemType ][ '2' ].title
		);
		expect( state.data[ itemType ][ '2' ].status ).toEqual( update.status );
	} );

	it( 'should handle SET_ITEMS', () => {
		const items = [
			{ id: 1, title: 'Yum!' },
			{ id: 2, title: 'Dynamite!' },
		];
		const totalCount = 45;
		const query = { status: 'flavortown' };
		const itemType = 'BBQ';
		const state = reducer( defaultState, {
			type: TYPES.SET_ITEMS,
			items,
			itemType,
			query,
			totalCount,
		} );

		const resourceName = getResourceName( itemType, query );
		const totalResourceName = getTotalCountResourceName( itemType, query );

		expect( state.items[ resourceName ].data ).toHaveLength( 2 );
		expect( state.items[ resourceName ].data.includes( 1 ) ).toBeTruthy();
		expect( state.items[ resourceName ].data.includes( 2 ) ).toBeTruthy();

		expect( state.items[ totalResourceName ] ).toBe( 45 );
		expect( state.data[ itemType ][ '1' ] ).toBe( items[ 0 ] );
		expect( state.data[ itemType ][ '2' ] ).toBe( items[ 1 ] );
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
