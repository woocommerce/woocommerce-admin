<?php
/**
 * Get rule processor tests.
 *
 * @package WooCommerce\Tests\Rinds
 */

use Automattic\WooCommerce\Admin\Rinds\GetRuleProcessor;

/**
 * class WC_Tests_Rinds_GetRuleProcessor
 */
class WC_Tests_Rinds_GetRuleProcessor extends WC_Unit_Test_Case {
	/**
	 * Tests that an unknown rule processor returns a FailRuleProcessor
	 *
	 * @group fast
	 */
	public function test_unknown_rule_processor_returns_fail_rule_processor() {
		$get_rule_processor = new GetRuleProcessor();

		$result = $get_rule_processor->get_processor( 'unknown rule type' );

		$this->assertEquals( 'Automattic\\WooCommerce\\Admin\\Rinds\\FailRuleProcessor', get_class( $result ) );
	}
}
