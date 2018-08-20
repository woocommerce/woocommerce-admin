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
	async getReportStats( state, endpoint, query ) {
		try {
			const report = await apiFetch( {
				path: NAMESPACE + 'reports/' + endpoint + '/stats' + stringifyQuery( query ),
			} );
			dispatch( 'wc-admin' ).setReportStats( endpoint, report, query );
		} catch ( error ) {
			dispatch( 'wc-admin' ).setReportStatsError( endpoint, query );
		}
	},
};
