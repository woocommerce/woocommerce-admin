<?php
/**
 * Evaluate and get status tests.
 *
 * @package WooCommerce\Tests\Rinds
 */

use Automattic\WooCommerce\Admin\Rinds\EvaluateAndGetStatus;

/**
 * class WC_Tests_Rinds_EvaluateAndGetStatus
 */
class WC_Tests_Rinds_EvaluateAndGetStatus extends WC_Unit_Test_Case {
	/**
	 * Return a mock passing rule evaluator.
	 *
	 * @return object Mock passing rule evaluator.
	 */
	private function get_passing_rule_evaluator() {
		return new class() {
			/**
			 * Evaluate to true.
			 *
			 * @param array $rules The rules to evaluate.
			 *
			 * @return bool The evaluated result.
			 */
			public function evaluate( $rules ) {
				return true;
			}
		};
	}

	/**
	 * Return a mock failing rule evaluator.
	 *
	 * @return object Mock failing rule evaluator.
	 */
	private function get_failing_rule_evaluator() {
		return new class() {
			/**
			 * Evaluate to false.
			 *
			 * @param array $rules The rules to evaluate.
			 *
			 * @return bool The evaluated result.
			 */
			public function evaluate( $rules ) {
				return false;
			}
		};
	}

	/**
	 * Build up a spec given the supplied parameters.
	 *
	 * @param bool $allow_redisplay Allow note redisplay after it has been actioned.
	 *
	 * @return object The spec object.
	 */
	private function get_spec( $allow_redisplay ) {
		return json_decode(
			'{
				"status": "unactioned",
				"rules": [],
				"allow_redisplay": ' . ( $allow_redisplay ? 'true' : 'false' ) . '
			}'
		);
	}

	/**
	 * Tests that for a preunactioned note evaling to true, status is changed
	 * to the spec status.
	 *
	 * @group fast
	 */
	public function test_preunactioned_note_eval_to_true() {
		$spec                    = $this->get_spec( false );
		$evaluate_and_get_status = new EvaluateAndGetStatus(
			$this->get_passing_rule_evaluator()
		);

		$result = $evaluate_and_get_status->evaluate( $spec, 'unactioned' );

		$this->assertEquals( 'unactioned', $result );
	}

	/**
	 * Tests that for a preunactioned note evaluating to false, status is
	 * left at preunactioned.
	 *
	 * @group fast
	 */
	public function test_preunactioned_note_eval_to_false() {
		$spec                    = $this->get_spec( false );
		$evaluate_and_get_status = new EvaluateAndGetStatus(
			$this->get_failing_rule_evaluator()
		);

		$result = $evaluate_and_get_status->evaluate( $spec, 'preunactioned' );

		$this->assertEquals( 'preunactioned', $result );
	}

	/**
	 * Tests that for a snoozed note evaluating to true without allow_redisplay
	 * set, status is left as snoozed.
	 *
	 * @group fast
	 */
	public function test_snoozed_note_eval_to_true_without_allow_redisplay() {
		$spec                    = $this->get_spec( false );
		$evaluate_and_get_status = new EvaluateAndGetStatus(
			$this->get_passing_rule_evaluator()
		);

		$result = $evaluate_and_get_status->evaluate( $spec, 'snoozed' );

		$this->assertEquals( 'snoozed', $result );
	}

	/**
	 * Tests that for a snoozed note evaluating to false without
	 * allow_redisplay set, status is left as snoozed
	 *
	 * @group fast
	 */
	public function test_snoozed_note_eval_to_false_without_allow_redisplay() {
		$spec                    = $this->get_spec( false );
		$evaluate_and_get_status = new EvaluateAndGetStatus(
			$this->get_failing_rule_evaluator()
		);

		$result = $evaluate_and_get_status->evaluate( $spec, 'snoozed' );

		$this->assertEquals( 'snoozed', $result );
	}

	/**
	 * Tests that for an actioned note eval to true with allow_redisplay set,
	 * status is changed to unactioned.
	 *
	 * @group fast
	 */
	public function test_actioned_note_eval_to_true_with_allow_redisplay_set() {
		$spec                    = $this->get_spec( true );
		$evaluate_and_get_status = new EvaluateAndGetStatus(
			$this->get_passing_rule_evaluator()
		);

		$result = $evaluate_and_get_status->evaluate( $spec, 'actioned' );

		$this->assertEquals( 'unactioned', $result );
	}

	/**
	 * Tests that for an actioned note eval to false with allow_redirect set,
	 * status is left at actioned.
	 *
	 * @group fast
	 */
	public function test_actioned_note_eval_to_false_with_allow_redisplay_set() {
		$spec                    = $this->get_spec( true );
		$evaluate_and_get_status = new EvaluateAndGetStatus(
			$this->get_failing_rule_evaluator()
		);

		$result = $evaluate_and_get_status->evaluate( $spec, 'actioned' );

		$this->assertEquals( 'actioned', $result );
	}

	/**
	 * Tests that for a preunactioned note eval to true with allow_redirect
	 * set, status is changed to unactioned.
	 *
	 * @group fast
	 */
	public function test_preunactioned_note_eval_to_true_with_allow_redirect_set() {
		$spec                    = $this->get_spec( true );
		$evaluate_and_get_status = new EvaluateAndGetStatus(
			$this->get_passing_rule_evaluator()
		);

		$result = $evaluate_and_get_status->evaluate( $spec, 'preunactioned' );

		$this->assertEquals( 'unactioned', $result );
	}

	/**
	 * Tests that for a preunactioned note eval to false with allow_redirect
	 * set, status is left as preunactioned.
	 *
	 * @group fast
	 */
	public function test_preunactioned_note_eval_to_false_with_allow_redirect_set() {
		$spec                    = $this->get_spec( true );
		$evaluate_and_get_status = new EvaluateAndGetStatus(
			$this->get_failing_rule_evaluator()
		);

		$result = $evaluate_and_get_status->evaluate( $spec, 'preunactioned' );

		$this->assertEquals( 'preunactioned', $result );
	}
}
