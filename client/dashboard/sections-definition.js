/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import DashboardCharts from './dashboard-charts';
import Leaderboards from './leaderboards';
import StorePerformance from './store-performance';

export default [
	{
		key: 'store-performance',
		component: StorePerformance,
		title: __( 'Store Performance', 'woocommerce-admin' ),
		hiddenBlocks: [
			'coupons/amount',
			'coupons/orders_count',
			'downloads/download_count',
			'taxes/order_tax',
			'taxes/total_tax',
			'taxes/shipping_tax',
			'revenue/shipping',
		],
	},
	{
		key: 'charts',
		component: DashboardCharts,
		title: __( 'Charts', 'woocommerce-admin' ),
		hiddenBlocks: [
			'avg_order_value',
			'avg_items_per_order',
			'items_sold',
			'gross_revenue',
			'refunds',
			'coupons',
			'taxes',
			'shipping',
			'amount',
			'total_tax',
			'order_tax',
			'shipping_tax',
		],
	},
	{
		key: 'leaderboards',
		component: Leaderboards,
		title: __( 'Leaderboards', 'woocommerce-admin' ),
		hiddenBlocks: [ 'coupons', 'customers' ],
	},
];
