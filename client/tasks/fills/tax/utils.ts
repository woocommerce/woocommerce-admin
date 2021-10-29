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
