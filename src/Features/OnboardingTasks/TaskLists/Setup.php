<?php

/**
 * Handles storage and retrieval of a task list
 */

namespace Automattic\WooCommerce\Admin\Features\OnboardingTasks\TaskLists;

use Automattic\WooCommerce\Admin\Features\OnboardingTasks\TaskList;

/**
 * Task List class.
 */
class Setup extends TaskList {

	public static $id = 'setup';

	public function __construct() {
		parent::__construct(
			array(
				'id'    => 'setup',
				'title' => __( 'Get ready to start selling', 'woocommerce-admin' ),
				'tasks' => array(
					'StoreDetails',
					'Purchase',
					'Products',
					'WooCommercePayments',
					'Payments',
					'Tax',
					'Shipping',
					'Marketing',
					'Appearance',
				),
			)
		);
	}

	/**
	 * Check if the task list is hidden.
	 *
	 * @return bool
	 */
	public function is_hidden() {
		$hidden = get_option( self::HIDDEN_OPTION, array() );
		return in_array( $this::$id, $hidden, true );
	}

	/**
	 * Prefix event for track event naming.
	 *
	 * @param string $event_name Event name.
	 * @return string
	 */
	public function prefix_event( $event_name ) {
		return 'tasklist_' . $event_name;
	}
}

