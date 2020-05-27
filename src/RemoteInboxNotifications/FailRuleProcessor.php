<?php
/**
 * Rule processor that fails.
 *
 * @package WooCommerce Admin/Classes;
 */

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications;

defined( 'ABSPATH' ) || exit;

/**
 * Rule processor that fails.
 */
class FailRuleProcessor implements RuleProcessorInterface {
	/**
	 * Fails the rule.
	 *
	 * @param object $rule The specific rule being processed by this rule processor.
	 * @param object $data Persistent data.
	 *
	 * @return bool Always false.
	 */
	public function process( $rule, $data ) {
		return false;
	}

	/**
	 * Validates the rule.
	 *
	 * @param object $rule The rule to validate.
	 *
	 * @return bool Pass/fail.
	 */
	public function validate( $rule ) {
		return true;
	}
}
