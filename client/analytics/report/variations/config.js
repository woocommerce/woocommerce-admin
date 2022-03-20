/**
 * External dependencies
 */
import { __, _x } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import { dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import {
	getCategoryLabels,
	getProductLabels,
	getVariationLabels,
} from '../../../lib/async-requests';
import { STORE_KEY as CES_STORE_KEY } from '../../../customer-effort-score-tracks/data/constants';

const VARIATIONS_REPORT_CHARTS_FILTER =
	'woocommerce_admin_variations_report_charts';
const VARIATIONS_REPORT_FILTERS_FILTER =
	'woocommerce_admin_variations_report_filters';
const VARIATIONS_REPORT_ADVANCED_FILTERS_FILTER =
	'woocommerce_admin_variations_report_advanced_filters';

const { addCesSurveyForAnalytics } = dispatch( CES_STORE_KEY );

/**
 * @typedef {import('../index.js').chart} chart
 */

/**
 * Variations Report charts filter.
 *
 * @filter woocommerce_admin_variations_report_charts
 * @param {Array.<chart>} charts Report charts.
 */
export const charts = applyFilters( VARIATIONS_REPORT_CHARTS_FILTER, [
	{
		key: 'items_sold',
		label: __( 'Items sold', 'woocommerce-admin' ),
		order: 'desc',
		orderby: 'items_sold',
		type: 'number',
	},
	{
		key: 'net_revenue',
		label: __( 'Net sales', 'woocommerce-admin' ),
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

/**
 * @typedef {import('../index.js').filter} filter
 */

/**
 * Variations Report Filters.
 *
 * @filter woocommerce_admin_variations_report_filters
 * @param {Array.<filter>} filters Report filters.
 */
export const filters = applyFilters( VARIATIONS_REPORT_FILTERS_FILTER, [
	{
		label: __( 'Show', 'woocommerce-admin' ),
		staticParams: [ 'chartType', 'paged', 'per_page' ],
		param: 'filter-variations',
		showFilters: () => true,
		filters: [
			{
				label: __( 'All variations', 'woocommerce-admin' ),
				chartMode: 'item-comparison',
				value: 'all',
			},
			{
				label: __( 'Single variation', 'woocommerce-admin' ),
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
									'Single variation',
									'woocommerce-admin'
								),
							},
						},
					},
				],
			},
			{
				label: __( 'Comparison', 'woocommerce-admin' ),
				chartMode: 'item-comparison',
				value: 'compare-variations',
				settings: {
					type: 'variations',
					param: 'variations',
					getLabels: getVariationLabels,
					labels: {
						helpText: __(
							'Check at least two variations below to compare',
							'woocommerce-admin'
						),
						placeholder: __(
							'Search for variations to compare',
							'woocommerce-admin'
						),
						title: __( 'Compare Variations', 'woocommerce-admin' ),
						update: __( 'Compare', 'woocommerce-admin' ),
					},
					onClick: addCesSurveyForAnalytics,
				},
			},
			{
				label: __( 'Advanced filters', 'woocommerce-admin' ),
				value: 'advanced',
			},
		],
	},
] );

/**
 * Variations Report Advanced Filters.
 *
 * @filter woocommerce_admin_variations_report_advanced_filters
 * @param {Object} advancedFilters         Report Advanced Filters.
 * @param {string} advancedFilters.title   Interpolated component string for Advanced Filters title.
 * @param {Object} advancedFilters.filters An object specifying a report's Advanced Filters.
 */
export const advancedFilters = applyFilters(
	VARIATIONS_REPORT_ADVANCED_FILTERS_FILTER,
	{
		title: _x(
			'Variations match {{select /}} filters',
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
			category: {
				labels: {
					add: __( 'Categories', 'woocommerce-admin' ),
					placeholder: __( 'Search categories', 'woocommerce-admin' ),
					remove: __(
						'Remove categories filter',
						'woocommerce-admin'
					),
					rule: __(
						'Select a category filter match',
						'woocommerce-admin'
					),
					/* translators: A sentence describing a Category filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
					title: __(
						'{{title}}Category{{/title}} {{rule /}} {{filter /}}',
						'woocommerce-admin'
					),
					filter: __( 'Select categories', 'woocommerce-admin' ),
				},
				rules: [
					{
						value: 'includes',
						/* translators: Sentence fragment, logical, "Includes" refers to variations including a given category. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
						label: _x(
							'Includes',
							'categories',
							'woocommerce-admin'
						),
					},
					{
						value: 'excludes',
						/* translators: Sentence fragment, logical, "Excludes" refers to variations excluding a given category. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
						label: _x(
							'Excludes',
							'categories',
							'woocommerce-admin'
						),
					},
				],
				input: {
					component: 'Search',
					type: 'categories',
					getLabels: getCategoryLabels,
				},
			},
			product: {
				labels: {
					add: __( 'Products', 'woocommerce-admin' ),
					placeholder: __( 'Search products', 'woocommerce-admin' ),
					remove: __( 'Remove products filter', 'woocommerce-admin' ),
					rule: __(
						'Select a product filter match',
						'woocommerce-admin'
					),
					/* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
					title: __(
						'{{title}}Product{{/title}} {{rule /}} {{filter /}}',
						'woocommerce-admin'
					),
					filter: __( 'Select products', 'woocommerce-admin' ),
				},
				rules: [
					{
						value: 'includes',
						/* translators: Sentence fragment, logical, "Includes" refers to orders including a given product(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
						label: _x(
							'Includes',
							'products',
							'woocommerce-admin'
						),
					},
					{
						value: 'excludes',
						/* translators: Sentence fragment, logical, "Excludes" refers to orders excluding a given product(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
						label: _x(
							'Excludes',
							'products',
							'woocommerce-admin'
						),
					},
				],
				input: {
					component: 'Search',
					type: 'variableProducts',
					getLabels: getProductLabels,
				},
			},
		},
	}
);
