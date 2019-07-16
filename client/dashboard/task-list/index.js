/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import Gridicon from 'gridicons';
import { noop } from 'lodash';

/**
 * WooCommerce dependencies
 */
import { Card, List } from '@woocommerce/components';

/**
 * Internal depdencies
 */
import './style.scss';

const getTasks = () => {
	return [
		{
			title: __( 'Connect your store to WooCommerce.com', 'woocommerce-admin' ),
			description: 'Install and manage your extensions directly from your Dashboard',
			before: <Gridicon icon="sync" />,
			after: <Gridicon icon="chevron-right" />,
			onClick: noop,
		},
		{
			title: __( 'Add your first product', 'woocommerce-admin' ),
			description: 'Add products manually, import from a sheet or migrate from another platform',
			before: <Gridicon icon="plus" />,
			after: <Gridicon icon="chevron-right" />,
			onClick: noop,
		},
		{
			title: __( 'Personalize your store', 'woocommerce-admin' ),
			description: 'Create a custom homepage and upload your logo',
			before: <Gridicon icon="ink" />,
			after: <Gridicon icon="chevron-right" />,
			onClick: noop,
		},
		{
			title: __( 'Set up shipping', 'woocommerce-admin' ),
			description: 'Configure some basic shipping rates to get started',
			before: <Gridicon icon="shipping" />,
			after: <Gridicon icon="chevron-right" />,
			onClick: noop,
		},
		{
			title: __( 'Set up tax', 'woocommerce-admin' ),
			description: 'Choose how to configure tax rates - manually or automatically',
			before: <Gridicon icon="institution" />,
			after: <Gridicon icon="chevron-right" />,
			onClick: noop,
		},
		{
			title: __( 'Set up payments', 'woocommerce-admin' ),
			description: 'Select which payment providers you’d like to use and configure them',
			before: <Gridicon icon="credit-card" />,
			after: <Gridicon icon="chevron-right" />,
			onClick: noop,
		},
	];
};

export default class TaskDashboard extends Component {
	componentDidMount() {
		document.body.classList.add( 'woocommerce-task-dashboard__body' );
	}

	componentWillUnmount() {
		document.body.classList.remove( 'woocommerce-task-dashboard__body' );
	}

	render() {
		return (
			<Fragment>
				<div className="woocommerce-task-dashboard__container">
					<Card
						title={ __( 'Set up your store and start selling', 'woocommerce-admin' ) }
						description={ __(
							'Below you’ll find a list of the most important steps to get your store up and running.',
							'woocommerce-admin'
						) }
					>
						<List items={ getTasks() } />
					</Card>
				</div>
			</Fragment>
		);
	}
}
