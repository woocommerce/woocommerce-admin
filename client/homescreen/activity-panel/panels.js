/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import OrdersPanel from './orders';

export function getAllPanels( { countUnreadOrders } ) {
	return [
		{
			className: 'woocommerce-homescreen-card',
			count: countUnreadOrders,
			id: 'orders-panel',
			initialOpen: true,
			panel: (
				<OrdersPanel hasActionableOrders={ countUnreadOrders > 0 } />
			),
			title: __( 'Orders', 'woocommerce-admin' ),
		},
		{
			className: 'woocommerce-homescreen-card',
			count: countUnreadOrders,
			id: 'orders-panel-test1',
			initialOpen: false,
			panel: (
				<OrdersPanel hasActionableOrders={ countUnreadOrders > 0 } />
			),
			title: __( 'Test 1', 'woocommerce-admin' ),
		},
		{
			className: 'woocommerce-homescreen-card',
			count: countUnreadOrders,
			id: 'orders-panel-test2',
			initialOpen: false,
			panel: (
				<OrdersPanel hasActionableOrders={ countUnreadOrders > 0 } />
			),
			title: __( 'Test 2', 'woocommerce-admin' ),
		},
		{
			className: 'woocommerce-homescreen-card',
			count: countUnreadOrders,
			id: 'orders-panel-test3',
			initialOpen: false,
			panel: (
				<OrdersPanel hasActionableOrders={ countUnreadOrders > 0 } />
			),
			title: __( 'Test 3', 'woocommerce-admin' ),
		},
		// Add another panel row here
	];
}
