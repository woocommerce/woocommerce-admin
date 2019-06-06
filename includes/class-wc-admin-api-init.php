<?php
/**
 * REST API bootstrap.
 *
 * @package WooCommerce Admin/Classes
 */

defined( 'ABSPATH' ) || exit;

/**
 * WC_Admin_Api_Init class.
 */
class WC_Admin_Api_Init {

	/**
	 * Boostrap REST API.
	 */
	public function __construct() {
		// Initialize classes.
		add_action( 'plugins_loaded', array( $this, 'init_classes' ), 19 );
		// Hook in data stores.
		add_filter( 'woocommerce_data_stores', array( 'WC_Admin_Api_Init', 'add_data_stores' ) );
	}

	/**
	 * Init classes.
	 */
	public function init_classes() {
		// Interfaces.
		require_once WC_ADMIN_ABSPATH . 'includes/interfaces/class-wc-admin-reports-data-store-interface.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-query.php';

		// Common date time code.
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-interval.php';

		// Exceptions.
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-parameter-exception.php';

		// WC Class extensions.
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-order-trait.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-order.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-order-refund.php';

		// Segmentation.
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-segmenting.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-orders-stats-segmenting.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-products-stats-segmenting.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-coupons-stats-segmenting.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-taxes-stats-segmenting.php';

		// Query classes for reports.
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-revenue-query.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-orders-query.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-orders-stats-query.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-products-query.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-variations-query.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-products-stats-query.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-categories-query.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-taxes-query.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-taxes-stats-query.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-coupons-query.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-coupons-stats-query.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-downloads-query.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-downloads-stats-query.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-customers-query.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-customers-stats-query.php';
		require_once WC_ADMIN_ABSPATH . 'includes/class-wc-admin-reports-stock-stats-query.php';

		// Data stores.
		require_once WC_ADMIN_ABSPATH . 'includes/data-stores/class-wc-admin-reports-data-store.php';
		require_once WC_ADMIN_ABSPATH . 'includes/data-stores/class-wc-admin-reports-orders-data-store.php';
		require_once WC_ADMIN_ABSPATH . 'includes/data-stores/class-wc-admin-reports-orders-stats-data-store.php';
		require_once WC_ADMIN_ABSPATH . 'includes/data-stores/class-wc-admin-reports-products-data-store.php';
		require_once WC_ADMIN_ABSPATH . 'includes/data-stores/class-wc-admin-reports-variations-data-store.php';
		require_once WC_ADMIN_ABSPATH . 'includes/data-stores/class-wc-admin-reports-products-stats-data-store.php';
		require_once WC_ADMIN_ABSPATH . 'includes/data-stores/class-wc-admin-reports-categories-data-store.php';
		require_once WC_ADMIN_ABSPATH . 'includes/data-stores/class-wc-admin-reports-taxes-data-store.php';
		require_once WC_ADMIN_ABSPATH . 'includes/data-stores/class-wc-admin-reports-taxes-stats-data-store.php';
		require_once WC_ADMIN_ABSPATH . 'includes/data-stores/class-wc-admin-reports-coupons-data-store.php';
		require_once WC_ADMIN_ABSPATH . 'includes/data-stores/class-wc-admin-reports-coupons-stats-data-store.php';
		require_once WC_ADMIN_ABSPATH . 'includes/data-stores/class-wc-admin-reports-downloads-data-store.php';
		require_once WC_ADMIN_ABSPATH . 'includes/data-stores/class-wc-admin-reports-downloads-stats-data-store.php';
		require_once WC_ADMIN_ABSPATH . 'includes/data-stores/class-wc-admin-reports-customers-data-store.php';
		require_once WC_ADMIN_ABSPATH . 'includes/data-stores/class-wc-admin-reports-customers-stats-data-store.php';
		require_once WC_ADMIN_ABSPATH . 'includes/data-stores/class-wc-admin-reports-stock-stats-data-store.php';

		// Data triggers.
		require_once WC_ADMIN_ABSPATH . 'includes/data-stores/class-wc-admin-notes-data-store.php';

		// CRUD classes.
		require_once WC_ADMIN_ABSPATH . 'includes/notes/class-wc-admin-note.php';
		require_once WC_ADMIN_ABSPATH . 'includes/notes/class-wc-admin-notes.php';
	}

	/**
	 * Adds data stores.
	 *
	 * @param array $data_stores List of data stores.
	 * @return array
	 */
	public static function add_data_stores( $data_stores ) {
		return array_merge(
			$data_stores,
			array(
				'report-revenue-stats'   => 'WC_Admin_Reports_Orders_Stats_Data_Store',
				'report-orders'          => 'WC_Admin_Reports_Orders_Data_Store',
				'report-orders-stats'    => 'WC_Admin_Reports_Orders_Stats_Data_Store',
				'report-products'        => 'WC_Admin_Reports_Products_Data_Store',
				'report-variations'      => 'WC_Admin_Reports_Variations_Data_Store',
				'report-products-stats'  => 'WC_Admin_Reports_Products_Stats_Data_Store',
				'report-categories'      => 'WC_Admin_Reports_Categories_Data_Store',
				'report-taxes'           => 'WC_Admin_Reports_Taxes_Data_Store',
				'report-taxes-stats'     => 'WC_Admin_Reports_Taxes_Stats_Data_Store',
				'report-coupons'         => 'WC_Admin_Reports_Coupons_Data_Store',
				'report-coupons-stats'   => 'WC_Admin_Reports_Coupons_Stats_Data_Store',
				'report-downloads'       => 'WC_Admin_Reports_Downloads_Data_Store',
				'report-downloads-stats' => 'WC_Admin_Reports_Downloads_Stats_Data_Store',
				'admin-note'             => 'WC_Admin_Notes_Data_Store',
				'report-customers'       => 'WC_Admin_Reports_Customers_Data_Store',
				'report-customers-stats' => 'WC_Admin_Reports_Customers_Stats_Data_Store',
				'report-stock-stats'     => 'WC_Admin_Reports_Stock_Stats_Data_Store',
			)
		);
	}
}

new WC_Admin_Api_Init();
