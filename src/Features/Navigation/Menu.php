<?php
/**
 * WooCommerce Navigation Menu
 *
 * @package Woocommerce Navigation
 */

namespace Automattic\WooCommerce\Admin\Features\Navigation;

use Automattic\WooCommerce\Admin\Features\Navigation\Screen;

/**
 * Contains logic for the WooCommerce Navigation menu.
 */
class Menu {
	/**
	 * Class instance.
	 *
	 * @var Menu instance
	 */
	protected static $instance = null;

	/**
	 * Array index of menu capability.
	 *
	 * @var int
	 */
	const CAPABILITY = 1;

	/**
	 * Array index of menu callback.
	 *
	 * @var int
	 */
	const CALLBACK = 2;

	/**
	 * Array index of menu callback.
	 *
	 * @var int
	 */
	const SLUG = 3;

	/**
	 * Array index of menu CSS class string.
	 *
	 * @var int
	 */
	const CSS_CLASSES = 4;

	/**
	 * Default parent menu
	 *
	 * @var string
	 */
	const DEFAULT_PARENT = 'settings';

	/**
	 * Store menu items.
	 *
	 * @var array
	 */
	protected static $menu_items = array();

	/**
	 * Registered callbacks or URLs with migration boolean as key value pairs.
	 *
	 * @var array
	 */
	protected static $callbacks = array();

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
		self::add_top_level_items();
		add_filter( 'admin_enqueue_scripts', array( $this, 'enqueue_data' ), 20 );
		add_filter( 'add_menu_classes', array( $this, 'migrate_menu_items' ), 30 );
	}

	/**
	 * Convert a WordPress menu callback to a URL.
	 *
	 * @param string $callback Menu callback.
	 * @return string
	 */
	public static function get_callback_url( $callback ) {
		// Return the full URL.
		if ( strpos( $callback, 'http' ) === 0 ) {
			return $callback;
		}

		$pos  = strpos( $callback, '?' );
		$file = $pos > 0 ? substr( $callback, 0, $pos ) : $callback;
		if ( file_exists( ABSPATH . "/wp-admin/$file" ) ) {
			return $callback;
		}
		return 'admin.php?page=' . $callback;
	}

	/**
	 * Get the parent key if one exists.
	 *
	 * @param string $callback Callback or URL.
	 * @return string|null
	 */
	public static function get_parent_key( $callback ) {
		global $submenu;

		if ( ! $submenu ) {
			return null;
		}

		// This is already a parent item.
		if ( isset( $submenu[ $callback ] ) ) {
			return null;
		}

		foreach ( $submenu as $key => $menu ) {
			foreach ( $menu as $item ) {
				if ( $item[ self::CALLBACK ] === $callback ) {
					return $key;
				}
			}
		}

		return null;
	}

	/**
	 * Adds a top level menu item to the navigation.
	 *
	 * @param array $args Array containing the necessary arguments.
	 *    $args = array(
	 *      'id'         => (string) The unique ID of the menu item. Required.
	 *      'title'      => (string) Title of the menu item. Required.
	 *      'capability' => (string) Capability to view this menu item.
	 *      'url'        => (string) URL or callback to be used. Required.
	 *      'order'      => (int) Menu item order.
	 *      'migrate'    => (bool) Whether or not to hide the item in the wp admin menu.
	 *      'menuId'     => (string) The ID of the menu to add the category to.
	 *    ).
	 */
	public static function add_category( $args ) {
		if ( ! isset( $args['id'] ) || isset( self::$menu_items[ $args['id'] ] ) ) {
			return;
		}

		$defaults            = array(
			'id'         => '',
			'title'      => '',
			'capability' => 'manage_woocommerce',
			'order'      => 100,
			'migrate'    => true,
			'menuId'     => 'primary',
			'isCategory' => true,
			'parent'     => self::DEFAULT_PARENT,
		);
		$menu_item           = wp_parse_args( $args, $defaults );
		$menu_item['title']  = wp_strip_all_tags( wp_specialchars_decode( $menu_item['title'] ) );
		$menu_item['parent'] = 'woocommerce' === $menu_item['parent'] ? self::DEFAULT_PARENT : $menu_item['parent'];
		unset( $menu_item['url'] );

		self::$menu_items[ $menu_item['id'] ] = $menu_item;

		if ( isset( $args['url'] ) ) {
			self::$callbacks[ $args['url'] ] = $menu_item['migrate'];
		}
	}

	/**
	 * Add top level menu items.
	 */
	public function add_top_level_items() {
		$items = array(
			array(
				'title'      => __( 'Home', 'woocommerce-admin' ),
				'capability' => 'manage_woocommerce',
				'id'         => 'home',
				'order'      => 0,
				'url'        => apply_filters( 'woocommerce_navigation_home_url', 'admin.php?page=woocommerce' ),
			),
			array(
				'title'      => __( 'Analytics', 'woocommerce-admin' ),
				'capability' => 'manage_woocommerce',
				'id'         => 'analytics',
				'order'      => 10,
				'isCategory' => true,
			),
			array(
				'title'      => __( 'Orders', 'woocommerce-admin' ),
				'capability' => 'edit_shop_orders',
				'id'         => 'orders',
				'order'      => 20,
				'isCategory' => true,
			),
			array(
				'title'      => __( 'Marketing', 'woocommerce-admin' ),
				'capability' => 'manage_woocommerce',
				'id'         => 'marketing',
				'order'      => 30,
				'isCategory' => true,
			),
			array(
				'title'      => __( 'Products', 'woocommerce-admin' ),
				'capability' => 'edit_products',
				'id'         => 'products',
				'order'      => 40,
				'isCategory' => true,
			),
			array(
				'title'      => __( 'Customers', 'woocommerce-admin' ),
				'capability' => 'list_users',
				'id'         => 'customers',
				'order'      => 50,
				'isCategory' => true,
			),
			array(
				'title'      => __( 'Payments', 'woocommerce-admin' ),
				'capability' => 'manage_woocommerce',
				'id'         => 'payments',
				'order'      => 60,
				'isCategory' => true,
			),
			array(
				'title'      => __( 'Settings', 'woocommerce-admin' ),
				'capability' => 'manage_woocommerce',
				'id'         => 'settings',
				'menuId'     => 'secondary',
				'order'      => 10,
				'isCategory' => true,
			),
			array(
				'title'      => __( 'Extensions', 'woocommerce-admin' ),
				'capability' => 'activate_plugins',
				'id'         => 'extensions',
				'menuId'     => 'secondary',
				'order'      => 20,
				'isCategory' => true,
			),
			array(
				'title'      => __( 'Tools', 'woocommerce-admin' ),
				'capability' => 'manage_woocommerce',
				'id'         => 'tools',
				'menuId'     => 'secondary',
				'order'      => 30,
				'isCategory' => true,
			),
		);

		foreach ( $items as $item ) {
			$menu_item                       = $item;
			$menu_item['parent']             = 'woocommerce';
			$menu_item['backButtonLabel']    = __(
				'WooCommerce Home',
				'woocommerce-admin'
			);
			self::$menu_items[ $item['id'] ] = $menu_item;
		}
	}

	/**
	 * Adds a child menu item to the navigation.
	 *
	 * @param array $args Array containing the necessary arguments.
	 *    $args = array(
	 *      'id'         => (string) The unique ID of the menu item. Required.
	 *      'title'      => (string) Title of the menu item. Required.
	 *      'parent'     => (string) Parent menu item ID.
	 *      'capability' => (string) Capability to view this menu item.
	 *      'url'        => (string) URL or callback to be used. Required.
	 *      'order'      => (int) Menu item order.
	 *      'migrate'    => (bool) Whether or not to hide the item in the wp admin menu.
	 *      'menuId'     => (string) The ID of the menu to add the item to.
	 *    ).
	 */
	public static function add_item( $args ) {
		if ( ! isset( $args['id'] ) || isset( self::$menu_items[ $args['id'] ] ) ) {
			return;
		}

		$defaults            = array(
			'id'           => '',
			'title'        => '',
			'parent'       => self::DEFAULT_PARENT,
			'capability'   => 'manage_woocommerce',
			'url'          => '',
			'order'        => 100,
			'migrate'      => true,
			'menuId'       => 'primary',
			'is_top_level' => false,
		);
		$menu_item           = wp_parse_args( $args, $defaults );
		$menu_item['title']  = wp_strip_all_tags( wp_specialchars_decode( $menu_item['title'] ) );
		$menu_item['url']    = self::get_callback_url( $menu_item['url'] );
		$menu_item['parent'] = 'woocommerce' === $menu_item['parent'] ? self::DEFAULT_PARENT : $menu_item['parent'];

		self::$menu_items[ $menu_item['id'] ] = $menu_item;

		if ( isset( $args['url'] ) ) {
			self::$callbacks[ $args['url'] ] = $menu_item['migrate'];
		}
	}

	/**
	 * Hides all WP admin menus items and adds screen IDs to check for new items.
	 *
	 * @param array $menu Menu items.
	 * @return array
	 */
	public static function migrate_menu_items( $menu ) {
		global $submenu;

		foreach ( $menu as $key => $menu_item ) {
			if (
				isset( self::$callbacks[ $menu_item[ self::CALLBACK ] ] ) &&
				self::$callbacks[ $menu_item[ self::CALLBACK ] ]
			) {
				$menu[ $key ][ self::CSS_CLASSES ] .= ' hide-if-js';
			}
		}

		foreach ( $submenu as $parent_key => $parent ) {
			foreach ( $parent as $key => $menu_item ) {
				if (
					(
						isset( self::$callbacks[ $menu_item[ self::CALLBACK ] ] ) &&
						self::$callbacks[ $menu_item[ self::CALLBACK ] ]
					) ||
					(
						isset( self::$callbacks[ self::get_callback_url( $menu_item[ self::CALLBACK ] ) ] ) &&
						self::$callbacks[ self::get_callback_url( $menu_item[ self::CALLBACK ] ) ]
					)
				) {
					// Disable phpcs since we need to override submenu classes.
					// Note that `phpcs:ignore WordPress.Variables.GlobalVariables.OverrideProhibited` does not work to disable this check.
					// phpcs:disable
					if ( ! isset( $menu_item[ self::SLUG ] ) ) {
						$submenu[ $parent_key ][ $key ][] = '';
					}
					if ( ! isset( $menu_item[ self::CSS_CLASSES ] ) ) {
						$submenu[ $parent_key ][ $key ][] .= ' hide-if-js';
					} else {
						$submenu[ $parent_key ][ $key ][ self::CSS_CLASSES ] .= ' hide-if-js';
					}
					// phps:enable
				}
			}
		}

		foreach ( array_keys( self::$callbacks ) as $callback ) {
			Screen::add_screen( $callback );
		}

		return $menu;
	}

	/**
	 * Get registered menu items.
	 *
	 * @return array
	 */
	public static function get_items() {
		return apply_filters( 'woocommerce_navigation_menu_items', self::$menu_items );
	}

	/**
	 * Get registered callbacks.
	 *
	 * @return array
	 */
	public static function get_callbacks() {
		return apply_filters( 'woocommerce_navigation_callbacks', self::$callbacks );
	}

	/**
	 * Gets the menu item data for use in the client.
	 *
	 * @return array
	 */
	public static function get_prepared_menu_item_data() {
		$menu_items = self::get_items();
		foreach ( $menu_items as $index => $menu_item ) {
			if ( $menu_item[ 'capability' ] && ! current_user_can( $menu_item[ 'capability' ] ) ) {
				unset( $menu_items[ $index ] );
			}
		}

		// Sort the menu items.
		$order = array_column( $menu_items, 'order' );
		array_multisort( $order, SORT_ASC, $menu_items );

		return array_values( $menu_items );
	}

	/**
	 * Add the menu to the page output.
	 *
	 * @param array $menu Menu items.
	 * @return array
	 */
	public function enqueue_data( $menu ) {
		global $submenu, $parent_file, $typenow, $self;

		$data = array(
			'menuItems' => self::get_prepared_menu_item_data(),
		);

		$paul = wp_add_inline_script( WC_ADMIN_APP, 'window.wcNavigation = ' . wp_json_encode( $data ), 'before' );

		return $menu;
	}
}
