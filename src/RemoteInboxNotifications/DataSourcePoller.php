<?php
/**
 * Handles polling and storage of specs
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications;

defined( 'ABSPATH' ) || exit;

/**
 * Specs data source poller class.
 * This handles polling specs from JSON endpoints, and
 * stores the specs in to the database as an option.
 */
class DataSourcePoller {
	const DATA_SOURCES = array(
		'http://two.wordpress.test/rinds-specs.json',
	);

	/**
	 * Polls the data sources for specs, persists those specs, and delete any
	 * specs that no longer exist in the data sources.
	 */
	public static function poll_data_sources() {
		$specs = array();

		// Note that this merges the specs from the data sources based on the slug - last one wins.
		foreach ( self::DATA_SOURCES as $url ) {
			$specs_from_data_source = self::read_data_source( $url, $specs );
			self::merge_specs( $specs_from_data_source, $specs );
		}

		// Persist the specs as an option.
		update_option( RemoteInboxNotificationsEngine::SPECS_OPTION_NAME, $specs );

		// Run the engine.
		RemoteInboxNotificationsEngine::run();
	}

	/**
	 * Read a single data source and return the read specs
	 *
	 * @param string $url The URL to read the specs from.
	 *
	 * @return array The specs that have been read from the data source.
	 */
	private static function read_data_source( $url ) {
		$response = wp_remote_get( $url );

		if ( is_wp_error( $response ) ) {
			return [];
		}

		$body  = $response['body'];
		$specs = json_decode( $body );

		if ( null === $specs ) {
			return [];
		}

		if ( ! is_array( $specs ) ) {
			return [];
		}

		return $specs;
	}

	/**
	 * Merge the specs.
	 *
	 * @param Array $specs_to_merge_in The specs to merge in to $specs.
	 * @param Array $specs             The master list of specs.
	 */
	private static function merge_specs( $specs_to_merge_in, &$specs ) {
		foreach ( $specs_to_merge_in as $spec ) {
			$slug           = $spec->slug;
			$specs[ $slug ] = $spec;
		}
	}
}
