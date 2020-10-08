<?php
/**
 * Navigation Experience
 *
 * @package Woocommerce Admin
 */

namespace Automattic\WooCommerce\Admin\Features;

use Automattic\WooCommerce\Admin\Features\Navigation\Screen;

/**
 * Contains logic for the Navigation
 */
class Navigation {
	/**
	 * Hook into WooCommerce.
	 */
	public function __construct() {
		error_log( Screen::is_woocommerce_page() );
		add_filter( 'woocommerce_admin_preload_options', array( $this, 'preload_options' ) );
	}

	/**
	 * Preload options to prime state of the application.
	 *
	 * @param array $options Array of options to preload.
	 * @return array
	 */
	public function preload_options( $options ) {
		$options[] = 'woocommerce_navigation_enabled';

		return $options;
	}
}
