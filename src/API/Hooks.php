<?php
/**
 * REST API Hooks Controller
 *
 * Handles requests to /hooks
 */

namespace Automattic\WooCommerce\Admin\API;

defined( 'ABSPATH' ) || exit;

/**
 * Hooks Controller.
 *
 * @extends WC_REST_Data_Controller
 */
class Hooks extends \WC_REST_Data_Controller {

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
	protected $rest_base = 'hooks';

	/**
	 * Register routes.
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base,
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_hook_data' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);
	}

	/**
	 * Check whether a given request has permission to read hook data.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|boolean
	 */
	public function get_items_permissions_check( $request ) {
		// @todo This should probably be limited by the given filter/hook.
		return true;
	}

	/**
	 * Return available hook data.
	 *
	 * @param \WP_REST_Request $request Request data.
	 *
	 * @return \WP_Error|\WP_REST_Response
	 */
	public function get_hook_data( $request ) {
		if ( ! isset( $request['actions'] ) ) {
			return new \WP_Error( 'woocommerce_rest_cannot_view', __( 'You must supply an array of actions.', 'woocommerce-admin' ), 500 );
		}

		$hooks        = array();
		$action_names = explode( ',', $request['actions'] );

		foreach ( $action_names as $action_name ) {
			ob_start();
			do_action( $action_name );
			$hooks[ $action_name ] = ob_get_clean();
		}

		error_log(print_r($hooks, true));

		return $hooks;
	}

}
