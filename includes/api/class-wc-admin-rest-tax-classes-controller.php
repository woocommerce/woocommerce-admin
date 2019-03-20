<?php
/**
 * REST API Tax Classes controller
 *
 * Handles requests to the /taxes/classes endpoint.
 *
 * @package WooCommerce Admin/API
 */

defined( 'ABSPATH' ) || exit;

/**
 * REST API Tax Classes controller class.
 *
 * @package WooCommerce Admin/API
 * @extends WC_REST_Data_Countries_Controller
 */
class WC_Admin_REST_Tax_Classes_Controller extends WC_REST_Tax_Classes_Controller {

	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc/v4';

	/**
	 * Delete a single tax class.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function delete_item( $request ) {
		global $wpdb;

		$force = isset( $request['force'] ) ? (bool) $request['force'] : false;

		// We don't support trashing for this type, error out.
		if ( ! $force ) {
			return new WP_Error( 'woocommerce_rest_trash_not_supported', __( 'Taxes do not support trashing.', 'woocommerce' ), array( 'status' => 501 ) );
		}

		$tax_class = array(
			'slug' => sanitize_title( $request['slug'] ),
			'name' => '',
		);

		$classes  = WC_Tax::get_tax_classes();
		$deleted  = false;

		foreach ( $classes as $key => $class ) {
			if ( sanitize_title( $class ) === $tax_class['slug'] ) {
				$tax_class['name'] = $class;
				unset( $classes[ $key ] );
				$deleted = true;
				break;
			}
		}

		if ( ! $deleted ) {
			return new WP_Error( 'woocommerce_rest_invalid_id', __( 'Invalid resource id.', 'woocommerce' ), array( 'status' => 400 ) );
		}

		$request->set_param( 'context', 'edit' );
		$previous = $this->prepare_item_for_response( $tax_class, $request );

		update_option( 'woocommerce_tax_classes', implode( "\n", $classes ) );

		// Delete tax rate locations locations from the selected class.
		$wpdb->query( $wpdb->prepare( "
			DELETE locations.*
			FROM {$wpdb->prefix}woocommerce_tax_rate_locations AS locations
			INNER JOIN
				{$wpdb->prefix}woocommerce_tax_rates AS rates
				ON rates.tax_rate_id = locations.tax_rate_id
			WHERE rates.tax_rate_class = '%s'
		", $tax_class['slug'] ) );

		// Delete tax rates in the selected class.
		$wpdb->delete( $wpdb->prefix . 'woocommerce_tax_rates', array( 'tax_rate_class' => $tax_class['slug'] ), array( '%s' ) );

		$response = new WP_REST_Response();
		$response->set_data(
			array(
				'deleted'  => true,
				'previous' => $previous->get_data(),
			)
		);

		/**
		 * Fires after a tax class is deleted via the REST API.
		 *
		 * @param stdClass         $tax_class The tax data.
		 * @param WP_REST_Response $response  The response returned from the API.
		 * @param WP_REST_Request  $request   The request sent to the API.
		 */
		do_action( 'woocommerce_rest_delete_tax', (object) $tax_class, $response, $request );

		return $response;
	}
}
