/**
 * External dependencies
 */

import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * WooCommerce dependencies
 */
import { Card } from '@woocommerce/components';

const Task = () => {
	return (
		<Card className="is-narrow">
			{ __( 'Example task card content.' ) }
		</Card>
	);
};

/**
 * Use the 'woocommerce_onboarding_task_list' filter to add a task page.
 */
addFilter( 'woocommerce_onboarding_task_list', 'plugin-domain', tasks => {
	return [
		...tasks,
		{
			key: 'example',
			title: __( 'Example', 'woocommerce-admin' ),
			content: __(
				'This is an example task.',
				'wooocommerce-admin'
			),
			icon: 'info',
			container: <Task />,
			completed: false,
			visible: true,
		},
	];
} );
