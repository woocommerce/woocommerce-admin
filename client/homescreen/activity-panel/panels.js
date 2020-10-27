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
			initialOpen: true,
			panel: (
				<OrdersPanel hasActionableOrders={ countUnreadOrders > 0 } />
			),
			title: __( 'Orders', 'woocommerce-admin' ),
		},
		// Add another panel row here
	];
}
