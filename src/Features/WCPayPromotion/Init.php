<?php
/**
 * Handles wcpay promotion
 */

namespace Automattic\WooCommerce\Admin\Features\WCPayPromotion;

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Admin\Loader;

/**
 * WC Pay Promotion engine.
 */
class Init {

	/**
	 * Constructor.
	 */
	public function __construct() {
		include_once __DIR__ . '/WCPaymentGatewayPsuedoWCPay.php';

		if ( ! isset( $_GET['page'] ) || 'wc-settings' !== $_GET['page'] || ! isset( $_GET['tab'] ) || 'checkout' !== $_GET['tab'] ) { // phpcs:ignore WordPress.Security.NonceVerification
			return;
		}

		add_filter( 'woocommerce_payment_gateways', array( __CLASS__, 'possibly_register_psuedo_wc_pay_gateway' ) );
		add_filter( 'option_woocommerce_gateway_order', [ __CLASS__, 'set_gateway_top_of_list' ] );
		add_filter( 'default_option_woocommerce_gateway_order', [ __CLASS__, 'set_gateway_top_of_list' ] );

		$rtl = is_rtl() ? '.rtl' : '';

		wp_enqueue_style(
			'wc-admin-wc-pay-payments-promotion',
			Loader::get_url( "wc-pay-payments-promotion/style{$rtl}", 'css' ),
			array( 'wp-components' ),
			Loader::get_file_version( 'css' )
		);

		wp_enqueue_script(
			'wc-admin-wc-pay-payments-promotion',
			Loader::get_url( 'wp-admin-scripts/wc-pay-payments-promotion', 'js' ),
			array( 'wp-i18n', 'wp-element', WC_ADMIN_APP ),
			Loader::get_file_version( 'js' ),
			true
		);
	}

	/**
	 * Delete the specs transient.
	 *
	 * @param array $gateways list of gateway classes.
	 */
	public static function possibly_register_psuedo_wc_pay_gateway( $gateways ) {

		if ( ! class_exists( '\WC_Payments' ) ) {
			$gateways[] = 'Automattic\WooCommerce\Admin\Features\WCPayPromotion\WCPaymentGatewayPsuedoWCPay';
		}
		return $gateways;
	}

	/**
	 * By default, new payment gateways are put at the bottom of the list on the admin "Payments" settings screen.
	 * For visibility, we want WooCommerce Payments to be at the top of the list.
	 *
	 * @param array $ordering Existing ordering of the payment gateways.
	 *
	 * @return array Modified ordering.
	 */
	public static function set_gateway_top_of_list( $ordering ) {
		$ordering = (array) $ordering;
		$id       = WCPaymentGatewayPsuedoWCPay::GATEWAY_ID;
		// Only tweak the ordering if the list hasn't been reordered with WooCommerce Payments in it already.
		if ( ! isset( $ordering[ $id ] ) || ! is_numeric( $ordering[ $id ] ) ) {
			$ordering[ $id ] = empty( $ordering ) ? 0 : ( min( $ordering ) - 1 );
		}
		return $ordering;
	}
}

