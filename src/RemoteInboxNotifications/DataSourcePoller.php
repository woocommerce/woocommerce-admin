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
			self::read_data_source( $url, $specs );
		}

		// Persist the specs as an option.
		update_option( RemoteInboxNotificationsEngine::SPECS_OPTION_NAME, $specs );

		// Run the engine.
		RemoteInboxNotificationsEngine::run();
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

		if ( ! is_array( $json ) ) {
			return;
		}

		foreach ( $json as $spec ) {
			$slug           = $spec->slug;
			$specs[ $slug ] = $spec;
		}
	}
}
