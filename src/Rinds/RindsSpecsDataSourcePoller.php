<?php
/**
 * Handles polling and storage of RINDS specs
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\Rinds;

defined( 'ABSPATH' ) || exit;

/**
 * RINDS specs data source poller class.
 * This handles polling RINDS specs from JSON endpoints, and
 * stores the specs in to the database as an option.
 */
class RindsSpecsDataSourcePoller {
	const DATA_SOURCES      = array(
		'http://two.wordpress.test/rinds-specs.json',
		'broken/url',
	);
	const SPECS_OPTION_NAME = 'wc_rinds_specs';

	/**
	 * Polls the data sources for specs, persists those specs, and delete any
	 * specs that no longer exist in the data sources.
	 */
	public static function poll_data_sources() {
		$specs = array();

		// Note that this merges the specs from the data sources based on the slug - last one wins.
		foreach ( self::DATA_SOURCES as $url ) {
			self::read_data_source( $url, $specs );
		}

		// Persist the specs as an option.
		$existing_option = get_option( self::SPECS_OPTION_NAME );

		if ( false === $existing_option ) {
			add_option( self::SPECS_OPTION_NAME, $specs );
		} else {
			update_option( self::SPECS_OPTION_NAME, $specs );
		}
	}

	/**
	 * Read a single data source and insert the read specs into $specs, using
	 * the spec slug as the key. So if the same or multiple data source has
	 * a spec with the same slug, the last spec wins.
	 *
	 * @param string $url   The URL to read the specs from.
	 * @param array  $specs The specs to read in to.
	 */
	private static function read_data_source( $url, &$specs ) {
		$response = wp_remote_get( $url );

		if ( is_wp_error( $response ) ) {
			return;
		}

		$body = $response['body'];
		$json = json_decode( $body );

		if ( null === $json ) {
			return;
		}

		foreach ( $json as $spec ) {
			$slug           = $spec->slug;
			$specs[ $slug ] = $spec;
		}
	}
}
