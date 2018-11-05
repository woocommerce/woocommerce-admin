/** @format */
/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { dispatch } from '@wordpress/data';
import { stringify } from 'qs';
export default {
	async getTaxes( state, query ) {
		try {
			const params = query ? '?' + stringify( query ) : '';
			const taxes = await apiFetch( { path: '/wc/v3/reports/taxes' + params } );
			dispatch( 'wc-admin' ).setTaxes( taxes, query );
		} catch ( error ) {
			dispatch( 'wc-admin' ).setTaxesError( query );
		}
	},
};
