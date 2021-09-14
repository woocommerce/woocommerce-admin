<?php
/**
 * Handles task related methods.
 */

namespace Automattic\WooCommerce\Admin\Features\OnboardingTasks;

/**
 * Task class.
 */
class Task {
	/**
	 * ID.
	 *
	 * @var string
	 */
	protected $id = '';

	/**
	 * Title.
	 *
	 * @var string
	 */
	protected $title = '';

	/**
	 * Title.
	 *
	 * @var string
	 */
	protected $content = '';

	/**
	 * Action label.
	 *
	 * @var string
	 */
	protected $action_label = '';

	/**
	 * Action URL.
	 *
	 * @var string|null
	 */
	protected $action_url = null;

	/**
	 * Task completion.
	 *
	 * @var bool
	 */
	protected $is_complete = false;

	/**
	 * Viewing capability.
	 *
	 * @var bool
	 */
	protected $can_view = true;

	/**
	 * Time string.
	 *
	 * @var string|null
	 */
	protected $time = null;

	/**
	 * Dismissability.
	 *
	 * @var bool
	 */
	protected $is_dismissable = false;

	/**
	 * Snoozeability.
	 *
	 * @var bool
	 */
	protected $is_snoozeable = false;

	/**
	 * Snoozeability.
	 *
	 * @var string|null
	 */
	protected $snoozed_until = null;

	/**
	 * Constructor
	 *
	 * @param array $data Task list data.
	 */
	public function __construct( $data = array() ) {
		$defaults = array(
			'id'             => null,
			'title'          => '',
			'content'        => '',
			'action_label'   => __( "Let's go", 'woocommerce-admin' ),
			'action_url'     => null,
			'is_complete'    => false,
			'can_view'       => true,
			'time'           => null,
			'is_dismissable' => false,
			'is_snoozeable'  => false,
			'snoozed_until'  => null,
		);

		$data = wp_parse_args( $data, $defaults );

		$this->id             = (int) $data['id'];
		$this->title          = (string) $data['title'];
		$this->content        = (string) $data['content'];
		$this->action_label   = (string) $data['action_label'];
		$this->action_url     = (string) $data['action_url'];
		$this->is_complete    = (bool) $data['is_complete'];
		$this->can_view       = (bool) $data['can_view'];
		$this->time           = (string) $data['time'];
		$this->is_dismissable = (bool) $data['is_dismissable'];
		$this->is_snoozeable  = (bool) $data['is_snoozeable'];

		$snoozed_tasks = get_option( 'woocommerce_task_list_remind_me_later_tasks', array() );
		if ( isset( $snoozed_tasks[ $this->id ] ) ) {
			$this->snoozed_until = $snoozed_tasks[ $this->id ];
		}
	}

	/**
	 * Bool for task dismissal.
	 */
	public function is_dismissed() {
		if ( ! $this->is_dismissable ) {
			return false;
		}

		$dismissed = get_option( 'woocommerce_task_list_dismissed_tasks', array() );

		return in_array( $this->id, $dismissed, true );
	}

	/**
	 * Bool for task snoozed.
	 */
	public function is_snoozed() {
		if ( ! $this->is_snoozeable ) {
			return false;
		}

		$snoozed = get_option( 'woocommerce_task_list_remind_me_later_tasks', array() );

		return in_array( $this->id, $snoozed, true );
	}

	/**
	 * Bool for task visibility.
	 */
	public function is_visible() {
		return $this->can_view && ! $this->is_snoozed() && ! $this->is_dismissed();
	}

	/**
	 * Get the task as JSON.
	 */
	public function get_json() {
		return array(
			'id'            => $this->id,
			'title'         => $this->title,
			'content'       => $this->content,
			'actionLabel'   => $this->action_label,
			'actionUrl'     => $this->action_url,
			'isComplete'    => $this->is_complete,
			'isVisible'     => $this->is_visible(),
			'time'          => $this->time,
			'isDismissed'   => $this->is_dismissed(),
			'isDismissable' => $this->is_dismissable,
			'isSnoozed'     => $this->is_snoozed(),
			'isSnoozeable'  => $this->is_snoozeable,
			'snoozedUntil'  => $this->snoozed_until,
		);
	}

}
