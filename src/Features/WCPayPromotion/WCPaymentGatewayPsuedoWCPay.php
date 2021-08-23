<?php
/**
 * Class WC_Payment_Gateway_Psuedo_WCPay
 *
 * @package WooCommerce\Admin
 */

namespace Automattic\WooCommerce\Admin\Features\WCPayPromotion;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * A Psuedo WCPay gateway class.
 *
 * @extends WC_Payment_Gateway
 */
class WCPaymentGatewayPsuedoWCPay extends \WC_Payment_Gateway {

	const GATEWAY_ID = 'psuedo_woocommerce_payments';

	/**
	 * Constructor
	 */
	public function __construct() {
		$this->id                 = static::GATEWAY_ID;
		$this->title              = __( 'WooCommerce Payments', 'woocommerce-admin' );
		$this->method_description = __( 'Copy', 'woocommerce-admin' ); // will be replaced by wc.com data.
		$this->has_fields         = false;

		// Get setting values.
		$this->enabled = false;
	}
}
