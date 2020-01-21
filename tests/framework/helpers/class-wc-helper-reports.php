<?php
/**
 * Helper code for wc-admin unit tests.
 *
 * @package WooCommerce\Tests\Framework\Helpers
 */

/**
 * Class WC_Helper_Reports.
 *
 * This helper class should ONLY be used for unit tests!.
 */
class WC_Helper_Reports {

	/**
	 * Delete everything in the lookup tables.
	 */
	public static function reset_stats_dbs() {
		global $wpdb;
		$wpdb->query( 'DELETE FROM ' . \Automattic\WooCommerce\Admin\API\Reports\Orders\Stats\DataStore::get_db_table_name() ); // @codingStandardsIgnoreLine.
		$wpdb->query( 'DELETE FROM ' . \Automattic\WooCommerce\Admin\API\Reports\Products\DataStore::get_db_table_name() ); // @codingStandardsIgnoreLine.
		$wpdb->query( 'DELETE FROM ' . \Automattic\WooCommerce\Admin\API\Reports\Coupons\DataStore::get_db_table_name() ); // @codingStandardsIgnoreLine.
		$wpdb->query( 'DELETE FROM ' . \Automattic\WooCommerce\Admin\API\Reports\Customers\DataStore::get_db_table_name() ); // @codingStandardsIgnoreLine.
		$wpdb->query(
			"DELETE FROM
				{$wpdb->prefix}woocommerce_order_itemmeta
			WHERE
				order_item_id NOT IN (
					SELECT
						oi.order_item_id
					FROM
						{$wpdb->posts} o,
						{$wpdb->prefix}woocommerce_order_items oi
					WHERE
						o.ID = oi.order_id
						AND o.post_type IN ( 'shop_order', 'shop_order_refund' )
				)"
		); // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
		$wpdb->query(
			"DELETE FROM
				{$wpdb->prefix}woocommerce_order_items
			WHERE
				order_id NOT IN (
					SELECT
						ID
					FROM
						{$wpdb->posts}
					WHERE
						post_type IN ( 'shop_order', 'shop_order_refund' )
				)"
		); // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
		\Automattic\WooCommerce\Admin\CategoryLookup::instance()->regenerate();
	}
}
