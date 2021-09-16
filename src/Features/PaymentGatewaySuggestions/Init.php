<?php
/**
 * Handles running payment gateway suggestion specs
 */

namespace Automattic\WooCommerce\Admin\Features\PaymentGatewaySuggestions;

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Admin\RemoteInboxNotifications\SpecRunner;
use Automattic\WooCommerce\Admin\Features\PaymentGatewaySuggestions\DefaultPaymentGateways;
use Automattic\WooCommerce\Admin\Features\PaymentGatewaySuggestions\PaymentGatewaysController;

/**
 * Remote Payment Methods engine.
 * This goes through the specs and gets eligible payment gateways.
 */
class Init {
	const SPECS_TRANSIENT_NAME = 'woocommerce_admin_payment_gateway_suggestions_specs';

	/**
	 * Default data sources array.
	 */
	const DATA_SOURCES = array(
		'https://woocommerce.com/wp-json/wccom/payment-gateway-suggestions/1.0/suggestions.json',
	);

	/**
	 * DataSourcePoller Class instance.
	 *
	 * @var DataSourcePoller instance
	 */
	protected static $data_source_poller_instance = null;

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'change_locale', array( __CLASS__, 'delete_specs_transient' ) );
		PaymentGatewaysController::init();
	}

	/**
	 * Get class instance.
	 */
	public static function get_data_source_poller_instance() {
		if ( ! self::$data_source_poller_instance ) {
			self::$data_source_poller_instance = new \Automattic\WooCommerce\Admin\DataSourcePoller( self::DATA_SOURCES, self::SPECS_TRANSIENT_NAME );
		}
		return self::$data_source_poller_instance;
	}

	/**
	 * Go through the specs and run them.
	 */
	public static function get_suggestions() {
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
		$data_source_poller = self::get_data_source_poller_instance();
		$data_source_poller->delete_specs_transient();
	}

	/**
	 * Get specs or fetch remotely if they don't exist.
	 */
	public static function get_specs() {
		if ( 'no' === get_option( 'woocommerce_show_marketplace_suggestions', 'yes' ) ) {
			return DefaultPaymentGateways::get_all();
		}
		$data_source_poller = self::get_data_source_poller_instance();
		$specs              = $data_source_poller->get_specs_from_data_sources();

		// Fetch specs if they don't yet exist.
		if ( false === $specs || ! is_array( $specs ) || 0 === count( $specs ) ) {
			return DefaultPaymentGateways::get_all();
		}

		return $specs;
	}
}
