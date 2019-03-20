<?php
/**
 * REST API Products Controller
 *
 * Handles requests to /products/*
 *
 * @package WooCommerce Admin/API
 */

defined( 'ABSPATH' ) || exit;

/**
 * Products controller.
 *
 * @package WooCommerce Admin/API
 * @extends WC_REST_Products_Controller
 */
class WC_Admin_REST_Products_Controller extends WC_REST_Products_Controller {

	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc/v4';

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

		return $schema;
	}

	/**
	 * Get the query params for collections.
	 *
	 * @return array
	 */
	public function get_collection_params() {
		$params           = parent::get_collection_params();
		$params['search'] = array(
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
			$args['search'] = $request['search'];
			unset( $args['s'] );
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
		add_filter( 'posts_where', array( __CLASS__, 'add_wp_query_product_search_filter' ), 10, 2 );
		add_filter( 'posts_join', array( __CLASS__, 'add_wp_query_product_search_join' ), 10, 2 );
		add_filter( 'posts_groupby', array( __CLASS__, 'add_wp_query_product_search_group_by' ), 10, 2 );
		$response = parent::get_items( $request );
		remove_filter( 'posts_where', array( __CLASS__, 'add_wp_query_product_search_filter' ), 10 );
		remove_filter( 'posts_join', array( __CLASS__, 'add_wp_query_product_search_join' ), 10 );
		remove_filter( 'posts_groupby', array( __CLASS__, 'add_wp_query_product_search_group_by' ), 10 );
		return $response;
	}

	/**
	 * Allow searching by product name or sku in WP Query
	 *
	 * @param string $where Where clause used to search posts.
	 * @param object $wp_query WP_Query object.
	 * @return string
	 */
	public static function add_wp_query_product_search_filter( $where, $wp_query ) {
		global $wpdb;

		$search = trim( $wp_query->get( 'search' ) );
		if ( $search ) {
			$search = $wpdb->esc_like( $search );
			$search = "'%" . $search . "%'";
			$where .= ' AND (' . $wpdb->posts . '.post_title LIKE ' . $search;
			$where .= wc_product_sku_enabled() ? ' OR ps_post_meta.meta_key = "_sku" AND ps_post_meta.meta_value LIKE ' . $search . ')' : ')';
		}

		return $where;
	}

	/**
	 * Join posts meta table when product search is present and meta query is not present.
	 *
	 * @param string $join Join clause used to search posts.
	 * @param object $wp_query WP_Query object.
	 * @return string
	 */
	public static function add_wp_query_product_search_join( $join, $wp_query ) {
		global $wpdb;

		$search = trim( $wp_query->get( 'search' ) );
		if ( $search && wc_product_sku_enabled() ) {
			$join .= ' INNER JOIN ' . $wpdb->postmeta . ' AS ps_post_meta ON ps_post_meta.post_id = ' . $wpdb->posts . '.ID';
		}

		return $join;
	}

	/**
	 * Group by post ID to prevent duplicates.
	 *
	 * @param string $groupby Group by clause used to organize posts.
	 * @param object $wp_query WP_Query object.
	 * @return string
	 */
	public function add_wp_query_product_search_group_by( $groupby, $wp_query ) {
		global $wpdb;

		$search = trim( $wp_query->get( 'search' ) );
		if ( $search && empty( $groupby ) ) {
			$groupby = $wpdb->posts . '.ID';
		}
		return $groupby;
	}

	/**
	 * Delete a single item.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 *
	 * @return WP_REST_Response|WP_Error
	 */
	public function delete_item( $request ) {
		$id     = (int) $request['id'];
		$force  = (bool) $request['force'];
		$object = $this->get_object( (int) $request['id'] );
		$result = false;

		if ( ! $object || 0 === $object->get_id() ) {
			return new WP_Error(
				"woocommerce_rest_{$this->post_type}_invalid_id",
				__( 'Invalid ID.', 'woocommerce' ),
				array(
					'status' => 404,
				)
			);
		}

		if ( 'variation' === $object->get_type() ) {
			return new WP_Error(
				"woocommerce_rest_invalid_{$this->post_type}_id",
				__( 'To manipulate product variations you should use the /products/&lt;product_id&gt;/variations/&lt;id&gt; endpoint.', 'woocommerce' ),
				array(
					'status' => 404,
				)
			);
		}

		$supports_trash = EMPTY_TRASH_DAYS > 0 && is_callable( array( $object, 'get_status' ) );

		/**
		 * Filter whether an object is trashable.
		 *
		 * Return false to disable trash support for the object.
		 *
		 * @param boolean $supports_trash Whether the object type support trashing.
		 * @param WC_Data $object         The object being considered for trashing support.
		 */
		$supports_trash = apply_filters( "woocommerce_rest_{$this->post_type}_object_trashable", $supports_trash, $object );

		if ( ! wc_rest_check_post_permissions( $this->post_type, 'delete', $object->get_id() ) ) {
			return new WP_Error(
				"woocommerce_rest_user_cannot_delete_{$this->post_type}",
				/* translators: %s: post type */
				sprintf( __( 'Sorry, you are not allowed to delete %s.', 'woocommerce' ), $this->post_type ),
				array(
					'status' => rest_authorization_required_code(),
				)
			);
		}

		$request->set_param( 'context', 'edit' );

		// If we're forcing, then delete permanently.
		if ( $force ) {
			$previous = $this->prepare_object_for_response( $object, $request );

			$object->delete( true );
			$result = 0 === $object->get_id();

			$response = new WP_REST_Response();
			$response->set_data(
				array(
					'deleted'  => true,
					'previous' => $previous->get_data(),
				)
			);
		} else {
			// If we don't support trashing for this type, error out.
			if ( ! $supports_trash ) {
				return new WP_Error(
					'woocommerce_rest_trash_not_supported',
					/* translators: %s: post type */
					sprintf( __( 'The %s does not support trashing.', 'woocommerce' ), $this->post_type ),
					array(
						'status' => 501,
					)
				);
			}

			// Otherwise, only trash if we haven't already.
			if ( is_callable( array( $object, 'get_status' ) ) ) {
				if ( 'trash' === $object->get_status() ) {
					return new WP_Error(
						'woocommerce_rest_already_trashed',
						/* translators: %s: post type */
						sprintf( __( 'The %s has already been deleted.', 'woocommerce' ), $this->post_type ),
						array(
							'status' => 410,
						)
					);
				}

				$object->delete();
				$result = 'trash' === $object->get_status();
			}

			$response = $this->prepare_object_for_response( $object, $request );
		}

		if ( ! $result ) {
			return new WP_Error(
				'woocommerce_rest_cannot_delete',
				/* translators: %s: post type */
				sprintf( __( 'The %s cannot be deleted.', 'woocommerce' ), $this->post_type ),
				array(
					'status' => 500,
				)
			);
		}

		/**
		 * Fires after a single object is deleted or trashed via the REST API.
		 *
		 * @param WC_Data          $object   The deleted or trashed object.
		 * @param WP_REST_Response $response The response data.
		 * @param WP_REST_Request  $request  The request sent to the API.
		 */
		do_action( "woocommerce_rest_delete_{$this->post_type}_object", $object, $response, $request );

		return $response;
	}
}
