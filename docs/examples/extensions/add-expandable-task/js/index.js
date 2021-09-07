/**
 * External dependencies
 */

import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import apiFetch from '@wordpress/api-fetch';

/**
 * WooCommerce dependencies
 */
import { Card, CardBody } from '@wordpress/components';
import { getHistory, getNewPath } from '@woocommerce/navigation';

/* global addExpandableTaskData */
const markExpandableTaskComplete = () => {
	apiFetch( {
		path: '/wc-admin/options',
		method: 'POST',
		data: { woocommerce_admin_add_expandable_task_example_complete: true },
	} )
		.then( () => {
			// Set the local `isComplete` to `true` so that task appears complete on the list.
			addExpandableTaskData.isComplete = true;
			// Redirect back to the root WooCommerce Admin page.
			getHistory().push( getNewPath( {}, '/', {} ) );
		} )
		.catch( ( error ) => {
			// Something went wrong with our update.
			console.log( error );
		} );
};

const markExpandableTaskIncomplete = () => {
	apiFetch( {
		path: '/wc-admin/options',
		method: 'POST',
		data: { woocommerce_admin_add_expandable_task_example_complete: false },
	} )
		.then( () => {
			addExpandableTaskData.isComplete = false;
			getHistory().push( getNewPath( {}, '/', {} ) );
		} )
		.catch( ( error ) => {
			console.log( error );
		} );
};

const ExpandableTask = () => {
	return (
		<Card className="woocommerce-task-card">
			<CardBody>
				{ __( 'Example task card content.', 'plugin-domain' ) }
				<br />
				<br />
				<div>
					{ addExpandableTaskData.isComplete ? (
						<button onClick={ markExpandableTaskIncomplete }>
							{ __( 'Mark task incomplete', 'plugin-domain' ) }
						</button>
					) : (
						<button onClick={ markExpandableTaskComplete }>
							{ __( 'Mark task complete', 'plugin-domain' ) }
						</button>
					) }
				</div>
			</CardBody>
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
				key: 'expandable-example',
				title: __( 'Example', 'plugin-domain' ),
				content: __( 'This is an expandable task.', 'plugin-domain' ),
				container: <ExpandableTask />,
				completed: addExpandableTaskData.isComplete,
				visible: true,
				additionalInfo: __(
					'Additional info here',
					'woocommerce-admin'
				),
				time: __( '2 minutes', 'woocommerce-admin' ),
				isDismissable: true,
				onDelete: () => console.log( 'The task was deleted' ),
				onDismiss: () => console.log( 'The task was dismissed' ),
				allowRemindMeLater: true,
				remindMeLater: () => console.log( 'Remind me later' ),
				action: () => console.log("This is an action!"),
                actionLabel: __( 'My action button', 'plugin-domain' ),
				level: 1,
                expandable: true,
                expanded: false,
			},
		];
	}
);
