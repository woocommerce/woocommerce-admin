<?php
/**
 * Rule processor for sending when the provided plugins are activated.
 *
 * @package WooCommerce Admin/Classes;
 */

namespace Automattic\WooCommerce\Admin\Rinds;

defined( 'ABSPATH' ) || exit;

/**
 * Rule processor for sending when the provided plugins are activated.
 */
class PluginsActivatedRuleProcessor {
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
	 * @param object $rule The specific rule being processed by this rule processor.
	 *
	 * @return bool Whether the rule passes or not.
	 */
	public function process( $rule ) {
		if ( 0 === count( $rule->plugins ) ) {
			return false;
		}

		$active_plugin_slugs = $this->plugins_provider->get_active_plugin_slugs();

		foreach ( $rule->plugins as $plugin_slug ) {
			if ( ! in_array( $plugin_slug, $active_plugin_slugs, true ) ) {
				return false;
			}
		}

		return true;
	}
}
