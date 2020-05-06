/**
 * External dependencies
 */
import { addQueryArgs } from '@wordpress/url';

/**
 * WooCommerce dependencies
 */
import { getSetting } from '@woocommerce/wc-admin-settings';

/**
 * Returns an in-app-purchase URL.
 *
 * @param {string} url
 * @param {Object} queryArgs
 * @return {string}
 */
export const getInAppPurchaseUrl = ( url, queryArgs = {} ) => {
	const { origin, pathname, search } = window.location;
	const { connectNonce } = getSetting( 'marketing', {} );
	queryArgs = {
		// If the site is installed in a directory the directory must be included in the back param, not the site param.
		'wccom-site': origin,
		'wccom-back': pathname + search,
		'wccom-woo-version': getSetting( 'wcVersion' ),
		'wccom-connect-nonce': connectNonce,
		...queryArgs,
	}

	return addQueryArgs( url, queryArgs );
}
