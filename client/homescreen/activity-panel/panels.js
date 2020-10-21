/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import OrdersPanel from './orders';

export function getAllPanels( { countUnreadOrders } ) {
	const panels = [
		{
			title: __( 'Orders', 'woocommerce-admin' ),
			count: countUnreadOrders,
			initialOpen: true,
			panel: (
				<OrdersPanel hasActionableOrders={ countUnreadOrders > 0 } />
			),
		},
		// Add another panel row here
	];
	return panels;
}
