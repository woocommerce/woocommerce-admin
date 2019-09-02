/** @format */
/**
 * Internal dependencies
 */
import { formatCurrency, getCurrencyFormatDecimal, getCurrencyFormatString } from '../src';

jest.mock( '@woocommerce/settings', () => ( {
	CURRENCY: {
		code: 'JPY',
		symbol: '¥',
		precision: 0,
		decimalSeparator: ',',
		thousandSeparator: '.',
		priceFormat: '%2$s%1$s',
		symbolPosition: 'right',
	},
} ) );

describe( 'formatCurrency', () => {
	it( 'should uses store currency settings, not locale-based', () => {
		expect( formatCurrency( 90000, '¥' ) ).toBe( '90.000¥' );
	} );
} );

describe( 'getCurrencyFormatDecimal', () => {
	it( 'should round a number to 0 decimal places in JPY', () => {
		expect( getCurrencyFormatDecimal( 1239.88 ) ).toBe( 1240 );
		expect( getCurrencyFormatDecimal( 1500 ) ).toBe( 1500 );
		expect( getCurrencyFormatDecimal( 33715.02 ) ).toBe( 33715 );
	} );
} );

describe( 'getCurrencyFormatString', () => {
	it( 'should round a number to 0 decimal places in JPY', () => {
		expect( getCurrencyFormatString( 1239.88 ) ).toBe( '1240' );
		expect( getCurrencyFormatString( 1500 ) ).toBe( '1500' );
		expect( getCurrencyFormatString( 33715.02 ) ).toBe( '33715' );
	} );
} );
