/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import OrdersPanel from './orders';

export function getAllPanels( {
	countLowStockProducts,
	countUnreadOrders,
	manageStock,
	orderStatuses,
} ) {
	const panels = [
		{
			className: 'woocommerce-homescreen-card',
			count: countUnreadOrders,
			id: 'orders-panel',
			initialOpen: true,
			panel: (
				<OrdersPanel
					countUnreadOrders={ countUnreadOrders }
					orderStatuses={ orderStatuses }
				/>
			),
			title: __( 'Orders', 'woocommerce-admin' ),
		},
		// Add another panel row here
	];

	if ( manageStock === 'yes' ) {
		panels.push( {
			className: 'woocommerce-homescreen-card',
			count: countLowStockProducts,
			id: 'stock-panel',
			initialOpen: countLowStockProducts > 0,
			panel: <></>,
			title: __( 'Stock', 'woocommerce-admin' ),
		} );
	}

	return panels;
}
