<?php
/**
 * Handles running payment method specs
 */

namespace Automattic\WooCommerce\Admin\Features\RemoteFreeExtensions;

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Admin\RemoteInboxNotifications\SpecRunner;
use Automattic\WooCommerce\Admin\Features\RemoteFreeExtensions\DefaultFreeExtensions;

/**
 * Remote Payment Methods engine.
 * This goes through the specs and gets eligible payment methods.
 */
class Init {
	const SPECS_TRANSIENT_NAME = 'woocommerce_admin_remote_free_extensions_specs';

	const DATA_SOURCES = array(
		'https://woocommerce.com/wp-json/wccom/obw-free-extensions/2.0/extensions.json',
	);

	/**
	 * DataSourcePoller Class instance.
	 *
	 * @var DataSourcePoller instance
	 */
	protected static $data_source_poller_instance = null;

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'change_locale', array( __CLASS__, 'delete_specs_transient' ) );
		add_action( 'woocommerce_admin_updated', array( __CLASS__, 'delete_specs_transient' ) );
	}

	/**
	 * Get data source poller class instance.
	 */
	public static function get_data_source_poller_instance() {
		if ( ! self::$data_source_poller_instance ) {
			self::$data_source_poller_instance = new \Automattic\WooCommerce\Admin\DataSourcePoller( self::DATA_SOURCES, self::SPECS_TRANSIENT_NAME, 'key' );
		}
		return self::$data_source_poller_instance;
	}

	/**
	 * Go through the specs and run them.
	 *
	 * @param array $allowed_bundles Optional array of allowed bundles to be returned.
	 * @return array
	 */
	public static function get_extensions( $allowed_bundles = array() ) {
		$bundles = array();
		$specs   = self::get_specs();

		foreach ( $specs as $spec ) {
			$spec              = (object) $spec;
			$bundle            = (array) $spec;
			$bundle['plugins'] = array();

			if ( ! empty( $allowed_bundles ) && ! in_array( $spec->key, $allowed_bundles, true ) ) {
				continue;
			}

			foreach ( $spec->plugins as $plugin ) {
				$extension = EvaluateExtension::evaluate( (object) $plugin );

				if ( ! property_exists( $extension, 'is_visible' ) || $extension->is_visible ) {
					$bundle['plugins'][] = $extension;
				}
			}

			$bundles[] = $bundle;
		}

		return $bundles;
	}

	/**
	 * Delete the specs transient.
	 */
	public static function delete_specs_transient() {
		$data_source_poller = self::get_data_source_poller_instance();
		$data_source_poller->delete_specs_transient();
	}

	/**
	 * Get specs or fetch remotely if they don't exist.
	 */
	public static function get_specs() {
		if ( 'no' === get_option( 'woocommerce_show_marketplace_suggestions', 'yes' ) ) {
			return DefaultFreeExtensions::get_all();
		}
		$data_source_poller = self::get_data_source_poller_instance();
		$specs              = $data_source_poller->read_specs_from_data_sources();

		// Fetch specs if they don't yet exist.
		if ( false === $specs || ! is_array( $specs ) || 0 === count( $specs ) ) {
			return DefaultFreeExtensions::get_all();
		}

		return $specs;
	}
}
