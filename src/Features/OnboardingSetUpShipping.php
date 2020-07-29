<?php
/**
 * Onboarding - set up shipping.
 *
 * @package Woocommerce Admin
 */

namespace Automattic\WooCommerce\Admin\Features;

use \Automattic\WooCommerce\Admin\PluginsHelper;
use \Automattic\WooCommerce\Admin\Notes\WC_Admin_Notes_Review_Shipping_Settings;

/**
 * This contains logic for setting up shipping when the profiler completes.
 */
class OnboardingSetUpShipping {
	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action(
			'woocommerce_onboarding_profile_completed',
			array(
				__CLASS__,
				'on_onboarding_profile_completed',
			)
		);
	}

	/**
	 * Set up shipping.
	 */
	public static function on_onboarding_profile_completed() {
		if ( ! self::is_physical_selected_as_product_type() ) {
			return;
		}

		if ( self::are_there_existing_shipping_zones() ) {
			return;
		}

		self::set_up_free_local_shipping();
		WC_Admin_Notes_Review_Shipping_Settings::possibly_add_note();
		wc_admin_record_tracks_event( 'shipping_automatically_set_up' );
	}

	/**
	 * Are there existing shipping zones?
	 *
	 * @return bool
	 */
	private static function are_there_existing_shipping_zones() {
		$zone_count = count( \WC_Shipping_Zones::get_zones() );

		return $zone_count > 0;
	}

	/**
	 * Is 'physical' selected as a product type?
	 *
	 * @return bool
	 */
	private static function is_physical_selected_as_product_type() {
		$onboarding_data = get_option( Onboarding::PROFILE_DATA_OPTION );

		if ( ! isset( $onboarding_data['product_types'] ) ) {
			return false;
		}

		if ( ! in_array( 'physical', $onboarding_data['product_types'], true ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Set up free local shipping.
	 */
	private static function set_up_free_local_shipping() {
		$default_country = apply_filters(
			'woocommerce_get_base_location',
			get_option( 'woocommerce_default_country' )
		);

		if ( ! $default_country ) {
			return;
		}

		$country_code = explode( ':', $default_country )[0];
		$zone         = new \WC_Shipping_Zone();

		$zone->add_location( $country_code, 'country' );

		$countries = apply_filters(
			'woocommerce_countries',
			include WC()->plugin_path() . '/i18n/countries.php'
		);
		$zone_name = isset( $countries[ $country_code ] )
			? $countries[ $country_code ]
			: null;

		$zone->set_zone_name( $zone_name );

		$zone->save();
		$zone->add_shipping_method( 'free_shipping' );
	}
}
