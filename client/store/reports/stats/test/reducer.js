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
import reportStatsReducer from '../reducer';
import { getQueryKey } from 'store/util';

describe( 'reportStatsReducer()', () => {
	it( 'returns an empty data object by default', () => {
		const state = reportStatsReducer( undefined, {} );
		expect( state ).toEqual( {} );
	} );

	it( 'returns with received report data', () => {
		const originalState = deepFreeze( {} );
		const query = {
			after: '2018-01-04T00:00:00+00:00',
			before: '2018-07-14T00:00:00+00:00',
			interval: 'day',
		};
		const report = {
			totals: {
				orders_count: 10,
				num_items_sold: 9,
			},
			interval: [ 0, 1, 2 ],
		};
		const endpoint = 'revenue';

		const state = reportStatsReducer( originalState, {
			type: 'SET_REPORT_STATS',
			endpoint,
			query,
			report,
		} );

		const queryKey = getQueryKey( query );
		expect( state[ endpoint ][ queryKey ] ).toEqual( report );
	} );

	it( 'tracks multiple queries per enpdoint in report data', () => {
		const otherQuery = {
			after: '2018-01-04T00:00:00+00:00',
			before: '2018-07-14T00:00:00+00:00',
			interval: 'week',
		};
		const otherQueryKey = getQueryKey( otherQuery );
		const otherQueryState = {
			revenue: {
				[ otherQueryKey ]: { totals: 1000 },
			},
		};
		const originalState = deepFreeze( otherQueryState );
		const query = {
			after: '2018-01-04T00:00:00+00:00',
			before: '2018-07-14T00:00:00+00:00',
			interval: 'day',
		};
		const report = {
			totals: {
				orders_count: 10,
				num_items_sold: 9,
			},
			interval: [ 0, 1, 2 ],
		};
		const endpoint = 'revenue';

		const state = reportStatsReducer( originalState, {
			type: 'SET_REPORT_STATS',
			endpoint,
			query,
			report,
		} );

		const queryKey = getQueryKey( query );
		expect( state[ endpoint ][ queryKey ] ).toEqual( report );
		expect( state[ endpoint ][ otherQueryKey ].totals ).toEqual( 1000 );
	} );

	it( 'returns with received error data', () => {
		const originalState = deepFreeze( {} );
		const query = {
			after: '2018-01-04T00:00:00+00:00',
			before: '2018-07-14T00:00:00+00:00',
			interval: 'day',
		};
		const endpoint = 'revenue';

		const state = reportStatsReducer( originalState, {
			type: 'SET_REPORT_STATS_ERROR',
			endpoint,
			query,
		} );

		const queryKey = getQueryKey( query );
		expect( state[ endpoint ][ queryKey ] ).toEqual( ERROR );
	} );
} );
