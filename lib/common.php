<?php
/**
 * Retrieves the root plugin path.
 *
 * @param  string $file Optional relative path of the desired file.
 *
 * @return string Root path to the gutenberg custom fields plugin.
 */
function wc_admin_dir_path( $file = '' ) {
	return plugin_dir_path( dirname(__FILE__ ) ) . $file;
}

/**
 * Retrieves a URL to a file in the gutenberg custom fields plugin.
 *
 * @param  string $path Relative path of the desired file.
 *
 * @return string       Fully qualified URL pointing to the desired file.
 */
function wc_admin_url( $path ) {
	return plugins_url( $path, dirname( __FILE__ ) );
}

/**
 * Returns the current screen ID.
 * This is slightly different from WP's get_current_screen, in that it attaches an action,
 * so certain pages like 'add new' pages can have different breadcrumbs or handling.
 * It also catches some more unique dynamic pages like taxonomy/attribute management.
 *
 * Format: {$current_screen->action}-{$current_screen->action}-tab,
 * {$current_screen->action}-{$current_screen->action} if no tab is present,
 * or just {$current_screen->action} if no action or tab is present.
 *
 * @return string Current screen ID.
 */
function wc_admin_get_current_screen_id() {
	$current_screen = get_current_screen();
	if ( ! $current_screen ) {
		return false;
	}
	$current_screen_id = $current_screen->action ? $current_screen->action . '-' . $current_screen->id : $current_screen->id;

	if ( ! empty( $_GET['taxonomy' ] ) && ! empty( $_GET['post_type'] ) && 'product' === $_GET['post_type'] ) {
		$current_screen_id = 'product_page_product_attributes';
	}

	// Default tabs
	$pages_with_tabs = apply_filters( 'wc_admin_pages_with-tabs', array(
		'wc-reports'  => 'orders',
		'wc-settings' => 'general',
		'wc-status'   => 'status',
	) );
	if ( ! empty( $_GET['page' ] ) ) {
		if ( in_array( $_GET['page'], array_keys( $pages_with_tabs ) ) ) {
			if ( ! empty( $_GET['tab'] ) ) {
				$tab = $_GET['tab'];
			} else {
				$tab = $pages_with_tabs[ $_GET['page'] ];
			}
			$current_screen_id = $current_screen_id . '-' . $tab;
		}
	}

	return $current_screen_id;
}

/**
 * Return an object defining the currecy options for the site's current currency
 *
 * @return  array  Settings for the current currency {
 *     Array of settings.
 *
 *     @type string $code       Currency code.
 *     @type string $precision  Number of decimals.
 *     @type string $symbol     Symbol for currency.
 * }
 */
function wc_admin_currency_settings() {
	$code = get_woocommerce_currency();

	return apply_filters(
		'wc_currency_settings', array(
			'code'      => $code,
			'precision' => wc_get_price_decimals(),
			'symbol'    => get_woocommerce_currency_symbol( $code ),
		)
	);
}
