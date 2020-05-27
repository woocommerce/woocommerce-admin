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
class FailRuleProcessor {
	/**
	 * Fails the rule.
	 *
	 * @param object $rule The specific rule being processed by this rule processor.
	 *
	 * @return bool Always false.
	 */
	public function process( $rule ) {
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
