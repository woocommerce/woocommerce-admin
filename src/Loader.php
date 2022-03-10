<?php

namespace Automattic\WooCommerce\Admin;

use Automattic\WooCommerce\Admin\DeprecatedClassFacade;
use Automattic\WooCommerce\Admin\Features\Features;

/**
 * Loader Class.
 *
 * @deprecated since 6.3.0, use WooCommerce\Internal\Admin\Loader.
 */
class Loader extends DeprecatedClassFacade {

	/**
	 * Returns if a specific wc-admin feature is enabled.
	 *
	 * @param  string $feature Feature slug.
	 * @return bool Returns true if the feature is enabled.
	 *
	 * @deprecated since 1.9.0, use Features::is_enabled( $feature )
	 */
	public static function is_feature_enabled( $feature ) {
		wc_deprecated_function( 'is_feature_enabled', '1.9', '\Automattic\WooCommerce\Internal\Admin\Features\Features::is_enabled()' );
		return Features::is_enabled( $feature );
	}

	/**
	 * Returns true if we are on a JS powered admin page or
	 * a "classic" (non JS app) powered admin page (an embedded page).
	 *
	 * @deprecated 6.3.0
	 */
	public static function is_admin_or_embed_page() {
		wc_deprecated_function( 'is_admin_or_embed_page', '6.3', '\Automattic\WooCommerce\Admin\PageController::is_admin_or_embed_page()' );
		return PageController::is_admin_or_embed_page();
	}

	/**
	 * Returns true if we are on a JS powered admin page.
	 *
	 * @deprecated 6.3.0
	 */
	public static function is_admin_page() {
		wc_deprecated_function( 'is_admin_page', '6.3', '\Automattic\WooCommerce\Admin\PageController::is_admin_page()' );
		return PageController::is_admin_page();
	}

	/**
	 * Returns true if we are on a "classic" (non JS app) powered admin page.
	 *
	 * @deprecated 6.3.0
	 */
	public static function is_embed_page() {
		wc_deprecated_function( 'is_embed_page', '6.3', '\Automattic\WooCommerce\Admin\PageController::is_embed_page()' );
		return PageController::is_embed_page();
	}
}
