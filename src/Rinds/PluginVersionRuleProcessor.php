<?php
/**
 * Rule processor for sending when the provided plugin is activated and
 * matches the specified version.
 *
 * @package WooCommerce Admin/Classes;
 */

namespace Automattic\WooCommerce\Admin\Rinds;

defined( 'ABSPATH' ) || exit;

/**
 * Rule processor for sending when the provided plugin is activated and
 * matches the specified version.
 */
class PluginVersionRuleProcessor {
	/**
	 * Constructor.
	 *
	 * @param PluginsProviderInterface $plugins_provider The plugins provider.
	 */
	public function __construct( $plugins_provider ) {
		$this->plugins_provider = $plugins_provider;
	}

	/**
	 * Process the rule.
	 *
	 * @param object $spec The specification being processed.
	 * @param object $rule The specific rule being processed by this rule processor.
	 *
	 * @return bool Whether the rule passes or not.
	 */
	public function process( $spec, $rule ) {
		$active_plugin_slugs = $this->plugins_provider->get_active_plugin_slugs();

		if ( ! in_array( $rule->plugin, $active_plugin_slugs, true ) ) {
			return false;
		}

		$plugin_data = $this->plugins_provider->get_plugin_data( $rule->plugin );

		if ( ! $plugin_data ) {
			return false;
		}

		$plugin_version = $plugin_data['Version'];

		return version_compare( $plugin_version, $rule->version, $rule->operator );
	}
}
