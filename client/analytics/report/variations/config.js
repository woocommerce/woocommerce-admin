/**
 * External dependencies
 */
import { __, _x } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import { getVariationLabels } from '../../../lib/async-requests';

const VARIATIONS_REPORT_CHARTS_FILTER =
	'woocommerce_admin_variations_report_charts';
const VARIATIONS_REPORT_FILTERS_FILTER =
	'woocommerce_admin_variations_report_filters';
const VARIATIONS_REPORT_ADVANCED_FILTERS_FILTER =
	'woocommerce_admin_variations_report_advanced_filters';

export const charts = applyFilters( VARIATIONS_REPORT_CHARTS_FILTER, [
	{
		key: 'items_sold',
		label: __( 'Items Sold', 'woocommerce-admin' ),
		order: 'desc',
		orderby: 'items_sold',
		type: 'number',
	},
	{
		key: 'net_revenue',
		label: __( 'Net Sales', 'woocommerce-admin' ),
		order: 'desc',
		orderby: 'net_revenue',
		type: 'currency',
	},
	{
		key: 'orders_count',
		label: __( 'Orders', 'woocommerce-admin' ),
		order: 'desc',
		orderby: 'orders_count',
		type: 'number',
	},
] );

export const filters = applyFilters( VARIATIONS_REPORT_FILTERS_FILTER, [
	{
		label: __( 'Show', 'woocommerce-admin' ),
		staticParams: [ 'chartType', 'paged', 'per_page' ],
		param: 'filter',
		showFilters: () => true,
		filters: [
			{
				label: __( 'All Variations', 'woocommerce-admin' ),
				chartMode: 'item-comparison',
				value: 'all',
			},
			{
				label: __( 'Single Variation', 'woocommerce-admin' ),
				value: 'select_variation',
				subFilters: [
					{
						component: 'Search',
						value: 'single_variation',
						path: [ 'select_variation' ],
						settings: {
							type: 'variations',
							param: 'variations',
							getLabels: getVariationLabels,
							labels: {
								placeholder: __(
									'Type to search for a variation',
									'woocommerce-admin'
								),
								button: __(
									'Single Variation',
									'woocommerce-admin'
								),
							},
						},
					},
				],
			},
			{
				label: __( 'Advanced Filters', 'woocommerce-admin' ),
				value: 'advanced',
			},
		],
	},
] );

export const advancedFilters = applyFilters(
	VARIATIONS_REPORT_ADVANCED_FILTERS_FILTER,
	{
		title: _x(
			'Variations Match {{select /}} Filters',
			'A sentence describing filters for Variations. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ',
			'woocommerce-admin'
		),
		filters: {
			attribute: {
				allowMultiple: true,
				labels: {
					add: __( 'Attribute', 'woocommerce-admin' ),
					placeholder: __( 'Search attributes', 'woocommerce-admin' ),
					remove: __(
						'Remove attribute filter',
						'woocommerce-admin'
					),
					rule: __(
						'Select a product attribute filter match',
						'woocommerce-admin'
					),
					/* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
					title: __(
						'{{title}}Attribute{{/title}} {{rule /}} {{filter /}}',
						'woocommerce-admin'
					),
					filter: __( 'Select attributes', 'woocommerce-admin' ),
				},
				rules: [
					{
						value: 'is',
						/* translators: Sentence fragment, logical, "Is" refers to searching for product variations matching a chosen attribute. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
						label: _x(
							'Is',
							'product attribute',
							'woocommerce-admin'
						),
					},
					{
						value: 'is_not',
						/* translators: Sentence fragment, logical, "Is Not" refers to searching for product variations that don\'t match a chosen attribute. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
						label: _x(
							'Is Not',
							'product attribute',
							'woocommerce-admin'
						),
					},
				],
				input: {
					component: 'ProductAttribute',
				},
			},
		},
	}
);
