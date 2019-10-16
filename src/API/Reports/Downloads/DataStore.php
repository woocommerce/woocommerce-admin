<?php
/**
 * API\Reports\Downloads\DataStore class file.
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\API\Reports\Downloads;

defined( 'ABSPATH' ) || exit;

use \Automattic\WooCommerce\Admin\API\Reports\DataStore as ReportsDataStore;
use \Automattic\WooCommerce\Admin\API\Reports\DataStoreInterface;
use \Automattic\WooCommerce\Admin\API\Reports\TimeInterval;
use \Automattic\WooCommerce\Admin\API\Reports\SqlQuery;

/**
 * API\Reports\Downloads\DataStore.
 */
class DataStore extends ReportsDataStore implements DataStoreInterface {

	/**
	 * Table used to get the data.
	 *
	 * @var string
	 */
	protected static $table_name = 'wc_download_log';

	/**
	 * Cache identifier.
	 *
	 * @var string
	 */
	protected $cache_key = 'downloads';

	/**
	 * Mapping columns to data type to return correct response types.
	 *
	 * @var array
	 */
	protected $column_types = array(
		'id'          => 'intval',
		'date'        => 'strval',
		'date_gmt'    => 'strval',
		'download_id' => 'strval', // String because this can sometimes be a hash.
		'file_name'   => 'strval',
		'product_id'  => 'intval',
		'order_id'    => 'intval',
		'user_id'     => 'intval',
		'ip_address'  => 'strval',
	);

	/**
	 * SQL columns to select in the db query and their mapping to SQL code.
	 *
	 * @var array
	 */
	protected $report_columns = array(
		'id'          => 'download_log_id as id',
		'date'        => 'timestamp as date_gmt',
		'download_id' => 'product_permissions.download_id',
		'product_id'  => 'product_permissions.product_id',
		'order_id'    => 'product_permissions.order_id',
		'user_id'     => 'product_permissions.user_id',
		'ip_address'  => 'user_ip_address as ip_address',
	);

	/**
	 * Data store context used to pass to filters.
	 *
	 * @var string
	 */
	protected static $context = 'downloads';

	/**
	 * Updates the database query with parameters used for downloads report.
	 *
	 * @param array $query_args Query arguments supplied by the user.
	 */
	protected function get_sql_query_params( $query_args ) {
		global $wpdb;

		$lookup_table     = self::get_db_table_name();
		$permission_table = $wpdb->prefix . 'woocommerce_downloadable_product_permissions';
		$operator         = $this->get_match_operator( $query_args );
		$where_filters    = array();
		if ( isset( $this->subquery ) ) {
			$subquery =& $this->subquery;
		} else {
			$subquery =& $this->interval_query;
		}

		$where_time = $this->get_time_period_sql_params( $query_args, $lookup_table );
		if ( $where_time ) {
			$subquery->add_sql_clause( 'where_time', $where_time );
		}
		$this->get_limit_sql_params( $query_args );

		// @todo DRY these up as in order stats.
		$included_products = $this->get_included_products( $query_args );
		$excluded_products = $this->get_excluded_products( $query_args );
		if ( $included_products ) {
			$where_filters[] = " {$lookup_table}.permission_id IN (
			SELECT
				DISTINCT {$permission_table}.permission_id
			FROM
				{$permission_table}
			WHERE
				{$permission_table}.product_id IN ({$included_products})
			)";
		}

		if ( $excluded_products ) {
			$where_filters[] = " {$lookup_table}.permission_id NOT IN (
			SELECT
				DISTINCT {$permission_table}.permission_id
			FROM
				{$permission_table}
			WHERE
				{$permission_table}.product_id IN ({$excluded_products})
			)";
		}

		$included_orders = $this->get_included_orders( $query_args );
		$excluded_orders = $this->get_excluded_orders( $query_args );
		if ( $included_orders ) {
			$where_filters[] = " {$lookup_table}.permission_id IN (
			SELECT
				DISTINCT {$permission_table}.permission_id
			FROM
				{$permission_table}
			WHERE
				{$permission_table}.order_id IN ({$included_orders})
			)";
		}

		if ( $excluded_orders ) {
			$where_filters[] = " {$lookup_table}.permission_id NOT IN (
			SELECT
				DISTINCT {$permission_table}.permission_id
			FROM
				{$permission_table}
			WHERE
				{$permission_table}.order_id IN ({$excluded_orders})
			)";
		}

		$customer_lookup_table = $wpdb->prefix . 'wc_customer_lookup';
		$included_customers    = $this->get_included_customers( $query_args );
		$excluded_customers    = $this->get_excluded_customers( $query_args );
		if ( $included_customers ) {
			$where_filters[] = " {$lookup_table}.permission_id IN (
			SELECT
				DISTINCT {$permission_table}.permission_id
			FROM
				{$permission_table}
			WHERE
				{{$permission_table}.user_id IN (
					SELECT {$customer_lookup_table}.user_id FROM {$customer_lookup_table} WHERE {$customer_lookup_table}.customer_id IN ({$included_customers})
				)
			)";
		}

		if ( $excluded_customers ) {
			$where_filters[] = " {$lookup_table}.permission_id NOT IN (
			SELECT
				DISTINCT {$permission_table}.permission_id
			FROM
				{$permission_table}
			WHERE
				{$permission_table}.user_id IN (
					SELECT {$customer_lookup_table}.user_id FROM {$customer_lookup_table} WHERE {$customer_lookup_table}.customer_id IN ({$excluded_customers})
				)
			)";
		}

		$included_ip_addresses = $this->get_included_ip_addresses( $query_args );
		$excluded_ip_addresses = $this->get_excluded_ip_addresses( $query_args );
		if ( $included_ip_addresses ) {
			$where_filters[] = " {$lookup_table}.user_ip_address IN ('{$included_ip_addresses}')";
		}

		if ( $excluded_ip_addresses ) {
			$where_filters[] = " {$lookup_table}.user_ip_address NOT IN ('{$excluded_ip_addresses}')";
		}

		$where_subclause = implode( " $operator ", $where_filters );
		if ( $where_subclause ) {
			$subquery->add_sql_clause( 'where', " AND ( $where_subclause )" );
		}

		$subquery->add_sql_clause( 'join', " JOIN {$permission_table} as product_permissions ON {$lookup_table}.permission_id = product_permissions.permission_id" );
		$this->get_order_by( $query_args );
	}

	/**
	 * Returns comma separated ids of included ip address, based on query arguments from the user.
	 *
	 * @param array $query_args Parameters supplied by the user.
	 * @return string
	 */
	protected function get_included_ip_addresses( $query_args ) {
		if ( isset( $query_args['ip_address_includes'] ) && is_array( $query_args['ip_address_includes'] ) && count( $query_args['ip_address_includes'] ) > 0 ) {
			$query_args['ip_address_includes'] = array_map( 'esc_sql', $query_args['ip_address_includes'] );
		}
		return self::get_filtered_ids( $query_args, 'ip_address_includes', "','" );
	}

	/**
	 * Returns comma separated ids of excluded ip address, based on query arguments from the user.
	 *
	 * @param array $query_args Parameters supplied by the user.
	 * @return string
	 */
	protected function get_excluded_ip_addresses( $query_args ) {
		if ( isset( $query_args['ip_address_excludes'] ) && is_array( $query_args['ip_address_excludes'] ) && count( $query_args['ip_address_excludes'] ) > 0 ) {
			$query_args['ip_address_excludes'] = array_map( 'esc_sql', $query_args['ip_address_excludes'] );
		}
		return self::get_filtered_ids( $query_args, 'ip_address_excludes', "','" );
	}

	/**
	 * Returns comma separated ids of included customers, based on query arguments from the user.
	 *
	 * @param array $query_args Parameters supplied by the user.
	 * @return string
	 */
	protected function get_included_customers( $query_args ) {
		return self::get_filtered_ids( $query_args, 'customer_includes' );
	}

	/**
	 * Returns comma separated ids of excluded customers, based on query arguments from the user.
	 *
	 * @param array $query_args Parameters supplied by the user.
	 * @return string
	 */
	protected function get_excluded_customers( $query_args ) {
		return self::get_filtered_ids( $query_args, 'customer_excludes' );
	}

	/**
	 * Gets WHERE time clause of SQL request with date-related constraints.
	 *
	 * @param array  $query_args Parameters supplied by the user.
	 * @param string $table_name Name of the db table relevant for the date constraint.
	 * @return string
	 */
	protected function get_time_period_sql_params( $query_args, $table_name ) {
		$where_time = '';
		if ( $query_args['before'] ) {
			$datetime_str = $query_args['before']->format( TimeInterval::$sql_datetime_format );
			$where_time  .= " AND {$table_name}.timestamp <= '$datetime_str'";

		}

		if ( $query_args['after'] ) {
			$datetime_str = $query_args['after']->format( TimeInterval::$sql_datetime_format );
			$where_time  .= " AND {$table_name}.timestamp >= '$datetime_str'";
		}

		return $where_time;
	}

	/**
	 * Fills ORDER BY clause of SQL request based on user supplied parameters.
	 *
	 * @param array $query_args Parameters supplied by the user.
	 */
	protected function get_order_by( $query_args ) {
		global $wpdb;
		$this->clear_sql_clause( 'order_by' );
		$order_by = '';
		if ( isset( $query_args['orderby'] ) ) {
			$order_by = $this->normalize_order_by( $query_args['orderby'] );
			$this->add_sql_clause( 'order_by', $order_by );
		}

		if ( false !== strpos( $order_by, '_products' ) ) {
			$this->subquery->add_sql_clause( 'join', " JOIN {$wpdb->posts} AS _products ON product_permissions.product_id = _products.ID" );
		}

		if ( isset( $query_args['order'] ) ) {
			$this->add_sql_clause( 'order_by', $query_args['order'] );
		} else {
			$this->add_sql_clause( 'order_by', ' DESC' );
		}
	}

	/**
	 * Returns the report data based on parameters supplied by the user.
	 *
	 * @param array $query_args  Query parameters.
	 * @return stdClass|WP_Error Data.
	 */
	public function get_data( $query_args ) {
		global $wpdb;

		$table_name = self::get_db_table_name();

		// These defaults are only partially applied when used via REST API, as that has its own defaults.
		$defaults   = array(
			'per_page' => get_option( 'posts_per_page' ),
			'page'     => 1,
			'order'    => 'DESC',
			'orderby'  => 'timestamp',
			'before'   => TimeInterval::default_before(),
			'after'    => TimeInterval::default_after(),
			'fields'   => '*',
		);
		$query_args = wp_parse_args( $query_args, $defaults );
		$this->normalize_timezones( $query_args, $defaults );

		/*
		 * We need to get the cache key here because
		 * parent::update_intervals_sql_params() modifies $query_args.
		 */
		$cache_key = $this->get_cache_key( $query_args );
		$data      = $this->get_cached_data( $cache_key );

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
					{$this->subquery->get_statement()}
				) AS tt"
			); // WPCS: cache ok, DB call ok, unprepared SQL ok.

			$params      = $this->get_limit_params( $query_args );
			$total_pages = (int) ceil( $db_records_count / $params['per_page'] );
			if ( $query_args['page'] < 1 || $query_args['page'] > $total_pages ) {
				return $data;
			}

			$this->subquery->clear_sql_clause( 'select' );
			$this->subquery->add_sql_clause( 'select', $selections );
			$this->subquery->add_sql_clause( 'order_by', $this->get_sql_clause( 'order_by' ) );
			$this->subquery->add_sql_clause( 'limit', $this->get_sql_clause( 'limit' ) );

			$download_data = $wpdb->get_results(
				$this->subquery->get_statement(),
				ARRAY_A
			); // WPCS: cache ok, DB call ok, unprepared SQL ok.

			if ( null === $download_data ) {
				return $data;
			}

			$download_data = array_map( array( $this, 'cast_numbers' ), $download_data );
			$data          = (object) array(
				'data'    => $download_data,
				'total'   => $db_records_count,
				'pages'   => $total_pages,
				'page_no' => (int) $query_args['page'],
			);

			$this->set_cached_data( $cache_key, $data );
		}

		return $data;
	}

	/**
	 * Maps ordering specified by the user to columns in the database/fields in the data.
	 *
	 * @param string $order_by Sorting criterion.
	 * @return string
	 */
	protected function normalize_order_by( $order_by ) {
		global $wpdb;

		if ( 'date' === $order_by ) {
			return $wpdb->prefix . 'wc_download_log.timestamp';
		}

		if ( 'product' === $order_by ) {
			return '_products.post_title';
		}

		return $order_by;
	}

	/**
	 * Initialize query objects.
	 */
	protected function initialize_queries() {
		$table_name     = self::get_db_table_name();
		$this->subquery = new SqlQuery( self::$context . '_subquery' );
		$this->subquery->add_sql_clause( 'from', $table_name );
		$this->subquery->add_sql_clause( 'select', "{$table_name}.download_log_id" );
		$this->subquery->add_sql_clause( 'group_by', "{$table_name}.download_log_id" );
	}
}
