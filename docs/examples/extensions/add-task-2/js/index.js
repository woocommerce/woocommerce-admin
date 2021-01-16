/**
 * External dependencies
 */

import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import apiFetch from '@wordpress/api-fetch';

/**
 * WooCommerce dependencies
 */
import { Card } from '@woocommerce/components';
import { getHistory, getNewPath } from '@woocommerce/navigation';

/* global addTaskData2 */
const markTaskComplete2 = () => {
	apiFetch( {
		path: '/wc-admin/options',
		method: 'POST',
		data: { woocommerce_admin_add_task_example_complete_2: true },
	} )
		.then( () => {
			// Set the local `isComplete` to `true` so that task appears complete on the list.
			addTaskData2.isComplete = true;
			// Redirect back to the root WooCommerce Admin page.
			getHistory().push( getNewPath( {}, '/', {} ) );
		} )
		.catch( ( error ) => {
			// Something went wrong with our update.
			console.log( error );
		} );
};

const markTaskIncomplete2 = () => {
	apiFetch( {
		path: '/wc-admin/options',
		method: 'POST',
		data: { woocommerce_admin_add_task_example_complete_2: false },
	} )
		.then( () => {
			addTaskData2.isComplete = false;
			getHistory().push( getNewPath( {}, '/', {} ) );
		} )
		.catch( ( error ) => {
			console.log( error );
		} );
};

const Task2 = () => {
	return (
		<Card className="woocommerce-task-card">
			{ __( 'Example task card content.', 'plugin-domain' ) }
			<br />
			<br />
			<div>
				{ addTaskData2.isComplete ? (
					<button onClick={ markTaskIncomplete2 }>
						{ __( 'Mark task 2 incomplete', 'plugin-domain' ) }
					</button>
				) : (
					<button onClick={ markTaskComplete2 }>
						{ __( 'Mark task 2 complete', 'plugin-domain' ) }
					</button>
				) }
			</div>
		</Card>
	);
};

/**
 * Use the 'woocommerce_admin_onboarding_task_list' filter to add a task page.
 */
addFilter(
	'woocommerce_admin_onboarding_task_list',
	'plugin-domain',
	( tasks ) => {
		return [
			...tasks,
			{
				key: 'example-2',
				title: __( 'Example 2', 'plugin-domain' ),
				content: __( 'This is an example task.', 'plugin-domain' ),
				container: <Task2 />,
				completed: addTaskData2.isComplete,
				visible: true,
				additionalInfo: __( 'Additional info here', 'woocommerce-admin' ),
				time: __( '2 minutes', 'woocommerce-admin' ),
				isDismissable: true,
				onDismiss: () => console.log( "The task was dismissed" ),
			},
		];
	}
);
