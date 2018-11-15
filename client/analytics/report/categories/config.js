/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { getRequestByIdString } from 'lib/async-requests';
import { NAMESPACE } from 'store/constants';

export const charts = [
	{
		key: 'orders_count',
		label: __( 'Orders Count', 'wc-admin' ),
		type: 'number',
	},
	{
		key: 'gross_revenue',
		label: __( 'Gross Revenue', 'wc-admin' ),
		type: 'currency',
	},
	{
		key: 'items_sold',
		label: __( 'Items Sold', 'wc-admin' ),
		type: 'number',
	},
	{
		key: 'products_count',
		label: __( 'Number of Products', 'wc-admin' ),
		type: 'number',
	},
];

export const filters = [
	{ label: __( 'All Categories', 'wc-admin' ), value: 'all' },
	{
		label: __( 'Comparison', 'wc-admin' ),
		value: 'compare',
		settings: {
			type: 'categories',
			param: 'category',
			getLabels: getRequestByIdString( NAMESPACE + 'categories', category => ( {
				id: category.id,
				label: category.code,
			} ) ),
			labels: {
				title: __( 'Compare Category Codes', 'wc-admin' ),
				update: __( 'Compare', 'wc-admin' ),
			},
		},
	},
];
