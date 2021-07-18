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
class ProductsLowInStock extends \WC_REST_Products_Controller {

	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc-analytics';

	/**
	 * Register routes.
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'products/low-in-stock',
			array(
				'args'   => array(),
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_items' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
					'args'                => $this->get_collection_params(),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);
	}

	/**
	 * Get low in stock products.
	 *
	 * @param WP_REST_Request $request request object.
	 *
	 * @return WP_REST_Response|WP_ERROR
	 */
	public function get_items( $request ) {
		$page          = $request->get_param( 'page' );
		$per_page      = $request->get_param( 'per_page' );
		$query_results = $this->get_low_in_stock_products( $page, $per_page );

		// set images and attributes.
		$query_results['results'] = array_map(
			function( $query_result ) {
				$product                  = wc_get_product( $query_result );
				$query_result->images     = $this->get_images( $product );
				$query_result->attributes = $this->get_attributes( $product );
				return $query_result;
			},
			$query_results['results']
		);

		$query_results['results'] = $this->set_last_order_date( $query_results['results'] );

		$query_results['results'] = array_map( array( $this, 'transsform_post_to_product' ), $query_results['results'] );

		$response = rest_ensure_response( array_values( $query_results['results'] ) );
		$response->header( 'X-WP-Total', $query_results['total'] );
		$response->header( 'X-WP-TotalPages', $query_results['pages'] );

		return $response;
	}

	/**
	 * Set the last order date for each data.
	 *
	 * @param array $results query result from get_low_in_stock_products.
	 *
	 * @return mixed
	 */
	protected function set_last_order_date( $results ) {
		global $wpdb;
		if ( 0 === count( $results ) ) {
			return $results;
		}

		$wheres = array();
		foreach ( $results as $result ) {
			if ( 'variation_product' === $result->post_type ) {
				array_push( $wheres, "(product_id={$result->post_parent} and variation_id={$result->ID})" );

			} else {
				array_push( $wheres, "product_id={$result->ID}" );
			}
		}

		if ( count( $wheres ) > 1 ) {
			$where_clause = implode( ' or ', $wheres );
		} else {
			$where_clause = $wheres[0];
		}

		$product_lookup_table = $wpdb->prefix . 'wc_order_product_lookup';
		$query_string         = "
			select product_id, MAX( wc_order_product_lookup.date_created ) AS last_order_date from {$product_lookup_table} wc_order_product_lookup
			where {$where_clause}
			group by product_id
			order by date_created desc
		";

		// phpcs:ignore
		$query_results = $wpdb->get_results( $query_string, OBJECT_K );
		foreach ( $query_results as $key => $query_result ) {
			if ( isset( $results[ $key ] ) ) {
				$results[ $key ]->last_order_date = $query_result->last_order_date;
			}
		}

		return $results;
	}

	/**
	 * Get low in stock products data.
	 *
	 * @param int $page current page.
	 * @param int $per_page items per page.
	 *
	 * @return array
	 */
	protected function get_low_in_stock_products( $page = 1, $per_page = 1 ) {
		global $wpdb;

		$offset              = ( $page - 1 ) * $per_page;
		$low_stock_threshold = absint( max( get_option( 'woocommerce_notify_low_stock_amount' ), 1 ) );

		$query_string  = $this->get_query( $offset, $per_page );
		$query_results = $wpdb->get_results(
			// phpcs:ignore -- not sure why phpcs complains about this line when prepare() is used here.
			$wpdb->prepare( $query_string, $low_stock_threshold ),
			OBJECT_K
		);

		$total_results = $wpdb->get_var( 'SELECT FOUND_ROWS()' );

		return array(
			'results' => $query_results,
			'total'   => (int) $total_results,
			'pages'   => (int) ceil( $total_results / (int) $per_page ),
		);
	}

	/**
	 * Convert post object to expected API response.
	 *
	 * @param object $query_result a row of query result from get_low_in_stock_products.
	 *
	 * @return array
	 */
	protected function transsform_post_to_product( $query_result ) {
		if ( ! isset( $query_result->last_order_date ) ) {
			$query_result->last_order_date = null;
		}
		return array(
			'id'               => (int) $query_result->ID,
			'images'           => $query_result->images,
			'attributes'       => $query_result->attributes,
			'low_stock_amount' => $query_result->low_stock_amount,
			'last_order_date'  => $query_result->last_order_date,
			'name'             => $query_result->post_title,
			'parent_id'        => $query_result->post_parent,
			'stock_quantity'   => (int) $query_result->stock_quantity,
			'type'             => 'product_variation' === $query_result->post_type ? 'variation' : 'product',
		);
	}

	/**
	 * Create a query by replacing :select_fields, :order_by, and :limit.
	 *
	 * @param int $offset offset value.
	 * @param int $limit limit value.
	 *
	 * @return string
	 */
	protected function get_query( $offset, $limit ) {
		global $wpdb;
		$query = "
			SELECT
				SQL_CALC_FOUND_ROWS wp_posts.*, 
				low_stock_amount_meta.meta_value AS low_stock_amount,
				wc_product_meta_lookup.stock_quantity
			FROM  
			  {$wpdb->wc_product_meta_lookup} wc_product_meta_lookup
			  LEFT JOIN {$wpdb->posts} wp_posts ON wp_posts.ID = wc_product_meta_lookup.product_id 
			  LEFT JOIN {$wpdb->postmeta} AS low_stock_amount_meta ON wp_posts.ID = low_stock_amount_meta.post_id 
			  AND low_stock_amount_meta.meta_key = '_low_stock_amount' 
			WHERE 
			  wp_posts.post_type IN ('product', 'product_variation') 
			  AND (
			    (wp_posts.post_status = 'publish')
			  ) 
			  AND wc_product_meta_lookup.stock_quantity IS NOT NULL 
			  AND wc_product_meta_lookup.stock_status IN('instock', 'outofstock') 
			  AND (
			    (
			      low_stock_amount_meta.meta_value > '' 
			      AND wc_product_meta_lookup.stock_quantity <= CAST(
			        low_stock_amount_meta.meta_value AS SIGNED
			      )
			    ) 
			    OR (
			      (
			        low_stock_amount_meta.meta_value IS NULL 
			        OR low_stock_amount_meta.meta_value <= ''
			      ) 
			      AND wc_product_meta_lookup.stock_quantity <= %d
			    )
			  )
			order by wc_product_meta_lookup.product_id DESC   
			limit :offset, :limit
		";

		return strtr(
			$query,
			array(
				':offset' => $offset,
				':limit'  => $limit,
			)
		);
	}

	/**
	 * Get the query params for collections of attachments.
	 *
	 * @return array
	 */
	public function get_collection_params() {
		$params                       = array();
		$params['context']            = $this->get_context_param();
		$params['context']['default'] = 'view';

		$params['page']     = array(
			'description'       => __( 'Current page of the collection.', 'woocommerce-admin' ),
			'type'              => 'integer',
			'default'           => 1,
			'sanitize_callback' => 'absint',
			'validate_callback' => 'rest_validate_request_arg',
			'minimum'           => 1,
		);
		$params['per_page'] = array(
			'description'       => __( 'Maximum number of items to be returned in result set.', 'woocommerce-admin' ),
			'type'              => 'integer',
			'default'           => 10,
			'minimum'           => 1,
			'maximum'           => 100,
			'sanitize_callback' => 'absint',
			'validate_callback' => 'rest_validate_request_arg',
		);

		return $params;
	}
}
