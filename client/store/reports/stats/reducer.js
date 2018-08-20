/** @format */

/**
 * External dependencies
 */
import { merge } from 'lodash';

/**
 * Internal dependencies
 */
import { ERROR } from 'store/constants';
import { getQueryKey } from 'store/util';

const DEFAULT_STATE = {};

export default function reportStatsReducer( state = DEFAULT_STATE, action ) {
	if ( 'SET_REPORT_STATS' === action.type ) {
		const queryKey = getQueryKey( action.query );
		return merge( {}, state, {
			[ action.endpoint ]: {
				[ queryKey ]: action.report,
			},
		} );
	}

	if ( 'SET_REPORT_STATS_ERROR' === action.type ) {
		const queryKey = getQueryKey( action.query );
		return merge( {}, state, {
			[ action.endpoint ]: {
				[ queryKey ]: ERROR,
			},
		} );
	}

	return state;
}
