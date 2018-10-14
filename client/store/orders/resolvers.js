/** @format */
/**
 * External dependencies
 */
import { dispatch } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import { stringifyQuery } from 'lib/nav-utils';

export default {
	async getOrders( state, query ) {
		try {
			const orders = await apiFetch( { path: '/wc/v3/orders' + stringifyQuery( query ) } );
			dispatch( 'wc-admin' ).setOrders( orders, query );
		} catch ( error ) {
			dispatch( 'wc-admin' ).setOrdersError( query );
		}
	},
};
