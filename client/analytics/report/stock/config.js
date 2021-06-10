/**
 * External dependencies
 */
import { __, _x } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

const STOCK_REPORT_FILTERS_FILTER = 'woocommerce_admin_stock_report_filters';
const STOCK_REPORT_ADVANCED_FILTERS_FILTER =
	'woocommerce_admin_stock_report_advanced_filters';

export const showDatePicker = false;

export const advancedFilters = applyFilters(
	STOCK_REPORT_ADVANCED_FILTERS_FILTER,
	{
		filters: {},
		title: _x(
			'Taxes Match {{select /}} Filters',
			'A sentence describing filters for Variations. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ',
			'woocommerce-admin'
		),
	}
);

const filterValues = [
	{ label: __( 'All Products', 'woocommerce-admin' ), value: 'all' },
	{
		label: __( 'Out of Stock', 'woocommerce-admin' ),
		value: 'outofstock',
	},
	{
		label: __( 'Low Stock', 'woocommerce-admin' ),
		value: 'lowstock',
	},
	{ label: __( 'In Stock', 'woocommerce-admin' ), value: 'instock' },
	{
		label: __( 'On Backorder', 'woocommerce-admin' ),
		value: 'onbackorder',
	},
];

if ( Object.keys( advancedFilters.filters ).length ) {
	filterValues.push( {
		label: __( 'Advanced Filters', 'woocommerce-admin' ),
		value: 'advanced',
	} );
}

export const filters = applyFilters( STOCK_REPORT_FILTERS_FILTER, [
	{
		label: __( 'Show', 'woocommerce-admin' ),
		staticParams: [ 'paged', 'per_page' ],
		param: 'type',
		showFilters: () => true,
		filters: filterValues,
	},
] );
