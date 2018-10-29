/** @format */
/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { dispatch } from '@wordpress/data';
import { stringify } from 'qs';

export default {
	async getCoupons( state, query ) {
		try {
			const params = query ? '?' + stringify( query ) : '';
			const coupons = await apiFetch( { path: '/wc/v3/reports/coupons' + params } );
			dispatch( 'wc-admin' ).setCoupons( coupons, query );
		} catch ( error ) {
			dispatch( 'wc-admin' ).setCouponsError( query );
		}
	},
};
