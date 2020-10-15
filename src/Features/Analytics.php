<?php
/**
 * WooCommerce Analytics.
 * NOTE: DO NOT edit this file in WooCommerce core, this is generated from woocommerce-admin.
 */

namespace Automattic\WooCommerce\Admin\Features;

use Automattic\WooCommerce\Admin\Loader;
use Automattic\WooCommerce\Admin\API\Reports\Cache;

/**
 * Contains backend logic for the Analytics feature.
 */
class Analytics {
	/**
	 * Clear cache tool identifier.
	 */
	const CACHE_TOOL_ID = 'clear_woocommerce_analytics_cache';

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
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Hook into WooCommerce.
	 */
	public function __construct() {
		add_filter( 'woocommerce_component_settings_preload_endpoints', array( $this, 'add_preload_endpoints' ) );
		add_filter( 'woocommerce_admin_get_user_data_fields', array( $this, 'add_user_data_fields' ) );
		add_action( 'admin_menu', array( $this, 'register_pages' ) );
		add_filter( 'woocommerce_debug_tools', array( $this, 'register_cache_clear_tool' ) );
	}

	/**
	 * Preload data from the countries endpoint.
	 *
	 * @param array $endpoints Array of preloaded endpoints.
	 * @return array
	 */
	public function add_preload_endpoints( $endpoints ) {
		$endpoints['countries'] = '/wc-analytics/data/countries';
		return $endpoints;
	}

	/**
	 * Adds fields so that we can store user preferences for the columns to display on a report.
	 *
	 * @param array $user_data_fields User data fields.
	 * @return array
	 */
	public function add_user_data_fields( $user_data_fields ) {
		return array_merge(
			$user_data_fields,
			array(
				'categories_report_columns',
				'coupons_report_columns',
				'customers_report_columns',
				'orders_report_columns',
				'products_report_columns',
				'revenue_report_columns',
				'taxes_report_columns',
				'variations_report_columns',
			)
		);
	}

	/**
	 * Register the cache clearing tool on the WooCommerce > Status > Tools page.
	 *
	 * @param array $debug_tools Available debug tool registrations.
	 * @return array Filtered debug tool registrations.
	 */
	public function register_cache_clear_tool( $debug_tools ) {
		$settings_url = add_query_arg(
			array(
				'page' => 'wc-admin',
				'path' => '/analytics/settings',
			),
			get_admin_url( null, 'admin.php' )
		);

		$debug_tools[ self::CACHE_TOOL_ID ] = array(
			'name'     => __( 'Clear analytics cache', 'woocommerce-admin' ),
			'button'   => __( 'Clear', 'woocommerce-admin' ),
			'desc'     => sprintf(
				/* translators: 1: opening link tag, 2: closing tag */
				'This tool will reset the cached values used in WooCommerce Analytics. If numbers still look off, try %1$sReimporting Historical Data%2$s.',
				'<a href="' . esc_url( $settings_url ) . '">',
				'</a>'
			),
			'callback' => array( $this, 'run_clear_cache_tool' ),
		);

		return $debug_tools;
	}

	/**
	 * Registers report pages.
	 */
	public function register_pages() {
		$navigation_enabled = Loader::is_feature_enabled( 'navigation' );

		$overview_page = array(
			'id'           => 'woocommerce-analytics',
			'title'        => __( 'Analytics', 'woocommerce-admin' ),
			'path'         => '/analytics/overview',
			'icon'         => 'dashicons-chart-bar',
			'position'     => 56, // After WooCommerce & Product menu items.
			'order'        => 10,
			'is_category'  => true,
			'is_top_level' => true,
		);

		$report_pages = array(
			$overview_page,
			array(
				'id'     => 'woocommerce-analytics-overview',
				'title'  => __( 'Overview', 'woocommerce-admin' ),
				'parent' => 'woocommerce-analytics',
				'path'   => '/analytics/overview',
				'order'  => 10,
			),
			array(
				'id'     => 'woocommerce-analytics-products',
				'title'  => __( 'Products', 'woocommerce-admin' ),
				'parent' => 'woocommerce-analytics',
				'path'   => '/analytics/products',
				'order'  => 20,
			),
			array(
				'id'     => 'woocommerce-analytics-revenue',
				'title'  => __( 'Revenue', 'woocommerce-admin' ),
				'parent' => 'woocommerce-analytics',
				'path'   => '/analytics/revenue',
				'order'  => 30,
			),
			array(
				'id'     => 'woocommerce-analytics-orders',
				'title'  => __( 'Orders', 'woocommerce-admin' ),
				'parent' => 'woocommerce-analytics',
				'path'   => '/analytics/orders',
				'order'  => 40,
			),
			array(
				'id'     => 'woocommerce-analytics-variations',
				'title'  => __( 'Variations', 'woocommerce-admin' ),
				'parent' => 'woocommerce-analytics',
				'path'   => '/analytics/variations',
				'order'  => 50,
			),
			array(
				'id'     => 'woocommerce-analytics-categories',
				'title'  => __( 'Categories', 'woocommerce-admin' ),
				'parent' => 'woocommerce-analytics',
				'path'   => '/analytics/categories',
				'order'  => 60,
			),
			array(
				'id'     => 'woocommerce-analytics-coupons',
				'title'  => __( 'Coupons', 'woocommerce-admin' ),
				'parent' => 'woocommerce-analytics',
				'path'   => '/analytics/coupons',
				'order'  => 70,
			),
			array(
				'id'     => 'woocommerce-analytics-taxes',
				'title'  => __( 'Taxes', 'woocommerce-admin' ),
				'parent' => 'woocommerce-analytics',
				'path'   => '/analytics/taxes',
				'order'  => 80,
			),
			array(
				'id'     => 'woocommerce-analytics-downloads',
				'title'  => __( 'Downloads', 'woocommerce-admin' ),
				'parent' => 'woocommerce-analytics',
				'path'   => '/analytics/downloads',
				'order'  => 90,
			),
			'yes' === get_option( 'woocommerce_manage_stock' ) ? array(
				'id'     => 'woocommerce-analytics-stock',
				'title'  => __( 'Stock', 'woocommerce-admin' ),
				'parent' => 'woocommerce-analytics',
				'path'   => '/analytics/stock',
				'order'  => 100,
			) : null,
			array(
				'id'           => 'woocommerce-analytics-customers',
				'title'        => __( 'Customers', 'woocommerce-admin' ),
				'parent'       => 'woocommerce',
				'path'         => '/customers',
				'is_top_level' => true,
				'order'        => 50,
			),
			array(
				'id'     => 'woocommerce-analytics-settings',
				'title'  => $navigation_enabled ? __( 'Analytics', 'woocommerce-admin' ) : __( 'Settings', 'woocommerce-admin' ),
				'parent' => $navigation_enabled ? 'settings' : 'woocommerce-analytics',
				'path'   => '/analytics/settings',
			),
		);

		$report_pages = apply_filters( 'woocommerce_analytics_report_menu_items', $report_pages );

		foreach ( $report_pages as $report_page ) {
			if ( ! is_null( $report_page ) ) {
				wc_admin_register_page( $report_page );
			}
		}
	}

	/**
	 * "Clear" analytics cache by invalidating it.
	 */
	public function run_clear_cache_tool() {
		Cache::invalidate();

		return __( 'Analytics cache cleared.', 'woocommerce-admin' );
	}
}
