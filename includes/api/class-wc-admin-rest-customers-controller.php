<?php
/**
 * REST API Customers Controller
 *
 * Handles requests to /customers/*
 *
 * @package WooCommerce Admin/API
 */

defined( 'ABSPATH' ) || exit;

/**
 * Customers controller.
 *
 * @package WooCommerce Admin/API
 * @extends WC_Admin_REST_Reports_Customers_Controller
 */
class WC_Admin_REST_Customers_Controller extends WC_Admin_REST_Reports_Customers_Controller {

	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected $rest_base = 'customers';

	/**
	 * Maps query arguments from the REST request.
	 *
	 * @param array $request Request array.
	 * @return array
	 */
	protected function prepare_reports_query( $request ) {
		$args              = parent::prepare_reports_query( $request );
		$args['customers'] = $request['include'];
		return $args;
	}

	/**
	 * Get the query params for collections.
	 *
	 * @return array
	 */
	public function get_collection_params() {
		$params            = parent::get_collection_params();
		$params['include'] = $params['customers'];
		unset( $params['customers'] );
		return $params;
	}

	/**
	 * Delete a single customer.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function delete_item( $request ) {
		$id       = (int) $request['id'];
		$reassign = isset( $request['reassign'] ) ? absint( $request['reassign'] ) : null;
		$force    = isset( $request['force'] ) ? (bool) $request['force'] : false;

		// We don't support trashing for this type, error out.
		if ( ! $force ) {
			return new WP_Error( 'woocommerce_rest_trash_not_supported', __( 'Customers do not support trashing.', 'woocommerce' ), array( 'status' => 501 ) );
		}

		$user_data = get_userdata( $id );
		if ( ! $user_data ) {
			return new WP_Error( 'woocommerce_rest_invalid_id', __( 'Invalid resource id.', 'woocommerce' ), array( 'status' => 400 ) );
		}

		if ( ! empty( $reassign ) ) {
			if ( $reassign === $id || ! get_userdata( $reassign ) ) {
				return new WP_Error( 'woocommerce_rest_customer_invalid_reassign', __( 'Invalid resource id for reassignment.', 'woocommerce' ), array( 'status' => 400 ) );
			}
		}

		$request->set_param( 'context', 'edit' );
		$response = $this->prepare_item_for_response( $user_data, $request );

		/** Include admin customer functions to get access to wp_delete_user() */
		require_once ABSPATH . 'wp-admin/includes/user.php';

		$customer = new WC_Customer( $id );

		if ( ! is_null( $reassign ) ) {
			$result = $customer->delete_and_reassign( $reassign );
		} else {
			$result = $customer->delete();
		}

		if ( ! $result ) {
			return new WP_Error( 'woocommerce_rest_cannot_delete', __( 'The resource cannot be deleted.', 'woocommerce' ), array( 'status' => 500 ) );
		}

		/**
		 * Fires after a customer is deleted via the REST API.
		 *
		 * @param WP_User          $user_data User data.
		 * @param WP_REST_Response $response  The response returned from the API.
		 * @param WP_REST_Request  $request   The request sent to the API.
		 */
		do_action( 'woocommerce_rest_delete_customer', $user_data, $response, $request );

		return $response;
	}
}
