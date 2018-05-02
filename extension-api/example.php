<?php
function example_woodash_add_pending_orders() {
	$pending_orders = wc_get_orders( array(
		'limit'    => -1,
		'status'   => array( 'wc-pending' )
	) );

	return array(
		'count'           => count( $pending_orders ),
		'singular_string' => 'pending order',
		'plural_string'   => 'pending orders',
	);
}

add_woocommerce_hook( 'dashboard_number_widget_items', 'example_woodash_add_pending_orders' );

function example_woodash_add_action_link() {
	return array(
		'href'  => 'https://docs.woocommerce.com/document/how-to-get-help/',
		'label' => 'Contact Support',
	);
}

add_woocommerce_hook( 'dashboard_number_widget_action_links', 'example_woodash_add_action_link' );

function example_woodash_extension_upsell() {
	$card = new WooComemrce_Component_Card( 'Recommended Extensions' );
	
	$bookings_button = new WooComemrce_Component_Button(
		'https://woocommerce.com/products/woocommerce-bookings/',
		'Check out WooCommerce Bookings'
	);

	$bookings_button->set_props( array( 
		'isPrimary' => true,
	) );

	$card->add( $bookings_button );
	
	$memberships_button = new WooComemrce_Component_Button(
		'https://woocommerce.com/products/woocommerce-memberships/',
		'Check out WooCommerce Memberships'
	);

	$memberships_button->set_props( array( 
		'isPrimary' => true,
	) );

	$card->add( $memberships_button );

	return $card->output();
}

add_woocommerce_hook( 'dashboard_widgets_primary', 'example_woodash_extension_upsell' );