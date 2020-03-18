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
		if ( ! function_exists( 'get_plugins' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}

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
	 * Checks if a plugin is installed.
	 *
	 * @param string $plugin_slug The plugin directory slug e.g. 'facebook-for-woocommerce'
	 *
	 * @return bool
	 */
	public static function is_plugin_installed( $plugin_slug ) {
		return in_array( $plugin_slug, self::get_installed_plugin_slugs() );
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

	/**
	 * Get plugin data.
	 *
	 * @param string $plugin_slug The plugin directory slug e.g. 'mailchimp-for-woocommerce'
	 *
	 * @return array|bool
	 */
	public static function get_plugin_data( $plugin_slug ) {
		if ( ! function_exists( 'get_plugins' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}

		$plugins = get_plugins();

		foreach( $plugins as $plugin_path => $data ) {
			$path_parts = explode( '/', $plugin_path );
			if ( $path_parts[0] === $plugin_slug ) {
				return $data;
			}
		}

		return false;
	}

}
