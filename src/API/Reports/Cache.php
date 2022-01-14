<?php
/**
 * REST API Reports Cache.
 *
 * Handles report data object caching.
 */

namespace Automattic\WooCommerce\Admin\API\Reports;

defined( 'ABSPATH' ) || exit;

/**
 * REST API Reports Cache class.
 */
class Cache {
	/**
	 * Cache version. Used to invalidate all cached values.
	 */
	const VERSION_OPTION = 'woocommerce_reports';

	/**
	 * Invalidate cache.
	 */
	public static function invalidate() {
		\WC_Cache_Helper::get_transient_version( self::VERSION_OPTION, true );
	}

	/**
	 * Get cache version number.
	 *
	 * @return string
	 */
	public static function get_version() {
		$version = \WC_Cache_Helper::get_transient_version( self::VERSION_OPTION );

		return $version;
	}

	/**
	 * Get cached value.
	 *
	 * @param string $key Cache key.
	 * @return mixed
	 */
	public static function get( $key ) {
		$transient_version = self::get_version();
		$transient_value   = self::get_transient( $key );

		if (
			isset( $transient_value['value'], $transient_value['version'] ) &&
			$transient_value['version'] === $transient_version
		) {
			return $transient_value['value'];
		}

		return false;
	}

	/**
	 * Update cached value.
	 *
	 * @param string $key   Cache key.
	 * @param mixed  $value New value.
	 * @return bool
	 */
	public static function set( $key, $value ) {
		$transient_version = self::get_version();
		$transient_value   = array(
			'version' => $transient_version,
			'value'   => $value,
		);

		$result = self::set_transient( $key, $transient_value, WEEK_IN_SECONDS );

		return $result;
	}


	/**
	 * This is modified version of get_transient to bypass Memcache.
	 *
	 * See: https://a8c.slack.com/archives/C7U3Y3VMY/p1641938075104200
	 *
	 * Retrieves the value of a transient.
	 *
	 * If the transient does not exist, does not have a value, or has expired,
	 * then the return value will be false.
	 *
	 * @since 2.8.0
	 *
	 * @param string $transient Transient name. Expected to not be SQL-escaped.
	 * @return mixed Value of transient.
	 */
	public static function get_transient( $transient ) {
		/**
		 * Filters the value of an existing transient before it is retrieved.
		 *
		 * The dynamic portion of the hook name, `$transient`, refers to the transient name.
		 *
		 * Returning a truthy value from the filter will effectively short-circuit retrieval
		 * and return the passed value instead.
		 *
		 * @since 2.8.0
		 * @since 4.4.0 The `$transient` parameter was added
		 *
		 * @param mixed  $pre_transient The default value to return if the transient does not exist.
		 *                              Any value other than false will short-circuit the retrieval
		 *                              of the transient, and return that value.
		 * @param string $transient     Transient name.
		 */
		$pre = apply_filters( "pre_transient_{$transient}", false, $transient );

		if ( false !== $pre ) {
			return $pre;
		}

		$transient_option = '_transient_' . $transient;
		if ( ! wp_installing() ) {
			// If option is not in alloptions, it is not autoloaded and thus has a timeout.
			$alloptions = wp_load_alloptions();
			if ( ! isset( $alloptions[ $transient_option ] ) ) {
				$transient_timeout = '_transient_timeout_' . $transient;
				$timeout           = get_option( $transient_timeout );
				if ( false !== $timeout && $timeout < time() ) {
					delete_option( $transient_option );
					delete_option( $transient_timeout );
					$value = false;
				}
			}
		}

		if ( ! isset( $value ) ) {
			$value = get_option( $transient_option );
		}

		/**
		 * Filters an existing transient's value.
		 *
		 * The dynamic portion of the hook name, `$transient`, refers to the transient name.
		 *
		 * @since 2.8.0
		 * @since 4.4.0 The `$transient` parameter was added
		 *
		 * @param mixed  $value     Value of transient.
		 * @param string $transient Transient name.
		 */
		return apply_filters( "transient_{$transient}", $value, $transient );
	}

	/**
	 * This is modified version of set_transient to bypass Memcache.
	 *
	 * See: https://a8c.slack.com/archives/C7U3Y3VMY/p1641938075104200
	 *
	 * Sets/updates the value of a transient.
	 *
	 * You do not need to serialize values. If the value needs to be serialized,
	 * then it will be serialized before it is set.
	 *
	 * @since 2.8.0
	 *
	 * @param string $transient  Transient name. Expected to not be SQL-escaped.
	 *                           Must be 172 characters or fewer in length.
	 * @param mixed  $value      Transient value. Must be serializable if non-scalar.
	 *                           Expected to not be SQL-escaped.
	 * @param int    $expiration Optional. Time until expiration in seconds. Default 0 (no expiration).
	 * @return bool True if the value was set, false otherwise.
	 */
	public static function set_transient( $transient, $value, $expiration = 0 ) {

		$expiration = (int) $expiration;

		/**
		 * Filters a specific transient before its value is set.
		 *
		 * The dynamic portion of the hook name, `$transient`, refers to the transient name.
		 *
		 * @since 3.0.0
		 * @since 4.2.0 The `$expiration` parameter was added.
		 * @since 4.4.0 The `$transient` parameter was added.
		 *
		 * @param mixed  $value      New value of transient.
		 * @param int    $expiration Time until expiration in seconds.
		 * @param string $transient  Transient name.
		 */
		$value = apply_filters( "pre_set_transient_{$transient}", $value, $expiration, $transient );

		/**
		 * Filters the expiration for a transient before its value is set.
		 *
		 * The dynamic portion of the hook name, `$transient`, refers to the transient name.
		 *
		 * @since 4.4.0
		 *
		 * @param int    $expiration Time until expiration in seconds. Use 0 for no expiration.
		 * @param mixed  $value      New value of transient.
		 * @param string $transient  Transient name.
		 */
		$expiration = apply_filters( "expiration_of_transient_{$transient}", $expiration, $value, $transient );

		$transient_timeout = '_transient_timeout_' . $transient;
		$transient_option  = '_transient_' . $transient;

		if ( false === get_option( $transient_option ) ) {
			$autoload = 'yes';
			if ( $expiration ) {
				$autoload = 'no';
				add_option( $transient_timeout, time() + $expiration, '', 'no' );
			}
			$result = add_option( $transient_option, $value, '', $autoload );
		} else {
			// If expiration is requested, but the transient has no timeout option,
			// delete, then re-create transient rather than update.
			$update = true;

			if ( $expiration ) {
				if ( false === get_option( $transient_timeout ) ) {
					delete_option( $transient_option );
					add_option( $transient_timeout, time() + $expiration, '', 'no' );
					$result = add_option( $transient_option, $value, '', 'no' );
					$update = false;
				} else {
					update_option( $transient_timeout, time() + $expiration );
				}
			}

			if ( $update ) {
				$result = update_option( $transient_option, $value );
			}
		}

		if ( $result ) {

			/**
			 * Fires after the value for a specific transient has been set.
			 *
			 * The dynamic portion of the hook name, `$transient`, refers to the transient name.
			 *
			 * @since 3.0.0
			 * @since 3.6.0 The `$value` and `$expiration` parameters were added.
			 * @since 4.4.0 The `$transient` parameter was added.
			 *
			 * @param mixed  $value      Transient value.
			 * @param int    $expiration Time until expiration in seconds.
			 * @param string $transient  The name of the transient.
			 */
			do_action( "set_transient_{$transient}", $value, $expiration, $transient );

			/**
			 * Fires after the value for a transient has been set.
			 *
			 * @since 3.0.0
			 * @since 3.6.0 The `$value` and `$expiration` parameters were added.
			 *
			 * @param string $transient  The name of the transient.
			 * @param mixed  $value      Transient value.
			 * @param int    $expiration Time until expiration in seconds.
			 */
			do_action( 'setted_transient', $transient, $value, $expiration );
		}

		return $result;
	}

}
