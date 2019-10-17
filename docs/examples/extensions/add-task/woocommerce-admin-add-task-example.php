<?php
/**
 * Plugin Name: WooCommerce Admin Add Task Example
 *
 * @package WC_Admin
 */

/**
 * Register the JS.
 */
function add_task_register_script() {

	if ( ! class_exists( 'Automattic\WooCommerce\Admin\Loader' ) || ! \Automattic\WooCommerce\Admin\Loader::is_admin_page() ) {
		return;
	}

	wp_register_script(
		'add-task',
		plugins_url( '/dist/index.js', __FILE__ ),
		array(
			'wp-hooks',
			'wp-element',
			'wp-i18n',
			'wc-components',
		),
		filemtime( dirname( __FILE__ ) . '/dist/index.js' ),
		true
	);

	wp_enqueue_script( 'add-task' );
}
add_action( 'admin_enqueue_scripts', 'add_task_register_script' );
