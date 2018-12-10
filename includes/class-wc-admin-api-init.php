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
		// Add wc-admin report tables to list of WooCommerce tables.
		add_filter( 'woocommerce_install_get_tables', array( 'WC_Admin_Api_Init', 'add_tables' ) );
		// REST API extensions init.
		add_action( 'rest_api_init', array( $this, 'rest_api_init' ) );
		add_filter( 'rest_endpoints', array( 'WC_Admin_Api_Init', 'filter_rest_endpoints' ), 10, 1 );
		add_filter( 'woocommerce_debug_tools', array( 'WC_Admin_Api_Init', 'add_regenerate_tool' ) );
	}

	/**
	 * Init classes.
	 */
	public function init_classes() {
		// Interfaces.
		require_once dirname( __FILE__ ) . '/interfaces/class-wc-admin-reports-data-store-interface.php';
		require_once dirname( __FILE__ ) . '/class-wc-admin-reports-query.php';

		// Common date time code.
		require_once dirname( __FILE__ ) . '/class-wc-admin-reports-interval.php';

		// Query classes for reports.
		require_once dirname( __FILE__ ) . '/class-wc-admin-reports-revenue-query.php';
		require_once dirname( __FILE__ ) . '/class-wc-admin-reports-orders-stats-query.php';
		require_once dirname( __FILE__ ) . '/class-wc-admin-reports-products-query.php';
		require_once dirname( __FILE__ ) . '/class-wc-admin-reports-variations-query.php';
		require_once dirname( __FILE__ ) . '/class-wc-admin-reports-products-stats-query.php';
		require_once dirname( __FILE__ ) . '/class-wc-admin-reports-categories-query.php';

		// Data stores.
		require_once dirname( __FILE__ ) . '/data-stores/class-wc-admin-reports-data-store.php';
		require_once dirname( __FILE__ ) . '/data-stores/class-wc-admin-reports-orders-data-store.php';
		require_once dirname( __FILE__ ) . '/data-stores/class-wc-admin-reports-products-data-store.php';
		require_once dirname( __FILE__ ) . '/data-stores/class-wc-admin-reports-variations-data-store.php';
		require_once dirname( __FILE__ ) . '/data-stores/class-wc-admin-reports-products-stats-data-store.php';
		require_once dirname( __FILE__ ) . '/data-stores/class-wc-admin-reports-categories-data-store.php';

		// Data triggers.
		require_once dirname( __FILE__ ) . '/wc-admin-order-functions.php';
		require_once dirname( __FILE__ ) . '/data-stores/class-wc-admin-notes-data-store.php';

		// CRUD classes.
		require_once dirname( __FILE__ ) . '/class-wc-admin-note.php';
		require_once dirname( __FILE__ ) . '/class-wc-admin-notes.php';
	}

	/**
	 * Init REST API.
	 */
	public function rest_api_init() {
		require_once dirname( __FILE__ ) . '/api/class-wc-admin-rest-admin-notes-controller.php';
		require_once dirname( __FILE__ ) . '/api/class-wc-admin-rest-reports-controller.php';
		require_once dirname( __FILE__ ) . '/api/class-wc-admin-rest-system-status-tools-controller.php';
		require_once dirname( __FILE__ ) . '/api/class-wc-admin-rest-reports-categories-controller.php';
		require_once dirname( __FILE__ ) . '/api/class-wc-admin-rest-reports-coupons-controller.php';
		require_once dirname( __FILE__ ) . '/api/class-wc-admin-rest-reports-coupons-stats-controller.php';
		require_once dirname( __FILE__ ) . '/api/class-wc-admin-rest-reports-customers-controller.php';
		require_once dirname( __FILE__ ) . '/api/class-wc-admin-rest-reports-downloads-controller.php';
		require_once dirname( __FILE__ ) . '/api/class-wc-admin-rest-reports-downloads-files-controller.php';
		require_once dirname( __FILE__ ) . '/api/class-wc-admin-rest-reports-downloads-stats-controller.php';
		require_once dirname( __FILE__ ) . '/api/class-wc-admin-rest-reports-orders-stats-controller.php';
		require_once dirname( __FILE__ ) . '/api/class-wc-admin-rest-reports-products-controller.php';
		require_once dirname( __FILE__ ) . '/api/class-wc-admin-rest-reports-variations-controller.php';
		require_once dirname( __FILE__ ) . '/api/class-wc-admin-rest-reports-products-stats-controller.php';
		require_once dirname( __FILE__ ) . '/api/class-wc-admin-rest-reports-revenue-stats-controller.php';
		require_once dirname( __FILE__ ) . '/api/class-wc-admin-rest-reports-taxes-controller.php';
		require_once dirname( __FILE__ ) . '/api/class-wc-admin-rest-reports-taxes-stats-controller.php';

		$controllers = array(
			'WC_Admin_REST_Admin_Notes_Controller',
			'WC_Admin_REST_Reports_Controller',
			'WC_Admin_REST_System_Status_Tools_Controller',
			'WC_Admin_REST_Reports_Products_Controller',
			'WC_Admin_REST_Reports_Variations_Controller',
			'WC_Admin_REST_Reports_Products_Stats_Controller',
			'WC_Admin_REST_Reports_Revenue_Stats_Controller',
			'WC_Admin_REST_Reports_Orders_Stats_Controller',
			'WC_Admin_REST_Reports_Categories_Controller',
			'WC_Admin_REST_Reports_Taxes_Controller',
			'WC_Admin_REST_Reports_Taxes_Stats_Controller',
			'WC_Admin_REST_Reports_Coupons_Controller',
			'WC_Admin_REST_Reports_Coupons_Stats_Controller',
		);

		foreach ( $controllers as $controller ) {
			$this->$controller = new $controller();
			$this->$controller->register_routes();
		}
	}

	/**
	 * Filter REST API endpoints.
	 *
	 * @param array $endpoints List of endpoints.
	 * @return array
	 */
	public static function filter_rest_endpoints( $endpoints ) {
		// Override GET /wc/v3/system_status/tools.
		if ( isset( $endpoints['/wc/v3/system_status/tools'] )
			&& isset( $endpoints['/wc/v3/system_status/tools'][1] )
			&& isset( $endpoints['/wc/v3/system_status/tools'][0] )
			&& $endpoints['/wc/v3/system_status/tools'][1]['callback'][0] instanceof WC_Admin_REST_System_Status_Tools_Controller
		) {
			$endpoints['/wc/v3/system_status/tools'][0] = $endpoints['/wc/v3/system_status/tools'][1];
		}
		// // Override GET & PUT for /wc/v3/system_status/tools.
		if ( isset( $endpoints['/wc/v3/system_status/tools/(?P<id>[\w-]+)'] )
			&& isset( $endpoints['/wc/v3/system_status/tools/(?P<id>[\w-]+)'][3] )
			&& isset( $endpoints['/wc/v3/system_status/tools/(?P<id>[\w-]+)'][2] )
			&& $endpoints['/wc/v3/system_status/tools/(?P<id>[\w-]+)'][2]['callback'][0] instanceof WC_Admin_REST_System_Status_Tools_Controller
			&& $endpoints['/wc/v3/system_status/tools/(?P<id>[\w-]+)'][3]['callback'][0] instanceof WC_Admin_REST_System_Status_Tools_Controller
		) {
			$endpoints['/wc/v3/system_status/tools/(?P<id>[\w-]+)'][0] = $endpoints['/wc/v3/system_status/tools/(?P<id>[\w-]+)'][2];
			$endpoints['/wc/v3/system_status/tools/(?P<id>[\w-]+)'][1] = $endpoints['/wc/v3/system_status/tools/(?P<id>[\w-]+)'][3];
		}

		// Override GET /wc/v3/reports.
		if ( isset( $endpoints['/wc/v3/reports'] )
			&& isset( $endpoints['/wc/v3/reports'][1] )
			&& isset( $endpoints['/wc/v3/reports'][0] )
			&& $endpoints['/wc/v3/reports'][1]['callback'][0] instanceof WC_Admin_REST_Reports_Controller
		) {
			$endpoints['/wc/v3/reports'][0] = $endpoints['/wc/v3/reports'][1];
		}

		return $endpoints;
	}

	/**
	 * Adds regenerate tool.
	 *
	 * @param array $tools List of tools.
	 * @return array
	 */
	public static function add_regenerate_tool( $tools ) {
		return array_merge(
			$tools,
			array(
				'rebuild_stats' => array(
					'name'     => __( 'Rebuild reports data', 'wc-admin' ),
					'button'   => __( 'Rebuild reports', 'wc-admin' ),
					'desc'     => __( 'This tool will rebuild all of the information used by the reports.', 'wc-admin' ),
					'callback' => array( 'WC_Admin_Api_Init', 'order_lookups_init' ),
				),
			)
		);
	}

	/**
	 * Add orders to next batch for processing, plus plan the next batch.
	 *
	 * @param int $batch_no Batch number for batch of orders to process.
	 */
	public static function order_lookups_init( $batch_no = 0 ) {
		global $wpdb;

		$orders_in_one_batch = apply_filters( 'wc_admin_order_batch_size', 10 );
		$total_orders        = $wpdb->get_var( "SELECT COUNT( ID ) FROM {$wpdb->prefix}posts WHERE post_type IN ( 'shop_order', 'shop_order_refund' )" );

		$offset = $batch_no * $orders_in_one_batch;
		if ( $offset > $total_orders ) {
			return;
		}

		$q               = WC()->queue();
		$plus_one_minute = time() + 60;
		$batch_no++;
		$q->schedule_single( $plus_one_minute, 'wc-admin_process_orders_batch', array( $batch_no ) );

		$order_ids = wc_get_orders(
			array(
				'limit'   => $orders_in_one_batch,
				'offset'  => $batch_no * $orders_in_one_batch,
				'return'  => 'ids',
				'orderby' => 'ID',
				'order'   => 'ASC',
			)
		);

		foreach ( $order_ids as $order_id ) {
			$args = array(
				$order_id,
			);
			$q->schedule_single( $plus_one_minute, 'wc-admin_order_lookups_update', $args );
		}
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
				'report-revenue-stats'  => 'WC_Admin_Reports_Orders_Data_Store',
				'report-orders-stats'   => 'WC_Admin_Reports_Orders_Data_Store',
				'report-products'       => 'WC_Admin_Reports_Products_Data_Store',
				'report-variations'     => 'WC_Admin_Reports_Variations_Data_Store',
				'report-products-stats' => 'WC_Admin_Reports_Products_Stats_Data_Store',
				'report-categories'     => 'WC_Admin_Reports_Categories_Data_Store',
				'admin-note'            => 'WC_Admin_Notes_Data_Store',
			)
		);
	}

	/**
	 * Adds new tables.
	 *
	 * @param array $wc_tables List of WooCommerce tables.
	 * @return array
	 */
	public static function add_tables( $wc_tables ) {
		global $wpdb;

		return array_merge(
			$wc_tables,
			array(
				// TODO: will this work on multisite?
				"{$wpdb->prefix}wc_order_stats",
				"{$wpdb->prefix}wc_order_product_lookup",
				"{$wpdb->prefix}wc_order_tax_lookup",
				"{$wpdb->prefix}wc_order_coupon_lookup",
				"{$wpdb->prefix}woocommerce_admin_notes",
				"{$wpdb->prefix}woocommerce_admin_note_actions",
			)
		);
	}

	/**
	 * Get database schema.
	 *
	 * @return string
	 */
	private static function get_schema() {
		global $wpdb;

		if ( $wpdb->has_cap( 'collation' ) ) {
			$collate = $wpdb->get_charset_collate();
		}

		$tables = "
		CREATE TABLE {$wpdb->prefix}wc_order_stats (
			order_id bigint(20) unsigned NOT NULL,
			date_created timestamp DEFAULT '0000-00-00 00:00:00' NOT NULL,
			num_items_sold int(11) UNSIGNED DEFAULT 0 NOT NULL,
			gross_total double DEFAULT 0 NOT NULL,
			coupon_total double DEFAULT 0 NOT NULL,
			refund_total double DEFAULT 0 NOT NULL,
			tax_total double DEFAULT 0 NOT NULL,
			shipping_total double DEFAULT 0 NOT NULL,
			net_total double DEFAULT 0 NOT NULL,
			returning_customer boolean DEFAULT 0 NOT NULL,
			PRIMARY KEY (order_id),
			KEY date_created (date_created)
		  ) $collate;
		  CREATE TABLE {$wpdb->prefix}wc_order_product_lookup (
			order_item_id BIGINT UNSIGNED NOT NULL,
			order_id BIGINT UNSIGNED NOT NULL,
			product_id BIGINT UNSIGNED NOT NULL,
			variation_id BIGINT UNSIGNED NOT NULL,
			customer_id BIGINT UNSIGNED NULL,
			date_created timestamp DEFAULT '0000-00-00 00:00:00' NOT NULL,
			product_qty INT UNSIGNED NOT NULL,
			product_gross_revenue double DEFAULT 0 NOT NULL,
			PRIMARY KEY  (order_item_id),
			KEY order_id (order_id),
			KEY product_id (product_id),
			KEY customer_id (customer_id),
			KEY date_created (date_created)
		  ) $collate;
		  CREATE TABLE {$wpdb->prefix}wc_order_tax_lookup (
		  	order_id BIGINT UNSIGNED NOT NULL,
		  	tax_rate_id BIGINT UNSIGNED NOT NULL,
		  	date_created timestamp DEFAULT '0000-00-00 00:00:00' NOT NULL,
		  	shipping_tax double DEFAULT 0 NOT NULL,
		  	order_tax double DEFAULT 0 NOT NULL,
		  	total_tax double DEFAULT 0 NOT NULL,
		  	KEY order_id (order_id),
		  	KEY tax_rate_id (tax_rate_id),
		  	KEY date_created (date_created)
		  ) $collate;
		  CREATE TABLE {$wpdb->prefix}wc_order_coupon_lookup (
			order_id BIGINT UNSIGNED NOT NULL,
			coupon_id BIGINT UNSIGNED NOT NULL,
			date_created timestamp DEFAULT '0000-00-00 00:00:00' NOT NULL,
			coupon_gross_discount double DEFAULT 0 NOT NULL,
			PRIMARY KEY (order_id, coupon_id),
			KEY coupon_id (coupon_id),
			KEY date_created (date_created)
		  ) $collate;
			CREATE TABLE {$wpdb->prefix}woocommerce_admin_notes (
				note_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
				name varchar(255) NOT NULL,
				type varchar(20) NOT NULL,
				locale varchar(20) NOT NULL,
				title longtext NOT NULL,
				content longtext NOT NULL,
				icon varchar(200) NOT NULL,
				content_data longtext NULL default null,
				status varchar(200) NOT NULL,
				source varchar(200) NOT NULL,
				date_created datetime NOT NULL default '0000-00-00 00:00:00',
				date_reminder datetime NULL default null,
				PRIMARY KEY (note_id)
				) $collate;
			CREATE TABLE {$wpdb->prefix}woocommerce_admin_note_actions (
				action_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
				note_id BIGINT UNSIGNED NOT NULL,
				name varchar(255) NOT NULL,
				label varchar(255) NOT NULL,
				query longtext NOT NULL,
				PRIMARY KEY (action_id),
				KEY note_id (note_id)
				) $collate;
			";

		return $tables;
	}

	/**
	 * Create database tables.
	 */
	public static function create_db_tables() {
		require_once ABSPATH . 'wp-admin/includes/upgrade.php';

		dbDelta( self::get_schema() );
	}

	/**
	 * Install plugin.
	 */
	public static function install() {
		// Create tables.
		self::create_db_tables();
	}

}

add_action( 'wc-admin_process_orders_batch', 'WC_Admin_Api_Init::order_lookups_init', 10, 1 );
add_action( 'wc-admin_order_lookups_update', 'wc_admin_order_update', 10, 1 );



new WC_Admin_Api_Init();
