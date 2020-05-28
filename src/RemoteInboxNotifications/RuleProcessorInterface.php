<?php
/**
 * Interface for a rule processor.
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications;

defined( 'ABSPATH' ) || exit;

/**
 * Rule processor interface
 */
interface RuleProcessorInterface {
	/**
	 * Processes a rule, returning the boolean result of the processing.
	 *
	 * @param object $rule The rule to process.
	 * @param object $data Data.
	 *
	 * @return bool The result of the processing.
	 */
	public function process( $rule, $data );

	/**
	 * Validates the rule.
	 *
	 * @param object $rule The rule to validate.
	 *
	 * @return bool Pass/fail.
	 */
	public function validate( $rule );
}
