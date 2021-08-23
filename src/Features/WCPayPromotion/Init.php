<?php
/**
 * Handles wcpay promotion
 */

namespace Automattic\WooCommerce\Admin\Features\WCPayPromotion;

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Admin\Loader;
use Automattic\WooCommerce\Admin\Features\PaymentGatewaySuggestions\EvaluateSuggestion;
use Automattic\WooCommerce\Admin\PaymentPlugins;

/**
 * WC Pay Promotion engine.
 */
class Init {
	const SPECS_TRANSIENT_NAME = 'woocommerce_admin_payment_method_promotion_specs';

	/**
	 * Constructor.
	 */
	public function __construct() {
		include_once __DIR__ . '/WCPaymentGatewayPsuedoWCPay.php';

		add_action( 'change_locale', array( __CLASS__, 'delete_specs_transient' ) );
		add_filter( PaymentPlugins::FILTER_NAME, array( __CLASS__, 'possibly_filter_recommended_payment_gateways' ) );

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
	 * Possibly registers a psuedo gateway.
	 *
	 * @param array $gateways list of gateway classes.
	 * @return array list of gateway classes.
	 */
	public static function possibly_register_psuedo_wc_pay_gateway( $gateways ) {
		if ( self::register_psuedo_wc_pay_gateway() ) {
			$gateways[] = 'Automattic\WooCommerce\Admin\Features\WCPayPromotion\WCPaymentGatewayPsuedoWCPay';
		}
		return $gateways;
	}

	/**
	 * Possibly registers a psuedo gateway.
	 *
	 * @param array $gateways list of gateway classes.
	 * @return array list of gateway classes.
	 */
	public static function possibly_filter_recommended_payment_gateways( $payment_methods ) {
		error_log('possibly filter');
		if ( self::register_psuedo_wc_pay_gateway() ) {
			error_log('filtering');
			return array_filter( $payment_methods, function($payment_method) {
				return $payment_method['product'] !== 'woocommerce-payments';
			});
		}
		return $payment_methods;
	}

	/**
	 * Checks if psuedo gateway should be registered.
	 *
	 * @return boolean if psuedo gateway should be registered.
	 */
	public static function register_psuedo_wc_pay_gateway( ) {
		if ( class_exists( '\WC_Payments' ) ) {
			return false;
		}
		$wc_pay_spec = self::get_wc_pay_promotion_spec();

		if ( ! $wc_pay_spec ) {
			return false;
		}

		$anon_id = isset( $_COOKIE['tk_ai'] ) ? $_COOKIE['tk_ai'] : null;
		$abtest = new \WooCommerce\Admin\Experimental_Abtest(
			$anon_id,
			'woocommerce',
			'yes' === get_option( 'woocommerce_allow_tracking' )
		);

		$variation_name = $abtest->get_variation( 'woocommerce_wc_pay_promotion_payment_methods_table_' . $wc_pay_spec->version );

		if ( $variation_name === 'treatment' ) {
			return true;
		}
		return false;
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

	/**
	 * Get WC Pay promotion spec.
	 */
	public static function get_wc_pay_promotion_spec() {
		$promotions = self::get_promotions();
		$index = array_search( 'woocommerce-payments', array_column($promotions, 'product'), true );
		if ( false !== $index ) {
			return $promotions[$index];
		}
		return false;
	}

	/**
	 * Go through the specs and run them.
	 */
	public static function get_promotions() {
		$suggestions = array();
		$specs       = self::get_specs();

		foreach ( $specs as $spec ) {
			$suggestion    = EvaluateSuggestion::evaluate( $spec );
			$suggestions[] = $suggestion;
		}

		return array_values(
			array_filter(
				$suggestions,
				function( $suggestion ) {
					return ! property_exists( $suggestion, 'is_visible' ) || $suggestion->is_visible;
				}
			)
		);

	}

	/**
	 * Delete the specs transient.
	 */
	public static function delete_specs_transient() {
		delete_transient( self::SPECS_TRANSIENT_NAME );
	}

	/**
	 * Get specs or fetch remotely if they don't exist.
	 */
	public static function get_specs() {
		$specs = get_transient( self::SPECS_TRANSIENT_NAME );

		// Fetch specs if they don't yet exist.
		if ( false === $specs || ! is_array( $specs ) || 0 === count( $specs ) ) {
			if ( 'no' === get_option( 'woocommerce_show_marketplace_suggestions', 'yes' ) ) {
				return array();
			}

			$specs = DataSourcePoller::read_specs_from_data_sources();

			// Fall back to default specs if polling failed.
			if ( ! $specs ) {
				return array();
			}

			set_transient( self::SPECS_TRANSIENT_NAME, $specs, 7 * DAY_IN_SECONDS );
		}

		return $specs;
	}
}

