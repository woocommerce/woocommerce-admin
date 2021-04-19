<?php
/**
 * Handles running payment method specs
 */

namespace Automattic\WooCommerce\Admin\Features\RemotePaymentMethods;

defined( 'ABSPATH' ) || exit;

/**
 * Remote Payment Methods engine.
 * This goes through the specs and gets eligible payment methods.
 */
class Init {
	const SPECS_OPTION_NAME = 'woocommerce_admin_remote_payment_methods_specs';

	/**
	 * Go through the specs and run them.
	 */
	public static function get_methods() {
		$methods = array();
		$specs   = self::get_specs();

		foreach ( $specs as $spec ) {
			$method    = EvaluateMethod::evaluate( $spec );
			$methods[] = $method;
		}

		return $methods;
	}

	/**
	 * Get specs or fetch remotely if they don't exist.
	 */
	public static function get_specs() {
		$specs = get_option( self::SPECS_OPTION_NAME );

		// Fetch specs if they don't yet exist.
		if ( false === $specs || 0 === count( $specs ) ) {
			// We are running too early, need to poll data sources first.
			$specs = DataSourcePoller::read_specs_from_data_sources();
			update_option( self::SPECS_OPTION_NAME, $specs );
		}

		return $specs;
	}
}
