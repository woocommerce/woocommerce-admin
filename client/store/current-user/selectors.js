/** @format */

/**
 * External dependencies
 */
import { select } from '@wordpress/data';

export default {
	getCurrentUser( state ) {
		return ( state.currentUser && state.currentUser.data ) || null;
	},

	isRequestingCurrentUser( state, ...args ) {
		return select( 'core/data' ).isResolving( 'wc-admin', 'getCurrentUser', ...args );
	},
};
