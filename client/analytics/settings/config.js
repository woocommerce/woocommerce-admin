/** @format */
/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';

export const analyticsSettings = [
	{
		name: 'woocommerce_excluded_report_order_statuses',
		label: __( 'Excluded Statuses', 'wc-admin' ),
		inputType: 'checkbox',
		options: Object.keys( wcSettings.orderStatuses ).map( key => {
			return {
				value: key,
				label: wcSettings.orderStatuses[ key ],
				description: sprintf(
					__( 'Exclude the %s status from reports', 'wc-admin' ),
					wcSettings.orderStatuses[ key ]
				),
			};
		} ),
		helpText: sprintf(
			__(
				'Orders with these statuses are excluded from the totals in your reports.' +
					'The <strong>Refunded</strong> status can not be excluded.  <a href="%s">Learn more</a>',
				'wc-admin'
			),
			'#', // @TODO: this needs to be replaced with a real link.
			'wc-admin'
		),
		initialValue: wcSettings.wcAdminSettings.woocommerce_excluded_report_order_statuses,
	},
];
