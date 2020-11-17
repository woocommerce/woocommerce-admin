/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import OrdersPanel from './orders';
import StockPanel from './stock';

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
		manageStock === 'yes' && {
			className: 'woocommerce-homescreen-card',
			count: countLowStockProducts,
			id: 'stock-panel',
			initialOpen: countLowStockProducts > 0,
			panel: <StockPanel />,
			title: __( 'Stock', 'woocommerce-admin' ),
		},
		// Add another panel row here
	].filter( Boolean );

	return panels;
}
