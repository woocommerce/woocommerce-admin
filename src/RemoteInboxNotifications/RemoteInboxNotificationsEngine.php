<?php
/**
 * Handles running specs
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications;

defined( 'ABSPATH' ) || exit;

use \Automattic\WooCommerce\Admin\PluginsProvider\PluginsProvider;

/**
 * RemoteInboxNotifications engine.
 * This goes through the specs and runs (creates admin notes) for those
 * specs that are able to be triggered.
 */
class RemoteInboxNotificationsEngine {
	const SPECS_OPTION_NAME = 'wc_remote_inbox_notifications_specs';
	const DATA_OPTION_NAME  = 'wc_remote_inbox_notifications_data';

	/**
	 * Initialize the engine.
	 */
	public static function init() {
		add_action( 'activated_plugin', array( __CLASS__, 'run' ) );
		add_action( 'deactivated_plugin', array( __CLASS__, 'run_on_deactivated_plugin' ), 10, 1 );
		DataSetupForProducts::init();

		// Pre-fetch data so it has the correct initial values.
		self::get_data();
	}

	/**
	 * Go through the specs and run them.
	 */
	public static function run() {
		$specs = get_option( self::SPECS_OPTION_NAME );

		if ( false === $specs ) {
			// We are running too early, need to poll data sources first.
			return;
		}

		$data = self::get_data();

		foreach ( $specs as $spec ) {
			SpecRunner::run_spec( $spec, $data );
		}
	}

	/**
	 * Gets the data option, and does the initial set up if it doesn't already
	 * exist.
	 *
	 * @return object The data option.
	 */
	public static function get_data() {
		$data = get_option( self::DATA_OPTION_NAME );

		if ( false === $data ) {
			$data = new \stdClass();

			DataSetupForProducts::init_data( $data );

			add_option( self::DATA_OPTION_NAME, $data );
		}

		return $data;
	}

	/**
	 * The deactivated_plugin hook happens before the option is updated
	 * (https://github.com/WordPress/WordPress/blob/master/wp-admin/includes/plugin.php#L826)
	 * so this captures the deactivated plugin path and pushes it into the
	 * PluginsProvider.
	 *
	 * @param string $plugin Path to the plugin file relative to the plugins directory.
	 */
	public static function run_on_deactivated_plugin( $plugin ) {
		PluginsProvider::set_deactivated_plugin( $plugin );
		self::run();
	}
}
