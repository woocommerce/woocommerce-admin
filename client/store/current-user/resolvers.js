/** @format */
/**
 * External dependencies
 */
import { dispatch } from '@wordpress/data';
import apiRequest from '@wordpress/api-request';

export default {
	async getCurrentUser() {
		const path = '/wp/v2/users/me?context=edit';
		try {
			const user = await apiRequest( { path } );
			dispatch( 'wc-admin' ).setCurrentUser( user );
		} catch ( error ) {
			// TODO Error
		}
	},
};
