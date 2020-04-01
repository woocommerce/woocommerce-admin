<?php
/**
 * REST API Reports cacheable traits
 *
 * Collection of utility methods for caching reports.
 *
 * @package WooCommerce Admin/API
 */

namespace Automattic\WooCommerce\Admin\API\Reports;

defined( 'ABSPATH' ) || exit;

/**
 * CacheableTraits class.
 */
trait CacheableTraits {
	/**
	 * Whether or not the report should use the caching layer.
	 *
	 * Provides an opportunity for plugins to prevent reports from using cache.
	 *
	 * @return boolean Whether or not to utilize caching.
	 */
	protected function should_use_cache() {
		/**
		 * Determines if a report will utilize caching.
		 *
		 * @param bool $use_cache Whether or not to use cache.
		 * @param string $cache_key The report's cache key. Used to identify the report.
		 */
		return (bool) apply_filters( 'woocommerce_analytics_report_should_use_cache', true, $this->cache_key );
	}

	/**
	 * Returns string to be used as cache key for the data.
	 *
	 * @param array $params Query parameters.
	 * @return string
	 */
	protected function get_cache_key( $params ) {
		return implode(
			'_',
			array(
				'wc_report',
				$this->cache_key,
				md5( wp_json_encode( $params ) ),
			)
		);
	}

	/**
	 * Wrapper around Cache::get().
	 *
	 * @param string $cache_key Cache key.
	 * @return mixed
	 */
	protected function get_cached_data( $cache_key ) {
		if ( $this->should_use_cache() ) {
			return Cache::get( $cache_key );
		}

		return false;
	}

	/**
	 * Wrapper around Cache::set().
	 *
	 * @param string $cache_key Cache key.
	 * @param mixed  $value     New value.
	 * @return bool
	 */
	protected function set_cached_data( $cache_key, $value ) {
		if ( $this->should_use_cache() ) {
			return Cache::set( $cache_key, $value );
		}

		return true;
	}
}
