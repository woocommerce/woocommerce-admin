/**
 * External dependencies
 */
import { getAdminLink } from '@woocommerce/wc-admin-settings';

/**
 * Plugins required to automate taxes.
 */
export const AUTOMATION_PLUGINS = [ 'jetpack', 'woocommerce-services' ];

/**
 * Check if a store has a complete address given general settings.
 *
 * @param {Object} generalSettings General settings.
 */
export const hasCompleteAddress = ( generalSettings ): boolean => {
	const {
		woocommerce_store_address: storeAddress,
		woocommerce_default_country: defaultCountry,
		woocommerce_store_postcode: storePostCode,
	} = generalSettings;
	return Boolean( storeAddress && defaultCountry && storePostCode );
};

/**
 * Redirect to the core tax settings screen.
 */
export const redirectToTaxSettings = (): void => {
	window.location = getAdminLink(
		'admin.php?page=wc-settings&tab=tax&section=standard&wc_onboarding_active_task=tax'
	);
};
