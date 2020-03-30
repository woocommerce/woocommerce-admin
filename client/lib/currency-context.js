/**
 * External dependencies
 */
import { createContext } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';

/**
 * WooCommerce dependencies
 */
import Currency from '@woocommerce/currency';

/**
 * Internal dependencies
 */
import { CURRENCY } from '@woocommerce/wc-admin-settings';

export const getCurrencyInstance = ( query ) => {
	const config = applyFilters( 'filter_name', { ...CURRENCY }, query );
	config.symbol = '&&'; // for now
	return new Currency( config );
};

export const CurrencyContext = createContext(
	new Currency( CURRENCY ) // default value
);
