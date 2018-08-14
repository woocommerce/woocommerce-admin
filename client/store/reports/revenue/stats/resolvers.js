/** @format */

/**
 * External dependencies
 */
const { apiFetch } = wp;
import { dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { stringifyQuery } from 'lib/nav-utils';
import { NAMESPACE } from 'store/constants';

export default {
	async getReportRevenueStats( state, query ) {
		try {
			const response = await apiFetch( {
				path: NAMESPACE + 'reports/revenue/stats' + stringifyQuery( query ),
				parse: false,
			} );
			const report = await response.json();
			const totalResults = parseInt( response.headers.get( 'x-wp-total' ) );
			dispatch( 'wc-admin' ).setReportRevenueStats( query, report, totalResults );
		} catch ( error ) {
			dispatch( 'wc-admin' ).setReportRevenueStatsError( query );
		}
	},
};
