<?php
/**
 * WooCommerce Navigation
 * NOTE: DO NOT edit this file in WooCommerce core, this is generated from woocommerce-admin.
 *
 * @package Woocommerce Admin
 */

namespace Automattic\WooCommerce\Admin\Features;

/**
 * Contains logic for the WooCommerce Navigation.
 */
class Navigation {
	/**
	 * Class instance.
	 *
	 * @var Navigation instance
	 */
	protected static $instance = null;

	/**
	 * Array index of menu title.
	 *
	 * @var int
	 */
	const TITLE = 0;

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
	 * Array index of menu CSS class string.
	 *
	 * @var int
	 */
	const CSS_CLASSES = 4;

	/**
	 * Array index of menu handle.
	 *
	 * @var int
	 */
	const HANDLE = 5;

	/**
	 * Store related capabilities.
	 *
	 * @var array
	 */
	protected $store_capabilities = array(
		'manage_woocommerce',
		'view_woocommerce_reports',
	);

	/**
	 * Menu items that are permanently visible.
	 *
	 * @var array
	 */
	protected $permanent_items = array(
		'menu-dashboard',
		'toplevel_page_woocommerce',
	);

	/**
	 * Store related post types.
	 *
	 * @var array
	 */
	protected $post_types = array(
		'bookable_resource',
		'event_ticket',
		'product',
		'shop_coupon',
		'shop_order',
		'shop_subscription',
		'wc_booking',
		'wc_membership_plan',
		'wc_pickup_location',
		'wc_product_tab',
		'wc_user_membership',
		'wc_voucher',
		'wc_zapier_feed',
		'wishlist',
	);

	/**
	 * Store related plugin page handles.
	 *
	 * @var array
	 */
	protected $plugin_pages = array(
		'wc-admin',
		'wc-reports',
		'wc-settings',
		'wc-status',
		'wc-addons',
		'woocommerce',
		'checkout_field_editor',
		'csv_import_suite',
		'lightspeed-import-page',
		'sc-about',
		'wc-smart-coupons',
		'wc_checkout_add_ons',
		'wc_customer_order_csv_export',
		'wc_dynamic_pricing',
		'wc_pre_orders',
	);

	/**
	 * Store related menu items.
	 *
	 * @var array
	 */
	protected $store_menu = array();

	/**
	 * Map of all menu items to categories.
	 *
	 * @var array
	 */
	protected $menu_item_map = array(
		'mailchimp-woocommerce' => 'marketing',
	);

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
	 * Constructor
	 */
	public function __construct() {
		if ( is_admin() && ! apply_filters( 'woocommerce_use_legacy_navigation', false ) ) {
			add_filter( 'add_menu_classes', array( $this, 'get_menu_items' ) );
			add_filter( 'add_menu_classes', array( $this, 'add_menu_settings' ), 20 );
		}
	}

	/**
	 * Get categories for menu items.
	 */
	public static function get_categories() {
		$categories = array(
			array(
				'slug'  => 'dashboard',
				'title' => __( 'Store', 'woocommerce-admin' ),
				'icon'  => null,
			),
			array(
				'slug'  => 'analytics',
				'title' => __( 'Analytics', 'woocommerce-admin' ),
				'icon'  => null,
			),
			array(
				'slug'  => 'orders',
				'title' => __( 'Orders', 'woocommerce-admin' ),
				'icon'  => null,
			),
			array(
				'slug'  => 'marketing',
				'title' => __( 'Marketing', 'woocommerce-admin' ),
				'icon'  => null,
			),
			array(
				'slug'  => 'products',
				'title' => __( 'Products', 'woocommerce-admin' ),
				'icon'  => null,
			),
			array(
				'slug'  => 'customers',
				'title' => __( 'Customers', 'woocommerce-admin' ),
				'icon'  => null,
			),
		);

		return apply_filters( 'woocommerce_navigation_categories', $categories );
	}

	/**
	 * Update dashboard menu for site or store dashboard.
	 *
	 * @param array $menu Top level dashboard menu items.
	 * @return array
	 */
	public function update_navigation( $menu ) {
		global $pagenow, $plugin_page;

		// Get post type if adding/editing a post.
		$typenow = '';
		if ( in_array( $pagenow, array( 'edit.php', 'post.php', 'post-new.php' ), true ) ) {
			if ( isset( $_GET['post'] ) ) { // phpcs:ignore CSRF ok.
				$typenow = get_post_type( (int) $_GET['post'] ); // phpcs:ignore CSRF ok.
			} elseif ( isset( $_GET['post_type'] ) ) { // phpcs:ignore CSRF ok.
				$typenow = sanitize_text_field( wp_unslash( $_GET['post_type'] ) ); // phpcs:ignore CSRF ok.
			}
		}

		// Add editing store post types to capabilities list.
		$store_capabilities = $this->store_capabilities;
		foreach ( $this->post_types as $post_type ) {
			$store_capabilities[] = 'edit_' . $post_type . 's';
		}
		$store_capabilities = apply_filters( 'woocommerce_navigation_store_capabilities', $store_capabilities );
		$permanent_items    = apply_filters( 'woocommerce_navigation_permanent_items', $this->permanent_items );
		$post_types         = apply_filters( 'woocommerce_navigation_post_types', $this->post_types );

		if ( ! empty( $plugin_page ) ) {
			$plugin_pages    = apply_filters( 'woocommerce_navigation_plugin_pages', $this->plugin_pages );
			$plugin_prefixes = [];
			foreach ( $plugin_pages as $prefix ) {
				$plugin_prefixes[] = 'toplevel_page_' . $prefix;
			}
		}

		$managing_store = false;
		foreach ( $menu as $index => $item ) {
			// Skip separators.
			if ( ! isset( $item[ self::HANDLE ] ) ) {
				continue;
			}
			// Only check menu items with store capabilities to determine whether we are on a store screen.
			if ( in_array( $item[ self::CAPABILITY ], $store_capabilities, true ) ) {
				// Is it a store post type.
				if ( $typenow && in_array( $typenow, $post_types, true ) ) {
					$managing_store = true;
					break;
				}

				// Is it a store plugin page.
				if ( ! empty( $plugin_page ) ) {
					foreach ( $plugin_prefixes as $plugin_prefix ) {
						if ( 0 === strpos( $item[ self::HANDLE ], $plugin_prefix ) ) {
							$managing_store = true;
							break 2;
						}
					}
				}
			}
		}

		foreach ( $menu as $index => $item ) {
			// Skip separators.
			if ( ! isset( $item[ self::HANDLE ] ) ) {
				continue;
			}
			// Handle permanent pages.
			if ( in_array( $item[ self::HANDLE ], $permanent_items, true ) ) {
				if ( $managing_store ) {
					$this->store_menu[] = $item;
				}
				continue;
			}

			$is_store_page = in_array( $item[ self::CAPABILITY ], $store_capabilities, true );
			// Save the menu item if managing store and it's a store page.
			if ( $is_store_page && $managing_store ) {
				$this->store_menu[] = $item;
			}
			// Hide menu items if they are store context.
			if ( $is_store_page ) {
				$menu[ $index ][ self::CSS_CLASSES ] .= ' hide-if-js';
			}
		}

		// @todo Add filter to body class when managing store to add the folded class.
		return $menu;
	}

	/**
	 * Convert a WordPress menu callback to a URL.
	 *
	 * @param string $callback Menu callback.
	 * @return string
	 */
	protected function get_callback_url( $callback ) {
		$pos  = strpos( $callback, '?' );
		$file = $pos > 0 ? substr( $callback, 0, $pos ) : $callback;
		if ( file_exists( ABSPATH . "/wp-admin/$file" ) ) {
			return $callback;
		}
		return 'admin.php?page=' . $callback;
	}

	/**
	 * Get the menu items to use from the existing registered menu items.
	 *
	 * @param array $menu Top level dashboard menu items.
	 * @return array
	 */
	public function get_menu_items( $menu ) {
		foreach ( $menu as $index => $item ) {
			// If in mapped list of pages, add to items.
			if ( isset( $this->menu_item_map[ $item[ self::CALLBACK ] ] ) ) {
				$category                        = $this->menu_item_map[ $item[2] ];
				$this->store_menu[ $category ][] = array(
					'slug'  => $item[ self::CALLBACK ],
					'url'   => $this->get_callback_url( $item[ self::CALLBACK ] ),
					'title' => $item[ self::TITLE ],
				);

				// Remove from original WP admin menu.
				unset( $menu[ $index ] );
			}

			// @todo If is a WooCommerce related page by capability or top level item, add to 'Store' category by default.
		}

		return $menu;
	}

	/**
	 * Add the menu to the page output.
	 *
	 * @param array $menu Top level dashboard menu items.
	 * @return array
	 */
	public function add_menu_settings( $menu ) {
		global $submenu, $parent_file, $typenow, $self;

		$navigation = self::get_categories();
		foreach ( $navigation as $index => $category ) {
			$navigation[ $index ]['children'] = isset( $this->store_menu[ $category['slug'] ] )
				? $this->store_menu[ $category['slug'] ]
				: array();
		}

		$data_registry = \Automattic\WooCommerce\Blocks\Package::container()->get(
			\Automattic\WooCommerce\Blocks\Assets\AssetDataRegistry::class
		);

		$data_registry->add( 'wcNavigation', $navigation );

		return $menu;
	}
}
