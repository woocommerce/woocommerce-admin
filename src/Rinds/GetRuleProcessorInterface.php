<?php
/**
 * Interface for a provider for getting the processor for the specified rule type.
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\Rinds;

defined( 'ABSPATH' ) || exit;

/**
 * Get rule processor interface
 */
interface GetRuleProcessorInterface {
	/**
	 * Get the processor for the specified rule type.
	 *
	 * @param string $rule_type The rule type.
	 *
	 * @return object The matching processor for the specified rule type, or a FailRuleProcessor if no matching processor is found.
	 */
	public static function get_processor( $rule_type );
}
