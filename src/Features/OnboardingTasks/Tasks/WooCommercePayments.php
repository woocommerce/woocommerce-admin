<?php

namespace Automattic\WooCommerce\Admin\Features\OnboardingTasks\Tasks;

use Automattic\WooCommerce\Admin\Features\Onboarding;
use Automattic\WooCommerce\Admin\PluginsHelper;

/**
 * WooCommercePayments Task
 */
class WooCommercePayments {
	/**
	 * Get the task arguments.
	 *
	 * @return array
	 */
	public static function get_task() {
		return array(
			'id'          => 'woocommerce-payments',
			'title'       => __( 'Get paid with WooCommerce Payments', 'woocommerce-admin' ),
			'content'     => __(
				"You're only one step away from getting paid. Verify your business details to start managing transactions with WooCommerce Payments.",
				'woocommerce-admin'
			),
			'actionLabel' => __( 'Finish setup', 'woocommerce-admin' ),
			'expanded'    => true,
			'isComplete'  => self::is_connected(),
			'isVisible'   => self::is_requested() &&
				self::is_installed() &&
				in_array( WC()->countries->get_base_country(), OnboardingTasks::get_woocommerce_payments_supported_countries(), true ),
			'time'        => __( '2 minutes', 'woocommerce-admin' ),
		);
	}

	/**
	 * Check if the plugin was requested during onboarding.
	 *
	 * @return bool
	 */
	public static function is_requested() {
		$profiler_data       = get_option( Onboarding::PROFILE_DATA_OPTION, array() );
		$business_extensions = isset( $profiler_data['business_extensions'] ) ? $profiler_data['business_extensions'] : array();
		return in_array( 'woocommerce-payments', $business_extensions, true );
	}

	/**
	 * Check if the plugin is installed.
	 *
	 * @return bool
	 */
	public static function is_installed() {
		$installed_plugins = PluginsHelper::get_installed_plugin_slugs();
		return in_array( 'woocommerce-payments', $installed_plugins, true );
	}

	/**
	 * Check if WooCommerce Payments is connected.
	 *
	 * @return bool
	 */
	public static function is_connected() {
		if ( class_exists( '\WC_Payments' ) ) {
			$wc_payments_gateway = \WC_Payments::get_gateway();
			return method_exists( $wc_payments_gateway, 'is_connected' )
				? $wc_payments_gateway->is_connected()
				: false;
		}

		return false;
	}
}
