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
	 * Option name of hidden task lists.
	 */
	const HIDDEN_OPTION = 'woocommerce_task_list_hidden_lists';

	/**
	 * Option name of completed task lists.
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
	 * Tasks.
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
	 * Prefix event for backwards compatibility with tracks event naming.
	 *
	 * @param string $event_name Event name.
	 * @return string
	 */
	public function prefix_event( $event_name ) {
		if ( 'setup' === $this->id ) {
			return $event_name;
		}

		return $this->id . '_' . $event_name;
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
		if ( $this->is_hidden() ) {
			return;
		}

		$viewable_tasks  = $this->get_viewable_tasks();
		$completed_count = array_reduce(
			$viewable_tasks,
			function( $total, $task ) {
				return $task->is_complete ? $total + 1 : $total;
			},
			0
		);

		wc_admin_record_tracks_event(
			$this->prefix_event( 'tasklist_completed' ),
			array(
				'action'                => 'remove_card',
				'completed_task_count'  => $completed_count,
				'incomplete_task_count' => count( $viewable_tasks ) - $completed_count,
			)
		);

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
	 * Check if all viewable tasks are complete.
	 *
	 * @return bool
	 */
	public function is_complete() {
		$viewable_tasks = $this->get_viewable_tasks();

		return array_reduce(
			$viewable_tasks,
			function( $is_complete, $task ) {
				return ! $task->is_complete ? false : $is_complete;
			},
			true
		);
	}

	/**
	 * Check if a task list has previously been marked as complete.
	 *
	 * @return bool
	 */
	public function has_previously_completed() {
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
	 *
	 * @return array
	 */
	public function get_viewable_tasks() {
		return array_values(
			array_filter(
				$this->tasks,
				function( $task ) {
					return $task->can_view;
				}
			)
		);
	}

	/**
	 * Track list completion of viewable tasks.
	 */
	public function possibly_track_completion() {
		if ( ! $this->is_complete() ) {
			return;
		}

		if ( $this->has_previously_completed() ) {
			return;
		}

		$completed_lists   = get_option( self::COMPLETED_OPTION, array() );
		$completed_lists[] = $this->id;
		update_option( self::COMPLETED_OPTION, $completed_lists );
		wc_admin_record_tracks_event( $this->prefix_event( 'tasklist_tasks_completed' ) );
	}

	/**
	 * Get the list for use in JSON.
	 *
	 * @return array
	 */
	public function get_json() {
		$this->possibly_track_completion();

		return array(
			'id'         => $this->id,
			'title'      => $this->title,
			'isHidden'   => $this->is_hidden(),
			'isVisible'  => ! $this->is_hidden(),
			'isComplete' => $this->is_complete(),
			'tasks'      => array_map(
				function( $task ) {
					return $task->get_json();
				},
				$this->get_viewable_tasks()
			),

		);
	}

}
