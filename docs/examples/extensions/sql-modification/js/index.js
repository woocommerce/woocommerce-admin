/**
 * External dependencies
 */

import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

const addCurrencyFilters = filters => {
	return [
		{
			label: __( 'Currency', 'woocommerce-admin' ),
			staticParams: [],
			param: 'currency',
			showFilters: () => true,
			defaultValue: 'USD',
			filters: [
				{ label: __( 'United States Dollar', 'woocommerce-admin' ), value: 'USD' },
				{ label: __( 'New Zealand Dollar', 'woocommerce-admin' ), value: 'NZD' },
				{ label: __( 'South African Rand', 'woocommerce-admin' ), value: 'ZAR' },
			],
		},
		...filters,
	];
};

addFilter( 'woocommerce_admin_revenue_report_filters', 'plugin-domain', addCurrencyFilters );
addFilter( 'woocommerce_admin_orders_report_filters', 'plugin-domain', addCurrencyFilters );
