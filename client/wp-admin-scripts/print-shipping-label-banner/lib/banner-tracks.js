import { recordEvent } from 'lib/tracks';
import { getSetting } from '@woocommerce/wc-admin-settings';
import apiFetch from '@wordpress/api-fetch';
const JETPACK_NAMESPACE = '/jetpack/v4';

async function getPluginsInformation() {
	let isJetpackConnected = false;
	const url = JETPACK_NAMESPACE + '/connection';
	const result = await apiFetch( {
		path: url,
	} );
	isJetpackConnected = result.isActive;

	const { isJetPackInstalled, isWooCommerceServicesInstalled } = getSetting(
		'shippingBanner',
		{}
	);

	return {
		wcs_installed: isWooCommerceServicesInstalled,
		jetpack_installed: isJetPackInstalled,
		jetpack_connected: isJetpackConnected,
	};
}

/**
 * Tracks events for banner. By default, include information for jetpack
 * and woocommerce services.
 *
 * @param {string} eventName Name of the event in the form of <source>_<context>_<optional subcontext>_<action>_<optional qualifier>
 */
export async function trackBannerEvent( eventName ) {
	const pluginInformation = await getPluginsInformation();
	recordEvent( eventName, {
		jetpack_installed: pluginInformation.jetpack_installed,
		jetpack_connected: pluginInformation.jetpack_connected,
		wcs_installed: pluginInformation.wcs_installed,
	} );
}
