/** @format */

/**
 * External dependencies
 */
const { apiFetch } = wp;
import { dispatch } from '@wordpress/data';
import qs from 'qs';

export default {
	async getReportRevenueStats( state, query ) {
		try {
			const params = query ? '?' + qs.stringify( query ) : '';
			const report = await apiFetch( { path: '/wc/v3/reports/revenue/stats' + params } );
			dispatch( 'wc-admin' ).setReportRevenueStats( report, query );
		} catch ( error ) {
			dispatch( 'wc-admin' ).setReportRevenueStatsError( query );
		}
	},
};
