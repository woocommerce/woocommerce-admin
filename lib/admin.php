<?php
/**
 * Register menu pages for the Dashboard and Analytics sections.
 */
function wc_admin_register_pages() {
	global $menu, $submenu;

	wc_admin_add_menu_link( array(
		'id' => 'analytics',
		'title' => __( 'Analytics', 'wc-admin' ),
		'path'  => '/analytics',
		'js_page' => true,
	) );

	wc_admin_register_page( array(
		'id'     => 'analytics-report-test',
		'title'  => __( 'Report Title', 'wc-admin' ),
		'parent' => 'analytics',
		'path'   => '/analytics/test',
	) );

	wc_admin_register_page( array(
		'id'     => 'analytics-report-revenue',
		'title'  => __( 'Revenue', 'wc-admin' ),
		'parent' => 'analytics',
		'path'   => '/analytics/revenue',
	) );

	wc_admin_register_page( array(
		'id'     => 'analytics-report-products',
		'title'  => __( 'Products', 'wc-admin' ),
		'parent' => 'analytics',
		'path'   => '/analytics/products',
	) );

	wc_admin_register_page( array(
		'id'     => 'analytics-report-orders',
		'title'  => __( 'Orders', 'wc-admin' ),
		'parent' => 'analytics',
		'path'   => '/analytics/orders',
	) );

	wc_admin_connect_page( array(
		'id'     => 'coupons',
		'path'   => 'edit.php?post_type=shop_coupon',
		'title'  => __( 'Coupons', 'wc-admin' ),
		'screen_id' => 'edit-shop_coupon',
	) );

	wc_admin_connect_page( array(
		'id'          => 'coupons-add',
		'parent'      => 'coupons',
		'path'        => 'post-new.php?post_type=shop_coupon',
		'title'       => __( 'Add New', 'wc-admin' ),
		'screen_id'   => 'add-shop_coupon',
	) );

	wc_admin_connect_page( array(
		'id'        => 'products',
		'parent'    => null,
		'path'      => 'edit.php?post_type=product',
		'title'     => __( 'Products', 'wc-admin' ),
		'screen_id' => 'edit-product',
	) );

	wc_admin_add_menu_link( array(
		'id'     => 'products-all',
		'title'  => __( 'All Products', 'wc-admin' ),
		'parent' => 'products',
		'path'   => 'edit.php?post_type=product',
	) );

	wc_admin_connect_page( array(
		'id'     => 'products-add',
		'title'  => __( 'Add New', 'wc-admin' ),
		'parent' => 'products',
		'path'   => 'post-new.php?post_type=product',
		'screen_id' => 'add-product',
	) );

	wc_admin_add_menu_link( array(
		'id'     => 'coupons-test',
		'title'  => __( 'Test Link', 'wc-admin' ),
		'parent' => 'coupons-add',
		'path'   => '#test',
	) );

	wc_admin_add_menu_link( array(
		'id'     => 'coupons-test',
		'title'  => __( 'Test Link', 'wc-admin' ),
		'parent' => 'coupons-add',
		'path'   => '#test',
	) );

	wc_admin_connect_page( array(
		'id'           => 'edit-coupon',
		'title'        => __( 'Edit Coupon', 'wc-admin' ),
		'parent'       => 'coupons',
		'screen_id'    => 'shop_coupon',
		'show_in_menu' => false,
	) );

	wc_admin_connect_page( array(
		'id'        => 'settings',
		'title'     => __( 'Settings', 'wc-admin' ),
		'screen_id' => 'woocommerce_page_wc-settings-general',
		'path'      => 'admin.php?page=wc-settings',
	) );

	wc_admin_add_menu_link( array(
		'id'     => 'settings-general',
		'title'  => __( 'General', 'wc-admin' ),
		'parent' => 'settings',
		'path'   => 'admin.php?page=wc-settings&tab=general',
	) );

	wc_admin_connect_page( array(
		'id'        => 'settings-products',
		'title'     => __( 'Products', 'wc-admin' ),
		'parent'    => 'settings',
		'screen_id' => 'woocommerce_page_wc-settings-products',
		'path'      => 'admin.php?page=wc-settings&tab=products',
	) );
}
add_action( 'admin_menu', 'wc_admin_register_pages' );

/**
 * Load the assets on the admin pages
 */
function wc_admin_enqueue_script() {
	if ( ! is_wc_admin_page() ) {
		return;
	}

	wp_enqueue_script( WC_ADMIN_APP );
	wp_enqueue_style( WC_ADMIN_APP );
}
add_action( 'admin_enqueue_scripts', 'wc_admin_enqueue_script' );

function wc_admin_admin_body_class( $admin_body_class = '' ) {
	global $hook_suffix;

	if ( ! is_wc_admin_page() ) {
		return $admin_body_class;
	}

	$classes = explode( ' ', trim( $admin_body_class ) );
	$classes[] = 'woocommerce-page';
	if ( is_wc_admin_embed_page() ) {
		$classes[] = 'woocommerce-embed-page';
	}
	$admin_body_class = implode( ' ', array_unique( $classes ) );
	return " $admin_body_class ";
}
add_filter( 'admin_body_class', 'wc_admin_admin_body_class' );


function wc_admin_admin_before_notices() {
	if ( ! is_wc_admin_page() ) {
		return;
	}
	echo '<div class="woocommerce-layout__notice-list-hide" id="wp__notice-list">';
	echo '<div class="wp-header-end" id="woocommerce-layout__notice-catcher"></div>'; // https://github.com/WordPress/WordPress/blob/f6a37e7d39e2534d05b9e542045174498edfe536/wp-admin/js/common.js#L737
}
add_action( 'admin_notices', 'wc_admin_admin_before_notices', 0 );

function wc_admin_admin_after_notices() {
	if ( ! is_wc_admin_page() ) {
		return;
	}
	echo '</div>';
}
add_action( 'admin_notices', 'wc_admin_admin_after_notices', PHP_INT_MAX );

// TODO Can we do some URL rewriting so we can figure out which page they are on server side?
function wc_admin_admin_title( $admin_title ) {
	if ( ! is_wc_admin_page() ) {
		return $admin_title;
	}

	if ( is_wc_admin_embed_page() ) {
		$sections = wc_admin_get_breadcrumbs();
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

/**
 * Set up a div for the embedded header to render into.
 * The initial contents here are meant as a place loader for when the PHP page initialy loads.

 * TODO Icon Placeholders for the ActivityPanel, when we implement the new designs.
 */
function wc_admin_embed_page_header() {
	if ( ! is_wc_admin_embed_page() ) {
		return;
	}

	$sections    = wc_admin_get_breadcrumbs();
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
					<span><a href="<?php echo esc_url( admin_url( 'admin.php?page=woocommerce#/' ) ); ?>">WooCommerce</a></span>
					<?php echo $breadcrumbs; ?>
				</h1>
			</div>
		</div>
		<div class="woocommerce-layout__primary is-embed-loading" id="woocommerce-layout__primary">
			<div id="woocommerce-layout__notice-list" class="woocommerce-layout__notice-list"></div>
		</div>
	</div>
	<?php
}

add_action( 'in_admin_header', 'wc_admin_embed_page_header' );
