<?php
/**
 * Plugin Name: WooCommerce Admin Activity Panel Example
 *
 * @package WC_Admin
 */

/**
 * Register the JS.
 */
function wc_admin_example_activity_panel_register_script() {

	if ( ! class_exists( 'Automattic\WooCommerce\Admin\Loader' ) || ! \Automattic\WooCommerce\Admin\Loader::is_admin_page() ) {
		return;
	}

	wp_register_script(
		'example_activity_panel',
		plugins_url( '/dist/index.js', __FILE__ ),
		array(
			'wp-hooks',
			'wp-element',
			'wp-i18n',
			'wp-plugins',
			'wc-components',
		),
		filemtime( dirname( __FILE__ ) . '/dist/index.js' ),
		true
	);

	wp_enqueue_script( 'example_activity_panel' );
}
add_action( 'admin_enqueue_scripts', 'wc_admin_example_activity_panel_register_script' );
