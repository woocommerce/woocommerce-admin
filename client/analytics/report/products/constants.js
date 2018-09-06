/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import { stringifyQuery } from 'lib/nav-utils';

export const filters = [
	{ label: __( 'All Products', 'wc-admin' ), value: 'all' },
	{
		label: __( 'Single Product', 'wc-admin' ),
		value: 'single',
		subFilters: [
			{
				component: 'Search',
				value: 'single_search',
				path: [ 'single' ],
			},
		],
	},
	{ label: __( 'Top Products by Items Sold', 'wc-admin' ), value: 'top_items' },
	{ label: __( 'Top Products by Gross Sales', 'wc-admin' ), value: 'top_sales' },
	{
		label: __( 'Comparison', 'wc-admin' ),
		value: 'compare',
		settings: {
			type: 'products',
			param: 'products',
			getLabels: function( queryString ) {
				const idList = queryString
					.split( ',' )
					.map( id => parseInt( id, 10 ) )
					.filter( Boolean );
				const payload = stringifyQuery( {
					include: idList.join( ',' ),
					per_page: idList.length,
				} );
				return apiFetch( { path: '/wc/v3/products' + payload } );
			},
			labels: {
				title: __( 'Compare Products', 'wc-admin' ),
				update: __( 'Compare', 'wc-admin' ),
			},
		},
	},
];
