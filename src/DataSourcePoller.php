<?php

namespace Automattic\WooCommerce\Admin;

/**
 * Specs data source poller class.
 * This handles polling specs from JSON endpoints, and
 * stores the specs in to the database as an option.
 */
class DataSourcePoller {

	/**
	 * Name of data sources filter.
	 */
	const FILTER_NAME = 'data_source_poller_data_sources';

	/**
	 * Default data sources array.
	 *
	 * @var array
	 */
	protected $data_sources = array();

	/**
	 * Key for the spec id.
	 *
	 * @var string
	 */
	protected $spec_key = 'id';

	/**
	 * Key for the spec id.
	 *
	 * @var string
	 */
	protected $transient_name = '';

	/**
	 * The logger instance.
	 *
	 * @var WC_Logger|null
	 */
	protected static $logger = null;

	/**
	 * Constructor.
	 *
	 * @param array  $data_sources urls for data sources.
	 * @param string $transient_name name of transient.
	 * @param string $spec_key Optional key used as the spec identifier.
	 */
	public function __construct( $data_sources, $transient_name, $spec_key = 'id' ) {
		$this->data_sources   = $data_sources;
		$this->transient_name = $transient_name;
		$this->spec_key       = $spec_key;
	}

	/**
	 * Get the logger instance.
	 *
	 * @return WC_Logger
	 */
	protected static function get_logger() {
		if ( is_null( self::$logger ) ) {
			self::$logger = wc_get_logger();
		}

		return self::$logger;
	}

	/**
	 * Returns the key identifier of spec, this can easily be overwritten. Defaults to id.
	 *
	 * @param mixed $spec a JSON parsed spec coming from the JSON feed.
	 * @return string|boolean
	 */
	protected function get_spec_key( $spec ) {
		$key = $this->spec_key;
		if ( isset( $spec->$key ) ) {
			return $spec->$key;
		}
		return false;
	}

	/**
	 * Reads the data sources for specs and persists those specs.
	 *
	 * @return array list of specs.
	 */
	public function get_specs_from_data_sources() {
		$specs = get_transient( $this->transient_name );

		if ( false === $specs || ! is_array( $specs ) || 0 === count( $specs ) ) {
			$this->read_specs_from_data_sources();
			$specs = get_transient( $this->transient_name );
		}
		return false !== $specs ? $specs : array();
	}

	/**
	 * Reads the data sources for specs and persists those specs.
	 *
	 * @return bool Whether any specs were read.
	 */
	public function read_specs_from_data_sources() {
		$specs        = array();
		$data_sources = apply_filters( self::FILTER_NAME, $this->data_sources );

		// Note that this merges the specs from the data sources based on the
		// id - last one wins.
		foreach ( $data_sources as $url ) {
			$specs_from_data_source = self::read_data_source( $url );
			$this->merge_specs( $specs_from_data_source, $specs, $url );
		}

		// Persist the specs as a transient.
		set_transient(
			$this->transient_name,
			$specs,
			7 * DAY_IN_SECONDS
		);

		return 0 !== count( $specs );
	}

	/**
	 * Delete the specs transient.
	 *
	 * @return bool success of failure of transient deletion.
	 */
	public function delete_specs_transient() {
		return delete_transient( $this->transient_name );
	}

	/**
	 * Read a single data source and return the read specs
	 *
	 * @param string $url The URL to read the specs from.
	 *
	 * @return array The specs that have been read from the data source.
	 */
	protected static function read_data_source( $url ) {
		$logger_context = array( 'source' => $url );
		$logger         = self::get_logger();
		$response       = wp_remote_get(
			add_query_arg(
				'_locale',
				get_user_locale(),
				$url
			)
		);

		if ( is_wp_error( $response ) || ! isset( $response['body'] ) ) {
			$logger->error(
				'Error getting data feed',
				$logger_context
			);
			// phpcs:ignore
			$logger->error( print_r( $response, true ), $logger_context );

			return [];
		}

		$body  = $response['body'];
		$specs = json_decode( $body );

		if ( null === $specs ) {
			$logger->error(
				'Empty response in data feed',
				$logger_context
			);

			return [];
		}

		if ( ! is_array( $specs ) ) {
			$logger->error(
				'Data feed is not an array',
				$logger_context
			);

			return [];
		}

		return $specs;
	}

	/**
	 * Merge the specs.
	 *
	 * @param Array  $specs_to_merge_in The specs to merge in to $specs.
	 * @param Array  $specs             The list of specs being merged into.
	 * @param string $url               The url of the feed being merged in (for error reporting).
	 */
	protected function merge_specs( $specs_to_merge_in, &$specs, $url ) {
		foreach ( $specs_to_merge_in as $spec ) {
			if ( ! $this->validate_spec( $spec, $url ) ) {
				continue;
			}

			$id           = $this->get_spec_key( $spec );
			$specs[ $id ] = $spec;
		}
	}

	/**
	 * Validate the spec.
	 *
	 * @param object $spec The spec to validate.
	 * @param string $url  The url of the feed that provided the spec.
	 *
	 * @return bool The result of the validation.
	 */
	protected function validate_spec( $spec, $url ) {
		$logger         = self::get_logger();
		$logger_context = array( 'source' => $url );

		if ( ! $this->get_spec_key( $spec ) ) {
			$logger->error(
				'Spec is invalid because the id is missing in feed',
				$logger_context
			);
			// phpcs:ignore
			$logger->error( print_r( $spec, true ), $logger_context );

			return false;
		}

		return true;
	}
}
