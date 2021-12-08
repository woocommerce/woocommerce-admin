<?php
/**
 * WC Admin Order Refund
 *
 * WC Admin Order Refund class that adds some functionality on top of general WooCommerce WC_Order_Refund.
 */

namespace Automattic\WooCommerce\Admin\Overrides;

defined( 'ABSPATH' ) || exit;

use \Automattic\WooCommerce\Admin\API\Reports\Customers\DataStore as CustomersDataStore;

/**
 * WC_Order_Refund subclass.
 */
class OrderRefund extends \WC_Order_Refund {
	/**
	 * Order traits.
	 */
	use OrderTraits;

	/**
	 * Add filter(s) required to hook this class to substitute WC_Order_Refund.
	 */
	public static function add_filters() {
		add_filter( 'woocommerce_order_class', array( __CLASS__, 'order_class_name' ), 10, 3 );
	}

	/**
	 * Filter function to swap class WC_Order_Refund for this one in cases when it's suitable.
	 *
	 * @param string $classname Name of the class to be created.
	 * @param string $order_type Type of order object to be created.
	 * @param number $order_id Order id to create.
	 *
	 * @return string
	 */
	public static function order_class_name( $classname, $order_type, $order_id ) {
		// @todo - Only substitute class when necessary (during sync).
		if ( 'WC_Order_Refund' === $classname ) {
			return '\Automattic\WooCommerce\Admin\Overrides\OrderRefund';
		} else {
			return $classname;
		}
	}

	/**
	 * Get the customer ID of the parent order used for reports in the customer lookup table.
	 *
	 * @return int|bool Customer ID of parent order, or false if parent order not found.
	 */
	public function get_report_customer_id() {
		$parent_order = wc_get_order( $this->get_parent_id() );

		if ( ! $parent_order ) {
			return false;
		}

		return CustomersDataStore::get_or_create_customer_from_order( $parent_order );
	}

	/**
	 * Returns null since refunds should not be counted towards returning customer counts.
	 *
	 * @param int|false $customer_id Customer ID. Optional.
	 * @return null
	 */
	public function is_returning_customer( $customer_id = null ) {
		return null;
	}
}
