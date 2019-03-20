<?php
/**
 * REST API Product Variations Controller
 *
 * Handles requests to /products/variations.
 *
 * @package WooCommerce Admin/API
 */

defined( 'ABSPATH' ) || exit;

/**
 * Product variations controller.
 *
 * @package WooCommerce Admin/API
 * @extends WC_REST_Product_Variations_Controller
 */
class WC_Admin_REST_Product_Variations_Controller extends WC_REST_Product_Variations_Controller {
	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc/v4';

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
		add_filter( 'posts_where', array( 'WC_Admin_REST_Products_Controller', 'add_wp_query_product_search_filter' ), 10, 2 );
		add_filter( 'posts_join', array( 'WC_Admin_REST_Products_Controller', 'add_wp_query_product_search_join' ), 10, 2 );
		add_filter( 'posts_groupby', array( 'WC_Admin_REST_Products_Controller', 'add_wp_query_product_search_group_by' ), 10, 2 );
		$response = parent::get_items( $request );
		remove_filter( 'posts_where', array( 'WC_Admin_REST_Products_Controller', 'add_wp_query_product_search_filter' ), 10 );
		remove_filter( 'posts_join', array( 'WC_Admin_REST_Products_Controller', 'add_wp_query_product_search_join' ), 10 );
		remove_filter( 'posts_groupby', array( 'WC_Admin_REST_Products_Controller', 'add_wp_query_product_search_group_by' ), 10 );
		return $response;
	}

	/**
	 * Delete a variation.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 *
	 * @return bool|WP_Error|WP_REST_Response
	 */
	public function delete_item( $request ) {
		$force  = (bool) $request['force'];
		$object = $this->get_object( (int) $request['id'] );
		$result = false;

		if ( ! $object || 0 === $object->get_id() ) {
			return new WP_Error(
				"woocommerce_rest_{$this->post_type}_invalid_id", __( 'Invalid ID.', 'woocommerce' ), array(
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
				/* translators: %s: post type */
				"woocommerce_rest_user_cannot_delete_{$this->post_type}", sprintf( __( 'Sorry, you are not allowed to delete %s.', 'woocommerce' ), $this->post_type ), array(
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
					/* translators: %s: post type */
					'woocommerce_rest_trash_not_supported', sprintf( __( 'The %s does not support trashing.', 'woocommerce' ), $this->post_type ), array(
						'status' => 501,
					)
				);
			}

			// Otherwise, only trash if we haven't already.
			if ( is_callable( array( $object, 'get_status' ) ) ) {
				if ( 'trash' === $object->get_status() ) {
					return new WP_Error(
						/* translators: %s: post type */
						'woocommerce_rest_already_trashed', sprintf( __( 'The %s has already been deleted.', 'woocommerce' ), $this->post_type ), array(
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
				/* translators: %s: post type */
				'woocommerce_rest_cannot_delete', sprintf( __( 'The %s cannot be deleted.', 'woocommerce' ), $this->post_type ), array(
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
