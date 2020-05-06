<?php
/**
 * Evaluate the given rules as an AND operation - return false early if a
 * rule evaluates to false.
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\Rinds;

defined( 'ABSPATH' ) || exit;

/**
 * Evaluate the given rules as an AND operation - return false early if a
 * rule evaluates to false.
 */
class RuleEvaluator {
	/**
	 * Constructor.
	 *
	 * @param GetRuleProcessor $get_rule_processor The GetRuleProcessor to use.
	 */
	public function __construct( $get_rule_processor ) {
		$this->get_rule_processor = $get_rule_processor;
	}

	/**
	 * Evaluate the given rules as an AND operation - return false early if a
	 * rule evaluates to false.
	 *
	 * @param array $rules The rules being processed.
	 *
	 * @return bool The result of the operation.
	 */
	public function evaluate( $rules ) {
		if ( 0 === count( $rules ) ) {
			return false;
		}

		foreach ( $rules as $rule ) {
			$processor        = $this->get_rule_processor->get_processor( $rule->type );
			$processor_result = $processor->process( $rule );

			if ( ! $processor_result ) {
				return false;
			}
		}

		return true;
	}
}
