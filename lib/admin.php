<?php
/**
 * Returns true if we are on a JS powered admin page.
 */
function wc_admin_is_admin_page() {
	global $hook_suffix;
	if ( in_array( $hook_suffix, array( 'woocommerce_page_wc-admin' ) ) ) {
		return true;
	}
	return false;
}

/**
 * Returns true if we are on a "classic" (non JS app) powered admin page.
 * `wc_get_screen_ids` will also return IDs for extensions that have properly registered themselves.
 */
function wc_admin_is_embed_enabled_wc_page() {
	$screen_id = wc_admin_get_current_screen_id();
	if ( ! $screen_id ) {
		return false;
	}

	$screens = wc_admin_get_embed_enabled_screen_ids();

	if ( in_array( $screen_id, $screens ) ) {
		return true;
	}
	return false;
}

/**
 * Register menu pages for the Dashboard and Analytics sections
 */
function wc_admin_register_pages(){
	global $menu, $submenu;

	// woocommerce_page_wc-admin
	add_submenu_page(
		'woocommerce',
		__( 'WooCommerce Dashboard', 'wc-admin' ),
		__( 'Dashboard', 'wc-admin' ),
		'manage_options',
		'wc-admin',
		'wc_admin_page'
	);


	// toplevel_page_wooanalytics
	add_menu_page(
		__( 'WooCommerce Analytics', 'wc-admin' ),
		__( 'Analytics', 'wc-admin' ),
		'manage_options',
		'wc-admin#/analytics',
		'wc_admin_page',
		'dashicons-chart-bar',
		56 // After WooCommerce & Product menu items
	);

	// TODO: Remove. Test report link
	add_submenu_page(
		'wc-admin#/analytics',
		__( 'Report Title', 'wc-admin' ),
		__( 'Report Title', 'wc-admin' ),
		'manage_options',
		'wc-admin#/analytics/test',
		'wc_admin_page'
	);

	add_submenu_page(
		'wc-admin#/analytics',
		__( 'Revenue', 'wc-admin' ),
		__( 'Revenue', 'wc-admin' ),
		'manage_options',
		'wc-admin#/analytics/revenue',
		'wc_admin_page'
	);

	add_submenu_page(
		'wc-admin#/analytics',
		__( 'Products', 'wc-admin' ),
		__( 'Products', 'wc-admin' ),
		'manage_options',
		'wc-admin#/analytics/products',
		'wc_admin_page'
	);
}
add_action( 'admin_menu', 'wc_admin_register_pages' );

/**
 * This method is temporary while this is a feature plugin. As a part of core,
 * we can integrate this better with wc-admin-menus.
 *
 * It makes dashboard the top level link for 'WooCommerce' and renames the first Analytics menu item.
 */
function wc_admin_link_structure() {
	global $submenu;
	// User does not have capabilites to see the submenu
	if ( ! current_user_can( 'manage_woocommerce' ) ) {
		return;
	}

	$wc_admin_key = null;
	foreach ( $submenu['woocommerce'] as $submenu_key => $submenu_item ) {
		if ( 'wc-admin' === $submenu_item[2] ) {
			$wc_admin_key = $submenu_key;
			break;
		}
	}

	if ( ! $wc_admin_key ) {
		return;
	}

	$menu    = $submenu['woocommerce'][ $wc_admin_key ];
	$menu[2] = 'admin.php?page=wc-admin#/';
	unset( $submenu['woocommerce'][ $wc_admin_key ] );

	array_unshift( $submenu['woocommerce'], $menu );
	$submenu['wc-admin#/analytics'][0][0] = __( 'Overview', 'wc-admin' );
}

// priority is 20 to run after https://github.com/woocommerce/woocommerce/blob/a55ae325306fc2179149ba9b97e66f32f84fdd9c/includes/admin/class-wc-admin-menus.php#L165
add_action( 'admin_head', 'wc_admin_link_structure', 20 );

/**
 * Load the assets on the admin pages
 */
function wc_admin_enqueue_script(){
	if ( ! wc_admin_is_admin_page() && ! wc_admin_is_embed_enabled_wc_page() ) {
		return;
	}

	wp_enqueue_script( WC_ADMIN_APP );
	wp_enqueue_style( WC_ADMIN_APP );
}
add_action( 'admin_enqueue_scripts', 'wc_admin_enqueue_script' );

function wc_admin_admin_body_class( $admin_body_class = '' ) {
	global $hook_suffix;

	if ( ! wc_admin_is_admin_page() && ! wc_admin_is_embed_enabled_wc_page() ) {
		return $admin_body_class;
	}

	$classes = explode( ' ', trim( $admin_body_class ) );
	$classes[] = 'woocommerce-page';
	if ( wc_admin_is_embed_enabled_wc_page() ) {
		$classes[] = 'woocommerce-embed-page';
	}
	$admin_body_class = implode( ' ', array_unique( $classes ) );
	return " $admin_body_class ";
}
add_filter( 'admin_body_class', 'wc_admin_admin_body_class' );


function wc_admin_admin_before_notices() {
	if ( ! wc_admin_is_admin_page() && ! wc_admin_is_embed_enabled_wc_page() ) {
		return;
	}
	echo '<div class="woocommerce-layout__notice-list-hide" id="wp__notice-list">';
	echo '<div class="wp-header-end" id="woocommerce-layout__notice-catcher"></div>'; // https://github.com/WordPress/WordPress/blob/f6a37e7d39e2534d05b9e542045174498edfe536/wp-admin/js/common.js#L737
}
add_action( 'admin_notices', 'wc_admin_admin_before_notices', 0 );

function wc_admin_admin_after_notices() {
	if ( ! wc_admin_is_admin_page() && ! wc_admin_is_embed_enabled_wc_page() ) {
		return;
	}
	echo '</div>';
}
add_action( 'admin_notices', 'wc_admin_admin_after_notices', PHP_INT_MAX );

// TODO Can we do some URL rewriting so we can figure out which page they are on server side?
function wc_admin_admin_title( $admin_title ) {
	if ( ! wc_admin_is_admin_page() && ! wc_admin_is_embed_enabled_wc_page() ) {
		return $admin_title;
	}

	if ( wc_admin_is_embed_enabled_wc_page() ) {
		$sections = wc_admin_get_embed_breadcrumbs();
		$sections = is_array( $sections ) ? $sections : array( $sections );
		$pieces   = array();

		foreach ( $sections as $section ) {
			$pieces[] = is_array( $section ) ? $section[ 1 ] : $section;
		}

		$pieces = array_reverse( $pieces );
		$title = implode( ' &lsaquo; ', $pieces );
	} else {
		$title = __( 'Dashboard', 'wc-admin' );
	}

	return sprintf( __( '%1$s &lsaquo; %2$s &#8212; WooCommerce', 'wc-admin' ), $title, get_bloginfo( 'name' ) );
}
add_filter( 'admin_title',  'wc_admin_admin_title' );

/**
 * Set up a div for the app to render into.
 */
function wc_admin_page(){
	?>
	<div class="wrap">
		<div id="root"></div>
	</div>
<?php
}

function wc_admin_tab_icon( $tab ) {
	switch ( $tab ) {
		case 'inbox':
			echo '<svg class="gridicon gridicons-mail" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M20 4H4c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zm0 4.236l-8 4.882-8-4.882V6h16v2.236z"></path></g></svg>';
			break;
		case 'orders':
			echo '<svg class="gridicon gridicons-pages" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M16 8H8V6h8v2zm0 2H8v2h8v-2zm4-6v12l-6 6H6c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zm-2 10V4H6v16h6v-4c0-1.105.895-2 2-2h4z"></path></g></svg>';
			break;
		case 'stock':
			echo '<svg class="gridicon gridicons-clipboard" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M16 18H8v-2h8v2zm0-6H8v2h8v-2zm2-9h-2v2h2v15H6V5h2V3H6c-1.105 0-2 .895-2 2v15c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zm-4 2V4c0-1.105-.895-2-2-2s-2 .895-2 2v1c-1.105 0-2 .895-2 2v1h8V7c0-1.105-.895-2-2-2z"></path></g></svg>';
			break;
		case 'reviews':
			echo '<svg class="gridicon gridicons-star" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 2l2.582 6.953L22 9.257l-5.822 4.602L18.18 21 12 16.89 5.82 21l2.002-7.14L2 9.256l7.418-.304"></path></g></svg>';
			break;
		case 'wpnotices':
			echo '<svg class="gridicon gridicons-my-sites" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.5 12c0-1.232.264-2.402.736-3.46L8.29 19.65C5.456 18.272 3.5 15.365 3.5 12zm8.5 8.5c-.834 0-1.64-.12-2.4-.345l2.55-7.41 2.613 7.157c.017.042.038.08.06.117-.884.31-1.833.48-2.823.48zm1.172-12.485c.512-.027.973-.08.973-.08.458-.055.404-.728-.054-.702 0 0-1.376.108-2.265.108-.835 0-2.24-.107-2.24-.107-.458-.026-.51.674-.053.7 0 0 .434.055.892.082l1.324 3.63-1.86 5.578-3.096-9.208c.512-.027.973-.08.973-.08.458-.055.403-.728-.055-.702 0 0-1.376.108-2.265.108-.16 0-.347-.003-.547-.01C6.418 5.025 9.03 3.5 12 3.5c2.213 0 4.228.846 5.74 2.232-.037-.002-.072-.007-.11-.007-.835 0-1.427.727-1.427 1.51 0 .7.404 1.292.835 1.993.323.566.7 1.293.7 2.344 0 .727-.28 1.572-.646 2.748l-.848 2.833-3.072-9.138zm3.1 11.332l2.597-7.506c.484-1.212.645-2.18.645-3.044 0-.313-.02-.603-.057-.874.664 1.21 1.042 2.6 1.042 4.078 0 3.136-1.7 5.874-4.227 7.347z"></path></g></svg>';
			break;
		case 'woo':
			echo '<svg height="24" width="24" viewBox="0 0 24 24"><path d="M18.9 2H5.1C3.4 2 2 3.4 2 5.1v10.7C2 17.6 3.4 19 5.1 19H9l6 3-1-3h4.9c1.7 0 3.1-1.4 3.1-3.1V5.1C22 3.4 20.6 2 18.9 2zm-1.5 4.5c-.4.8-.8 2.1-1 3.9-.3 1.8-.4 3.1-.3 4.1 0 .3 0 .5-.1.7-.1.2-.3.4-.6.4s-.6-.1-.9-.4c-1-1-1.8-2.6-2.4-4.6-.7 1.4-1.2 2.4-1.6 3.1-.6 1.2-1.2 1.8-1.6 1.9-.3 0-.5-.2-.8-.7-.5-1.4-1.1-4.2-1.7-8.2 0-.3 0-.5.2-.7.1-.2.4-.3.7-.4.5 0 .9.2.9.8.3 2.3.7 4.2 1.1 5.7l2.4-4.5c.2-.4.4-.6.8-.6.5 0 .8.3.9.9.3 1.4.6 2.6 1 3.7.3-2.7.8-4.7 1.4-5.9.2-.3.4-.5.7-.5.2 0 .5.1.7.2.2.2.3.4.3.6 0 .2 0 .4-.1.5z"></path></svg>';
			break;
	}
}

// TODO Update this function to be dynamic and reuse logic from the actual update indicator code
function wc_admin_tab_has_unread( $tab ) {
	$tabs = array(
		'inbox'     => true,
		'orders'    => false,
		'stock'     => false,
		'reviews'   => false,
	);
	return ! empty( $tabs [ $tab ] ) ? $tabs [ $tab ] : false;
}

/**
 * Set up a div for the header embed to render into.
 * The initial contents here are meant as a place loader for when the PHP page initialy loads.

 * TODO Icon Placeholders for the ActivityPanel, when we implement the new designs.
 */
function woocommerce_embed_page_header() {
	if ( ! wc_admin_is_embed_enabled_wc_page() ) {
		return;
	}

	$sections    = wc_admin_get_embed_breadcrumbs();
	$sections    = is_array( $sections ) ? $sections : array( $sections );
	$breadcrumbs = '';
	foreach ( $sections as $section ) {
		$piece = is_array( $section ) ? '<a href="' . esc_url( admin_url( $section[ 0 ] ) ) .'">' . $section[ 1 ] . '</a>' : $section;
		$breadcrumbs .= '<span>' . $piece . '</span>';
	}
	?>
	<div id="woocommerce-embedded-root">
		<div class="woocommerce-layout">
			<div class="woocommerce-layout__header is-embed-loading">
				<h1 class="woocommerce-layout__header-breadcrumbs">
					<span><a href="<?php echo esc_url( admin_url( 'admin.php?page=wc-admin#/' ) ); ?>">WooCommerce</a></span>
					<?php echo $breadcrumbs; ?>
				</h1>
				<div>
					<div id="woocommerce-activity-panel">
						<button type="button" class="components-button components-icon-button woocommerce-layout__activity-panel-mobile-toggle">
							<div class="woocommerce-layout__activity-panel-toggle-bubble">
								<?php wc_admin_tab_icon( 'woo' ); ?>
							</div>
						</button>
						<div class="woocommerce-layout__activity-panel">
							<div class="woocommerce-layout__activity-panel-tabs">
								<button type="button" class="components-button components-icon-button woocommerce-layout__activity-panel-tab <?php if ( wc_admin_tab_has_unread( 'inbox' ) ) {  echo 'has-unread'; } ?>">
									<?php wc_admin_tab_icon( 'inbox' ); ?><?php _e( 'Inbox', 'wc-admin' ) ?>
								</button>
								<button type="button" class="components-button components-icon-button woocommerce-layout__activity-panel-tab <?php if ( wc_admin_tab_has_unread( 'orders' ) ) {  echo 'has-unread'; } ?>">
									<?php wc_admin_tab_icon( 'orders' ); ?><?php _e( 'Orders', 'wc-admin' ) ?>
								</button>
								<button type="button" class="components-button components-icon-button woocommerce-layout__activity-panel-tab  <?php if ( wc_admin_tab_has_unread( 'stock' ) ) {  echo 'has-unread'; } ?>">
									<?php wc_admin_tab_icon( 'stock' ); ?><?php _e( 'Stock', 'wc-admin' ) ?>
								</button>
								<button type="button" class="components-button components-icon-button woocommerce-layout__activity-panel-tab  <?php if ( wc_admin_tab_has_unread( 'reviews' ) ) {  echo 'has-unread'; } ?>">
									<?php wc_admin_tab_icon( 'reviews' ); ?><?php _e( 'Reviews', 'wc-admin' ) ?>
								</button>
								<button type="button" class="components-button components-icon-button woocommerce-layout__activity-panel-tab woocommerce-layout__activity-panel-tab-wordpress-notices">
									<?php wc_admin_tab_icon( 'wpnotices' ); ?><?php _e( 'Notices', 'wc-admin' ) ?>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="woocommerce-layout__primary is-embed-loading" id="woocommerce-layout__primary">
			<div id="woocommerce-layout__notice-list" class="woocommerce-layout__notice-list"></div>
		</div>
	</div>
	<?php
}

add_action( 'in_admin_header', 'woocommerce_embed_page_header' );
