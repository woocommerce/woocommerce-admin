/** @format */
/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import interpolateComponents from 'interpolate-components';

/**
 * Internal dependencies
 */
import DefaultDate from './default-date';

const SETTINGS_FILTER = 'woocommerce_admin_analytics_settings';
const DEFAULT_ACTIONABLE_STATUSES = [ 'processing', 'on-hold' ];
const DEFAULT_ORDER_STATUSES = [
	'completed',
	'processing',
	'refunded',
	'cancelled',
	'failed',
	'pending',
	'on-hold',
];

export const getConfig = ( orderStatuses, defaultDateRange ) => {
	const filteredOrderStatuses = Object.keys( orderStatuses )
		.filter( status => status !== 'refunded' )
		.map( key => {
			return {
				value: key,
				label: orderStatuses[ key ],
				description: sprintf(
					__( 'Exclude the %s status from reports', 'woocommerce-admin' ),
					orderStatuses[ key ]
				),
			};
		} );

	return applyFilters( SETTINGS_FILTER, {
		woocommerce_excluded_report_order_statuses: {
			label: __( 'Excluded Statuses:', 'woocommerce-admin' ),
			inputType: 'checkboxGroup',
			options: [
				{
					key: 'defaultStatuses',
					options: filteredOrderStatuses.filter( status =>
						DEFAULT_ORDER_STATUSES.includes( status.value )
					),
				},
				{
					key: 'customStatuses',
					label: __( 'Custom Statuses', 'woocommerce-admin' ),
					options: filteredOrderStatuses.filter(
						status => ! DEFAULT_ORDER_STATUSES.includes( status.value )
					),
				},
			],
			helpText: interpolateComponents( {
				mixedString: __(
					'Orders with these statuses are excluded from the totals in your reports. ' +
						'The {{strong}}Refunded{{/strong}} status can not be excluded.',
					'woocommerce-admin'
				),
				components: {
					strong: <strong />,
				},
			} ),
			defaultValue: [ 'pending', 'cancelled', 'failed' ],
		},
		woocommerce_actionable_order_statuses: {
			label: __( 'Actionable Statuses:', 'woocommerce-admin' ),
			inputType: 'checkboxGroup',
			options: [
				{
					key: 'defaultStatuses',
					options: filteredOrderStatuses.filter( status =>
						DEFAULT_ORDER_STATUSES.includes( status.value )
					),
				},
				{
					key: 'customStatuses',
					label: __( 'Custom Statuses', 'woocommerce-admin' ),
					options: filteredOrderStatuses.filter(
						status => ! DEFAULT_ORDER_STATUSES.includes( status.value )
					),
				},
			],
			helpText: __(
				'Orders with these statuses require action on behalf of the store admin.' +
					'These orders will show up in the Orders tab under the activity panel.',
				'woocommerce-admin'
			),
			defaultValue: DEFAULT_ACTIONABLE_STATUSES,
		},
		woocommerce_default_date_range: {
			name: 'woocommerce_default_date_range',
			label: __( 'Default Date Range:', 'woocommerce-admin' ),
			inputType: 'component',
			component: DefaultDate,
			helpText: __(
				'Select a default date range. When no range is selected, reports will be viewed by ' +
					'the default date range.',
				'woocommerce-admin'
			),
			defaultValue: defaultDateRange,
		},
	} );
};
