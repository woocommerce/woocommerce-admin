/** @format */
/**
 * External dependencies
 */
import { get } from 'lodash';
/**
 * Internal dependencies
 */
import { ERROR } from 'store/constants';
const DEFAULT_STATE = {
	queries: {},
};
export default function productsReducer( state = DEFAULT_STATE, action ) {
	if ( 'SET_PRODUCTS' === action.type ) {
		const prevQueries = get( state, 'queries', [] );
		const query = JSON.stringify( action.query, Object.keys( action.query ).sort() );
		const queries = {
			...prevQueries,
			[ query ]: [ ...action.products ],
		};
		return {
			...state,
			queries,
		};
	}
	if ( 'SET_PRODUCTS_ERROR' === action.type ) {
		const prevQueries = get( state, 'queries', [] );
		const query = JSON.stringify( action.query, Object.keys( action.query ).sort() );
		const queries = {
			...prevQueries,
			[ query ]: ERROR,
		};
		return {
			...state,
			queries,
		};
	}
	return state;
}
