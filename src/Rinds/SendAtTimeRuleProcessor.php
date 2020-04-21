<?php
/**
 * Rule processor for sending at a specified data/time.
 *
 * @package WooCommerce Admin/Classes;
 */

namespace Automattic\WooCommerce\Admin\Rinds;

defined( 'ABSPATH' ) || exit;

/**
 * Rule processor for sending at a specified date/time.
 */
class SendAtTimeRuleProcessor {
	/**
	 * Process the rule.
	 *
	 * @param object $spec The specification being processed.
	 * @param object $rule The specific rule being processed by this rule processor.
	 *
	 * @return bool Whether the rule passes or not.
	 */
	public function process( $spec, $rule ) {
		return new \DateTime() >= $rule->send_at;
	}
}
