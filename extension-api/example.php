<?php
function example_woodash_add_pending_orders() {
	$pending_orders = wc_get_orders( array(
		'limit'    => -1,
		'status'   => array( 'wc-pending' )
	) );

	return array(
		'item' => sprintf( _n( '%s pending order', '%s pending orders', count( $pending_orders ), 'woo-dash' ), count( $pending_orders ) ),
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
	$card = new WooCommerce_Component_Card( 'Recommended Extensions' );
	
	$bookings_button = new WooCommerce_Component_Button(
		'https://woocommerce.com/products/woocommerce-bookings/',
		'Check out WooCommerce Bookings',
		array(
			'isPrimary' => true,
		)
	);

	$card->add( $bookings_button );
	
	$memberships_button = new WooCommerce_Component_Button(
		'https://woocommerce.com/products/woocommerce-memberships/',
		'Check out WooCommerce Memberships',
		array(
			'isPrimary' => true,
		)
	);

	$card->add( $memberships_button );

	return $card->output();
}

add_woocommerce_hook( 'dashboard_widgets_primary', 'example_woodash_extension_upsell' );