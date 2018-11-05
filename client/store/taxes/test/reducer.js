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
import taxesReducer, { DEFAULT_STATE } from '../reducer';
import { getJsonString } from 'store/utils';
describe( 'taxesReducer', () => {
	it( 'returns default state by default', () => {
		const state = taxesReducer( undefined, {} );
		expect( state ).toEqual( DEFAULT_STATE );
	} );
	it( 'returns received tax data', () => {
		const originalState = deepFreeze( { ...DEFAULT_STATE } );
		const query = {
			page: 3,
			per_page: 5,
		};
		const taxes = [
			{
				id: 1,
				name: 'my-tax',
			},
		];
		const state = taxesReducer( originalState, {
			type: 'SET_TAXES',
			query,
			taxes,
		} );
		const queryKey = getJsonString( query );
		expect( state[ queryKey ] ).toEqual( taxes );
	} );
	it( 'returns received tax data for multiple queries', () => {
		const originalState = deepFreeze( { ...DEFAULT_STATE } );
		const query1 = {
			page: 3,
			per_page: 5,
		};
		const taxes1 = [
			{
				id: 1,
				name: 'my-tax',
			},
		];
		const intermediateState = taxesReducer( originalState, {
			type: 'SET_TAXES',
			query: query1,
			taxes: taxes1,
		} );
		const query2 = {
			page: 6232,
			per_page: 978,
		};
		const taxes2 = [
			{
				id: 2,
				name: 'my-other-tax',
			},
		];
		const finalState = taxesReducer( intermediateState, {
			type: 'SET_TAXES',
			query: query2,
			taxes: taxes2,
		} );
		const queryKey1 = getJsonString( query1 );
		const queryKey2 = getJsonString( query2 );
		expect( finalState[ queryKey1 ] ).toEqual( taxes1 );
		expect( finalState[ queryKey2 ] ).toEqual( taxes2 );
	} );
	it( 'returns error appropriately', () => {
		const originalState = deepFreeze( { ...DEFAULT_STATE } );
		const query = {
			page: 4,
			per_page: 5,
		};
		const state = taxesReducer( originalState, {
			type: 'SET_TAXES_ERROR',
			query,
		} );
		const queryKey = getJsonString( query );
		expect( state[ queryKey ] ).toEqual( ERROR );
	} );
} );
