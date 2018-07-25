/** @format */
/**
 * External dependencies
 */
import { dispatch } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';

apiFetch.use( apiFetch.createNonceMiddleware( wpApiSettings.nonce ) );
apiFetch.use( apiFetch.createRootURLMiddleware( wpApiSettings.root ) );

export default {
	async getOrders() {
		try {
			const orders = await apiFetch( { path: '/wc/v3/orders' } );
			dispatch( 'wc-admin' ).setOrders( orders );
		} catch ( error ) {
			if ( error && error.responseJSON ) {
				alert( error.responseJSON.message );
			} else {
				alert( error );
			}
		}
	},
};
