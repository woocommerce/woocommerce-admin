/** @format */

/**
 * External dependencies
 */
import { get } from 'lodash';
import { select } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { ERROR } from 'store/constants';

/**
 * Returns revenue report details for a specific report query.
 *
 * @param  {Object} state  Current state
 * @param  {Object} query  Report query paremters
 * @return {Object}        Report details
 */
function getReportRevenueStats( state, query ) {
	const queries = get( state, 'reports.revenue.stats.queries', [] );
	return queries[ JSON.stringify( query || {} ) ] || null;
}

export default {
	getReportRevenueStats,

	/**
	 * Returns if a revenue report is pending.
	 *
	 * @param  {Object} state  Current state
	 * @return {Object}        True if the `getReportRevenueStats` request is pending, false otherwise
	 */
	isReportRevenueStatsRequesting( state, ...args ) {
		return select( 'core/data' ).isResolving( 'wc-admin', 'getReportRevenueStats', args );
	},

	/**
	 * Returns if a revenue report request has returned an error.
	 *
	 * @param  {Object} state  Current state
	 * @param  {Object} query  Report query paremters
	 * @return {Object}        True if the `getReportRevenueStats` request has failed, false otherwise
	 */
	isReportRevenueStatsError( state, query ) {
		return ERROR === getReportRevenueStats( state, query );
	},
};
