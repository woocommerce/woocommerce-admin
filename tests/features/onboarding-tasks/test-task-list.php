<?php
/**
 * Handles storage and retrieval of a task list
 */

use Automattic\WooCommerce\Admin\Features\OnboardingTasks\TaskList;

/**
 * Task List class.
 */
class TestTaskList extends TaskList {

	/**
	 * List id.
	 *
	 * @var string
	 */
	public static $list_id = 'setup';
}

/**
 * Task List class.
 */
class TestExtendedTaskList extends TaskList {

	/**
	 * List id.
	 *
	 * @var string
	 */
	public static $list_id = 'extended';
}


