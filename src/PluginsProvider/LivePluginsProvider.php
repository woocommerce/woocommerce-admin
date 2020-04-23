<?php
/**
 * A provider for getting access to plugin queries.
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\PluginsProvider;

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Admin\PluginsProvider\PluginsProviderInterface;
use Automattic\WooCommerce\Admin\PluginsHelper;

/**
 * Live Plugins Provider.
 *
 * Uses the live PluginsHelper.
 */
class LivePluginsProvider implements PluginsProviderInterface {
	/**
	 * Get an array of active plugin slugs.
	 *
	 * @return array
	 */
	public function get_active_plugin_slugs() {
		return PluginsHelper::get_active_plugin_slugs();
	}
}
