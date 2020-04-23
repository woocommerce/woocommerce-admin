<?php
/**
 * Mock plugins Provider.
 *
 * @package WooCommerce\Tests\Rinds
 */

use Automattic\WooCommerce\Admin\PluginsProvider\PluginsProviderInterface;

/**
 * Mock plugins Provider.
 *
 * Returns the provided plugins instead of the current plugins. Needed for
 * unit tests.
 */
class MockPluginsProvider implements PluginsProviderInterface {
	/**
	 * Construct the mock plugins provider using the specified value for the
	 * active plugins slugs.
	 *
	 * @param array $active_plugin_slugs The value to use for the active plugin slugs.
	 */
	public function __construct( $active_plugin_slugs ) {
		$this->active_plugin_slugs = $active_plugin_slugs;
	}

	/**
	 * Get an array of provided plugin slugs.
	 *
	 * @return array
	 */
	public function get_active_plugin_slugs() {
		return $this->active_plugin_slugs;
	}
}
