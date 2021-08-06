<?php
/**
 * Manages the WC Admin settings that need to be pre-loaded.
 */

namespace Automattic\WooCommerce\Admin;

defined( 'ABSPATH' ) || exit;

/**
 * \Automattic\WooCommerce\Admin\CategoryLookup class.
 */
class WCAdminSettingsRegistry {
	private $settings_prefix = 'admin';
	/**
	 * Class instance.
	 *
	 * @var Homescreen instance
	 */
	protected static $instance = null;

	/**
	 * Hook into WooCommerce.
	 */
	protected function __construct() {
		if ( did_action( 'woocommerce_blocks_loaded' ) ) {
			$this->on_plugins_loaded();
		} else {
			add_action( 'woocommerce_blocks_loaded', array( $this, 'on_woocommerce_blocks_loaded' ), 10 );
		}
	}

	/**
	 * Get class instance.
	 *
	 * @return object Instance.
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Setup plugin once all other plugins are loaded.
	 *
	 * @return void
	 */
	public function on_woocommerce_blocks_loaded() {
		if ( class_exists( '\Automattic\WooCommerce\Blocks\Assets\AssetDataRegistry' ) ) {
			\Automattic\WooCommerce\Blocks\Package::container()->get( \Automattic\WooCommerce\Blocks\Assets\AssetDataRegistry::class )->add(
				$this->settings_prefix,
				function() {
					error_log('called shared_settings hook');
					return apply_filters( 'woocommerce_admin_shared_settings', array() );
				},
				true
			);
		}
	}
}

