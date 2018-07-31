/** @format */

/**
 * External dependencies
 */
import { dispatch } from '@wordpress/data';
import apiRequest from '@wordpress/api-request';

export default {
	setCurrentUser( user ) {
		return {
			type: 'SET_CURRENT_USER',
			user,
		};
	},
	updateWoocommerceUserMeta( meta ) {
		return async () => {
			const data = {
				woocommerce_meta: { ...meta },
			};
			try {
				const updatedUser = await apiRequest( {
					path: '/wp/v2/users/me',
					method: 'POST',
					data,
				} );
				dispatch( 'wc-admin' ).setCurrentUser( updatedUser );
			} catch ( error ) {
				// TODO Error Handling
			}
		};
	},
};
