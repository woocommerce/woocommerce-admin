<?php

namespace Automattic\WooCommerce\Admin;

/**
 * Specs data source poller class for payment gateway suggestions.
 */
class PaymentMethodSuggestionsDataSourcePoller extends DataSourcePoller {


	const ID = 'payment_method_suggestions';

	/**
	 * Default data sources array.
	 */
	const DATA_SOURCES = array(
		'http://woocommerce.test/wp-json/wccom/payment-gateway-suggestions/1.0/payment-method/suggestions.json',
	);

	/**
	 * Class instance.
	 *
	 * @var Analytics instance
	 */
	protected static $instance = null;

	/**
	 * Get class instance.
	 */
	public static function get_instance() {
		if ( ! self::$instance ) {
			self::$instance = new self( self::ID, self::DATA_SOURCES );
		}
		return self::$instance;
	}

	/**
	 * Reads the data sources for specs and persists those specs.
	 *
	 * @return array list of specs.
	 */
	public function get_specs_from_data_sources() {
		if ( ! $this->allow_recommendations() ) {
			return array();
		}
		return parent::get_specs_from_data_sources();
	}

	/**
	 * Should recommendations be displayed?
	 *
	 * @return bool
	 */
	private function allow_recommendations() {
		// Suggestions are only displayed if user can install plugins.
		if ( ! current_user_can( 'install_plugins' ) ) {
			return false;
		}

		// Suggestions may be disabled via a setting under Accounts & Privacy.
		if ( 'no' === get_option( 'woocommerce_show_marketplace_suggestions', 'yes' ) ) {
			return false;
		}

		// User can disabled all suggestions via filter.
		return apply_filters( 'woocommerce_allow_payment_recommendations', true );
	}
}

