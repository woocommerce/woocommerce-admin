<?php

namespace Automattic\WooCommerce\Admin\Features\WcPayPromotion;

use Automattic\WooCommerce\Admin\DataSourcePoller;

/**
 * Specs data source poller class for WooCommerce Payment Promotion.
 */
class WcPayPromotionDataSourcePoller extends DataSourcePoller {

	const SPECS_TRANSIENT_NAME = 'woocommerce_admin_payment_method_promotion_specs';

	/**
	 * Default data sources array.
	 */
	const DATA_SOURCES = array(
		'https://woocommerce.com/wp-json/wccom/payment-gateway-suggestions/1.0/payment-method/promotions.json',
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
			self::$instance = new self( self::DATA_SOURCES, array( 'transient_name' => self::SPECS_TRANSIENT_NAME ) );
		}
		return self::$instance;
	}
}
