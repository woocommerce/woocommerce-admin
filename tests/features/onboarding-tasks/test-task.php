<?php
/**
 * Class for creating testable tasks.
 *
 * @package WooCommerce\Admin\Tests\OnboardingTasks
 */

use Automattic\WooCommerce\Admin\Features\OnboardingTasks\Task;

/**
 * TestTask class.
 */
class TestTask extends Task {
	/**
	 * ID.
	 *
	 * @var string
	 */
	public $id = '';

	/**
	 * Visibility.
	 *
	 * @var boolean
	 */
	public $can_view = true;

	/**
	 * Completion.
	 *
	 * @var boolean
	 */
	public $is_complete = false;

	/**
	 * Snoozeable.
	 *
	 * @var boolean
	 */
	public $is_snoozeable = false;

	/**
	 * Dismissable.
	 *
	 * @var boolean
	 */
	public $is_dismissable = false;

	/**
	 * Level.
	 *
	 * @var boolean
	 */
	public $level = 3;

	/**
	 * Constructor.
	 *
	 * @param array $args Array of task args.
	 */
	public function __construct( $args ) {
		$task_args = wp_parse_args(
			$args,
			array(
				'id'             => null,
				'can_view'       => true,
				'is_complete'    => false,
				'is_dismissable' => false,
				'is_snoozeable'  => false,
				'level'          => 3,
			)
		);

		$this->id             = $task_args['id'];
		$this->can_view       = $task_args['can_view'];
		$this->is_complete    = $task_args['is_complete'];
		$this->is_dismissable = $task_args['is_dismissable'];
		$this->is_snoozeable  = $task_args['is_snoozeable'];
		$this->level          = $task_args['level'];
	}

	/**
	 * Title
	 *
	 * @return null
	 */
	public function get_title() {
		return null;
	}

	/**
	 * Title
	 *
	 * @return null
	 */
	public function get_content() {
		return null;
	}

	/**
	 * Time
	 *
	 * @return null
	 */
	public function get_time() {
		return null;
	}

	/**
	 * ID.
	 *
	 * @return string
	 */
	public function get_id() {
		return $this->id;
	}

	/**
	 * Parent ID.
	 *
	 * @return string
	 */
	public function get_parent_id() {
		return 'extended';
	}

	/**
	 * Check if a task is snoozeable.
	 *
	 * @return bool
	 */
	public function is_snoozeable() {
		return $this->is_snoozeable;
	}

	/**
	 * Check if a task is dismissable.
	 *
	 * @return bool
	 */
	public function is_dismissable() {
		return $this->is_dismissable;
	}

	/**
	 * Check if a task is complete.
	 *
	 * @return bool
	 */
	public function is_complete() {
		return $this->is_complete;
	}

	/**
	 * Check if a task is viewable.
	 *
	 * @return bool
	 */
	public function can_view() {
		return $this->can_view;
	}

	/**
	 * Level.
	 *
	 * @return string
	 */
	public function get_level() {
		return $this->level;
	}
}
