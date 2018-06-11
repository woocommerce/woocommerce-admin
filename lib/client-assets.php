<?php

/**
 * Registers the JS & CSS for the Dashboard
 */
function woo_dash_register_script() {
	global $title, $self;
	error_log($self);

	// Are we displaying the full React app or just embedding the header on a classic screen?
	$screen    = get_current_screen();
	$screen_id = $screen ? $screen->id : '';
	if ( in_array( $screen_id, wc_get_screen_ids() ) ) {
		$js_entry = 'dist/header.js';
		$css_entry = 'dist/css/header.css';
	} else {
		$js_entry = 'dist/index.js';
		$css_entry = 'dist/css/index.css';
	}

	wp_register_script(
		WOO_DASH_APP,
		woo_dash_url( $js_entry ),
		[ 'wp-components', 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-date' ],
		filemtime( woo_dash_dir_path( $js_entry ) ),
		true
	);

	wp_register_style(
		WOO_DASH_APP,
		woo_dash_url( $css_entry ),
		[ 'wp-edit-blocks' ],
		filemtime( woo_dash_dir_path( $css_entry ) )
	);

	// Set up the text domain and translations
	$locale_data = gutenberg_get_jed_locale_data( 'woo-dash' );
	$content = 'wp.i18n.setLocaleData( ' . json_encode( $locale_data ) . ', "woo-dash" );';
	wp_add_inline_script( WOO_DASH_APP, $content, 'before' );

	wp_enqueue_script( 'wp-api' );
	gutenberg_extend_wp_api_backbone_client();

	// TODO This is used for the breadcrumb text on "classic" screens.
	// it is naive, and if we move forward with this idea we should have a better way of registering sections and maybe use this as a fallback.
	$initial_page_title = $title;
	if ( substr( $initial_page_title, 0, 12 ) === 'WooCommerce ' ) {
		$initial_page_title = substr( $initial_page_title, 12 );
		$initial_page_title = ucfirst( $initial_page_title );
	}

	// Settings and variables can be passed here for access in the app
	$settings = array(
		'adminUrl' => admin_url(),
		'initialPageTitle' => $initial_page_title,
	);

	wp_add_inline_script(
		WOO_DASH_APP,
		'var wcSettings = '. json_encode( $settings ) . ';',
		'before'
	);

	// Resets lodash to wp-admin's version of lodash
	wp_add_inline_script(
		WOO_DASH_APP,
		'_.noConflict();',
		'after'
	);

}
add_action( 'admin_enqueue_scripts', 'woo_dash_register_script' );

/**
 * Load plugin text domain for translations.
 */
function woo_dash_load_plugin_textdomain() {
	load_plugin_textdomain( 'woo-dash', false, basename( dirname( __FILE__ ) ) . '/languages' );
}
add_action( 'plugins_loaded', 'woo_dash_load_plugin_textdomain' );
