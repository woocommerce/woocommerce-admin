<?php
/**
 * Or rule processor tests.
 *
 * @package WooCommerce\Tests\Rinds
 */

use Automattic\WooCommerce\Admin\Rinds\OrRuleProcessor;
use Automattic\WooCommerce\Admin\Rinds\RuleEvaluator;

/**
 * class WC_Tests_Rinds_OrRuleProcessor
 */
class WC_Tests_Rinds_OrRuleProcessor extends WC_Unit_Test_Case {
	/**
	 * Both operands evaluating to false and ORed together evaluates to false.
	 *
	 * @group fast
	 */
	public function test_spec_fails_for_both_operands_false() {
		$get_rule_processor = new MockGetRuleProcessor();
		$processor          = new OrRuleProcessor(
			new RuleEvaluator(
				$get_rule_processor
			)
		);
		$rule               = json_decode(
			'{
				"type": "or",
				"left_operand": [
					{
						"type": "send_at_time",
						"send_at": "2020-04-24 11:00:00"
					}
				],
				"right_operand": [
					{
						"type": "send_at_time",
						"send_at": "2020-04-24 11:00:00"
					}
				]
			}'
		);

		$result = $processor->process( $rule );

		$this->assertEquals( false, $result );
	}

	/**
	 * Left operand evaluating to true and ORed together evaluates to true.
	 *
	 * @group fast
	 */
	public function test_spec_passes_for_left_operand_true() {
		$get_rule_processor = new MockGetRuleProcessor();
		$processor          = new OrRuleProcessor(
			new RuleEvaluator(
				$get_rule_processor
			)
		);
		$rule               = json_decode(
			'{
				"type": "or",
				"left_operand": [
					{
						"type": "send_at_time",
						"send_at": "2020-04-24 09:00:00"
					}
				],
				"right_operand": [
					{
						"type": "send_at_time",
						"send_at": "2020-04-24 11:00:00"
					}
				]
			}'
		);

		$result = $processor->process( $rule );

		$this->assertEquals( true, $result );
	}

	/**
	 * Right operand evaluating to true and ORed together evaluates to true.
	 *
	 * @group fast
	 */
	public function test_spec_passes_for_right_operand_true() {
		$get_rule_processor = new MockGetRuleProcessor();
		$processor          = new OrRuleProcessor(
			new RuleEvaluator(
				$get_rule_processor
			)
		);
		$rule               = json_decode(
			'{
				"type": "or",
				"left_operand": [
					{
						"type": "send_at_time",
						"send_at": "2020-04-24 11:00:00"
					}
				],
				"right_operand": [
					{
						"type": "send_at_time",
						"send_at": "2020-04-24 09:00:00"
					}
				]
			}'
		);

		$result = $processor->process( $rule );

		$this->assertEquals( true, $result );
	}

	/**
	 * Both operands evaluating to true and ORed together evaluates to true.
	 *
	 * @group fast
	 */
	public function test_spec_passes_for_both_operands_true() {
		$get_rule_processor = new MockGetRuleProcessor();
		$processor          = new OrRuleProcessor(
			new RuleEvaluator(
				$get_rule_processor
			)
		);
		$rule               = json_decode(
			'{
				"type": "or",
				"left_operand": [
					{
						"type": "send_at_time",
						"send_at": "2020-04-24 09:00:00"
					}
				],
				"right_operand": [
					{
						"type": "send_at_time",
						"send_at": "2020-04-24 09:00:00"
					}
				]
			}'
		);

		$result = $processor->process( $rule );

		$this->assertEquals( true, $result );
	}
}
