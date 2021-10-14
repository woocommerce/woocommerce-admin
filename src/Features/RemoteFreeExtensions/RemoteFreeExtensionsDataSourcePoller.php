<?php

namespace Automattic\WooCommerce\Admin\Features\RemoteFreeExtensions;

/**
 * Specs data source poller class for remote free extensions.
 */
class RemoteFreeExtensionsDataSourcePoller extends \Automattic\WooCommerce\Admin\DataSourcePoller {

	const SPECS_TRANSIENT_NAME = 'woocommerce_admin_remote_free_extensions_specs';

	const DATA_SOURCES = array(
		'https://woocommerce.com/wp-json/wccom/obw-free-extensions/2.0/extensions.json',
	);

	/**
	 * Class instance.
	 *
	 * @var Analytics instance
	 */
	protected static $instance = null;

	/**
	 * Get class instance.
	 */
	public static function get_instance() {
		if ( ! self::$instance ) {
			self::$instance = new self(
				self::DATA_SOURCES,
				array(
					'transient_name' => self::SPECS_TRANSIENT_NAME,
					'spec_key'       => 'key',
				)
			);
		}
		return self::$instance;
	}
}
