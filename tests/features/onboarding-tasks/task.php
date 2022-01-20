<?php
/**
 * Test the Task class.
 *
 * @package WooCommerce\Admin\Tests\OnboardingTasks
 */

use Automattic\WooCommerce\Admin\Features\OnboardingTasks\Task;

require_once __DIR__ . '/test-task.php';

/**
 * class WC_Tests_OnboardingTasks_Task
 */
class WC_Tests_OnboardingTasks_Task extends WC_Unit_Test_Case {

	/**
	 * Tests that a task is visible by default.
	 */
	public function test_capability_visible() {
		$task = new TestTask(
			array(
				'id' => 'wc-unit-test-task',
			)
		);

		$this->assertEquals( true, $task->can_view() );
	}

	/**
	 * Tests that a task is not visible when not capable of being viewed.
	 */
	public function test_capability_not_visible() {
		$task = new TestTask(
			array(
				'id'       => 'wc-unit-test-task',
				'can_view' => false,
			)
		);

		$this->assertEquals( false, $task->can_view() );
	}

	/**
	 * Tests that a task can be dismissed.
	 */
	public function test_dismiss() {
		$task = new TestTask(
			array(
				'id'             => 'wc-unit-test-task',
				'is_dismissable' => true,
			)
		);

		$update    = $task->dismiss();
		$dismissed = get_option( Task::DISMISSED_OPTION, array() );
		$this->assertEquals( true, $update );
		$this->assertContains( $task->get_id(), $dismissed );
	}

	/**
	 * Tests that a dismissal can be undone.
	 */
	public function test_undo_dismiss() {
		$task = new TestTask(
			array(
				'id'             => 'wc-unit-test-task',
				'is_dismissable' => true,
			)
		);

		$task->dismiss();
		$task->undo_dismiss();
		$dismissed = get_option( Task::DISMISSED_OPTION, array() );
		$this->assertNotContains( $task->get_id(), $dismissed );
	}

	/**
	 * Tests that a non-dismissable task cannot be dismissed.
	 */
	public function test_not_dismissable() {
		$task = new TestTask(
			array(
				'id'             => 'wc-unit-test-non-dismissable-task',
				'is_dismissable' => false,
			)
		);

		$update    = $task->dismiss();
		$dismissed = get_option( Task::DISMISSED_OPTION, array() );
		$this->assertEquals( false, $update );
		$this->assertNotContains( $task->get_id(), $dismissed );
	}


	/**
	 * Tests that a task can be snoozed.
	 */
	public function test_snooze() {
		$task = new TestTask(
			array(
				'id'            => 'wc-unit-test-snoozeable-task',
				'is_snoozeable' => true,
			)
		);

		$update  = $task->snooze();
		$snoozed = get_option( Task::SNOOZED_OPTION, array() );
		$this->assertEquals( true, $update );
		$this->assertArrayHasKey( $task->get_id(), $snoozed );
	}

	/**
	 * Tests that a task can be unsnoozed.
	 */
	public function test_undo_snooze() {
		$task = new TestTask(
			array(
				'id'            => 'wc-unit-test-snoozeable-task',
				'is_snoozeable' => true,
			)
		);

		$task->snooze();
		$task->undo_snooze();
		$snoozed = get_option( Task::SNOOZED_OPTION, array() );
		$this->assertArrayNotHasKey( $task->get_id(), $snoozed );
	}

	/**
	 * Tests that a task's snooze time is automatically added.
	 */
	public function test_snoozed_until() {
		$time                         = time() * 1000;
		$snoozed                      = get_option( Task::SNOOZED_OPTION, array() );
		$snoozed['wc-unit-test-task'] = $time;
		update_option( Task::SNOOZED_OPTION, $snoozed );

		$task = new TestTask(
			array(
				'id'            => 'wc-unit-test-task',
				'is_snoozeable' => true,
			)
		);

		$this->assertEquals( $time, $task->get_snoozed_until() );

	}

	/**
	 * Tests that a non snoozeable task cannot be snoozed.
	 */
	public function test_not_snoozeable() {
		$task = new TestTask(
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
		$task = new TestTask(
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
		$task = new TestTask(
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
		$this->assertArrayHasKey( 'canView', $json );
		$this->assertArrayHasKey( 'time', $json );
		$this->assertArrayHasKey( 'isDismissed', $json );
		$this->assertArrayHasKey( 'isDismissable', $json );
		$this->assertArrayHasKey( 'isSnoozed', $json );
		$this->assertArrayHasKey( 'isSnoozeable', $json );
		$this->assertArrayHasKey( 'snoozedUntil', $json );
	}

	/**
	 * Tests that a task can be actioned.
	 */
	public function test_action_task() {
		$task = new TestTask(
			array(
				'id' => 'wc-unit-test-task',
			)
		);

		$update   = $task->mark_actioned();
		$actioned = get_option( Task::ACTIONED_OPTION, array() );
		$this->assertEquals( true, $update );
		$this->assertContains( $task->get_id(), $actioned );
	}

	/**
	 * Test task sort with empty config.
	 */
	public function test_sort_with_empty_sort_by_config() {
		$task_a = new TestTask(
			array(
				'id' => 'a',
			)
		);
		$task_b = new TestTask(
			array(
				'id' => 'b',
			)
		);
		$result = Task::sort( $task_a, $task_b );
		$this->assertEquals( 0, $result );
	}

	/**
	 * Test task sort with config with invalid key.
	 */
	public function test_sort_with_sort_by_config_with_invalid_key() {
		$task_a = new TestTask(
			array(
				'id' => 'a',
			)
		);
		$task_b = new TestTask(
			array(
				'id' => 'b',
			)
		);
		$result = Task::sort(
			$task_a,
			$task_b,
			array(
				array(
					'key'   => 'invalid',
					'order' => 'asc',
				),
			)
		);
		$this->assertEquals( 0, $result );
	}

	/**
	 * Test task sort with config with valid key asc.
	 */
	public function test_sort_with_sort_by_config_with_valid_key_asc() {
		$task_a = new TestTask(
			array(
				'id'    => 'a',
				'level' => 1,
			)
		);
		$task_b = new TestTask(
			array(
				'id'    => 'b',
				'level' => 2,
			)
		);
		$result = Task::sort(
			$task_a,
			$task_b,
			array(
				array(
					'key'   => 'level',
					'order' => 'asc',
				),
			)
		);
		$this->assertEquals( -1, $result );
	}

	/**
	 * Test task sort with config with valid key desc.
	 */
	public function test_sort_with_sort_by_config_with_valid_key_desc() {
		$task_a = new TestTask(
			array(
				'id'    => 'a',
				'level' => 1,
			)
		);
		$task_b = new TestTask(
			array(
				'id'    => 'b',
				'level' => 2,
			)
		);
		$result = Task::sort(
			$task_a,
			$task_b,
			array(
				array(
					'key'   => 'level',
					'order' => 'desc',
				),
			)
		);
		$this->assertEquals( 1, $result );
	}

	/**
	 * Test task sort with config with multiple keys.
	 */
	public function test_sort_with_sort_by_config_with_multiple_keys() {
		$task_a  = new TestTask(
			array(
				'id'          => 'a',
				'level'       => 2,
				'is_complete' => false,
			)
		);
		$task_b  = new TestTask(
			array(
				'id'          => 'b',
				'level'       => 2,
				'is_complete' => true,
			)
		);
		$sort_by = array(
			array(
				'key'   => 'level',
				'order' => 'asc',
			),
			array(
				'key'   => 'is_complete',
				'order' => 'asc',
			),
		);
		$result  = Task::sort( $task_a, $task_b, $sort_by );
		// Given levels are the same it should return the comparison of is_complete.
		$this->assertEquals( -1, $result );

		$task_a->is_complete = true;
		$result              = Task::sort( $task_a, $task_b, $sort_by );
		// Given levels are the same it should return the comparison of is_complete.
		$this->assertEquals( 0, $result );
	}

	/**
	 * Test that the parent list ID is retreived.
	 */
	public function test_get_list_id() {
		$task = new TestTask(
			array(
				'id' => 'wc-unit-test-task',
			)
		);

		$this->assertEquals( 'extended', $task->get_list_id() );
	}

	/**
	 * Test that tracks events are recorded with the correct IDs.
	 */
	public function test_record_tracks_event() {
		$task = new TestTask(
			array(
				'id' => 'wc-unit-test-task',
			)
		);

		$this->assertEquals( 'extended_tasklist_test_event', $task->record_tracks_event( 'test_event' ) );
	}
}

