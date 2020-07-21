<?php
/**
 * Onboarding - set up shipping.
 *
 * @package Woocommerce Admin
 */

namespace Automattic\WooCommerce\Admin\Features;

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
		// Only do this if there are no existing shipping methods.

		self::turn_on_printing_shipping_labels();
		self::set_up_free_local_shipping();
		self::disable_international_shipping();
		self::trigger_review_shipping_settings_note();
		self::track_shipping_automatically_set_up_event();
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
	 * Trigger the "Review your shipping settings" admin note.
	 */
	private static function trigger_review_shipping_settings_note() {}

	/**
	 * Track the shipping_automatically_set_up event.
	 */
	private static function track_shipping_automatically_set_up_event() {}
}
