/** @format */
/**
 * External dependencies
 */

import { __, sprintf } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal depdencies
 */
import { NAMESPACE } from 'wc-api/onboarding/constants';

/**
 * Plugin slugs and names as key/value pairs.
 */
export const pluginNames = {
	jetpack: __( 'Jetpack', 'woocommerce-admin' ),
	'woocommerce-services': __( 'WooCommerce Services', 'woocommerce-admin' ),
};

/**
 * Install or activate a plugin.
 *
 * @param {string} action The action name for the error (install|activate)
 * @param {string} plugin The plugin slug.
 * @return {function} A promise returned by apiFetch.
 */
export function doPluginAction( action, plugin ) {
	return apiFetch( {
		path: `${ NAMESPACE }/onboarding/plugins/${ action }`,
		method: 'POST',
		data: {
			plugin,
		},
	} )
		.then( response => response )
		.catch( error => ( { status: 'error', error, plugin } ) );
}

/**
 * Get a plugin error message for display.
 *
 * @param {string} action The action name for the error (install|activate)
 * @param {string} plugin The plugin slug.
 * @return {string} The error message.
 */
export function getPluginErrorMessage( action, plugin ) {
	return 'install' === action
		? sprintf(
				__( 'There was an error installing %s. Please try again.', 'woocommerce-admin' ),
				pluginNames[ plugin ]
			)
		: sprintf(
				__( 'There was an error activating %s. Please try again.', 'woocommerce-admin' ),
				pluginNames[ plugin ]
			);
}
