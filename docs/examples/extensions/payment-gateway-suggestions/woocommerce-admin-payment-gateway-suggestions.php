<?php
/**
 * Plugin Name: WooCommerce Admin Payment Gateway Suggestions
 *
 * @package WooCommerce\Admin
 */

/**
 * Include files.
 */
function payment_gateway_suggestions_includes() {
	include_once __DIR__ . '/woocommerce-admin-payment-gateway-suggestions-mock-installer.php';
	include_once __DIR__ . '/woocommerce-admin-payment-gateway-suggestions-simple-gateway.php';
	include_once __DIR__ . '/woocommerce-admin-payment-gateway-suggestions-slot-filled-gateway.php';
}
add_action( 'plugins_loaded', 'payment_gateway_suggestions_includes' );


/**
 * Register the gateways with WooCommerce.
 *
 * @param array $gateways Gateways.
 * @return array
 */
function payment_gateway_suggestions_register_gateways( $gateways ) {
	$gateways[] = 'My_Simple_Gateway';
	$gateways[] = 'My_Slot_Filled_Gateway';

	return $gateways;
}
add_filter( 'woocommerce_payment_gateways', 'payment_gateway_suggestions_register_gateways' );

/**
 * Add examples to the data sources.
 *
 * @param array $specs Specs.
 * @return array
 */
function payment_gateway_suggestions_add_suggestions( $specs ) {
	$specs[] = array(
		'id'         => 'simple-gateway',
		'title'      => __( 'Simple Gateway', 'woocommerce-admin' ),
		'content'    => __( "This is a simple gateway that pulls its configuration fields from the gateway's class.", 'woocommerce-admin' ),
		'image'      => WC()->plugin_url() . '/assets/images/placeholder.png',
		'plugins'    => array( 'simple-gateway-wporg-slug' ),
		'is_visible' => array(
			(object) array(
				'type'      => 'base_location_country',
				'value'     => 'US',
				'operation' => '=',
			),
		),
	);

	$specs[] = array(
		'id'      => 'slot-filled-gateway',
		'title'   => __( 'Slot Filled Gateway', 'woocommerce-admin' ),
		'content' => __( 'This gateway makes use of registered SlotFill scripts to show its content.', 'woocommerce-admin' ),
		'image'   => WC()->plugin_url() . '/assets/images/placeholder.png',
		'plugins' => array( 'slot-filled-gateway-wporg-slug' ),
	);

	return $specs;
}
add_filter( 'woocommerce_admin_payment_gateway_suggestion_specs', 'payment_gateway_suggestions_add_suggestions' );

/**
 * Register the JS.
 */
function payment_gateway_suggestions_register_scripts() {
	if ( ! class_exists( 'Automattic\WooCommerce\Admin\Loader' ) || ! \Automattic\WooCommerce\Admin\Loader::is_admin_page() ) {
		return;
	}

	$asset_file = require __DIR__ . '/dist/index.asset.php';
	wp_register_script(
		'payment-gateway-suggestion-slot-fill',
		plugins_url( '/dist/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	wp_enqueue_script( 'payment-gateway-suggestion-slot-fill' );
}
add_action( 'admin_enqueue_scripts', 'payment_gateway_suggestions_register_scripts' );
