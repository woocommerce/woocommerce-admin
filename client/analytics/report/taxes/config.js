/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */

export const charts = [
	{
		key: 'gross_discount',
		label: __( 'Gross Discount', 'wc-admin' ),
		type: 'currency',
	},
	{
		key: 'taxes_count',
		label: __( 'Taxes Count', 'wc-admin' ),
		type: 'number',
	},
	{
		key: 'orders_count',
		label: __( 'Orders Count', 'wc-admin' ),
		type: 'number',
	},
];

export const filters = [
	{
		label: __( 'Show', 'wc-admin' ),
		staticParams: [ 'chart' ],
		param: 'filter',
		showFilters: () => true,
		filters: [ { label: __( 'All Orders', 'wc-admin' ), value: 'all' } ],
	},
];
