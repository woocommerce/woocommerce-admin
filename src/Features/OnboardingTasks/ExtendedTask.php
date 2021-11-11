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
			$args,
			array(
				'id'              => null,
				'is_dismissable'  => false,
				'is_snoozeable'   => false,
				'is_snoozeable'   => false,
				'is_visible'      => true,
				'level'           => 3,
				'additional_info' => null,
				'content'         => '',
				'title'           => '',
				'is_complete'     => false,
				'time'            => null,
			)
		);

		$this->id              = $task_args['id'];
		$this->additional_info = $task_args['additional_info'];
		$this->content         = $task_args['content'];
		$this->is_complete     = $task_args['is_complete'];
		$this->is_dismissable  = $task_args['is_dismissable'];
		$this->is_snoozeable   = $task_args['is_snoozeable'];
		$this->is_visible      = $task_args['is_visible'];
		$this->level           = $task_args['level'];
		$this->time            = $task_args['time'];
		$this->title           = $task_args['title'];
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
	 * Additonal info.
	 *
	 * @return string
	 */
	public function get_additional_info() {
		return $this->additional_info;
	}

	/**
	 * Content.
	 *
	 * @return string
	 */
	public function get_content() {
		return $this->content;
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
	 * Level.
	 *
	 * @return int
	 */
	public function get_level() {
		return $this->level;
	}

	/**
	 * Title
	 *
	 * @return string
	 */
	public function get_title() {
		return $this->title;
	}

	/**
	 * Time
	 *
	 * @return string|null
	 */
	public function get_time() {
		return $this->time;
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
	 * Check if a task is dismissable.
	 *
	 * @return bool
	 */
	public function is_complete() {
		return $this->is_complete;
	}

	/**
	 * Check if a task is dismissable.
	 *
	 * @return bool
	 */
	public function can_view() {
		return $this->is_visible;
	}
}
