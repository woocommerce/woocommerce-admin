/** @format */
/**
 * External dependencies
 */
import { isFinite } from 'lodash';

/**
 * WooCommerce dependencies
 */
import { formatCurrency } from '@woocommerce/currency';

/**
 * Internal dependencies
 */
import { numberFormat } from 'lib/number';

export function formatValue( type, value ) {
	if ( ! isFinite( value ) ) {
		return null;
	}

	switch ( type ) {
		case 'average':
			return Math.round( value );
		case 'currency':
			return formatCurrency( value );
		case 'number':
			return numberFormat( value );
	}
}

export function calculateDelta( value, secondaryValue ) {
	if ( ! isFinite( value ) || ! isFinite( secondaryValue ) ) {
		return null;
	}

	if ( secondaryValue === 0 ) {
		return 0;
	}

	return Math.round( ( value - secondaryValue ) / secondaryValue * 100 );
}
