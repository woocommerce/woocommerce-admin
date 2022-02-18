<?php
/**
 * Handles storage and retrieval of a task list
 */

namespace Automattic\WooCommerce\Admin\Features\OnboardingTasks\TaskLists;

use Automattic\WooCommerce\Admin\Features\OnboardingTasks\TaskLists\Extended;

/**
 * Extended Task List class.
 */
class TwoColumnExtended extends Extended {

	/**
	 * List id.
	 *
	 * @var string
	 */
	public static $list_id = 'extended_two_column';

	/**
	 * Constructor
	 *
	 * @param array $data Task list data.
	 */
	public function __construct( $data = array() ) {
		parent::__construct(
			array(
				'id'      => 'extended',
				'title'   => __( 'Things to do next', 'woocommerce-admin' ),
				'sort_by' => array(
					array(
						'key'   => 'is_complete',
						'order' => 'asc',
					),
					array(
						'key'   => 'level',
						'order' => 'asc',
					),
				),
				'tasks'   => array(
					'ExtendedPayments',
				),
			)
		);
	}

	/**
	 * Prefix event for track event naming.
	 *
	 * @param string $event_name Event name.
	 * @return string
	 */
	public function prefix_event( $event_name ) {
		return 'extended_tasklist_' . $event_name;
	}
}

