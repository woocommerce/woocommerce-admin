/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

export const filters = [
	{ label: __( 'All Products', 'wc-admin' ), value: 'all', path: [] },
	{
		label: __( 'Single Product', 'wc-admin' ),
		value: 'single',
		path: [],
		subFilters: [
			{
				label: __( 'Single Product', 'wc-admin' ),
				component: 'Search',
				value: 'single_search',
				path: [ 'single' ],
			},
		],
	},
	{ label: __( 'Top Products by Items Sold', 'wc-admin' ), value: 'top_items', path: [] },
	{ label: __( 'Top Products by Gross Sales', 'wc-admin' ), value: 'top_sales', path: [] },
	{ label: __( 'Comparison', 'wc-admin' ), value: 'compare', path: [] },
];
