<?php
/**
 * WooCommerce Navigation Favorite
 *
 * @package Woocommerce Navigation
 */

namespace Automattic\WooCommerce\Admin\Features\Navigation;

use Automattic\WooCommerce\Admin\Loader;

/**
 * Contains logic for the WooCommerce Navigation menu.
 */
class Favorite {
	/**
	 * Class instance.
	 *
	 * @var Menu instance
	 */
	protected static $instance = null;

	/**
	 * Array index of menu capability.
	 *
	 * @var int
	 */
	const META_NAME = 'navigation_favorites';

	/**
	 * Get class instance.
	 */
	final public static function instance() {
		if ( ! static::$instance ) {
			static::$instance = new static();
		}
		return static::$instance;
	}

	/**
	 * Init.
	 */
	public function init() {}

	/**
	 * Set given favorites string to the user meta data.
	 *
	 * @param string $current_user_id Current user id.
	 * @param array  $favorites Array of favorite values to set.
	 */
	private static function set_meta_value( $current_user_id, $favorites ) {
		Loader::update_user_data_field( $current_user_id, self::META_NAME, wp_json_encode( (array) $favorites ) );
	}

	/**
	 * Add plugin to favorites
	 *
	 * @param string $plugin Identifier of plugin to add.
	 * @throws \Exception Throws exception when item already exists.
	 */
	public static function add_plugin( $plugin ) {
		$current_user_id = get_current_user_id();

		if ( ! $current_user_id || ! $plugin ) {
			throw new \Exception( 'invalid_input' );
		}

		$all_favorites = self::get_all();

		if ( in_array( $plugin, $all_favorites, true ) ) {
			throw new \Exception( 'already_exists' );
		}

		$all_favorites[] = $plugin;

		self::set_meta_value( $current_user_id, $all_favorites );

		return $all_favorites;
	}

	/**
	 * Remove plugin from favorites
	 *
	 * @param string $plugin Identifier of plugin to remove.
	 * @throws \Exception Throws exception when item does not exist.
	 */
	public static function remove_plugin( $plugin ) {
		$current_user_id = get_current_user_id();

		if ( ! $current_user_id || ! $plugin ) {
			throw new \Exception( 'invalid_input' );
		}

		$all_favorites = self::get_all();

		if ( ! in_array( $plugin, $all_favorites, true ) ) {
			throw new \Exception( 'does_not_exist' );
		}

		$altered_favorites = array_values( array_diff( $all_favorites, [ $plugin ] ) );

		self::set_meta_value( $current_user_id, $altered_favorites );

		return $altered_favorites;
	}

	/**
	 * Get all registered favorites
	 */
	public static function get_all() {
		$current_user_id = get_current_user_id();

		if ( ! $current_user_id ) {
			return;
		}

		$response = Loader::get_user_data_field( $current_user_id, self::META_NAME );

		return $response ? json_decode( $response, true ) : array();
	}

}
