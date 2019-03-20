<?php
/**
 * REST API Product Attributes controller
 *
 * Handles requests to the products/attributes endpoint.
 *
 * @package WooCommerce Admin/API
 */

defined( 'ABSPATH' ) || exit;

/**
 * REST API Product Attributes controller class.
 *
 * @package WooCommerce Admin/API
 * @extends WC_REST_Data_Countries_Controller
 */
class WC_Admin_REST_Product_Attributes_Controller extends WC_REST_Product_Attributes_Controller {

	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc/v4';

	/**
	 * Delete a single attribute.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_REST_Response|WP_Error
	 */
	public function delete_item( $request ) {
		$force = isset( $request['force'] ) ? (bool) $request['force'] : false;

		// We don't support trashing for this type, error out.
		if ( ! $force ) {
			return new WP_Error( 'woocommerce_rest_trash_not_supported', __( 'Resource does not support trashing.', 'woocommerce' ), array( 'status' => 501 ) );
		}

		$attribute = $this->get_attribute( (int) $request['id'] );

		if ( is_wp_error( $attribute ) ) {
			return $attribute;
		}

		$request->set_param( 'context', 'edit' );
		$previous = $this->prepare_item_for_response( $attribute, $request );
		$deleted  = wc_delete_attribute( $attribute->attribute_id );

		if ( false === $deleted ) {
			return new WP_Error( 'woocommerce_rest_cannot_delete', __( 'The resource cannot be deleted.', 'woocommerce' ), array( 'status' => 500 ) );
		}

		$response = new WP_REST_Response();
		$response->set_data(
			array(
				'deleted'  => true,
				'previous' => $previous->get_data(),
			)
		);

		/**
		 * Fires after a single attribute is deleted via the REST API.
		 *
		 * @param stdObject        $attribute     The deleted attribute.
		 * @param WP_REST_Response $response The response data.
		 * @param WP_REST_Request  $request  The request sent to the API.
		 */
		do_action( 'woocommerce_rest_delete_product_attribute', $attribute, $response, $request );

		return $response;
	}
}
