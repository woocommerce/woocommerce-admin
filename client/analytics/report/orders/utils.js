/** @format */
/**
 * External dependencies
 */

/**
 * WooCommerce dependencies
 */
import { getCurrencyFormatDecimal } from '@woocommerce/currency';

export function formatTableOrders( orders ) {
	return orders.map( order => {
		const {
			date_created,
			id,
			status,
			customer_id,
			line_items,
			coupon_lines,
			currency,
			total,
			total_tax,
			shipping_total,
			discount_total,
			refunds,
		} = order;
		const refundTotal = refunds.reduce( ( acc, refund ) => acc - parseInt( refund.total ), 0 );

		return {
			date: date_created,
			id,
			status,
			customer_id,
			line_items,
			items_sold: line_items.reduce( ( acc, item ) => item.quantity + acc, 0 ),
			coupon_lines,
			currency,
			net_revenue: getCurrencyFormatDecimal(
				total - total_tax - shipping_total - discount_total - refundTotal
			),
		};
	} );
}
