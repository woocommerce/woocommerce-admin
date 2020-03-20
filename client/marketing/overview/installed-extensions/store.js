/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import { WC_ADMIN_NAMESPACE } from '../../../wc-api/constants';

// TODO convert to a data store
export function activatePlugin( plugin ) {
	return apiFetch( {
		path: WC_ADMIN_NAMESPACE + '/marketing/overview/activate-plugin',
		method: 'POST',
		data: {
			plugin
		},
	} );
}

export function fetchPluginData() {
	return apiFetch( {
		path: WC_ADMIN_NAMESPACE + '/marketing/overview/installed-plugins',
		method: 'GET',
	} );
}
