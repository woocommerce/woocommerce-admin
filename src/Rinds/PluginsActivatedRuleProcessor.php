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
	 * Process the rule.
	 *
	 * @param object $spec The specification being processed.
	 * @param object $rule The specific rule being processed by this rule processor.
	 *
	 * @return bool Whether the rule passes or not.
	 */
	public function process( $spec, $rule ) {
		// @todo implement me.
		return true;
	}
}
