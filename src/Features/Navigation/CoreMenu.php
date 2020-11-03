<?php
/**
 * WooCommerce Navigation Core Menu
 *
 * @package Woocommerce Admin
 */

namespace Automattic\WooCommerce\Admin\Features\Navigation;

use Automattic\WooCommerce\Admin\Features\Navigation\Menu;
use Automattic\WooCommerce\Admin\Features\Navigation\Screen;


/**
 * CoreMenu class. Handles registering Core menu items.
 */
class CoreMenu {
	/**
	 * Class instance.
	 *
	 * @var Menu instance
	 */
	protected static $instance = null;

	/**
	 * Get class instance.
	 */
	final public static function instance() {
		if ( ! static::$instance ) {
			static::$instance = new static();
		}
		return static::$instance;
	}

	/**
	 * Init.
	 */
	public function init() {
		add_action( 'admin_menu', array( $this, 'register_post_types' ) );
	}

	/**
	 * Add registered admin settings as menu items.
	 */
	public static function get_setting_items() {
		$setting_pages = \WC_Admin_Settings::get_settings_pages();
		$settings      = array();
		foreach ( $setting_pages as $setting_page ) {
			$settings = $setting_page->add_settings_page( $settings );
		}

		$menu_items = array();
		$order      = 0;
		foreach ( $settings as $key => $setting ) {
			$order       += 10;
			$menu_items[] = (
				array(
					'parent'     => 'settings',
					'title'      => $setting,
					'capability' => 'manage_woocommerce',
					'id'         => $key,
					'url'        => 'admin.php?page=wc-settings&tab=' . $key,
					'order'      => $order,
				)
			);
		}

		return $menu_items;
	}

	/**
	 * Get all menu categories.
	 *
	 * @return array
	 */
	public static function get_categories() {
		return array(
			array(
				'title'        => __( 'Analytics', 'woocommerce-admin' ),
				'capability'   => 'manage_woocommerce',
				'id'           => 'analytics',
				'order'        => 10,
				'is_top_level' => true,
			),
			array(
				'title'        => __( 'Orders', 'woocommerce-admin' ),
				'capability'   => 'manage_woocommerce',
				'id'           => 'orders',
				'order'        => 20,
				'is_top_level' => true,
			),
			array(
				'title'        => __( 'Marketing', 'woocommerce-admin' ),
				'capability'   => 'manage_woocommerce',
				'id'           => 'marketing',
				'order'        => 30,
				'is_top_level' => true,
			),
			array(
				'title'        => __( 'Products', 'woocommerce-admin' ),
				'capability'   => 'manage_woocommerce',
				'id'           => 'products',
				'order'        => 40,
				'is_top_level' => true,
			),
			array(
				'title'        => __( 'Extensions', 'woocommerce-admin' ),
				'capability'   => 'activate_plugins',
				'id'           => 'extensions',
				'migrate'      => false,
				'menuId'       => 'secondary',
				'order'        => 20,
				'is_top_level' => true,
			),
			array(
				'title'        => __( 'Settings', 'woocommerce-admin' ),
				'capability'   => 'manage_woocommerce',
				'id'           => 'settings',
				'menuId'       => 'secondary',
				'order'        => 10,
				'url'          => 'admin.php?page=wc-settings',
				'is_top_level' => true,
			),
			array(
				'title'        => __( 'Tools', 'woocommerce-admin' ),
				'capability'   => 'manage_woocommerce',
				'id'           => 'tools',
				'menuId'       => 'secondary',
				'order'        => 30,
				'is_top_level' => true,
			),
		);
	}

	/**
	 * Get all menu items.
	 *
	 * @return array
	 */
	public static function get_items() {
		$order_items   = Menu::get_post_type_items( 'shop_order', array( 'parent' => 'orders' ) );
		$product_items = Menu::get_post_type_items( 'product', array( 'parent' => 'products' ) );
		$coupon_items  = Menu::get_post_type_items( 'shop_coupon', array( 'parent' => 'marketing' ) );
		$setting_items = self::get_setting_items();

		return array_merge(
			array(
				$order_items[1],
				$product_items[1],
				$product_items[2],
				$coupon_items[0],
				// Extensions category.
				array(
					'parent'     => 'extensions',
					'title'      => __( 'My extensions', 'woocommerce-admin' ),
					'capability' => 'manage_woocommerce',
					'id'         => 'my-extensions',
					'url'        => 'plugins.php',
					'migrate'    => false,
				),
				array(
					'parent'     => 'extensions',
					'title'      => __( 'Marketplace', 'woocommerce-admin' ),
					'capability' => 'manage_woocommerce',
					'id'         => 'marketplace',
					'url'        => 'wc-addons',
				),
				// Tools category.
				array(
					'parent'     => 'tools',
					'title'      => __( 'System status', 'woocommerce-admin' ),
					'capability' => 'manage_woocommerce',
					'id'         => 'system-status',
					'url'        => 'wc-status',
				),
				array(
					'parent'     => 'tools',
					'title'      => __( 'Import / Export', 'woocommerce-admin' ),
					'capability' => 'import',
					'id'         => 'import-export',
					'url'        => 'import.php',
					'migrate'    => false,
				),
				array(
					'parent'     => 'tools',
					'title'      => __( 'Utilities', 'woocommerce-admin' ),
					'capability' => 'manage_woocommerce',
					'id'         => 'utilities',
					'url'        => 'admin.php?page=wc-status&tab=tools',
				),
			),
			// Settings category.
			$setting_items
		);
	}

	/**
	 * Register all core post types.
	 */
	public function register_post_types() {
		Screen::register_post_type( 'shop_order' );
		Screen::register_post_type( 'product' );
		Screen::register_post_type( 'shop_coupon' );
	}

	/**
	 * Get items excluded from WooCommerce menu migration.
	 *
	 * @return array
	 */
	public static function get_excluded_items() {
		$excluded_items = array(
			'woocommerce',
			'wc-reports',
		);

		return apply_filters( 'woocommerce_navigation_core_excluded_items', $excluded_items );
	}
}
