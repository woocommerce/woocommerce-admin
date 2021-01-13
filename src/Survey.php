<?php
/**
 * Survey helper methods.
 */

namespace Automattic\WooCommerce\Admin;

defined( 'ABSPATH' ) || exit;

/**
 * Survey Class.
 */
class Survey {
	/**
	 * Get a survey's URL from a path.
	 *
	 * @param  string $path Path of the survey.
	 * @param  array  $query Query arguments as key value pairs.
	 * @return string Full URL to survey.
	 */
	public static function get_url( $path, $query = array() ) {
		$url = 'https://automattic.survey.fm' . $path;

		$source = self::get_source();
		if ( $source ) {
			$query['source'] = $source;
		}

		if ( ! empty( $query ) ) {
			$query_string = http_build_query( $query );
			$url          = $url . '?' . $query_string;
		}

		return $url;
	}

	/**
	 * Get the source.
	 *
	 * @return string|null
	 */
	public static function get_source() {
		return apply_filters( 'woocommerce_admin_survey_source', null );
	}
}
