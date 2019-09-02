/** @format */
/**
 * Internal dependencies
 */
import { formatCurrency, getCurrencyFormatDecimal, getCurrencyFormatString } from '../src';

describe( 'formatCurrency', () => {
	it( 'should default to wcSharedSettings or USD when currency not passed in', () => {
		expect( formatCurrency( 9.99 ) ).toBe( '$9.99' );
		expect( formatCurrency( 30 ) ).toBe( '$30.00' );
	} );
} );

describe( 'getCurrencyFormatDecimal', () => {
	it( 'should round a number to 2 decimal places in USD', () => {
		expect( getCurrencyFormatDecimal( 9.49258 ) ).toBe( 9.49 );
		expect( getCurrencyFormatDecimal( 30 ) ).toBe( 30 );
		expect( getCurrencyFormatDecimal( 3.0002 ) ).toBe( 3 );
	} );

	it( 'should correctly convert and round a string', () => {
		expect( getCurrencyFormatDecimal( '19.80' ) ).toBe( 19.8 );
	} );

	it( "should return 0 when given an input that isn't a number", () => {
		expect( getCurrencyFormatDecimal( 'abc' ) ).toBe( 0 );
		expect( getCurrencyFormatDecimal( false ) ).toBe( 0 );
		expect( getCurrencyFormatDecimal( null ) ).toBe( 0 );
	} );
} );

describe( 'getCurrencyFormatString', () => {
	it( 'should round a number to 2 decimal places in USD', () => {
		expect( getCurrencyFormatString( 9.49258 ) ).toBe( '9.49' );
		expect( getCurrencyFormatString( 30 ) ).toBe( '30.00' );
		expect( getCurrencyFormatString( 3.0002 ) ).toBe( '3.00' );
	} );

	it( 'should correctly convert and round a string', () => {
		expect( getCurrencyFormatString( '19.80' ) ).toBe( '19.80' );
	} );

	it( "should return empty string when given an input that isn't a number", () => {
		expect( getCurrencyFormatString( 'abc' ) ).toBe( '' );
		expect( getCurrencyFormatString( false ) ).toBe( '' );
		expect( getCurrencyFormatString( null ) ).toBe( '' );
	} );
} );
