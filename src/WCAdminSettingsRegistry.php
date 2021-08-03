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

	/**
	 * Settings is an array of closures that will be invoked just before
	 * asset data is generated for the enqueued script.
	 *
	 * @var array
	 */
	public $settings = [];

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
		if ( did_action( 'plugins_loaded' ) ) {
			$this->on_plugins_loaded();
		} else {
			add_action( 'plugins_loaded', array( $this, 'on_plugins_loaded' ), 10 );
		}
	}

	/**
	 * Get class instance.
	 *
	 * @return object Instance.
	 */
	public static function instance() {
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
	public function on_plugins_loaded() {
		if ( class_exists( '\Automattic\WooCommerce\Blocks\Assets\AssetDataRegistry' ) ) {
			\Automattic\WooCommerce\Blocks\Package::container()->get( \Automattic\WooCommerce\Blocks\Assets\AssetDataRegistry::class )->add(
				'wcAdminSettings2',
				function() {
					return call_user_func( array( $this, 'get_wc_admin_settings' ) );
				}
			);
		}
	}

	/**
	 * Loops through each registered lazy data callback and adds the returned
	 * value to the data array.
	 *
	 * This method is executed right before preparing the data for printing to
	 * the rendered screen.
	 *
	 * @return array
	 */
	protected function get_wc_admin_settings() {
		$data = array();
		foreach ( $this->settings as $key => $callback ) {
			if ( \is_callable( $callback ) ) {
				$data[ $key ] = call_user_func( $callback );
			}
		}
		return $data;
	}

	/**
	 * Interface for adding data to the registry.
	 *
	 * You can only register data that is not already in the registry identified by the given key. If there is a
	 * duplicate found, unless $ignore_duplicates is true, an exception will be thrown.
	 *
	 * @param string  $key The key used to reference the data being registered.
	 * @param mixed   $data_callback If not a function, registered to the registry as is. If a function, then the
	 *                                     callback is invoked right before output to the screen.
	 * @param boolean $check_key_exists If set to true, duplicate data will be ignored if the key exists.
	 *                                  If false, duplicate data will cause an exception.
	 *
	 * @throws InvalidArgumentException  Only throws when site is in debug mode. Always logs the error.
	 */
	public function add( $key, $data_callback, $check_key_exists = false ) {
		if ( $check_key_exists && array_key_exists( $key, $this->settings ) ) {
			return;
		}
		$this->settings[ $key ] = $data_callback;
	}
}

