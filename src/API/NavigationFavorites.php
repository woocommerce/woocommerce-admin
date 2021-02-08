<?php
/**
 * REST API Navigation Favorites controller
 *
 * Handles requests to the navigation favorites endpoint
 */

namespace Automattic\WooCommerce\Admin\API;

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Admin\Features\Navigation\Favorites;

/**
 * REST API Favorites controller class.
 *
 * @extends WC_REST_CRUD_Controller
 */
class NavigationFavorites extends \WC_REST_Data_Controller {

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
	 * Error code to status code mapping.
	 *
	 * @var array
	 */
	protected $error_to_status_map = array(
		'woocommerce_favorites_invalid_request' => 400,
		'woocommerce_favorites_already_exists'  => 409,
		'woocommerce_favorites_does_not_exist'  => 404,
	);

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
					'args'                => array(
						'user_id' => array(
							'required'          => false,
							'validate_callback' => function( $param, $request, $key ) {
								return is_numeric( $param );
							},
						),
					),
				),
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'add_item' ),
					'permission_callback' => array( $this, 'add_item_permissions_check' ),
					'args'                => array(
						'item_id' => array(
							'required' => true,
						),
						'user_id' => array(
							'required'          => false,
							'validate_callback' => function( $param, $request, $key ) {
								return is_numeric( $param );
							},
						),
					),
				),
				array(
					'methods'             => \WP_REST_Server::DELETABLE,
					'callback'            => array( $this, 'delete_item' ),
					'permission_callback' => array( $this, 'delete_item_permissions_check' ),
					'args'                => array(
						'item_id' => array(
							'required' => true,
						),
						'user_id' => array(
							'required'          => false,
							'validate_callback' => function( $param, $request, $key ) {
								return is_numeric( $param );
							},
						),
					),
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
		$user_id       = $request->get_param( 'user_id' );
		$all_favorites = Favorites::get_all( $user_id );

		return rest_ensure_response(
			array_map( 'stripslashes', $all_favorites )
		);
	}

	/**
	 * Add a favorite.
	 *
	 * @param WP_REST_Request $request Request data.
	 * @return WP_REST_Response
	 */
	public function add_item( $request ) {
		$fav_id  = $request->get_param( 'item_id' );
		$user_id = $request->get_param( 'user_id' );

		$response = Favorites::add_item( $fav_id, $user_id );

		if ( is_wp_error( $response ) ) {
			return rest_ensure_response( $this->prepare_error( $response ) );
		}

		return rest_ensure_response(
			array_map( 'stripslashes', $response )
		);

	}

	/**
	 * Delete a favorite.
	 *
	 * @param WP_REST_Request $request Request data.
	 * @return WP_REST_Response
	 */
	public function delete_item( $request ) {
		$fav_id  = $request->get_param( 'item_id' );
		$user_id = $request->get_param( 'user_id' );

		$response = Favorites::remove_item( $fav_id, $user_id );

		if ( is_wp_error( $response ) ) {
			return rest_ensure_response( $this->prepare_error( $response ) );
		}

		return rest_ensure_response(
			array_map( 'stripslashes', $response )
		);
	}


	/**
	 * Check whether a given request has permission to create favorites.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|boolean
	 */
	public function add_item_permissions_check( $request ) {
		return current_user_can( 'edit_users' );
	}

	/**
	 * Check whether a given request has permission to delete notes.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|boolean
	 */
	public function delete_item_permissions_check( $request ) {
		return current_user_can( 'edit_users' );
	}

	/**
	 * Accept an instance of WP_Error and add the appropriate data for REST transit.
	 *
	 * @param  WP_Error $error Error to prepare.
	 * @return WP_Error
	 */
	protected function prepare_error( $error ) {
		$error->add_data(
			array(
				'status' => $this->error_to_status_map[ $error->get_error_code() ] ?? 500,
			)
		);

		return $error;
	}

}
