<?php
/**
 * Handles running RINDS specs
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\Rinds;

defined( 'ABSPATH' ) || exit;

use \Automattic\WooCommerce\Admin\Notes\WC_Admin_Note;
use \Automattic\WooCommerce\Admin\PluginsProvider\PluginsProvider;

/**
 * RINDS engine.
 * This goes through the RINDS specs and runs (creates admin notes) for those
 * specs that are able to be triggered.
 */
class RindsEngine {
	const SPECS_OPTION_NAME = 'wc_rinds_specs';

	/**
	 * Initialize the engine.
	 */
	public static function init() {
		add_action( 'activated_plugin', array( __CLASS__, 'run' ) );
		add_action( 'deactivated_plugin', array( __CLASS__, 'run_on_deactivated_plugin' ), 10, 1 );
	}

	/**
	 * Go through the RINDS spec and run those specs that are able to be
	 * triggered.
	 */
	public static function run() {
		$specs = get_option( self::SPECS_OPTION_NAME );

		if ( false === $specs ) {
			// We are running too early, need to poll data sources first.
			return;
		}

		foreach ( $specs as $spec ) {
			RindsSpecRunner::run_spec( $spec );
		}
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
