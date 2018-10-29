/**
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
import couponsReducer, { DEFAULT_STATE } from '../reducer';
import { getJsonString } from 'store/utils';

describe( 'couponsReducer', () => {
	it( 'returns default state by default', () => {
		const state = couponsReducer( undefined, {} );
		expect( state ).toEqual( DEFAULT_STATE );
	} );

	it( 'returns received coupon data', () => {
		const originalState = deepFreeze( { ...DEFAULT_STATE } );
		const query = {
			page: 3,
			per_page: 5,
		};
		const coupons = [
			{
				id: 1,
				name: 'my-coupon',
			},
		];
		const state = couponsReducer( originalState, {
			type: 'SET_COUPONS',
			query,
			coupons,
		} );
		const queryKey = getJsonString( query );
		expect( state[ queryKey ] ).toEqual( coupons );
	} );

	it( 'returns received coupon data for multiple queries', () => {
		const originalState = deepFreeze( { ...DEFAULT_STATE } );
		const query1 = {
			page: 3,
			per_page: 5,
		};
		const coupons1 = [
			{
				id: 1,
				name: 'my-coupon',
			},
		];
		const intermediateState = couponsReducer( originalState, {
			type: 'SET_COUPONS',
			query: query1,
			coupons: coupons1,
		} );
		const query2 = {
			page: 6232,
			per_page: 978,
		};
		const coupons2 = [
			{
				id: 2,
				name: 'my-other-coupon',
			},
		];
		const finalState = couponsReducer( intermediateState, {
			type: 'SET_COUPONS',
			query: query2,
			coupons: coupons2,
		} );

		const queryKey1 = getJsonString( query1 );
		const queryKey2 = getJsonString( query2 );
		expect( finalState[ queryKey1 ] ).toEqual( coupons1 );
		expect( finalState[ queryKey2 ] ).toEqual( coupons2 );
	} );

	it( 'returns error appropriately', () => {
		const originalState = deepFreeze( { ...DEFAULT_STATE } );
		const query = {
			page: 4,
			per_page: 5,
		};
		const state = couponsReducer( originalState, {
			type: 'SET_COUPONS_ERROR',
			query,
		} );
		const queryKey = getJsonString( query );
		expect( state[ queryKey ] ).toEqual( ERROR );
	} );
} );
