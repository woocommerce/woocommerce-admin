<?php
/**
 * REST API Shipping Zones controller
 *
 * Handles requests to the /shipping/zones endpoint.
 *
 * @package WooCommerce Admin/API
 */

defined( 'ABSPATH' ) || exit;

/**
 * REST API Shipping Zones class.
 *
 * @package WooCommerce Admin/API
 * @extends WC_REST_Data_Countries_Controller
 */
class WC_Admin_REST_Shipping_Zones_Controller extends WC_REST_Shipping_Zones_Controller {

	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc/v4';

	/**
	 * Delete a single Shipping Zone.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_REST_Request|WP_Error
	 */
	public function delete_item( $request ) {
		$zone = $this->get_zone( $request->get_param( 'id' ) );

		if ( is_wp_error( $zone ) ) {
			return $zone;
		}

		$force = $request['force'];

		// We don't support trashing for this type, error out.
		if ( ! $force ) {
			return new WP_Error( 'rest_trash_not_supported', __( 'Shipping zones do not support trashing.', 'woocommerce' ), array( 'status' => 501 ) );
		}

		$previous = $this->get_item( $request );
		$zone->delete();

		$response = new WP_REST_Response();
		$response->set_data(
			array(
				'deleted'  => true,
				'previous' => $previous->get_data(),
			)
		);

		return $response;
	}
}
