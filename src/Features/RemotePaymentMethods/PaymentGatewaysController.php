<?php
/**
 * Logic for extending WC_REST_Payment_Gateways_Controller.
 */

namespace Automattic\WooCommerce\Admin\Features\RemotePaymentMethods;

defined( 'ABSPATH' ) || exit;

/**
 * PaymentGateway class
 */
class PaymentGatewaysController {

	/**
	 * Initialize payment gateway changes.
	 */
	public static function init() {
		add_filter( 'woocommerce_rest_prepare_payment_gateway', array( __CLASS__, 'extend_response' ), 10, 3 );
	}

	/**
	 * Add necessary fields to REST API response.
	 *
	 * @param  WP_REST_Response   $response   Response data.
	 * @param  WC_Payment_Gateway $gateway    Payment gateway object.
	 * @param  WP_REST_Request    $request    Request object.
	 * @return WP_REST_Response
	 */
	public static function extend_response( $response, $gateway, $request ) {
		$data = $response->get_data();

		$data['needs_setup'] = $gateway->needs_setup();

		if ( method_exists( $gateway, 'get_oauth_connection_url' ) ) {
			$data['oauth_connection_url'] = $gateway->get_oauth_connection_url();
		}

		$data['setup_fields'] = self::get_setup_form_fields( $gateway );

		$data['settings_url'] = admin_url( 'admin.php?page=wc-settings&tab=checkout&section=' . strtolower( $gateway->id ) );

		$response->set_data( $data );

		return $response;
	}

	/**
	 * Get setup fields from keys.
	 *
	 * @param  WC_Payment_Gateway $gateway    Payment gateway object.
	 * @return array
	 */
	public static function get_setup_form_fields( $gateway ) {
		if ( ! method_exists( $gateway, 'get_setup_form_field_keys' ) ) {
			return apply_filters( 'woocommerce_settings_api_setup_form_fields_' . $gateway->id, array(), $gateway );
		}

		$setup_form_field_keys = $gateway->get_setup_form_field_keys();
		$form_fields           = $gateway->get_form_fields();
		$setup_fields          = array();

		foreach ( $setup_form_field_keys as $key ) {
			if ( ! isset( $form_fields[ $key ] ) ) {
				continue;
			}

			$setup_fields[ $key ] = $form_fields[ $key ];
		}

		return apply_filters( 'woocommerce_settings_api_setup_form_fields_' . $gateway->id, $setup_fields, $gateway );
	}
}
