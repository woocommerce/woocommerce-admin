<?php
/**
 * Rule processor for sending at a specified interval after dismissal.
 *
 * @package WooCommerce Admin/Classes;
 */

namespace Automattic\WooCommerce\Admin\Rinds;

defined( 'ABSPATH' ) || exit;

/**
 * Rule processor for sending at a specified interval after dismissal.
 *
 * @todo figure out if this is after dismissal via a certain button like the
 * secondary button.
 */
class ResendAfterDismissalRuleProcessor {
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
