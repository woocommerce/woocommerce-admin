<?php
/**
 * REST API Navigation Favorites controller
 *
 * Handles requests to the navigation favorites endpoint
 */

namespace Automattic\WooCommerce\Admin\API;

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Admin\Features\Navigation\Favorite;

/**
 * REST API Favorites controller class.
 *
 * @extends WC_REST_CRUD_Controller
 */
class Favorites extends \WC_REST_Data_Controller {

	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc-admin';

	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected $rest_base = 'navigation/favorites';

	/**
	 * Register the routes
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base,
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_items' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
					'args'                => $this->get_collection_params(),
				),
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'add_item' ),
					'permission_callback' => array( $this, 'add_item_permissions_check' ),
				),
				array(
					'methods'             => \WP_REST_Server::DELETABLE,
					'callback'            => array( $this, 'delete_item' ),
					'permission_callback' => array( $this, 'delete_item_permissions_check' ),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);

	}

	/**
	 * Get all favorites.
	 *
	 * @param WP_REST_Request $request Request data.
	 * @return WP_REST_Response
	 */
	public function get_items( $request ) {
		$all_favorites = Favorite::get_all();

		return rest_ensure_response( array_map( 'stripslashes', $all_favorites ) );
	}

	/**
	 * Add a favorite.
	 *
	 * @param WP_REST_Request $request Request data.
	 * @return WP_REST_Response
	 */
	public function add_item( $request ) {
		$fav_id = $request->get_param( 'id' );

		try {
			$altered_favorites = Favorite::add_plugin( $fav_id );
		} catch ( \Exception $e ) {
			$error_msg = $e->getMessage();

			if ( 'invalid_input' === $error_msg ) {
				return new \WP_Error(
					'woocommerce_favorites_invalid_request',
					__( 'Sorry, invalid request', 'woocommerce-admin' ),
					array( 'status' => 400 )
				);
			}

			if ( 'already_exists' === $error_msg ) {
				return new \WP_Error(
					'woocommerce_favorites_already_exists',
					__( 'Favorite already exists', 'woocommerce-admin' ),
					array( 'status' => 409 )
				);
			}
		}

		return rest_ensure_response( array_map( 'stripslashes', $altered_favorites ) );
	}

	/**
	 * Delete a favorite.
	 *
	 * @param WP_REST_Request $request Request data.
	 * @return WP_REST_Response
	 */
	public function delete_item( $request ) {
		$fav_id = $request->get_param( 'id' );

		try {
			$altered_favorites = Favorite::remove_plugin( $fav_id );
		} catch ( \Exception $e ) {
			$error_msg = $e->getMessage();

			if ( 'invalid_input' === $error_msg ) {
				return new \WP_Error(
					'woocommerce_favorites_invalid_request',
					__( 'Sorry, invalid request', 'woocommerce-admin' ),
					array( 'status' => 400 )
				);
			}

			if ( 'does_not_exist' === $error_msg ) {
				return new \WP_Error(
					'woocommerce_favorites_does_not_exist',
					__( 'Favorite item not found', 'woocommerce-admin' ),
					array( 'status' => 404 )
				);
			}
		}

		return rest_ensure_response( array_map( 'stripslashes', $altered_favorites ) );
	}

	/**
	 * Check whether a given request has permission to read favorites.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|boolean
	 */
	public function get_items_permissions_check( $request ) {
		if ( ! wc_rest_check_manager_permissions( 'system_status', 'read' ) ) {
			return new \WP_Error( 'woocommerce_rest_cannot_view', __( 'Sorry, you cannot list resources.', 'woocommerce-admin' ), array( 'status' => rest_authorization_required_code() ) );
		}

		return true;
	}

	/**
	 * Check whether a given request has permission to create favorites.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|boolean
	 */
	public function add_item_permissions_check( $request ) {
		if ( ! wc_rest_check_manager_permissions( 'system_status', 'edit' ) ) {
			return new \WP_Error( 'woocommerce_rest_cannot_view', __( 'Sorry, you cannot edit resources.', 'woocommerce-admin' ), array( 'status' => rest_authorization_required_code() ) );
		}

		return true;
	}

	/**
	 * Check whether a given request has permission to delete notes.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|boolean
	 */
	public function delete_item_permissions_check( $request ) {
		if ( ! wc_rest_check_manager_permissions( 'system_status', 'edit' ) ) {
			return new \WP_Error( 'woocommerce_rest_cannot_view', __( 'Sorry, you cannot delete resources.', 'woocommerce-admin' ), array( 'status' => rest_authorization_required_code() ) );
		}

		return true;
	}

}
