<?php
/**
 * REST API Shipping Zone Methods controller
 *
 * Handles requests to the /shipping/zones/<id>/methods endpoint.
 *
 * @package WooCommerce Admin/API
 */

defined( 'ABSPATH' ) || exit;

/**
 * REST API Shipping Zone Methods class.
 *
 * @package WooCommerce Admin/API
 * @extends WC_REST_Data_Countries_Controller
 */
class WC_Admin_REST_Shipping_Zone_Methods_Controller extends WC_REST_Shipping_Zone_Methods_Controller {

	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc/v4';

	/**
	 * Delete a shipping method instance.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_Error|boolean
	 */
	public function delete_item( $request ) {
		$zone = $this->get_zone( $request['zone_id'] );
		if ( is_wp_error( $zone ) ) {
			return $zone;
		}

		$instance_id = (int) $request['instance_id'];
		$force       = $request['force'];

		$methods = $zone->get_shipping_methods();
		$method  = false;

		foreach ( $methods as $method_obj ) {
			if ( $instance_id === $method_obj->instance_id ) {
				$method = $method_obj;
				break;
			}
		}

		if ( false === $method ) {
			return new WP_Error( 'woocommerce_rest_shipping_zone_method_invalid', __( 'Resource does not exist.', 'woocommerce' ), array( 'status' => 404 ) );
		}

		$method = $this->update_fields( $instance_id, $method, $request );
		if ( is_wp_error( $method ) ) {
			return $method;
		}

		$request->set_param( 'context', 'view' );
		$response = $this->prepare_item_for_response( $method, $request );

		// Actually delete.
		if ( $force ) {
			$zone->delete_shipping_method( $instance_id );
		} else {
			return new WP_Error( 'rest_trash_not_supported', __( 'Shipping methods do not support trashing.', 'woocommerce' ), array( 'status' => 501 ) );
		}

		/**
		 * Fires after a product review is deleted via the REST API.
		 *
		 * @param object           $method
		 * @param WP_REST_Response $response        The response data.
		 * @param WP_REST_Request  $request         The request sent to the API.
		 */
		do_action( 'rest_delete_product_review', $method, $response, $request );

		return $response;
	}
}
