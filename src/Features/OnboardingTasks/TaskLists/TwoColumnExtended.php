<?php

/**
 * Handles storage and retrieval of a task list
 */

namespace Automattic\WooCommerce\Admin\Features\OnboardingTasks\TaskLists;

use Automattic\WooCommerce\Admin\Features\OnboardingTasks\TaskLists\Extended;

/**
 * Extended Task List class.
 */
class TwoColumnExtended extends Extended
{
	public static $id = 'extended_two_column';

	public function __construct()
	{
		parent::__construct(array(
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
			'tasks' => array(
				'ExtendedPayments'
			)
		));
	}
}

