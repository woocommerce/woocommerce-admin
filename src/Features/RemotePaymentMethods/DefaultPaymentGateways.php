<?php
/**
 * Gets a list of fallback methods if remote fetching is disabled.
 */

namespace Automattic\WooCommerce\Admin\Features\RemotePaymentMethods;

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Admin\Features\OnboardingTasks;

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
				'image'      => WC()->plugin_url() . '/assets/images/payfast.png',
				'plugins'    => array( 'woocommerce-payfast-gateway' ),
				'is_visible' => array(
					(object) array(
						'type'      => 'base_location_country',
						'value'     => 'ZA',
						'operation' => '=',
					),
					(object) array(
						'type'        => 'option',
						'option_name' => 'woocommerce_onboarding_profile',
						'value'       => 'cbd-other-hemp-derived-products',
						'operation'   => '!contains',
					),
				),
			),
			array(
				'key'        => 'stripe',
				'title'      => __( 'Credit cards - powered by Stripe', 'woocommerce-admin' ),
				'content'    => __( 'Accept debit and credit cards in 135+ currencies, methods such as Alipay, and one-touch checkout with Apple Pay.', 'woocommerce-admin' ),
				'image'      => WC()->plugin_url() . '/assets/images/stripe.png',
				'plugins'    => array( 'woocommerce-gateway-stripe' ),
				'is_visible' => array(
					self::get_rules_for_countries( OnboardingTasks::get_stripe_supported_countries() ),
					(object) array(
						'type'        => 'option',
						'option_name' => 'woocommerce_onboarding_profile',
						'value'       => 'cbd-other-hemp-derived-products',
						'operation'   => '!contains',
					),
				),
			),
			array(
				'key'        => 'paystack',
				'title'      => __( 'Paystack', 'woocommerce-admin' ),
				'content'    => __( 'Paystack helps African merchants accept one-time and recurring payments online with a modern, safe, and secure payment gateway.', 'woocommerce-admin' ),
				'image'      => plugins_url( 'images/onboarding/paystack.png', WC_ADMIN_PLUGIN_FILE ),
				'plugins'    => array( 'woo-paystack' ),
				'is_visible' => array(
					self::get_rules_for_countries( array( 'ZA', 'GH', 'NG' ) ),
					(object) array(
						'type'        => 'option',
						'option_name' => 'woocommerce_onboarding_profile',
						'value'       => 'cbd-other-hemp-derived-products',
						'operation'   => '!contains',
					),
				),
			),
		);
	}

	/**
	 * Get rules that match the store base location to one of the provided countries.
	 *
	 * @param array $countries Array of countries to match.
	 * @return object Rules to match.
	 */
	public function get_rules_for_countries( $countries ) {
		$rules = array();

		foreach ( $countries as $country ) {
			$rules[] = (object) array(
				'type'      => 'base_location_country',
				'value'     => $country,
				'operation' => '=',
			);
		}

		return (object) array(
			'type'     => 'or',
			'operands' => $rules,
		);
	}

}
