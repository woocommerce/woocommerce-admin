<?php
/**
 * REST API Reports Cache.
 *
 * Handles report data object caching.
 *
 * @package WooCommerce Admin/API
 */

namespace Automattic\WooCommerce\Admin\API\Reports;

defined( 'ABSPATH' ) || exit;

/**
 * REST API Reports Cache class.
 *
 * @package WooCommerce Admin/API
 */
class Cache {
	/**
	 * Cache version. Used to invalidate all cached values.
	 */
	const VERSION_OPTION = 'woocommerce_reports_cache_version';

	/**
	 * Increase cache version number.
	 *
	 * @return bool
	 */
	public static function bump_version() {
		$version = self::get_version();
		$version++; // @todo - reset this after a certain value? E.g. 9999?

		return update_option( self::VERSION_OPTION, $version );
	}

	/**
	 * Get cache version number.
	 *
	 * @return int
	 */
	public static function get_version() {
		$version = (int) get_option( self::VERSION_OPTION, 1 );

		return $version;
	}

	/**
	 * Get cached value.
	 *
	 * @param string $key Cache key.
	 * @return mixed
	 */
	public static function get( $key ) {
		$version = self::get_version();
		$value   = get_transient( $key . ':' . $version );

		return $value;
	}

	/**
	 * Update cached value.
	 *
	 * @param string $key   Cache key.
	 * @param mixed  $value New value.
	 * @return bool
	 */
	public static function set( $key, $value ) {
		$version = self::get_version();
		$result  = set_transient( $key . ':' . $version, $value );

		return $result;
	}
}
