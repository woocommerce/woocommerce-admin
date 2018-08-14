/** @format */

/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import { ERROR } from 'store/constants';
import { serializeQuery } from 'store/utils';

const DEFAULT_STATE = {
	queries: {},
};

export default function reportRevenueStatsReducer( state = DEFAULT_STATE, action ) {
	if ( 'SET_REPORT_REVENUE_STATS' === action.type ) {
		const prevQueries = get( state, 'queries', {} );
		const query = serializeQuery( action.query );
		const queries = {
			...prevQueries,
			[ query ]: {
				data: {
					...action.report,
				},
				totalResults: action.totalResults,
			},
		};

		return {
			...state,
			queries,
		};
	}

	if ( 'SET_REPORT_REVENUE_STATS_ERROR' === action.type ) {
		const prevQueries = get( state, 'queries', {} );
		const query = serializeQuery( action.query );
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
