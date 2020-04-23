<?php
/**
 * Interface for a provider for getting access to plugin queries,
 * designed to be mockable for unit tests.
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\PluginsProvider;

defined( 'ABSPATH' ) || exit;

/**
 * Plugins Provider Interface
 */
interface PluginsProviderInterface {
	/**
	 * Get an array of active plugin slugs.
	 *
	 * @return array
	 */
	public function get_active_plugin_slugs();
}
