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
	}
}
