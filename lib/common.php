<?php

/**
 * Retrieves the root plugin path.
 *
 * @param  string $file Optional relative path of the desired file.
 *
 * @return string Root path to the gutenberg custom fields plugin.
 */
function woo_dash_dir_path( $file = '' ) {
	return plugin_dir_path( dirname(__FILE__ ) ) . $file;
}

/**
 * Retrieves a URL to a file in the gutenberg custom fields plugin.
 *
 * @param  string $path Relative path of the desired file.
 *
 * @return string       Fully qualified URL pointing to the desired file.
 */
function woo_dash_url( $path ) {
	return plugins_url( $path, dirname( __FILE__ ) );
}

/**
 * Returns breadcrumbs for the current page.
 *
 * @return todo
 */
function woo_dash_get_breadcrumb_sections() {
	global $title;
	// TODO This is used for the breadcrumb text on "classic" screens.
	// it is naive, and if we move forward with this idea we should have a better way of registering sections and maybe use this as a fallback.
	$initial_page_title = $title;
	if ( substr( $initial_page_title, 0, 12 ) === 'WooCommerce ' ) {
		$initial_page_title = substr( $initial_page_title, 12 );
		$initial_page_title = ucfirst( $initial_page_title );
	}
	return $initial_page_title;
}