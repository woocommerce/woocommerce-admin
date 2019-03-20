<?php
/**
 * REST API Order Notes controller
 *
 * Handles requests to the /orders/<order_id>/notes endpoint.
 *
 * @package WooCommerce Admin/API
 */

defined( 'ABSPATH' ) || exit;

/**
 * REST API Order Notes controller class.
 *
 * @package WooCommerce Admin/API
 * @extends WC_Admin_REST_Order_Notes_Controller
 */
class WC_Admin_REST_Order_Notes_Controller extends WC_REST_Order_Notes_Controller {

	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc/v4';

	/**
	 * Delete a single order note.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_REST_Response|WP_Error
	 */
	public function delete_item( $request ) {
		$id    = (int) $request['id'];
		$force = isset( $request['force'] ) ? (bool) $request['force'] : false;

		// We don't support trashing for this type, error out.
		if ( ! $force ) {
			return new WP_Error( 'woocommerce_rest_trash_not_supported', __( 'Webhooks do not support trashing.', 'woocommerce' ), array( 'status' => 501 ) );
		}

		$order = wc_get_order( (int) $request['order_id'] );

		if ( ! $order || $this->post_type !== $order->get_type() ) {
			return new WP_Error( 'woocommerce_rest_order_invalid_id', __( 'Invalid order ID.', 'woocommerce' ), array( 'status' => 404 ) );
		}

		$note = get_comment( $id );

		if ( empty( $id ) || empty( $note ) || intval( $note->comment_post_ID ) !== intval( $order->get_id() ) ) {
			return new WP_Error( 'woocommerce_rest_invalid_id', __( 'Invalid resource ID.', 'woocommerce' ), array( 'status' => 404 ) );
		}

		$request->set_param( 'context', 'edit' );
		$response = $this->prepare_item_for_response( $note, $request );

		$result = wc_delete_order_note( $note->comment_ID );

		if ( ! $result ) {
			return new WP_Error( 'woocommerce_rest_cannot_delete', sprintf( __( 'The %s cannot be deleted.', 'woocommerce' ), 'order_note' ), array( 'status' => 500 ) );
		}

		/**
		 * Fires after a order note is deleted or trashed via the REST API.
		 *
		 * @param WP_Comment       $note     The deleted or trashed order note.
		 * @param WP_REST_Response $response The response data.
		 * @param WP_REST_Request  $request  The request sent to the API.
		 */
		do_action( 'woocommerce_rest_delete_order_note', $note, $response, $request );

		return $response;
	}
}
