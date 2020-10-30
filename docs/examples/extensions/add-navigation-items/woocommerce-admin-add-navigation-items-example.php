<?php
/**
 * Plugin Name: WooCommerce Admin Add Navigation Items Example
 *
 * @package WooCommerce\Admin
 */

/**
 * Register the JS.
 */
function add_navigation_items_register_script() {
	if ( ! class_exists( '\Automattic\WooCommerce\Admin\Features\Navigation\Screen' ) || ! \Automattic\WooCommerce\Admin\Features\Navigation\Screen::is_woocommerce_page() ) {
		return;
	}

	wp_register_script(
		'add-navigation-items',
		plugins_url( '/dist/index.js', __FILE__ ),
		array(
			'wp-hooks',
			'wp-element',
			'wp-i18n',
			'wc-components',
			'wp-plugins',
		),
		filemtime( dirname( __FILE__ ) . '/dist/index.js' ),
		true
	);

	wp_enqueue_script( 'add-navigation-items' );
}
add_action( 'admin_enqueue_scripts', 'add_navigation_items_register_script' );

/**
 * Add Example items to WooCommerce Navigation
 */
function add_navigation_items_register_items() {
	if (
		! method_exists( '\Automattic\WooCommerce\Admin\Features\Navigation\Menu', 'add_category' ) ||
		! method_exists( '\Automattic\WooCommerce\Admin\Features\Navigation\Menu', 'add_item' )
	) {
		return;
	}

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_item(
		array(
			'id'         => 'example-marketing-plugin',
			'title'      => 'Example Marketing Settings',
			'capability' => 'view_woocommerce_reports',
			'parent'     => 'settings',
			'url'        => 'https://www.google.com',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_category(
		array(
			'id'         => 'example-marketing-category',
			'parent'     => 'woocommerce-marketing',
			'title'      => 'Example Marketing Category',
			'capability' => 'view_woocommerce_reports',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_item(
		array(
			'id'         => 'example-marketing-category-child-1',
			'parent'     => 'example-marketing-category',
			'title'      => 'Sub Menu Child 1',
			'capability' => 'view_woocommerce_reports',
			'url'        => 'https://www.google.com',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_item(
		array(
			'id'         => 'example-marketing-category-child-2',
			'parent'     => 'example-marketing-category',
			'title'      => 'Sub Menu Child 2',
			'capability' => 'view_woocommerce_reports',
			'url'        => 'https://www.google.com',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'facebook',
			'title'      => 'Facebook',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_category(
		array(
			'id'         => 'stripe',
			'title'      => 'Stripe',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'stripe-payments',
			'parent'     => 'stripe',
			'title'      => 'Payments',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'stripe-settings',
			'parent'     => 'stripe',
			'title'      => 'Settings',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_category(
		array(
			'id'         => 'square',
			'title'      => 'Square',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'square-payments',
			'parent'     => 'square',
			'title'      => 'Payments',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'square-transactions',
			'parent'     => 'square',
			'title'      => 'Transactions',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'square-settings',
			'parent'     => 'square',
			'title'      => 'Settings',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'amazon-pay',
			'title'      => 'Amazon Pay',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'google-analytics',
			'title'      => 'Google Analytics',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'paypal-checkout',
			'title'      => 'PayPal Checkout',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'shipstation',
			'title'      => 'ShipStation',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_category(
		array(
			'id'         => 'woocommerce-subscriptions',
			'title'      => 'WooCommerce Subscriptions',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'woocommerce-subscriptions-subscriptions',
			'parent'     => 'woocommerce-subscriptions',
			'title'      => 'Subscriptions',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'woocommerce-subscriptions-settings',
			'parent'     => 'woocommerce-settings',
			'title'      => 'Settings',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'woocommerce-subscriptions-emails',
			'parent'     => 'woocommerce-emails',
			'title'      => 'Emails',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'woocommerce-product-addons',
			'title'      => 'Product Add-Ons',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'payfast',
			'title'      => 'PayFast',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'woocommerce-shipping',
			'title'      => 'WooCommerce Shipping',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_category(
		array(
			'id'         => 'woocommerce-payments',
			'title'      => 'WooCommerce Payments',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'woocommerce-payments-deposits',
			'parent'     => 'woocommerce-payments',
			'title'      => 'Deposits',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'woocommerce-payments-transactions',
			'parent'     => 'woocommerce-payments',
			'title'      => 'Transactions',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'woocommerce-payments-settings',
			'parent'     => 'woocommerce-payments',
			'title'      => 'Settings',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'usps',
			'title'      => 'USPS Shipping',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);

	\Automattic\WooCommerce\Admin\Features\Navigation\Menu::add_plugin_item(
		array(
			'id'         => 'woocommerce-tax',
			'title'      => 'WooCommerce Tax',
			'capability' => 'manage_woocommerce',
			'url'        => '#',
		)
	);
}
add_filter( 'admin_menu', 'add_navigation_items_register_items' );
