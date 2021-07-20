<?php
/**
 * REST API Products Controller
 *
 * Handles requests to /products/*
 */

namespace Automattic\WooCommerce\Admin\API;

defined( 'ABSPATH' ) || exit;

/**
 * Products controller.
 *
 * @extends WC_REST_Products_Controller
 */
class Products extends \WC_REST_Products_Controller {

	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc-analytics';

	/**
	 * Local cache of last order dates by ID.
	 *
	 * @var array
	 */
	protected $last_order_dates = array();

	/**
	 * Adds properties that can be embed via ?_embed=1.
	 *
	 * @return array
	 */
	public function get_item_schema() {
		$schema = parent::get_item_schema();

		$properties_to_embed = array(
			'id',
			'name',
			'slug',
			'permalink',
			'images',
			'description',
			'short_description',
		);

		foreach ( $properties_to_embed as $property ) {
			$schema['properties'][ $property ]['context'][] = 'embed';
		}

		$schema['properties']['last_order_date'] = array(
			'description' => __( "The date the last order for this product was placed, in the site's timezone.", 'woocommerce-admin' ),
			'type'        => 'date-time',
			'context'     => array( 'view', 'edit' ),
			'readonly'    => true,
		);

		return $schema;
	}

	/**
	 * Get the query params for collections.
	 *
	 * @return array
	 */
	public function get_collection_params() {
		$params                 = parent::get_collection_params();
		$params['low_in_stock'] = array(
			'description'       => __( 'Limit result set to products that are low or out of stock. (Deprecated)', 'woocommerce-admin' ),
			'type'              => 'boolean',
			'default'           => false,
			'sanitize_callback' => 'wc_string_to_bool',
		);
		$params['search']       = array(
			'description'       => __( 'Search by similar product name or sku.', 'woocommerce-admin' ),
			'type'              => 'string',
			'validate_callback' => 'rest_validate_request_arg',
		);
		return $params;
	}

	/**
	 * Add product name and sku filtering to the WC API.
	 *
	 * @param WP_REST_Request $request Request data.
	 * @return array
	 */
	protected function prepare_objects_query( $request ) {
		$args = parent::prepare_objects_query( $request );

		if ( ! empty( $request['search'] ) ) {
			$args['search'] = trim( $request['search'] );
			unset( $args['s'] );
		}
		if ( ! empty( $request['low_in_stock'] ) ) {
			$args['low_in_stock'] = $request['low_in_stock'];
			$args['post_type']    = array( 'product', 'product_variation' );
		}

		return $args;
	}

	/**
	 * Get a collection of posts and add the post title filter option to WP_Query.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function get_items( $request ) {
		add_filter( 'posts_where', array( __CLASS__, 'add_wp_query_filter' ), 10, 2 );
		add_filter( 'posts_join', array( __CLASS__, 'add_wp_query_join' ), 10, 2 );
		add_filter( 'posts_groupby', array( __CLASS__, 'add_wp_query_group_by' ), 10, 2 );
		$response = parent::get_items( $request );
		remove_filter( 'posts_where', array( __CLASS__, 'add_wp_query_filter' ), 10 );
		remove_filter( 'posts_join', array( __CLASS__, 'add_wp_query_join' ), 10 );
		remove_filter( 'posts_groupby', array( __CLASS__, 'add_wp_query_group_by' ), 10 );

		/**
		 * The low stock query caused performance issues in WooCommerce 5.5.1
		 * due to a) being slow, and b) multiple requests being made to this endpoint
		 * from WC Admin.
		 *
		 * This is a temporary measure to trigger the user’s browser to cache the
		 * endpoint response for 1 minute, limiting the amount of requests overall.
		 *
		 * https://github.com/woocommerce/woocommerce-admin/issues/7358
		 */
		if ( $this->is_low_in_stock_request( $request ) ) {
			$response->header( 'Cache-Control', 'max-age=300' );
		}
		return $response;
	}

	/**
	 * Check whether the request is for products low in stock.
	 *
	 * It matches requests with paramaters:
	 *
	 * low_in_stock = true
	 * page = 1
	 * fields[0] = id
	 *
	 * @param string $request WP REST API request.
	 * @return boolean Whether the request matches.
	 */
	private function is_low_in_stock_request( $request ) {
		if (
			$request->get_param( 'low_in_stock' ) === true &&
			$request->get_param( 'page' ) === 1 &&
			is_array( $request->get_param( '_fields' ) ) &&
			count( $request->get_param( '_fields' ) ) === 1 &&
			in_array( 'id', $request->get_param( '_fields' ), true )
		) {
			return true;
		}

		return false;
	}

	/**
	 * Hang onto last order date since it will get removed by wc_get_product().
	 *
	 * @param stdClass $object_data Single row from query results.
	 * @return WC_Data
	 */
	public function get_object( $object_data ) {
		if ( isset( $object_data->last_order_date ) ) {
			$this->last_order_dates[ $object_data->ID ] = $object_data->last_order_date;
		}
		return parent::get_object( $object_data );
	}

	/**
	 * Add `low_stock_amount` property to product data
	 *
	 * @param WC_Data         $object  Object data.
	 * @param WP_REST_Request $request Request object.
	 * @return WP_REST_Response
	 */
	public function prepare_object_for_response( $object, $request ) {
		$data        = parent::prepare_object_for_response( $object, $request );
		$object_data = $object->get_data();
		$product_id  = $object_data['id'];

		if ( isset( $data->data['name'] ) ) {
			$data->data['name'] = wp_strip_all_tags( $data->data['name'] );
		}

		return $data;
	}

	/**
	 * Add in conditional search filters for products.
	 *
	 * @param string $where Where clause used to search posts.
	 * @param object $wp_query WP_Query object.
	 * @return string
	 */
	public static function add_wp_query_filter( $where, $wp_query ) {
		global $wpdb;

		$search = $wp_query->get( 'search' );
		if ( $search ) {
			$title_like = '%' . $wpdb->esc_like( $search ) . '%';
			$where     .= $wpdb->prepare( " AND ({$wpdb->posts}.post_title LIKE %s", $title_like );  // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
			$where     .= wc_product_sku_enabled() ? $wpdb->prepare( ' OR wc_product_meta_lookup.sku LIKE %s)', $search ) : ')';
		}

		return $where;
	}

	/**
	 * Join posts meta tables when product search query is present.
	 *
	 * @param string $join Join clause used to search posts.
	 * @param object $wp_query WP_Query object.
	 * @return string
	 */
	public static function add_wp_query_join( $join, $wp_query ) {
		$search = $wp_query->get( 'search' );
		if ( $search && wc_product_sku_enabled() ) {
			$join = self::append_product_sorting_table_join( $join );
		}

		return $join;
	}

	/**
	 * Join wc_product_meta_lookup to posts if not already joined.
	 *
	 * @param string $sql SQL join.
	 * @return string
	 */
	protected static function append_product_sorting_table_join( $sql ) {
		global $wpdb;

		if ( ! strstr( $sql, 'wc_product_meta_lookup' ) ) {
			$sql .= " LEFT JOIN {$wpdb->wc_product_meta_lookup} wc_product_meta_lookup ON $wpdb->posts.ID = wc_product_meta_lookup.product_id ";
		}
		return $sql;
	}

	/**
	 * Group by post ID to prevent duplicates.
	 *
	 * @param string $groupby Group by clause used to organize posts.
	 * @param object $wp_query WP_Query object.
	 * @return string
	 */
	public static function add_wp_query_group_by( $groupby, $wp_query ) {
		global $wpdb;

		$search = $wp_query->get( 'search' );

		if ( empty( $groupby ) && $search ) {
			$groupby = $wpdb->posts . '.ID';
		}
		return $groupby;
	}
}
