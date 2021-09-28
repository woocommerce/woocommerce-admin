<?php
/**
 * Handles storage and retrieval of a task list
 */

namespace Automattic\WooCommerce\Admin\Features\OnboardingTasks;

use Automattic\WooCommerce\Admin\Features\OnboardingTasks\Task;

/**
 * Task List class.
 */
class TaskList {
	/**
	 * Option name hidden task lists.
	 */
	const HIDDEN_OPTION = 'woocommerce_task_list_hidden_lists';

	/**
	 * Option name completed task lists.
	 */
	const COMPLETED_OPTION = 'woocommerce_task_list_completed_lists';

	/**
	 * ID.
	 *
	 * @var string
	 */
	public $id = '';

	/**
	 * Title.
	 *
	 * @var string
	 */
	public $title = '';

	/**
	 * Title.
	 *
	 * @var array
	 */
	public $tasks = array();

	/**
	 * Constructor
	 *
	 * @param array $data Task list data.
	 */
	public function __construct( $data = array() ) {
		$defaults = array(
			'id'    => null,
			'title' => '',
			'tasks' => array(),
		);

		$data = wp_parse_args( $data, $defaults );

		$this->id    = $data['id'];
		$this->title = $data['title'];
		$this->tasks = $data['tasks'];
	}

	/**
	 * Check if the task list is hidden.
	 *
	 * @return bool
	 */
	public function is_hidden() {
		$hidden = get_option( self::HIDDEN_OPTION, array() );
		return in_array( $this->id, $hidden, true );
	}

	/**
	 * Hide the task list.
	 *
	 * @return bool
	 */
	public function hide() {
		$hidden   = get_option( self::HIDDEN_OPTION, array() );
		$hidden[] = $this->id;
		return update_option( self::HIDDEN_OPTION, array_unique( $hidden ) );
	}

	/**
	 * Undo hiding of the task list.
	 *
	 * @return bool
	 */
	public function show() {
		$hidden = get_option( self::HIDDEN_OPTION, array() );
		$hidden = array_diff( $hidden, array( $this->id ) );
		return update_option( self::HIDDEN_OPTION, $hidden );
	}

	/**
	 * Check if the task list is complete.
	 *
	 * @return bool
	 */
	public function is_complete() {
		$complete = get_option( self::COMPLETED_OPTION, array() );
		return in_array( $this->id, $complete, true );
	}

	/**
	 * Add task to the task list.
	 *
	 * @param array $args Task properties.
	 */
	public function add_task( $args ) {
		$this->tasks[] = new Task( $args );
	}

	/**
	 * Get only visible tasks in list.
	 */
	public function get_visible_tasks() {
		return array_values(
			array_filter(
				$this->tasks,
				function( $task ) {
					return $task->is_visible();
				}
			)
		);
	}

	/**
	 * Get the list for use in JSON.
	 *
	 * @param boolean $only_visible Only display visible tasks.
	 * @return array
	 */
	public function get_json( $only_visible = false ) {
		return array(
			'id'         => $this->id,
			'title'      => $this->title,
			'isHidden'   => $this->is_hidden(),
			'isComplete' => $this->is_complete(),
			'tasks'      => array_map(
				function( $task ) {
					return $task->get_json();
				},
				$only_visible ? $this->get_visible_tasks() : $this->tasks
			),

		);
	}

}
