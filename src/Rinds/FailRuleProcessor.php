<?php
/**
 * Rule processor that fails.
 *
 * @package WooCommerce Admin/Classes;
 */

namespace Automattic\WooCommerce\Admin\Rinds;

defined( 'ABSPATH' ) || exit;

/**
 * Rule processor that fails.
 */
class FailRuleProcessor {
	/**
	 * Fails the rule.
	 *
	 * @param object $spec The specification being processed.
	 * @param object $rule The specific rule being processed by this rule processor.
	 *
	 * @return bool Always false.
	 */
	public function process( $spec, $rule ) {
		return false;
	}
}
