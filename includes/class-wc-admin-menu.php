<?php
/**
 * Overrides admin menus for the WooCommerce App experience.
 *
 * @package Woocommerce Admin
 */

/**
 * WC_Admin_Menu_class Class.
 */
class WC_Admin_Menu {

	/**
	 * Stores instance of our class.
	 *
	 * @var WC_Admin_Menu instance
	 */
	protected static $instance = false;

	/**
	 * Constuctor.
	 */
	private function __construct() {
		add_action( 'current_screen', array( $this, 'setup' ) );
	}

	/**
	 * Gets instance.
	 */
	public static function get_instance() {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Sets up our various menu handlers.
	 */
	public function setup() {
		if ( WC_Admin_Loader::is_admin_page() || WC_Admin_Loader::is_embed_page() ) {
			add_action( 'admin_head', array( $this, 'remove_core_menus' ) );
			add_action( 'admin_head', array( $this, 'update_menu_structure' ) );
			add_action( 'wp_before_admin_bar_render', array( $this, 'modify_masterbar' ), 100000 );
		} else {
			add_action( 'admin_head', array( $this, 'remove_woocommerce_menus' ) );
		}

	}

	/**
	 * Removes core/plugin menus from WooCommerce.
	 */
	public function remove_core_menus() {
		remove_menu_page( 'index.php' );
		remove_menu_page( 'jetpack' );
		remove_menu_page( 'edit.php' );
		remove_menu_page( 'edit.php?post_type=feedback' );
		remove_menu_page( 'upload.php' );
		remove_menu_page( 'edit.php?post_type=page' );
		remove_menu_page( 'edit-comments.php' );
		remove_menu_page( 'themes.php' );
		remove_menu_page( 'plugins.php' );
		remove_menu_page( 'users.php' );
		remove_menu_page( 'tools.php' );
		remove_menu_page( 'link-manager.php' );
		remove_menu_page( 'options-general.php' );

		// Core settings pages.
		remove_submenu_page( 'options-general.php', 'options-general.php' );
		remove_submenu_page( 'options-general.php', 'options-writing.php' );
		remove_submenu_page( 'options-general.php', 'options-reading.php' );
		remove_submenu_page( 'options-general.php', 'options-discussion.php' );
		remove_submenu_page( 'options-general.php', 'options-media.php' );
		remove_submenu_page( 'options-general.php', 'options-permalink.php' );
		remove_submenu_page( 'options-general.php', 'privacy.php' );
		remove_submenu_page( 'options-general.php', 'sharing' );
	}

	/**
	 * Updates the WooCommerce menu structure on WooCommerces pages.
	 */
	public function update_menu_structure() {
		remove_menu_page( 'woocommerce' );
		global $menu, $submenu;

		array_unshift(
			$menu,
			array(
				__( 'Orders', 'woocommerce-admin' ),
				'edit_shop_orders',
				'edit.php?post_type=shop_order',
				__( 'Orders', 'woocommerce-admin' ),
				'menu-top menu-icon-order',
				'menu-posts-shop_order',
				'dashicons-admin-post',
			)
		);

		array_unshift(
			$menu,
			array(
				__( 'Dashboard', 'woocommerce-admin' ),
				'manage_woocommerce',
				'admin.php?page=wc-admin',
				__( 'Dashboard', 'woocommerce-admin' ),
				'menu-top menu-icon-generic toplevel_page_woocommerce menu-top-first',
				'toplevel_page_woocommerce',
				'dashicons-admin-generic',
			)
		);

		$menu[] = array( // phpcs:ignore
			__( 'Promotions', 'woocommerce-admin' ),
			'edit_shop_coupons',
			'edit.php?post_type=shop_coupon',
			__( 'Promotions', 'woocommerce-admin' ),
			'menu-top menu-icon-coupon',
			'menu-posts-shop_coupon',
			'dashicons-admin-post',
		);

		$menu[] = array( // phpcs:ignore
			__( 'Settings', 'woocommerce-admin' ),
			'manage_woocommerce',
			'admin.php?page=wc-settings',
			__( 'Settings', 'woocommerce-admin' ),
			'menu-top menu-icon-cog',
			'menu-posts-settings',
			'dashicons-admin-post',
		);
	}

	/**
	 * Removes WooCommerce menus from core.
	 */
	public function remove_woocommerce_menus() {
		remove_menu_page( 'wc-admin#/analytics/revenue' );
		remove_menu_page( 'edit.php?post_type=product' );

		global $submenu;

		unset( $submenu['woocommerce'] );

		$submenu['woocommerce'][0] = array( // phpcs:ignore
			__( 'WooCommerce', 'woocommerce-admin' ),
			'edit_shop_orders',
			'admin.php?page=wc-admin',
			__( 'WooCommerce', 'woocommerce-admin' ),
		);
	}

	/**
	 * Hide masterbar items on WooCommerce pages.
	 */
	public function modify_masterbar() {
		global $wp_admin_bar;

		if ( ! WC_Admin_Loader::is_admin_page() && ! WC_Admin_Loader::is_embed_page() ) {
			return false;
		}

		$nodes = $wp_admin_bar->get_nodes();
		foreach ( $nodes as $node ) {
			$wp_admin_bar->remove_menu( $node->id );
		}
	}

}

$wc_admin_menu = WC_Admin_Menu::get_instance();
