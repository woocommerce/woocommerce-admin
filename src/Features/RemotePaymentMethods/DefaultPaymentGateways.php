<?php
/**
 * Gets a list of fallback methods if remote fetching is disabled.
 */

namespace Automattic\WooCommerce\Admin\Features\RemotePaymentMethods;

defined( 'ABSPATH' ) || exit;

/**
 * Default Payment Gateways
 */
class DefaultPaymentGateways {

	/**
	 * Get default specs.
	 *
	 * @return array Default specs.
	 */
	public static function get_all() {
		return array(
			array(
				'key'        => 'payfast',
				'title'      => __( 'PayFast', 'woocommerce-admin' ),
				'content'    => __( 'The PayFast extension for WooCommerce enables you to accept payments by Credit Card and EFT via one of South Africa’s most popular payment gateways. No setup fees or monthly subscription costs.  Selecting this extension will configure your store to use South African rands as the selected currency.', 'woocommerce-admin' ),
				'image'      => __( 'https =>//www.payfast.co.za/assets/images/payfast_logo_colour.svg', 'woocommerce-admin' ),
				'plugins'    => array( 'woocommerce-payfast-gateway' ),
				'is_visible' => array(
					'type'      => 'base_location_country',
					'value'     => 'ZA',
					'operation' => '=',
				),
			),
		);
	}

}
