<?php
/**
 * Plugin Name: WooCommerce Admin Add Task Example 2
 *
 * @package WooCommerce\Admin
 */

use Automattic\WooCommerce\Admin\Features\Onboarding;

/**
 * Register the task list item and the JS.
 */
function add_task_register_script_2() {

	if (
		! class_exists( 'Automattic\WooCommerce\Admin\Loader' ) ||
		! \Automattic\WooCommerce\Admin\Loader::is_admin_page() ||
		! Onboarding::should_show_tasks()
	) {
		return;
	}

	wp_register_script(
		'add-task-2',
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

	$client_data = array(
		'isComplete' => get_option( 'woocommerce_admin_add_task_example_complete_2', false ),
	);
	wp_localize_script( 'add-task-2', 'addTaskData2', $client_data );
	wp_enqueue_script( 'add-task-2' );
	add_filter( 'woocommerce_get_registered_extended_tasks', 'pluginprefix_register_extended_tasklist_2', 10, 1 );
}

/**
 * Register task list item.
 *
 * @param array $registered_tasks_list_items List of registered extended task list items.
 */
function pluginprefix_register_extended_tasklist_2( $registered_tasks_list_items ) {
	$new_task_name = 'woocommerce_admin_add_task_example_name_2';
	if ( ! in_array( $new_task_name, $registered_tasks_list_items, true ) ) {
		array_push( $registered_tasks_list_items, $new_task_name );
	}
	return $registered_tasks_list_items;
}

/**
 * Unregister task list item.
 */
function pluginprefix_deactivate_2() {
	remove_filter( 'woocommerce_get_registered_extended_tasks', 'pluginprefix_register_extended_tasklist_2', 10, 1 );
}

add_action( 'admin_enqueue_scripts', 'add_task_register_script_2' );
register_deactivation_hook( __FILE__, 'pluginprefix_deactivate_2' );
