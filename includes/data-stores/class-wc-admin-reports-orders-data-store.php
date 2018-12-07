<?php
/**
 * WC_Admin_Reports_Orders_Data_Store class file.
 *
 * @package WooCommerce Admin/Classes
 */

defined( 'ABSPATH' ) || exit;

/**
 * WC_Admin_Reports_Orders_Data_Store.
 *
 * @version  3.5.0
 */
class WC_Admin_Reports_Orders_Data_Store extends WC_Admin_Reports_Data_Store implements WC_Admin_Reports_Data_Store_Interface {

	/**
	 * Table used to get the data.
	 *
	 * @var string
	 */
	const TABLE_NAME = 'wc_order_stats';

	/**
	 * Cron event name.
	 */
	const CRON_EVENT = 'wc_order_stats_update';

	/**
	 * Type for each column to cast values correctly later.
	 *
	 * @var array
	 */
	protected $column_types = array(
		'orders_count'            => 'intval',
		'num_items_sold'          => 'intval',
		'gross_revenue'           => 'floatval',
		'coupons'                 => 'floatval',
		'refunds'                 => 'floatval',
		'taxes'                   => 'floatval',
		'shipping'                => 'floatval',
		'net_revenue'             => 'floatval',
		'avg_items_per_order'     => 'floatval',
		'avg_order_value'         => 'floatval',
		'num_returning_customers' => 'intval',
		'num_new_customers'       => 'intval',
		'products'                => 'intval',
	);

	/**
	 * SQL definition for each column.
	 *
	 * @var array
	 */
	protected $report_columns = array(
		'orders_count'            => 'COUNT(*) as orders_count',
		'num_items_sold'          => 'SUM(num_items_sold) as num_items_sold',
		'gross_revenue'           => 'SUM(gross_total) AS gross_revenue',
		'coupons'                 => 'SUM(coupon_total) AS coupons',
		'refunds'                 => 'SUM(refund_total) AS refunds',
		'taxes'                   => 'SUM(tax_total) AS taxes',
		'shipping'                => 'SUM(shipping_total) AS shipping',
		'net_revenue'             => '( SUM(net_total) - SUM(refund_total) ) AS net_revenue',
		'avg_items_per_order'     => 'AVG(num_items_sold) AS avg_items_per_order',
		'avg_order_value'         => 'AVG(gross_total) AS avg_order_value',
		'num_returning_customers' => 'SUM(returning_customer = 1) AS num_returning_customers',
		'num_new_customers'       => 'SUM(returning_customer = 0) AS num_new_customers',
	);

	/**
	 * Returns expected number of items on the page in case of date ordering.
	 *
	 * @param int $expected_interval_count Expected number of intervals in total.
	 * @param int $items_per_page          Number of items per page.
	 * @param int $page_no                 Page number.
	 *
	 * @return float|int
	 */
	protected function expected_intervals_on_page( $expected_interval_count, $items_per_page, $page_no ) {
		$total_pages = (int) ceil( $expected_interval_count / $items_per_page );
		if ( $page_no < $total_pages ) {
			return $items_per_page;
		} elseif ( $page_no === $total_pages ) {
			return $expected_interval_count - ( $page_no - 1 ) * $items_per_page;
		} else {
			return 0;
		}
	}

	/**
	 * Returns true if there are any intervals that need to be filled in the response.
	 *
	 * @param int    $expected_interval_count Expected number of intervals in total.
	 * @param int    $db_records              Total number of records for given period in the database.
	 * @param int    $items_per_page          Number of items per page.
	 * @param int    $page_no                 Page number.
	 * @param string $order                   asc or desc.
	 * @param string $order_by                Column by which the result will be sorted.
	 * @param int    $intervals_count         Number of records for given (possibly shortened) time interval.
	 *
	 * @return bool
	 */
	protected function intervals_missing( $expected_interval_count, $db_records, $items_per_page, $page_no, $order, $order_by, $intervals_count ) {
		if ( $expected_interval_count > $db_records ) {
			if ( 'date' === $order_by ) {
				$expected_intervals_on_page = $this->expected_intervals_on_page( $expected_interval_count, $items_per_page, $page_no );
				if ( $intervals_count < $expected_intervals_on_page ) {
					return true;
				} else {
					return false;
				}
			} else {
				if ( 'desc' === $order ) {
					if ( $page_no > floor( $db_records / $items_per_page ) ) {
						return true;
					} else {
						return false;
					}
				} elseif ( 'asc' === $order ) {
					if ( $page_no <= ceil( ( $expected_interval_count - $db_records ) / $items_per_page ) ) {
						return true;
					} else {
						return false;
					}
				} else {
					// Invalid ordering.
					return false;
				}
			}
		} else {
			return false;
		}
	}

	/**
	 * Updates the totals and intervals database queries with parameters used for Orders report: categories, coupons and order status.
	 *
	 * @param array $query_args      Query arguments supplied by the user.
	 * @param array $totals_query    Array of options for totals db query.
	 * @param array $intervals_query Array of options for intervals db query.
	 */
	protected function orders_stats_sql_filter( $query_args, &$totals_query, &$intervals_query ) {
		// TODO: performance of all of this?
		global $wpdb;

		$from_clause        = '';
		$orders_stats_table = $wpdb->prefix . self::TABLE_NAME;
		$operator           = $this->get_match_operator( $query_args );

		$where_filters = array();

		// TODO: maybe move the sql inside the get_included/excluded functions?
		// Products filters.
		$included_products = $this->get_included_products( $query_args );
		$excluded_products = $this->get_excluded_products( $query_args );
		if ( $included_products ) {
			$where_filters[] = " {$orders_stats_table}.order_id IN (
			SELECT
				DISTINCT {$wpdb->prefix}wc_order_product_lookup.order_id
			FROM
				{$wpdb->prefix}wc_order_product_lookup
			WHERE
				{$wpdb->prefix}wc_order_product_lookup.product_id IN ({$included_products})
			)";
		}

		if ( $excluded_products ) {
			$where_filters[] = " {$orders_stats_table}.order_id NOT IN (
			SELECT
				DISTINCT {$wpdb->prefix}wc_order_product_lookup.order_id
			FROM
				{$wpdb->prefix}wc_order_product_lookup
			WHERE
				{$wpdb->prefix}wc_order_product_lookup.product_id IN ({$excluded_products})
			)";
		}

		// Coupons filters.
		$included_coupons = $this->get_included_coupons( $query_args );
		$excluded_coupons = $this->get_excluded_coupons( $query_args );
		if ( $included_coupons ) {
			$where_filters[] = " {$orders_stats_table}.order_id IN (
				SELECT
					DISTINCT {$wpdb->prefix}wc_order_coupon_lookup.order_id
				FROM
					{$wpdb->prefix}wc_order_coupon_lookup
				WHERE
					{$wpdb->prefix}wc_order_coupon_lookup.coupon_id IN ({$included_coupons})
				)";
		}

		if ( $excluded_coupons ) {
			$where_filters[] = " {$orders_stats_table}.order_id NOT IN (
				SELECT
					DISTINCT {$wpdb->prefix}wc_order_coupon_lookup.order_id
				FROM
					{$wpdb->prefix}wc_order_coupon_lookup
				WHERE
					{$wpdb->prefix}wc_order_coupon_lookup.coupon_id IN ({$excluded_coupons})
				)";
		}

		// TODO: move order status to wc_order_stats so that JOIN is not necessary.
		$order_status_filter = $this->get_status_subquery( $query_args, $operator );
		if ( $order_status_filter ) {
			$from_clause    .= " JOIN {$wpdb->prefix}posts ON {$orders_stats_table}.order_id = {$wpdb->prefix}posts.ID";
			$where_filters[] = $order_status_filter;
		}

		$customer_filter = $this->get_customer_subquery( $query_args );
		if ( $customer_filter ) {
			$where_filters[] = $customer_filter;
		}

		$where_subclause = implode( " $operator ", $where_filters );

		// To avoid requesting the subqueries twice, the result is applied to all queries passed to the method.
		if ( $where_subclause ) {
			$totals_query['where_clause']    .= " AND ( $where_subclause )";
			$totals_query['from_clause']     .= $from_clause;
			$intervals_query['where_clause'] .= " AND ( $where_subclause )";
			$intervals_query['from_clause']  .= $from_clause;
		}
	}

	/**
	 * Returns the report data based on parameters supplied by the user.
	 *
	 * @since 3.5.0
	 * @param array $query_args  Query parameters.
	 * @return stdClass|WP_Error Data.
	 */
	public function get_data( $query_args ) {
		global $wpdb;

		$table_name = $wpdb->prefix . self::TABLE_NAME;
		$now        = time();
		$week_back  = $now - WEEK_IN_SECONDS;

		// These defaults are only applied when not using REST API, as the API has its own defaults that overwrite these for most values (except before, after, etc).
		$defaults   = array(
			'per_page'         => get_option( 'posts_per_page' ),
			'page'             => 1,
			'order'            => 'DESC',
			'orderby'          => 'date',
			'before'           => date( WC_Admin_Reports_Interval::$iso_datetime_format, $now ),
			'after'            => date( WC_Admin_Reports_Interval::$iso_datetime_format, $week_back ),
			'interval'         => 'week',
			'fields'           => '*',

			'match'            => 'all',
			'status_is'        => array(),
			'status_is_not'    => array(),
			'product_includes' => array(),
			'product_excludes' => array(),
			'coupon_includes'  => array(),
			'coupon_excludes'  => array(),
			'customer'         => '',
			'categories'       => array(),
		);
		$query_args = wp_parse_args( $query_args, $defaults );

		$cache_key = $this->get_cache_key( $query_args );
		$data      = wp_cache_get( $cache_key, $this->cache_group );

		if ( false === $data ) {
			$data = (object) array(
				'totals'    => (object) array(),
				'intervals' => (object) array(),
				'total'     => 0,
				'pages'     => 0,
				'page_no'   => 0,
			);

			$selections      = $this->selected_columns( $query_args );
			$totals_query    = $this->get_time_period_sql_params( $query_args, $table_name );
			$intervals_query = $this->get_intervals_sql_params( $query_args, $table_name );

			// Additional filtering for Orders report.
			$this->orders_stats_sql_filter( $query_args, $totals_query, $intervals_query );

			$totals = $wpdb->get_results(
				"SELECT
						{$selections}
					FROM
						{$table_name}
						{$totals_query['from_clause']}
					WHERE
						1=1
						{$totals_query['where_time_clause']}
						{$totals_query['where_clause']}",
				ARRAY_A
			); // WPCS: cache ok, DB call ok, unprepared SQL ok.
			if ( null === $totals ) {
				return new WP_Error( 'woocommerce_reports_revenue_result_failed', __( 'Sorry, fetching revenue data failed.', 'wc-admin' ) );
			}

			$unique_products       = $this->get_unique_product_count( $totals_query['from_clause'], $totals_query['where_time_clause'], $totals_query['where_clause'] );
			$totals[0]['products'] = $unique_products;

			$totals = (object) $this->cast_numbers( $totals[0] );

			$db_intervals = $wpdb->get_col(
				"SELECT
							{$intervals_query['select_clause']} AS time_interval
						FROM
							{$table_name}
							{$intervals_query['from_clause']}
						WHERE
							1=1
							{$intervals_query['where_time_clause']}
							{$intervals_query['where_clause']}
						GROUP BY
							time_interval"
			); // WPCS: cache ok, DB call ok, , unprepared SQL ok.

			$db_interval_count       = count( $db_intervals );
			$expected_interval_count = WC_Admin_Reports_Interval::intervals_between( $query_args['after'], $query_args['before'], $query_args['interval'] );
			$total_pages             = (int) ceil( $expected_interval_count / $intervals_query['per_page'] );

			if ( $query_args['page'] < 1 || $query_args['page'] > $total_pages ) {
				return $data;
			}

			$this->update_intervals_sql_params( $intervals_query, $query_args, $db_interval_count, $expected_interval_count );

			if ( '' !== $selections ) {
				$selections = ', ' . $selections;
			}

			$intervals = $wpdb->get_results(
				"SELECT
							MAX(date_created) AS datetime_anchor,
							{$intervals_query['select_clause']} AS time_interval
							{$selections}
						FROM
							{$table_name}
							{$intervals_query['from_clause']}
						WHERE
							1=1
							{$intervals_query['where_time_clause']}
							{$intervals_query['where_clause']}
						GROUP BY
							time_interval
						ORDER BY
							{$intervals_query['order_by_clause']}
						{$intervals_query['limit']}",
				ARRAY_A
			); // WPCS: cache ok, DB call ok, unprepared SQL ok.

			if ( null === $intervals ) {
				return new WP_Error( 'woocommerce_reports_revenue_result_failed', __( 'Sorry, fetching revenue data failed.', 'wc-admin' ) );
			}

			$data = (object) array(
				'totals'    => $totals,
				'intervals' => $intervals,
				'total'     => $expected_interval_count,
				'pages'     => $total_pages,
				'page_no'   => (int) $query_args['page'],
			);

			if ( $this->intervals_missing( $expected_interval_count, $db_interval_count, $intervals_query['per_page'], $query_args['page'], $query_args['order'], $query_args['orderby'], count( $intervals ) ) ) {
				$this->fill_in_missing_intervals( $db_intervals, $query_args['adj_after'], $query_args['adj_before'], $query_args['interval'], $data );
				$this->sort_intervals( $data, $query_args['orderby'], $query_args['order'] );
				$this->remove_extra_records( $data, $query_args['page'], $intervals_query['per_page'], $db_interval_count, $expected_interval_count, $query_args['orderby'] );
			} else {
				$this->update_interval_boundary_dates( $query_args['after'], $query_args['before'], $query_args['interval'], $data->intervals );
			}
			$this->create_interval_subtotals( $data->intervals );

			wp_cache_set( $cache_key, $data, $this->cache_group );
		}

		return $data;
	}

	/**
	 * Get unique products based on user time query
	 *
	 * @param string $from_clause       From clause with date query.
	 * @param string $where_time_clause Where clause with date query.
	 * @param string $where_clause      Where clause with date query.
	 * @return integer Unique product count.
	 */
	public function get_unique_product_count( $from_clause, $where_time_clause, $where_clause ) {
		global $wpdb;

		$table_name = $wpdb->prefix . self::TABLE_NAME;

		return $wpdb->get_var(
			"SELECT
					COUNT( DISTINCT {$wpdb->prefix}wc_order_product_lookup.product_id )
				FROM
				    {$wpdb->prefix}wc_order_product_lookup JOIN {$table_name} ON {$wpdb->prefix}wc_order_product_lookup.order_id = {$table_name}.order_id
					{$from_clause}
				WHERE
					1=1
					{$where_time_clause}
					{$where_clause}"
		); // WPCS: cache ok, DB call ok, unprepared SQL ok.
	}

	/**
	 * Calculation methods.
	 */

	/**
	 * Get number of items sold among all orders.
	 *
	 * @param array $order WC_Order object.
	 * @return int
	 */
	public static function get_num_items_sold( $order ) {
		$num_items = 0;

		$line_items = $order->get_items( 'line_item' );
		foreach ( $line_items as $line_item ) {
			$num_items += $line_item->get_quantity();
		}

		return $num_items;
	}

	/**
	 * Check to see if an order's customer has made previous orders or not
	 *
	 * @param array $order WC_Order object.
	 * @return bool
	 */
	public static function is_returning_customer( $order ) {
		$customer_id = $order->get_user_id();

		if ( 0 === $customer_id ) {
			return false;
		}

		$customer_orders = get_posts(
			array(
				'meta_key'    => '_customer_user', // WPCS: slow query ok.
				'meta_value'  => $customer_id, // WPCS: slow query ok.
				'post_type'   => 'shop_order',
				'post_status' => array( 'wc-on-hold', 'wc-processing', 'wc-completed' ),
				'numberposts' => 2,
			)
		);

		return count( $customer_orders ) > 1;
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
