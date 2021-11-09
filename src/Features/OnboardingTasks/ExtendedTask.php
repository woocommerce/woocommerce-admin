<?php
/**
 * A temporary class for creating tasks on the fly.
 */

namespace Automattic\WooCommerce\Admin\Features\OnboardingTasks;

/**
 * ExtendedTask class.
 */
class ExtendedTask extends Task {
	/**
	 * ID.
	 *
	 * @var string
	 */
	public $id = '';

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
	 * Constructor.
	 *
	 * @param array $args Array of task args.
	 */
	public function __construct( $args ) {
		$task_args = wp_parse_args(
			array(
				'id'             => null,
				'is_dismissable' => false,
				'is_snoozeable'  => false,
			),
			$args
		);

		$this->id             = $task_args['id'];
		$this->is_dismissable = $task_args['is_dismissable'];
		$this->is_snoozeable  = $task_args['is_snoozeable'];
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
}
