<?php
/**
 * Order syncing related functions and actions.
 */

namespace Automattic\WooCommerce\Admin\Schedulers;

defined( 'ABSPATH' ) || exit;

use \Automattic\WooCommerce\Admin\API\Reports\Coupons\DataStore as CouponsDataStore;
use \Automattic\WooCommerce\Admin\API\Reports\Orders\Stats\DataStore as OrdersStatsDataStore;
use \Automattic\WooCommerce\Admin\API\Reports\Products\DataStore as ProductsDataStore;
use \Automattic\WooCommerce\Admin\API\Reports\Taxes\DataStore as TaxesDataStore;
use \Automattic\WooCommerce\Admin\API\Reports\Customers\DataStore as CustomersDataStore;
use \Automattic\WooCommerce\Admin\API\Reports\Cache as ReportsCache;
use \Automattic\WooCommerce\Admin\Schedulers\CustomersScheduler;

/**
 * OrdersScheduler Class.
 */
class OrdersScheduler extends ImportScheduler {
	/**
	 * Slug to identify the scheduler.
	 *
	 * @var string
	 */
	public static $name = 'orders';

	/**
	 * Attach order lookup update hooks.
	 */
	public static function init() {
		// Activate WC_Order extension.
		\Automattic\WooCommerce\Admin\Overrides\Order::add_filters();
		\Automattic\WooCommerce\Admin\Overrides\OrderRefund::add_filters();

		// Order and refund data must be run on these hooks to ensure meta data is set.
		add_action( 'save_post', array( __CLASS__, 'possibly_schedule_import' ) );
		add_action( 'woocommerce_refund_created', array( __CLASS__, 'possibly_schedule_import' ) );

		OrdersStatsDataStore::init();
		CouponsDataStore::init();
		ProductsDataStore::init();
		TaxesDataStore::init();

		parent::init();
	}

	/**
	 * Add customer dependencies.
	 *
	 * @return array
	 */
	public static function get_dependencies() {
		return array(
			'import_batch_init' => CustomersScheduler::get_action( 'import_batch_init' ),
		);
	}

	/**
	 * Get the order/refund IDs and total count that need to be synced.
	 *
	 * @param int      $limit Number of records to retrieve.
	 * @param int      $page  Page number.
	 * @param int|bool $days Number of days prior to current date to limit search results.
	 * @param bool     $skip_existing Skip already imported orders.
	 */
	public static function get_items( $limit = 10, $page = 1, $days = false, $skip_existing = false ) {
		global $wpdb;
		$where_clause = '';
		$offset       = $page > 1 ? ( $page - 1 ) * $limit : 0;

		if ( is_int( $days ) ) {
			$days_ago      = gmdate( 'Y-m-d 00:00:00', time() - ( DAY_IN_SECONDS * $days ) );
			$where_clause .= " AND post_date_gmt >= '{$days_ago}'";
		}

		if ( $skip_existing ) {
			$where_clause .= " AND NOT EXISTS (
				SELECT 1 FROM {$wpdb->prefix}wc_order_stats
				WHERE {$wpdb->prefix}wc_order_stats.order_id = {$wpdb->posts}.ID
			)";
		}

		$count = $wpdb->get_var(
			"SELECT COUNT(*) FROM {$wpdb->posts}
			WHERE post_type IN ( 'shop_order', 'shop_order_refund' )
			AND post_status NOT IN ( 'wc-auto-draft', 'auto-draft', 'trash' )
			{$where_clause}"
		); // phpcs:ignore unprepared SQL ok.

		$order_ids = absint( $count ) > 0 ? $wpdb->get_col(
			$wpdb->prepare(
				"SELECT ID FROM {$wpdb->posts}
				WHERE post_type IN ( 'shop_order', 'shop_order_refund' )
				AND post_status NOT IN ( 'wc-auto-draft', 'auto-draft', 'trash' )
				{$where_clause}
				ORDER BY post_date_gmt ASC
				LIMIT %d
				OFFSET %d",
				$limit,
				$offset
			)
		) : array(); // phpcs:ignore unprepared SQL ok.

		return (object) array(
			'total' => absint( $count ),
			'ids'   => $order_ids,
		);
	}

	/**
	 * Get total number of rows imported.
	 */
	public static function get_total_imported() {
		global $wpdb;
		return $wpdb->get_var( "SELECT COUNT(*) FROM {$wpdb->prefix}wc_order_stats" );
	}

	/**
	 * Schedule this import if the post is an order or refund.
	 *
	 * @param int $post_id Post ID.
	 */
	public static function possibly_schedule_import( $post_id ) {
		if ( 'shop_order' !== get_post_type( $post_id ) && 'woocommerce_refund_created' !== current_filter() ) {
			return;
		}

		self::schedule_action( 'import', array( $post_id ) );
	}

	/**
	 * Imports a single order or refund to update lookup tables for.
	 * If an error is encountered in one of the updates, a retry action is scheduled.
	 *
	 * @param int $order_id Order or refund ID.
	 * @return void
	 */
	public static function import( $order_id ) {
		$order = wc_get_order( $order_id );

		// If the order isn't found for some reason, skip the sync.
		if ( ! $order ) {
			return;
		}

		$type = $order->get_type();

		// If the order isn't the right type, skip sync.
		if ( 'shop_order' !== $type && 'shop_order_refund' !== $type ) {
			return;
		}

		// If the order has no id or date created, skip sync.
		if ( ! $order->get_id() || ! $order->get_date_created() ) {
			return;
		}

		$results = array(
			OrdersStatsDataStore::sync_order( $order_id ),
			ProductsDataStore::sync_order_products( $order_id ),
			CouponsDataStore::sync_order_coupons( $order_id ),
			TaxesDataStore::sync_order_taxes( $order_id ),
			CustomersDataStore::sync_order_customer( $order_id ),
		);

		if ( 'shop_order' === $type ) {
			$order_refunds = $order->get_refunds();

			foreach ( $order_refunds as $refund ) {
				OrdersStatsDataStore::sync_order( $refund->get_id() );
			}
		}

		ReportsCache::invalidate();
	}

	/**
	 * Delete a batch of orders.
	 *
	 * @param int $batch_size Number of items to delete.
	 * @return void
	 */
	public static function delete( $batch_size ) {
		global $wpdb;

		$order_ids = $wpdb->get_col(
			$wpdb->prepare(
				"SELECT order_id FROM {$wpdb->prefix}wc_order_stats ORDER BY order_id ASC LIMIT %d",
				$batch_size
			)
		);

		foreach ( $order_ids as $order_id ) {
			OrdersStatsDataStore::delete_order( $order_id );
		}
	}
}
