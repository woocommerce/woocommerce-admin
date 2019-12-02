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
			filters: [ ...wcSettings.multiCurrency || [] ],
		},
		...filters,
	];
};

addFilter( 'woocommerce_admin_revenue_report_filters', 'plugin-domain', addCurrencyFilters );
addFilter( 'woocommerce_admin_orders_report_filters', 'plugin-domain', addCurrencyFilters );
