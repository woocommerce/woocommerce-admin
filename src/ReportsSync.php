<?php
/**
 * Report table sync related functions and actions.
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin;

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Admin\Sync\CustomersSync;
use Automattic\WooCommerce\Admin\Sync\OrdersSync;

/**
 * ReportsSync Class.
 */
class ReportsSync {
	/**
	 * Hook in sync methods.
	 */
	public static function init() {
		// Initialize syncing hooks.
		foreach ( self::get_syncs() as $sync ) {
			$sync::init();
		}
		add_action( 'woocommerce_update_product', array( __CLASS__, 'clear_stock_count_cache' ) );
		add_action( 'woocommerce_new_product', array( __CLASS__, 'clear_stock_count_cache' ) );
		add_action( 'update_option_woocommerce_notify_low_stock_amount', array( __CLASS__, 'clear_stock_count_cache' ) );
		add_action( 'update_option_woocommerce_notify_no_stock_amount', array( __CLASS__, 'clear_stock_count_cache' ) );
	}

	/**
	 * Get classes for syncing data.
	 *
	 * @return array
	 */
	public static function get_syncs() {
		return apply_filters(
			'woocommerce_admin_report_syncs',
			array(
				new CustomersSync(),
				new OrdersSync(),
			)
		);
	}

	/**
	 * Returns true if an import is in progress.
	 *
	 * @return bool
	 */
	public static function is_importing() {
		foreach ( self::get_syncs() as $sync ) {
			if ( $sync::is_importing() ) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Regenerate data for reports.
	 *
	 * @param int|bool $days Number of days to import.
	 * @param bool     $skip_existing Skip exisiting records.
	 * @return string
	 */
	public static function regenerate_report_data( $days, $skip_existing ) {
		if ( self::is_importing() ) {
			return new \WP_Error( 'wc_admin_import_in_progress', __( 'An import is already in progress.  Please allow the previous import to complete before beginning a new one.', 'woocommerce-admin' ) );
		}

		self::reset_import_stats( $days, $skip_existing );
		foreach ( self::get_syncs() as $sync ) {
			$sync::schedule_action( 'import_batch_init', array( $days, $skip_existing ) );
		}

		return __( 'Report table data is being rebuilt.  Please allow some time for data to fully populate.', 'woocommerce-admin' );
	}

	/**
	 * Update the import stat totals and counts.
	 *
	 * @param int|bool $days Number of days to import.
	 * @param bool     $skip_existing Skip exisiting records.
	 */
	public static function reset_import_stats( $days, $skip_existing ) {
		$import_stats = get_option( 'wc_admin_import_stats', array() );
		$totals       = self::get_import_totals( $days, $skip_existing );

		foreach ( self::get_syncs() as $sync ) {
			$import_stats[ $sync::NAME ]['imported'] = 0;
			$import_stats[ $sync::NAME ]['total']    = $totals[ $sync::NAME ];
		}

		// Update imported from date if older than previous.
		$previous_import_date = isset( $import_stats['imported_from'] ) ? $import_stats['imported_from'] : null;
		$current_import_date  = $days ? date( 'Y-m-d 00:00:00', time() - ( DAY_IN_SECONDS * $days ) ) : -1;

		if ( ! $previous_import_date || -1 === $current_import_date || new \DateTime( $previous_import_date ) > new \DateTime( $current_import_date ) ) {
			$import_stats['imported_from'] = $current_import_date;
		}

		update_option( 'wc_admin_import_stats', $import_stats );
	}

	/**
	 * Get stats for current import.
	 *
	 * @return array
	 */
	public static function get_import_stats() {
		$import_stats                 = get_option( 'wc_admin_import_stats', array() );
		$import_stats['is_importing'] = self::is_importing();

		return $import_stats;
	}

	/**
	 * Get the import totals for all syncs.
	 *
	 * @param int|bool $days Number of days to import.
	 * @param bool     $skip_existing Skip exisiting records.
	 * @return array
	 */
	public static function get_import_totals( $days, $skip_existing ) {
		$totals = array();

		foreach ( self::get_syncs() as $sync ) {
			$items                 = $sync::get_items( 1, 1, $days, $skip_existing );
			$totals[ $sync::NAME ] = $items->total;
		}

		return $totals;
	}

	/**
	 * Clears all queued actions.
	 */
	public static function clear_queued_actions() {
		foreach ( self::get_syncs() as $sync ) {
			$sync::clear_queued_actions();
		}
	}

	/**
	 * Delete all data for reports.
	 *
	 * @return string
	 */
	public static function delete_report_data() {
		// Cancel all pending import jobs.
		self::clear_queued_actions();

		foreach ( self::get_syncs() as $sync ) {
			$sync::schedule_action( 'delete_batch_init', array() );
		}

		// Delete import options.
		delete_option( 'wc_admin_import_stats' );

		return __( 'Report table data is being deleted.', 'woocommerce-admin' );
	}

	/**
	 * Clear the count cache when products are added or updated, or when
	 * the no/low stock options are changed.
	 *
	 * @param int $id Post/product ID.
	 */
	public static function clear_stock_count_cache( $id ) {
		delete_transient( 'wc_admin_stock_count_lowstock' );
		delete_transient( 'wc_admin_product_count' );
		$status_options = wc_get_product_stock_status_options();
		foreach ( $status_options as $status => $label ) {
			delete_transient( 'wc_admin_stock_count_' . $status );
		}
	}
}
