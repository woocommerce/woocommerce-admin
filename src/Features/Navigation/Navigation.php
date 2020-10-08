<?php
/**
 * Navigation Experience
 *
 * @package Woocommerce Admin
 */

namespace Automattic\WooCommerce\Admin\Features;

use Automattic\WooCommerce\Admin\Loader;
use Automattic\WooCommerce\Admin\Features\Navigation\Screen;
use Automattic\WooCommerce\Admin\Features\Navigation\Menu;
use Automattic\WooCommerce\Admin\Features\Navigation\CoreMenu;

/**
 * Contains logic for the Navigation
 */
class Navigation {
	/**
	 * Hook into WooCommerce.
	 */
	public function __construct() {
		add_filter( 'woocommerce_admin_preload_options', array( $this, 'preload_options' ) );

		if ( Loader::is_feature_enabled( 'navigation' ) ) {
			add_action( 'in_admin_header', array( __CLASS__, 'embed_navigation' ) );

			Menu::instance()->init();
			CoreMenu::instance()->init();
			Screen::instance()->init();
		}
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

	/**
	 * Set up a div for the navigation.
	 * The initial contents here are meant as a place loader for when the PHP page initialy loads.
	 */
	public static function embed_navigation() {
		if ( ! Screen::is_woocommerce_page() ) {
			return;
		}

		?>
		<div id="woocommerce-embedded-navigation"></div>
		<?php
	}
}
