<?php
/**
 * PluginsHelper
 *
 * Helper class for the site's plugins.
 */

namespace Automattic\WooCommerce\Admin;

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'get_plugins' ) ) {
	require_once ABSPATH . 'wp-admin/includes/plugin.php';
}

/**
 * Class PluginsHelper
 */
class PluginsHelper {

	/**
	 * Get the path to the plugin file relative to the plugins directory from the plugin slug.
	 *
	 * E.g. 'woocommerce' returns 'woocommerce/woocommerce.php'
	 *
	 * @param string $slug Plugin slug to get path for.
	 *
	 * @return string|false
	 */
	public static function get_plugin_path_from_slug( $slug ) {
		$plugins = get_plugins();

		if ( strstr( $slug, '/' ) ) {
			// The slug is already a plugin path.
			return $slug;
		}

		foreach ( $plugins as $plugin_path => $data ) {
			$path_parts = explode( '/', $plugin_path );
			if ( $path_parts[0] === $slug ) {
				return $plugin_path;
			}
		}

		return false;
	}

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
	 * Get an array of installed plugins with their file paths as a key value pair.
	 *
	 * @return array
	 */
	public static function get_installed_plugins_paths() {
		$plugins           = get_plugins();
		$installed_plugins = array();

		foreach ( $plugins as $path => $plugin ) {
			$path_parts                 = explode( '/', $path );
			$slug                       = $path_parts[0];
			$installed_plugins[ $slug ] = $path;
		}

		return $installed_plugins;
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
	 * @param string $plugin Path to the plugin file relative to the plugins directory or the plugin directory name.
	 *
	 * @return bool
	 */
	public static function is_plugin_installed( $plugin ) {
		$plugin_path = self::get_plugin_path_from_slug( $plugin );
		return $plugin_path ? array_key_exists( $plugin_path, get_plugins() ) : false;
	}

	/**
	 * Checks if a plugin is active.
	 *
	 * @param string $plugin Path to the plugin file relative to the plugins directory or the plugin directory name.
	 *
	 * @return bool
	 */
	public static function is_plugin_active( $plugin ) {
		$plugin_path = self::get_plugin_path_from_slug( $plugin );
		return $plugin_path ? in_array( $plugin_path, get_option( 'active_plugins', array() ), true ) : false;
	}

	/**
	 * Get plugin data.
	 *
	 * @param string $plugin Path to the plugin file relative to the plugins directory or the plugin directory name.
	 *
	 * @return array|false
	 */
	public static function get_plugin_data( $plugin ) {
		$plugin_path = self::get_plugin_path_from_slug( $plugin );
		$plugins     = get_plugins();

		return isset( $plugins[ $plugin_path ] ) ? $plugins[ $plugin_path ] : false;
	}

	/**
	 * Install an array of plugins.
	 *
	 * @param array $plugins Plugins to install.
	 * @return array
	 */
	public static function install_plugins( $plugins ) {
		/**
		 * Filter the list of plugins to install.
		 *
		 * @param array $plugins A list of the plugins to install.
		 */
		$plugins = apply_filters( 'woocommerce_admin_plugins_pre_install', $plugins );

		if ( empty( $plugins ) || ! is_array( $plugins ) ) {
			return new \WP_Error( 'woocommerce_plugins_invalid_plugins', __( 'Plugins must be a non-empty array.', 'woocommerce-admin' ), 404 );
		}

		require_once ABSPATH . 'wp-admin/includes/plugin.php';
		include_once ABSPATH . '/wp-admin/includes/admin.php';
		include_once ABSPATH . '/wp-admin/includes/plugin-install.php';
		include_once ABSPATH . '/wp-admin/includes/plugin.php';
		include_once ABSPATH . '/wp-admin/includes/class-wp-upgrader.php';
		include_once ABSPATH . '/wp-admin/includes/class-plugin-upgrader.php';

		$existing_plugins  = self::get_installed_plugins_paths();
		$installed_plugins = array();
		$results           = array();
		$time              = array();
		$errors            = new \WP_Error();

		foreach ( $plugins as $plugin ) {
			$slug = sanitize_key( $plugin );

			if ( isset( $existing_plugins[ $slug ] ) ) {
				$installed_plugins[] = $plugin;
				continue;
			}

			$start_time = microtime( true );

			$api = plugins_api(
				'plugin_information',
				array(
					'slug'   => $slug,
					'fields' => array(
						'sections' => false,
					),
				)
			);

			if ( is_wp_error( $api ) ) {
				$properties = array(
					/* translators: %s: plugin slug (example: woocommerce-services) */
					'error_message' => __( 'The requested plugin `%s` could not be installed. Plugin API call failed.', 'woocommerce-admin' ),
					'api'           => $api,
					'slug'          => $slug,
				);
				wc_admin_record_tracks_event( 'install_plugin_error', $properties );

				do_action( 'woocommerce_plugins_install_api_error', $slug, $api );

				$errors->add(
					$plugin,
					sprintf(
						/* translators: %s: plugin slug (example: woocommerce-services) */
						__( 'The requested plugin `%s` could not be installed. Plugin API call failed.', 'woocommerce-admin' ),
						$slug
					)
				);

				continue;
			}

			$upgrader           = new \Plugin_Upgrader( new \Automatic_Upgrader_Skin() );
			$result             = $upgrader->install( $api->download_link );
			$results[ $plugin ] = $result;
			$time[ $plugin ]    = round( ( microtime( true ) - $start_time ) * 1000 );

			if ( is_wp_error( $result ) || is_null( $result ) ) {
				$properties = array(
					/* translators: %s: plugin slug (example: woocommerce-services) */
					'error_message' => __( 'The requested plugin `%s` could not be installed.', 'woocommerce-admin' ),
					'slug'          => $slug,
					'api'           => $api,
					'upgrader'      => $upgrader,
					'result'        => $result,
				);
				wc_admin_record_tracks_event( 'install_plugin_error', $properties );

				do_action( 'woocommerce_plugins_install_error', $slug, $api, $result, $upgrader );

				$errors->add(
					$plugin,
					sprintf(
						/* translators: %s: plugin slug (example: woocommerce-services) */
						__( 'The requested plugin `%s` could not be installed. Upgrader install failed.', 'woocommerce-admin' ),
						$slug
					)
				);
				continue;
			}

			$installed_plugins[] = $plugin;
		}

		return array(
			'installed' => $installed_plugins,
			'results'   => $results,
			'errors'    => $errors,
			'time'      => $time,
		);
	}

}
