<?php
// TODO Add support for priorities.

/**
 * Adds a JS powered page to wc-admin.
 *
 * @param array $options {
 *	 Array describing the page.
 *
 *   @type string      id           Id to reference the page.
 *	 @type string      title        Page title. Used in menus and breadcrumbs.
 *   @type string|null parent       Parent ID. Null for new top level page.
 *   @type string      path         Path for this page, full path in app context; ex /analytics/report
 *   @type string      screen_id    WooCommerce screen ID (wc_admin_get_current_screen_id`). Used for correctly identifying which pages are wc-admin pages.
 *   @type string      capability   Capability needed to access the page.
 *   @type bool        show_in_menu True if this page should be shown in the sidebar. False otherwise.
 *   @type string      icon         Icon. Dashicons helper class, base64-encoded SVG, or 'none'.
 * }
 */
function wc_admin_register_page( $options ) {
	$defaults = array(
		'parent'       => null,
		'capability'   => 'manage_options',
		'show_in_menu' => true,
		'screen_id'    => 'toplevel_page_woocommerce',
		'path'         => '',
	);

	$options            = wp_parse_args( $options, $defaults );
	$options['js_page'] = true;
	$options['path']    = 'admin.php?page=woocommerce#' . $options['path'];
	
	if ( ! empty( $options['parent'] ) ) {
		add_submenu_page(
			$options['parent'],
			$options['title'],
			$options['title'],
			$options['capability'],
			$options['path'],
			'wc_admin_page'
		);
	} else {
		add_menu_page(
			$options['title'],
			$options['title'],
			$options['capability'],
			$options['path'],
			'wc_admin_page',
			''
		);
	}

	$WC_Admin_Page_Controller = WC_Admin_Page_Controller::getInstance();
	if ( true === $options['show_in_menu'] ) {
		$WC_Admin_Page_Controller->register_menu( $options );
	}
	$WC_Admin_Page_Controller->register_page( $options );
}

/**
 * Connects a wp-admin page to a wc-admin page.
 * The page will no longer be shown in wp-admin and will get WooCommerce design elements (breadcrumbs, nav, purples, etc).
 *
 * @param array $options {
 *	 Array describing the page.
 *
 *   @type string      id           Id to reference the page.
 *	 @type string      title        Page title. Used in menus and breadcrumbs.
 *   @type string|null parent       Parent ID. Null for new top level page.
 *   @type string      path         Path for this page, full path in app context; ex /analytics/report
 *   @type string      screen_id    WooCommerce screen ID (wc_admin_get_current_screen_id`). Used for correctly identifying which pages are wc-admin pages.
 *   @type string      capability   Capability needed to access the page.
 *   @type bool        show_in_menu True if this page should be shown in the sidebar. False otherwise.
 *   @type string      icon         Icon. Dashicons helper class, base64-encoded SVG, or 'none'.
 * }
 */
function wc_admin_connect_page( $options ) {
	$defaults = array(
		'parent'       => null,
		'capability'   => 'manage_options',
		'show_in_menu' => true,
	);
	$options            = wp_parse_args( $options, $defaults );
	$options['js_page'] = false;

	$WC_Admin_Page_Controller = WC_Admin_Page_Controller::getInstance();
	if ( true === $options['show_in_menu'] ) {
		$WC_Admin_Page_Controller->register_menu( $options );
	}
	$WC_Admin_Page_Controller->register_page( $options );
}

/**
 * Adds an arbitary menu link to wc-admin.
 *
 * @param array $options {
 *	 Array describing the menu item.
 *
 *   @type string      id           Id to reference the page.
 *	 @type string      title        Page title. Used in menus and breadcrumbs.
 *   @type string|null parent       Parent ID. Null for new top level page.
 *   @type string      path         Path for this page, full path in app context; ex /analytics/report
 *   @type string      screen_id    WooCommerce screen ID (wc_admin_get_current_screen_id`). Used for correctly identifying which pages are wc-admin pages.
 *   @type string      capability   Capability needed to access the page.
 *   @type bool        show_in_menu True if this page should be shown in the sidebar. False otherwise.
 *   @type string      icon         Icon. Dashicons helper class, base64-encoded SVG, or 'none'.
 *   @type bool        js_page      True if this links to a JS powered wc-admin page. False otherwise.
 * }
 */
function wc_admin_add_menu_link( $options ) {
	$defaults = array(
		'parent'     => null,
		'capability' => 'manage_options',
		'js_page'    => false,
	);
	$options = wp_parse_args( $options, $defaults );
	
	$options['show_in_menu'] = true;
	$options['path']         = $options['js_page'] ? 'admin.php?page=woocommerce#' . $options['path'] : $options['path'];
	
	$WC_Admin_Page_Controller = WC_Admin_Page_Controller::getInstance();
	$WC_Admin_Page_Controller->register_menu( $options );
}

/**
 * Returns breadcrumbs for the current page.
 *
 * @return array Array of breadcrumb steps. Example: array( 'Settings', 'Genera' );
 */
function wc_admin_get_breadcrumbs() {
	$WC_Admin_Page_Controller = WC_Admin_Page_Controller::getInstance();
	return $WC_Admin_Page_Controller->get_breadcrumbs_for_screen();
}

/**
 * Returns if we are on a JS powered admin page.
 *
 * @return bool True if this is a JS powered admin page. False otherwise.
 */
function is_wc_admin_page() {
	$WC_Admin_Page_Controller = WC_Admin_Page_Controller::getInstance();
	$pages                    = $WC_Admin_Page_Controller->get_registered_pages();
	$screen_id                = wc_admin_get_current_screen_id();
	$is_registered_page       = false;

	foreach ( $pages as $page ) {
		if ( $screen_id === $page['screen_id' ] ) {
			$is_registered_page = true;
			break;
		}
	}

	return $is_registered_page;
}

/**
 * Returns if we are on a "classic" (non JS app) powered admin page where we need to embed parts of the wc-admin experience.
 *
 * @return bool True if this is a classic admin page. False otherwise.
 */
function is_wc_admin_embed_page() {
	$WC_Admin_Page_Controller = WC_Admin_Page_Controller::getInstance();
	$pages                    = $WC_Admin_Page_Controller->get_registered_pages();
	$screen_id                = wc_admin_get_current_screen_id();
	$is_embed_page            = false;

	foreach ( $pages as $page ) {
		if ( $screen_id === $page['screen_id' ] && ! $page['js_page'] ) {
			$is_embed_page = true;
			break;
		}
	}

	return $is_embed_page;
}

/**
 * Returns wc-admin menu information for use as a JSON object in the JS app.
 *
 * @return array All menu items, and some info about the current page.
 */
function wc_admin_menu_json() {
	$WC_Admin_Page_Controller = WC_Admin_Page_Controller::getInstance();
	$menus                    = $WC_Admin_Page_Controller->get_registered_menus();
	$ids                      = $WC_Admin_Page_Controller->get_ids_for_current_page();

	return array_merge( $ids, array(
		'menus'      => $menus,
		'pathsToIds' => $WC_Admin_Page_Controller->get_path_to_id_mapping(),
	) );
}

/**
 * WC_Admin_Page_Controller
 * 
 * Manages all of the admin pages that make up the 'wc-admin' application.
 * This includes registering support for wc-admin, menu handling, and breadcrumb generation.
 * Generally, the class is not used directly. The following helper functions can be used instead:
 *
 * wc_admin_register_page, wc_admin_connect_page, wc_admin_add_menu_link, wc_admin_get_breadcrumbs,
 * is_wc_admin_page, is_wc_admin_embed_page.
 * 
 */
class WC_Admin_Page_Controller {
	static $instance = false;

	/**
	 * wc-admin menu items
	 * Only pages with show_in_menu, or extra links added via `wc_admin_add_menu_link` show up here.
	 */
	private $menus = array();

	/**
	 * wc-admin registered pages
	 * Contains information (breadcrumbs, menu info) about JS powered pages and classic WooCommerce pages.
	 */
	private $pages = array();

	/**
	 * We want a single instance of this class so we can accurately track registered menus and pages.
	 */
	public static function getInstance() {
		if ( !self::$instance )
			self::$instance = new self;
		
		return self::$instance;
	}

	/**
	 * Hooks into WordPress to overtake the menu system on WooCommerce pages.
	 */
	private function __construct() {
		add_action( 'wp_loaded', array( $this, 'setup_menu_hooks' ) );
	}

	public function setup_menu_hooks() {
		$late_priority = PHP_INT_MAX;
		add_action( 'admin_head', array( $this, 'remove_woocommerce_menus' ), $late_priority );
		add_action( 'admin_head', array( $this, 'menu_handler' ), $late_priority );
		add_action( 'admin_menu', array( $this, 'add_main_woocommerce_link' ), $late_priority );
	}

	/**
	 * Registers a menu item.
	 * @param array $options. Array describing the menu. See wc_admin_register_page.
	 */
	public function register_menu( $options ) {
		global $menu, $submenu;
		$this->menus[] = $options;
		$this->id_mapping_to_path[ $options['id' ] ] = $options['path'];
	}

	/**
	 * Registers a page.
	 *
	 * @param array $options. Array describing the page. See wc_admin_register_page.
	 */
	public function register_page( $options ) {
		$this->pages[] = $options;
	}

	/**
	 * Returns an array of registered wc-admin pages.
	 *
	 * @return array Array of registered pages.
	 */
	public function get_registered_pages() {
		return $this->pages;
	}

	/**
	 * Returns an array of registered wc-admin menus.
	 *
	 * @return array Array of registered menus.
	 */
	public function get_registered_menus() {
		return $this->menus;
	}

	/**
	 * Returns an array of path to ID maps.
	 *
	 * @return array Array paths to ids.
	 */
	public function get_path_to_id_mapping() {
		return array_flip( $this->id_mapping_to_path );
	}

	/**
	 * Gets ids associated with the current page.
	 *
	 * @return array Array of page info. Contains `current_id` for the current page, and 'parent' for the parent object.
	 */
	public function get_ids_for_current_page() {
		$screen_id  = wc_admin_get_current_screen_id();
		
		if ( 'toplevel_page_woocommerce' === $screen_id ) {
			return( array(
				'current_id' => '',
				'parent'     => '',
			) );
		}

		$current_id = null;
		$parent     = null;
		foreach ( $this->pages as $page ) {
			if ( $screen_id === $page['screen_id' ] ) {
				$current_id = $page['id'];
				$parent     = $page['parent'];
				break;
			}
		}

		return array(
			'current_id' => $current_id,
			'parent'     => $parent,
		);
	}

	/**
	 * Returns breadcrumbs for the current screen.
	 *
	 * @return array Array of breadcrumb steps.
	 */
	function get_breadcrumbs_for_screen() {
		$screen_id   = wc_admin_get_current_screen_id();
		$breadcrumbs = array();
		$steps       = array();

		if ( 'toplevel_page_woocommerce' === $screen_id ) {
			return ''; // Handled via the app
		}

		$parent_item = array();
		$page_ids    = $this->get_ids_for_current_page();
		$current_id  = $page_ids['current_id'];
		$parent      = $page_ids['parent'];

		if ( $parent !== null ) {
			$has_sub_items = false;
			foreach ( $this->pages as $page_item ) {
				if ( $parent === $page_item['id' ] ) {
					$parent_item = $page_item;
				}
			}
			foreach( $this->pages as $page_item ) {
				if ( $current_id === $page_item['id'] ) {
					$steps[] = array( $parent_item['path'], $parent_item['title'] );
					$steps[] = array( $page_item['path'], $page_item['title'] );
					break;
				}
			}
		} else {
			foreach ( $this->pages as $page_item ) {
				if ( $current_id === $page_item['id'] ) {
					$steps[] = array( $page_item['path'], $page_item['title'] );
					break;
				}
			}
		}

		// The final breadcrumb step should never be linked.
		$last_key = count( $steps ) - 1;
		$steps[ $last_key ] = $steps[ $last_key ][ 1 ];

		return $steps;
	}

	/**
	 * Gets the displayable menus for the current screen.
	 *
	 * @return array Array of menu items.
	 */
	function get_menus_for_screen() {
		$screen_id = wc_admin_get_current_screen_id();
		$menus     = array();
	
		// JS App. Show all navigation
		if ( 'toplevel_page_woocommerce' === $screen_id ) {
			foreach ( $this->menus as $menu_item ) {
				if ( empty( $menu_item['parent'] ) ) {
					$menus[] = $menu_item;
				}
			}
			return $menus;
		}

		$parent_item = array();
		$page_ids    = $this->get_ids_for_current_page();
		$current_id  = $page_ids['current_id'];
		$parent      = $page_ids['parent'];
		if ( $parent !== null ) {
			$has_sub_items = false;
			foreach ( $this->menus as $menu_item ) {
				if ( $parent === $menu_item['id' ] ) {
					$parent_item = $menu_item;
				}
				if ( $current_id === $menu_item['parent'] ) {
					$has_sub_items = true;
				}
			}

			foreach( $this->menus as $menu_item ) {
				// This is a third level navigation item 
				if ( $has_sub_items && $current_id === $menu_item['id'] ) {
					$parent_item['id'] = $menu_item['id'];
					$parent_item['path'] = $menu_item['path'];
					$parent_item['parent'] = '';
					$parent_item['title'] = $parent_item['title'] . ' / ' . $menu_item['title'];
					break;
				}

				if ( $parent === $menu_item['parent'] ) {
					$menus[] = $menu_item;
				}
			}

		} else {
			foreach ( $this->menus as $menu_item ) {
				if ( $current_id === $menu_item['id'] ) {
					$parent_item = $menu_item;
					break;
				}
			}
		}

		array_unshift( $menus, $parent_item );

		foreach ( $this->menus as $menu_item ) {
			if ( $current_id === $menu_item['parent'] ) {
				$menus[] = $menu_item;
			}
		}

		return $menus;
	}

	/**
	 * Takes the registered menus for wc-admin, and converts them to WP's menu system.
	 */
	function menu_handler() {
		global $menu, $submenu;

		if ( ! is_wc_admin_page() ) {
			return false;
		}

		// Resets All Registered WP Menus
		$menu    = array();
		$submenu = array();
		
		$menus_for_screen = $this->get_menus_for_screen();
		foreach ( $menus_for_screen as $menu_item ) {
			$icon_class = empty( $menu_item['icon'] ) ? 'menu-icon-generic' : '';
			$icon       = empty( $menu_item['icon'] ) ? 'dashicons-admin-generic' : $menu_item['icon'];
			$hookname   = get_plugin_page_hookname( plugin_basename( $menu_item['id'] ), '' );

			if ( empty( $menu_item['parent' ] ) ) {
				$menu[] = array(
					$menu_item['title'],
					$menu_item['capability'],
					$this->id_mapping_to_path[ $menu_item['id'] ], // ?
					'',
					'menu-top ' . $icon_class . $hookname,
					$hookname,
					$icon,
				);
			} else {
				$submenu[ $this->id_mapping_to_path[ $menu_item['parent'] ] ][] = array(
					$menu_item['title'],
					$menu_item['capability'],
					$menu_item['path'],
					$menu_item['title'],
				);
			}
		}
	}

	/**
	 * Main handler for the single page app.
	 * This is also our main entry point/link to WooCommerce from wp-admin.
	 */
	public function add_main_woocommerce_link() {
		global $menu, $submenu;
		add_menu_page(
			__( 'WooCommerce', 'wc-admin' ),
			__( 'WooCommerce', 'wc-admin' ),
			'manage_options',
			'woocommerce',
			'wc_admin_page',
			'',
			56
		);
	}

	/**
	 * Removes all registered WooCommerce menus from wp-admin.
	 */
	public function remove_woocommerce_menus() {
		global $menu, $submenu;	

		if ( is_wc_admin_page() ) {
			return false;
		}

		foreach ( $menu as $menu_item ) {
			if ( in_array( $menu_item[ 2 ], $this->id_mapping_to_path ) ) {
				remove_menu_page( $menu_item[ 2 ] );
			}
		}

		remove_menu_page( 'woocommerce' );

		foreach ( $submenu as $submenu_key => $submenu_items ) {
			foreach ( $submenu_items as $submenu_item ) {
				if ( in_array( $submenu_item[ 2 ], $this->id_mapping_to_path ) || 'woocommerce' === $submenu_key ) {
					remove_submenu_page( $submenu_key, $submenu_item[ 2 ] );
				}
			}
		}
	}
}

$WC_Admin_Page_Controller = WC_Admin_Page_Controller::getInstance();