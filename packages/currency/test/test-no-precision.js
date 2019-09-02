/** @format */

delete global.wcSharedSettings.currency.precision;

/**
 * Internal dependencies
 */
import { getCurrencyFormatString, getCurrencyFormatDecimal } from '../src';

describe( 'getCurrencyFormatDecimal', () => {
	it( 'should default to a precision of 2 if none set', () => {
		expect( getCurrencyFormatDecimal( 59.282 ) ).toBe( 59.28 );
	} );
} );

describe( 'getCurrencyFormatString', () => {
	it( 'should default to a precision of 2 if none set', () => {
		expect( getCurrencyFormatString( '59.282' ) ).toBe( '59.28' );
	} );
} );
