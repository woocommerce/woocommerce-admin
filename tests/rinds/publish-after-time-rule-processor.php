<?php
/**
 * Send at time rule processor tests.
 *
 * @package WooCommerce\Tests\Rinds
 */

use Automattic\WooCommerce\Admin\Rinds\PublishAfterTimeRuleProcessor;
use Automattic\WooCommerce\Admin\DateTimeProvider\DateTimeProviderInterface;

/**
 * class WC_Tests_Rinds_PublishAfterTimeRuleProcessor
 */
class WC_Tests_Rinds_PublishAfterTimeRuleProcessor extends WC_Unit_Test_Case {
	/**
	 * Tests that the processor passes a publish_after_time rule with a
	 * publish_after time in the past.
	 *
	 * @group fast
	 */
	public function test_spec_passes_for_time_in_the_past() {
		$mock_date_time_provider = new MockDateTimeProvider(
			new \DateTime( '2020-04-22 14:00:00' )
		);
		$processor               = new PublishAfterTimeRuleProcessor( $mock_date_time_provider );
		$rule                    = json_decode(
			'{
				"type": "publish_after_time",
				"publish_after": "2020-04-22 12:00:00"
			}'
		);

		$result = $processor->process( $rule );

		$this->assertEquals( true, $result );
	}

	/**
	 * Tests that the processor passes a publish_after_time rule with a
	 * publish_after time right now.
	 *
	 * @group fast
	 */
	public function test_spec_passes_for_time_now() {
		$mock_date_time_provider = new MockDateTimeProvider(
			new \DateTime( '2020-04-22 12:00:00' )
		);
		$processor               = new PublishAfterTimeRuleProcessor( $mock_date_time_provider );
		$rule                    = json_decode(
			'{
				"type": "publish_after_time",
				"publish_after": "2020-04-22 12:00:00"
			}'
		);

		$result = $processor->process( $rule );

		$this->assertEquals( true, $result );
	}

	/**
	 * Tests that the processor does not pass a publish_after_time rule with a
	 * publish_after time in the future.
	 *
	 * @group fast
	 */
	public function test_spec_does_not_pass_for_time_in_future() {
		$mock_date_time_provider = new MockDateTimeProvider(
			new \DateTime( '2020-04-22 09:00:00' )
		);
		$processor               = new PublishAfterTimeRuleProcessor( $mock_date_time_provider );
		$rule                    = json_decode(
			'{
				"type": "publish_after_time",
				"publish_after": "2020-04-22 12:00:00"
			}'
		);

		$result = $processor->process( $rule );

		$this->assertEquals( false, $result );
	}
}
