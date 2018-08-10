<?php
class WC_Admin_Menu {
	static $instance = false;

	private function __construct() {
		add_action( 'wp_loaded', array( $this, 'setup' ) );
	}

	public static function getInstance() {
		if ( !self::$instance )
			self::$instance = new self;
		
		return self::$instance;
	}

	public function setup() {
		// TODO Only show on WooCommerce pages and WC plugin pages)
		// TODO Remove WooCommerce Navigation from Main Menu - Only a single WooCommerce link
		// TODO Only add WC and WC related plugins to the WC-Admin Experience (opt-in)
		add_action( 'admin_menu', array( $this, 'remove_core_menus' ), 1000000000 );
		add_action( 'wp_before_admin_bar_render', array( $this, 'modify_masterbar' ), 100000 );
		
	}

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

		// Core settings pages
		remove_submenu_page( 'options-general.php', 'options-general.php' ); 
		remove_submenu_page( 'options-general.php', 'options-writing.php' ); 
		remove_submenu_page( 'options-general.php', 'options-reading.php' ); 
		remove_submenu_page( 'options-general.php', 'options-discussion.php' ); 
		remove_submenu_page( 'options-general.php', 'options-media.php' ); 
		remove_submenu_page( 'options-general.php', 'options-permalink.php' );
		remove_submenu_page( 'options-general.php', 'privacy.php' );
		remove_submenu_page( 'options-general.php', 'sharing' ); 
	}

	public function modify_masterbar() {
		global $wp_admin_bar;

		if ( ! wc_admin_is_admin_page() && ! wc_admin_is_embed_enabled_wc_page() ) {
			return false;
		}

		$nodes = $wp_admin_bar->get_nodes();
		foreach( $nodes as $node ) {
			$wp_admin_bar->remove_menu( $node->id );
		}
	}

}

$WC_Admin_Menu = WC_Admin_Menu::getInstance();