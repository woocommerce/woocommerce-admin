<?php
/**
 * Test the Task class.
 *
 * @package WooCommerce\Admin\Tests\OnboardingTasks
 */

use Automattic\WooCommerce\Admin\Features\OnboardingTasks\Task;

/**
 * class WC_Tests_OnboardingTasks_Task
 */
class WC_Tests_OnboardingTasks_Task extends WC_Unit_Test_Case {
	/**
	 * Task.
	 *
	 * @var Task|null
	 */
	protected $task = null;

	/**
	 * Tests that a task is visible by default.
	 */
	public function test_capability_visible() {
		$task = new Task(
			array(
				'id' => 'wc-unit-test-task',
			)
		);

		$this->assertEquals( true, $task->is_visible() );
	}

	/**
	 * Tests that a task is not visible when not capable of being viewed.
	 */
	public function test_capability_not_visible() {
		$task = new Task(
			array(
				'id'       => 'wc-unit-test-task',
				'can_view' => false,
			)
		);

		$this->assertEquals( false, $task->is_visible() );
	}

	/**
	 * Tests that a task can be dismissed.
	 */
	public function test_dismiss() {
		$task = new Task(
			array(
				'id'             => 'wc-unit-test-task',
				'is_dismissable' => true,
			)
		);

		$update    = $task->dismiss();
		$dismissed = get_option( Task::DISMISSED_OPTION, array() );
		$this->assertEquals( true, $update );
		$this->assertContains( $task->id, $dismissed );
	}

	/**
	 * Tests that a dismissal can be undone.
	 */
	public function test_undo_dismiss() {
		$task = new Task(
			array(
				'id'             => 'wc-unit-test-task',
				'is_dismissable' => true,
			)
		);

		$task->dismiss();
		$task->undo_dismiss();
		$dismissed = get_option( Task::DISMISSED_OPTION, array() );
		$this->assertNotContains( $task->id, $dismissed );
	}

	/**
	 * Tests that a non-dismissable task cannot be dismissed.
	 */
	public function test_not_dismissable() {
		$task = new Task(
			array(
				'id'             => 'wc-unit-test-non-dismissable-task',
				'is_dismissable' => false,
			)
		);

		$update    = $task->dismiss();
		$dismissed = get_option( Task::DISMISSED_OPTION, array() );
		$this->assertEquals( false, $update );
		$this->assertNotContains( $task->id, $dismissed );
	}

	/**
	 * Tests that a dismissed task is not visible.
	 */
	public function test_dismissed_visibility() {
		$task = new Task(
			array(
				'id'             => 'wc-unit-test-task',
				'is_dismissable' => true,
			)
		);

		$task->dismiss();
		$this->assertEquals( false, $task->is_visible() );
	}

	/**
	 * Tests that a task can be snoozed.
	 */
	public function test_snooze() {
		$task = new Task(
			array(
				'id'            => 'wc-unit-test-snoozeable-task',
				'is_snoozeable' => true,
			)
		);

		$update  = $task->snooze();
		$snoozed = get_option( Task::SNOOZED_OPTION, array() );
		$this->assertEquals( true, $update );
		$this->assertArrayHasKey( $task->id, $snoozed );
	}

	/**
	 * Tests that a task can be unsnoozed.
	 */
	public function test_undo_snooze() {
		$task = new Task(
			array(
				'id'            => 'wc-unit-test-snoozeable-task',
				'is_snoozeable' => true,
			)
		);

		$task->snooze();
		$task->undo_snooze();
		$snoozed = get_option( Task::SNOOZED_OPTION, array() );
		$this->assertArrayNotHasKey( $task->id, $snoozed );
	}

	/**
	 * Tests that a task is not visible when snoozed.
	 */
	public function test_snoozed_visibility() {
		$task = new Task(
			array(
				'id'            => 'wc-unit-test-snoozeable-task',
				'is_snoozeable' => true,
			)
		);

		$task->snooze();
		$this->assertEquals( false, $task->is_visible() );
	}

	/**
	 * Tests that a task's snooze time is automatically added.
	 */
	public function test_snoozed_until() {
		$time                         = time() * 1000;
		$snoozed                      = get_option( Task::SNOOZED_OPTION, array() );
		$snoozed['wc-unit-test-task'] = $time;
		update_option( Task::SNOOZED_OPTION, $snoozed );

		$task = new Task(
			array(
				'id'            => 'wc-unit-test-task',
				'is_snoozeable' => true,
			)
		);

		$this->assertEquals( $time, $task->snoozed_until );

	}

	/**
	 * Tests that a non snoozeable task cannot be snoozed.
	 */
	public function test_not_snoozeable() {
		$task = new Task(
			array(
				'id'            => 'wc-unit-test-snoozeable-task',
				'is_snoozeable' => false,
			)
		);

		$task->snooze();
		$this->assertEquals( false, $task->is_snoozed() );
	}

	/**
	 * Tests that a task is no longer consider snoozed after the time has passed.
	 */
	public function test_snooze_time() {
		$task = new Task(
			array(
				'id'            => 'wc-unit-test-snoozeable-task',
				'is_snoozeable' => true,
			)
		);

		$time                                    = time() * 1000 - 1;
		$snoozed                                 = get_option( Task::SNOOZED_OPTION, array() );
		$snoozed['wc-unit-test-snoozeable-task'] = $time;
		update_option( Task::SNOOZED_OPTION, $snoozed );

		$this->assertEquals( false, $task->is_snoozed() );
	}


	/**
	 * Tests that a task's properties are returned as JSON.
	 */
	public function test_json() {
		$task = new Task(
			array(
				'id' => 'wc-unit-test-task',
			)
		);

		$json = $task->get_json();

		$this->assertArrayHasKey( 'id', $json );
		$this->assertArrayHasKey( 'title', $json );
		$this->assertArrayHasKey( 'content', $json );
		$this->assertArrayHasKey( 'actionLabel', $json );
		$this->assertArrayHasKey( 'actionUrl', $json );
		$this->assertArrayHasKey( 'isComplete', $json );
		$this->assertArrayHasKey( 'isVisible', $json );
		$this->assertArrayHasKey( 'time', $json );
		$this->assertArrayHasKey( 'isDismissed', $json );
		$this->assertArrayHasKey( 'isDismissable', $json );
		$this->assertArrayHasKey( 'isSnoozed', $json );
		$this->assertArrayHasKey( 'isSnoozeable', $json );
		$this->assertArrayHasKey( 'snoozedUntil', $json );
	}

}
