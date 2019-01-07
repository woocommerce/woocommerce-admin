<?php
/**
 * WC_Admin_Reports_Orders_Data_Store class file.
 *
 * @package WooCommerce Admin/Classes
 */

defined( 'ABSPATH' ) || exit;

/**
 * WC_Admin_Reports_Orders_Data_Store.
 */
class WC_Admin_Reports_Orders_Data_Store extends WC_Admin_Reports_Data_Store implements WC_Admin_Reports_Data_Store_Interface {

	/**
	 * Table used to get the data.
	 *
	 * @var string
	 */
	const TABLE_NAME = 'wc_order_stats';

	/**
	 * Mapping columns to data type to return correct response types.
	 *
	 * @var array
	 */
	protected $column_types = array(
		'order_id'       => 'intval',
		'date_created'   => 'strval',
		'status'         => 'strval',
		'customer_id'    => 'intval',
		'net_total'      => 'floatval',
		'num_items_sold' => 'intval',
		'customer_type'  => 'strval',
	);

	/**
	 * SQL columns to select in the db query and their mapping to SQL code.
	 *
	 * @var array
	 */
	protected $report_columns = array(
		'order_id'       => 'order_id',
		'date_created'   => 'date_created',
		'status'         => 'status',
		'customer_id'    => 'customer_id',
		'net_total'      => 'net_total',
		'num_items_sold' => 'num_items_sold',
		'customer_type'  => '(CASE WHEN returning_customer <> 0 THEN "returning" ELSE "new" END) as customer_type',
	);

	/**
	 * Returns comma separated ids of included coupons, based on query arguments from the user.
	 *
	 * @param array $query_args Parameters supplied by the user.
	 * @return string
	 */
	protected function get_included_coupons( $query_args ) {
		$included_coupons_str = '';

		if ( isset( $query_args['coupons'] ) && is_array( $query_args['coupons'] ) && count( $query_args['coupons'] ) > 0 ) {
			$included_coupons_str = implode( ',', $query_args['coupons'] );
		}
		return $included_coupons_str;
	}

	/**
	 * Updates the database query with parameters used for orders report: coupons and products filters.
	 *
	 * @param array $query_args Query arguments supplied by the user.
	 * @return array            Array of parameters used for SQL query.
	 */
	protected function get_sql_query_params( $query_args ) {
		global $wpdb;
		$order_stats_lookup_table = $wpdb->prefix . self::TABLE_NAME;

		$sql_query_params = $this->get_time_period_sql_params( $query_args, $order_stats_lookup_table );
		$sql_query_params = array_merge( $sql_query_params, $this->get_limit_sql_params( $query_args ) );
		$sql_query_params = array_merge( $sql_query_params, $this->get_order_by_sql_params( $query_args ) );

		$included_coupons = $this->get_included_coupons( $query_args );
		if ( $included_coupons ) {
			$sql_query_params['where_clause'] .= " AND {$order_stats_lookup_table}.coupon_id IN ({$included_coupons})";
		}

		return $sql_query_params;
	}

	/**
	 * Returns the report data based on parameters supplied by the user.
	 *
	 * @param array $query_args  Query parameters.
	 * @return stdClass|WP_Error Data.
	 */
	public function get_data( $query_args ) {
		global $wpdb;

		$table_name = $wpdb->prefix . self::TABLE_NAME;
		$now        = time();
		$week_back  = $now - WEEK_IN_SECONDS;

		// These defaults are only partially applied when used via REST API, as that has its own defaults.
		$defaults   = array(
			'per_page'         => get_option( 'posts_per_page' ),
			'page'             => 1,
			'order'            => 'DESC',
			'orderby'          => 'date_created',
			'before'           => date( WC_Admin_Reports_Interval::$iso_datetime_format, $now ),
			'after'            => date( WC_Admin_Reports_Interval::$iso_datetime_format, $week_back ),
			'fields'           => '*',
			'product_includes' => array(),
			'product_excludes' => array(),
			'coupon_includes'  => array(),
			'coupon_excludes'  => array(),
			'status_is'        => parent::get_report_order_statuses(),
		);
		$query_args = wp_parse_args( $query_args, $defaults );

		$cache_key = $this->get_cache_key( $query_args );
		$data      = wp_cache_get( $cache_key, $this->cache_group );

		if ( false === $data ) {
			$data = (object) array(
				'data'    => array(),
				'total'   => 0,
				'pages'   => 0,
				'page_no' => 0,
			);

			$selections       = $this->selected_columns( $query_args );
			$sql_query_params = $this->get_sql_query_params( $query_args );

			$db_records_count = (int) $wpdb->get_var(
				"SELECT COUNT(*) FROM (
							SELECT
								order_id
							FROM
								{$table_name}
								{$sql_query_params['from_clause']}
							WHERE
								1=1
								{$sql_query_params['where_time_clause']}
								{$sql_query_params['where_clause']}
					  		) AS tt"
			); // WPCS: cache ok, DB call ok, unprepared SQL ok.

			$total_pages = (int) ceil( $db_records_count / $sql_query_params['per_page'] );
			if ( $query_args['page'] < 1 || $query_args['page'] > $total_pages ) {
				return $data;
			}

			$order_data = $wpdb->get_results(
				"SELECT
						{$selections}
					FROM
						{$table_name}
						{$sql_query_params['from_clause']}
					WHERE
						1=1
						{$sql_query_params['where_time_clause']}
						{$sql_query_params['where_clause']}
					ORDER BY
						{$sql_query_params['order_by_clause']}
					{$sql_query_params['limit']}
					",
				ARRAY_A
			); // WPCS: cache ok, DB call ok, unprepared SQL ok.

			if ( null === $order_data ) {
				return $data;
			}

			$order_data = array_map( array( $this, 'cast_numbers' ), $order_data );
			$data       = (object) array(
				'data'    => $order_data,
				'total'   => $db_records_count,
				'pages'   => $total_pages,
				'page_no' => (int) $query_args['page'],
			);

			wp_cache_set( $cache_key, $data, $this->cache_group );
		}

		return $data;
	}

	/**
	 * Normalizes order_by clause to match to SQL query.
	 *
	 * @param string $order_by Order by option requeste by user.
	 * @return string
	 */
	protected function normalize_order_by( $order_by ) {
		if ( 'date' === $order_by ) {
			return 'date_created';
		}

		return $order_by;
	}

	/**
	 * Returns string to be used as cache key for the data.
	 *
	 * @param array $params Query parameters.
	 * @return string
	 */
	protected function get_cache_key( $params ) {
		return 'woocommerce_' . self::TABLE_NAME . '_' . md5( wp_json_encode( $params ) );
	}

}
