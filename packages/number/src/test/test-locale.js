/** @format */
global.wcSharedSettings.locale.siteLocale = 'en-US';
global.wcSharedSettings.currency.decimalSeparator = ',';
global.wcSharedSettings.currency.thousandSeparator = '.';

jest.mock( '@woocommerce/settings', () => ( {
	CURRENCY: {
		code: 'USD',
		precision: 2,
		symbol: '$',
		symbolPosition: 'left',
		decimalSeparator: ',',
		priceFormat: '%1$s%2$s',
		thousandSeparator: '.',
	},
	LOCALE: {
		siteLocale: 'en-US',
	},
} ) );

/**
 * Internal dependencies
 */
import { numberFormat } from '../index';

describe( 'numberFormat', () => {
	it( 'uses store currency settings, not locale', () => {
		expect( numberFormat( '12345.6789', 3 ) ).toBe( '12.345,679' );
	} );
} );
