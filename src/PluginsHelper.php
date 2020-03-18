<?php
/**
 * PluginsHelper
 *
 * Helper class for the site's plugins.
 *
 * @package Woocommerce Admin
 */

namespace Automattic\WooCommerce\Admin;

/**
 * Class PluginsHelper
 */
class PluginsHelper {

	/**
	 * Get an array of installed plugin slugs.
	 *
	 * @return array
	 */
	public static function get_installed_plugin_slugs() {
		return array_map(
			function( $plugin_path ) {
				$path_parts = explode( '/', $plugin_path );
				return $path_parts[0];
			},
			array_keys( get_plugins() )
		);
	}

	/**
	 * Get an array of active plugin slugs.
	 *
	 * @return array
	 */
	public static function get_active_plugin_slugs() {
		return array_map(
			function( $plugin_path ) {
				$path_parts = explode( '/', $plugin_path );
				return $path_parts[0];
			},
			get_option( 'active_plugins', array() )
		);
	}

	/**
	 * Checks if a plugin is active.
	 *
	 * @param string $plugin_slug The plugin directory slug e.g. 'mailchimp-for-woocommerce'
	 *
	 * @return bool
	 */
	public static function is_plugin_active( $plugin_slug ) {
		return in_array( $plugin_slug, self::get_active_plugin_slugs() );
	}

}
