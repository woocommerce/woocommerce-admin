<?php
/**
 * Onboarding - set up shipping.
 *
 * @package Woocommerce Admin
 */

namespace Automattic\WooCommerce\Admin\Features;

use \Automattic\WooCommerce\Admin\PluginsHelper;

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
		if ( ! self::is_jetpack_installed_and_connected() ) {
			return;
		}

		if ( ! PluginsHelper::is_plugin_active( 'woocommerce-services' ) ) {
			return;
		}

		if ( ! self::is_physical_selected_as_product_type() ) {
			return;
		}

		if ( ! self::are_there_existing_shipping_zones() ) {
			return;
		}

		self::turn_on_printing_shipping_labels();
		self::set_up_free_local_shipping();
		self::disable_international_shipping();
		self::add_review_shipping_settings_note();
		self::track_shipping_automatically_set_up_event();
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
	 * Is Jetpack installed and connected?
	 *
	 * @return bool
	 */
	private static function is_jetpack_installed_and_connected() {
		if ( ! class_exists( '\Jetpack_Data' ) ) {
			return false;
		}

		$user_token = \Jetpack_Data::get_access_token( JETPACK_MASTER_USER );

		return isset( $user_token->external_user_id );
	}

	/**
	 * Turn on printing of shipping labels.
	 */
	private static function turn_on_printing_shipping_labels() {}

	/**
	 * Set up free local shipping.
	 */
	private static function set_up_free_local_shipping() {}

	/**
	 * Disable international shipping.
	 */
	private static function disable_international_shipping() {}

	/**
	 * Add the "Review your shipping settings" admin note.
	 */
	private static function add_review_shipping_settings_note() {}

	/**
	 * Track the shipping_automatically_set_up event.
	 */
	private static function track_shipping_automatically_set_up_event() {}
}
