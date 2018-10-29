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
import categoriesReducer, { DEFAULT_STATE } from '../reducer';
import { getJsonString } from 'store/utils';

describe( 'categoriesReducer', () => {
	it( 'returns default state by default', () => {
		const state = categoriesReducer( undefined, {} );
		expect( state ).toEqual( DEFAULT_STATE );
	} );

	it( 'returns received category data', () => {
		const originalState = deepFreeze( { ...DEFAULT_STATE } );
		const query = {
			page: 3,
			per_page: 5,
		};
		const categories = [
			{
				id: 1,
				name: 'my-category',
			},
		];
		const state = categoriesReducer( originalState, {
			type: 'SET_CATEGORIES',
			query,
			categories,
		} );
		const queryKey = getJsonString( query );
		expect( state[ queryKey ] ).toEqual( categories );
	} );

	it( 'returns received category data for multiple queries', () => {
		const originalState = deepFreeze( { ...DEFAULT_STATE } );
		const query1 = {
			page: 3,
			per_page: 5,
		};
		const categories1 = [
			{
				id: 1,
				name: 'my-category',
			},
		];
		const intermediateState = categoriesReducer( originalState, {
			type: 'SET_CATEGORIES',
			query: query1,
			categories: categories1,
		} );
		const query2 = {
			page: 6232,
			per_page: 978,
		};
		const categories2 = [
			{
				id: 2,
				name: 'my-other-category',
			},
		];
		const finalState = categoriesReducer( intermediateState, {
			type: 'SET_CATEGORIES',
			query: query2,
			categories: categories2,
		} );

		const queryKey1 = getJsonString( query1 );
		const queryKey2 = getJsonString( query2 );
		expect( finalState[ queryKey1 ] ).toEqual( categories1 );
		expect( finalState[ queryKey2 ] ).toEqual( categories2 );
	} );

	it( 'returns error appropriately', () => {
		const originalState = deepFreeze( { ...DEFAULT_STATE } );
		const query = {
			page: 4,
			per_page: 5,
		};
		const state = categoriesReducer( originalState, {
			type: 'SET_CATEGORIES_ERROR',
			query,
		} );
		const queryKey = getJsonString( query );
		expect( state[ queryKey ] ).toEqual( ERROR );
	} );
} );
