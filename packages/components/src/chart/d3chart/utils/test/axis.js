/** @format */
/**
 * External dependencies
 */

/**
* Internal dependencies
*/
import { compareStrings, getXTicks, getYGrids } from '../axis';

describe( 'getXTicks', () => {
	describe( 'interval=day', () => {
		const uniqueDates = [
			'2018-01-01T00:00:00',
			'2018-01-02T00:00:00',
			'2018-01-03T00:00:00',
			'2018-01-04T00:00:00',
			'2018-01-05T00:00:00',
			'2018-01-06T00:00:00',
			'2018-01-07T00:00:00',
			'2018-01-08T00:00:00',
			'2018-01-09T00:00:00',
			'2018-01-10T00:00:00',
			'2018-01-11T00:00:00',
			'2018-01-12T00:00:00',
			'2018-01-13T00:00:00',
			'2018-01-14T00:00:00',
			'2018-01-15T00:00:00',
			'2018-01-16T00:00:00',
			'2018-01-17T00:00:00',
			'2018-01-18T00:00:00',
			'2018-01-19T00:00:00',
			'2018-01-20T00:00:00',
			'2018-01-21T00:00:00',
			'2018-01-22T00:00:00',
			'2018-01-23T00:00:00',
			'2018-01-24T00:00:00',
			'2018-01-25T00:00:00',
			'2018-01-26T00:00:00',
			'2018-01-27T00:00:00',
			'2018-01-28T00:00:00',
			'2018-01-29T00:00:00',
			'2018-01-30T00:00:00',
			'2018-01-31T00:00:00',
		];

		it( 'returns a subset of the uniqueDates as ticks depending on the width', () => {
			const width = 0;
			const mode = 'item-comparison';
			const interval = 'day';
			const expectedXTicks = [
				'2018-01-01T00:00:00',
				'2018-01-06T00:00:00',
				'2018-01-11T00:00:00',
				'2018-01-16T00:00:00',
				'2018-01-21T00:00:00',
				'2018-01-26T00:00:00',
				'2018-01-31T00:00:00',
			];

			const xTicks = getXTicks( uniqueDates, width, mode, interval );

			expect( xTicks ).toEqual( expectedXTicks );
		} );

		it( 'returns a tick for the first date of each month when the list of uniqueDates exceeds the threshold', () => {
			const width = 0;
			const mode = 'item-comparison';
			const interval = 'day';
			const extendedUniqueDates = [
				'2018-02-01T00:00:00',
				'2018-02-02T00:00:00',
				'2018-02-03T00:00:00',
				'2018-02-04T00:00:00',
				'2018-02-05T00:00:00',
				'2018-02-06T00:00:00',
				'2018-02-07T00:00:00',
				'2018-02-08T00:00:00',
				'2018-02-09T00:00:00',
				'2018-02-10T00:00:00',
				'2018-02-11T00:00:00',
				'2018-02-12T00:00:00',
				'2018-02-13T00:00:00',
				'2018-02-14T00:00:00',
				'2018-02-15T00:00:00',
				'2018-02-16T00:00:00',
				'2018-02-17T00:00:00',
				'2018-02-18T00:00:00',
				'2018-02-19T00:00:00',
				'2018-02-20T00:00:00',
				'2018-02-21T00:00:00',
				'2018-02-22T00:00:00',
				'2018-02-23T00:00:00',
				'2018-02-24T00:00:00',
				'2018-02-25T00:00:00',
				'2018-02-26T00:00:00',
				'2018-02-27T00:00:00',
				'2018-02-28T00:00:00',
				'2018-03-01T00:00:00',
				'2018-03-02T00:00:00',
				'2018-03-03T00:00:00',
				'2018-03-04T00:00:00',
				'2018-03-05T00:00:00',
				'2018-03-06T00:00:00',
				'2018-03-07T00:00:00',
				'2018-03-08T00:00:00',
				'2018-03-09T00:00:00',
				'2018-03-10T00:00:00',
				'2018-03-11T00:00:00',
				'2018-03-12T00:00:00',
				'2018-03-13T00:00:00',
				'2018-03-14T00:00:00',
				'2018-03-15T00:00:00',
				'2018-03-16T00:00:00',
				'2018-03-17T00:00:00',
				'2018-03-18T00:00:00',
				'2018-03-19T00:00:00',
				'2018-03-20T00:00:00',
				'2018-03-21T00:00:00',
				'2018-03-22T00:00:00',
				'2018-03-23T00:00:00',
				'2018-03-24T00:00:00',
				'2018-03-25T00:00:00',
				'2018-03-26T00:00:00',
				'2018-03-27T00:00:00',
				'2018-03-28T00:00:00',
				'2018-03-29T00:00:00',
				'2018-03-30T00:00:00',
				'2018-03-31T00:00:00',
				'2018-04-01T00:00:00',
				'2018-04-02T00:00:00',
				'2018-04-03T00:00:00',
				'2018-04-04T00:00:00',
				'2018-04-05T00:00:00',
				'2018-04-06T00:00:00',
				'2018-04-07T00:00:00',
				'2018-04-08T00:00:00',
			];
			const expectedXTicks = [
				'2018-01-01T00:00:00',
				'2018-02-01T00:00:00',
				'2018-03-01T00:00:00',
				'2018-04-01T00:00:00',
			];

			const xTicks = getXTicks( uniqueDates.concat( extendedUniqueDates ), width, mode, interval );

			expect( xTicks ).toEqual( expectedXTicks );
		} );
	} );

	describe( 'interval=hour', () => {
		const uniqueDates = [
			'2018-01-02T00:00:00',
			'2018-01-02T01:00:00',
			'2018-01-02T02:00:00',
			'2018-01-02T03:00:00',
			'2018-01-02T04:00:00',
			'2018-01-02T05:00:00',
			'2018-01-02T06:00:00',
			'2018-01-02T07:00:00',
			'2018-01-02T08:00:00',
			'2018-01-02T09:00:00',
			'2018-01-02T10:00:00',
			'2018-01-02T11:00:00',
			'2018-01-02T12:00:00',
			'2018-01-02T13:00:00',
			'2018-01-02T14:00:00',
			'2018-01-02T15:00:00',
			'2018-01-02T16:00:00',
			'2018-01-02T17:00:00',
			'2018-01-02T18:00:00',
			'2018-01-02T19:00:00',
			'2018-01-02T20:00:00',
			'2018-01-02T21:00:00',
			'2018-01-02T22:00:00',
			'2018-01-02T23:00:00',
		];

		it( 'doesn\'t return a tick for each unique date when width is not big enough', () => {
			const width = 0;
			const mode = 'item-comparison';
			const interval = 'hour';
			const expectedXTicks = [
				'2018-01-02T00:00:00',
				'2018-01-02T11:00:00',
				'2018-01-02T22:00:00',
			];

			const xTicks = getXTicks( uniqueDates, width, mode, interval );

			expect( xTicks ).toEqual( expectedXTicks );
		} );

		it( 'doesn\'t return a tick for each unique date when all dates don\'t belong to the same day', () => {
			const width = 9999;
			const mode = 'item-comparison';
			const interval = 'hour';
			const expectedXTicks = [
				'2018-01-01T23:00:00',
				'2018-01-02T01:00:00',
				'2018-01-02T03:00:00',
				'2018-01-02T05:00:00',
				'2018-01-02T07:00:00',
				'2018-01-02T09:00:00',
				'2018-01-02T11:00:00',
				'2018-01-02T13:00:00',
				'2018-01-02T15:00:00',
				'2018-01-02T17:00:00',
				'2018-01-02T19:00:00',
				'2018-01-02T21:00:00',
				'2018-01-02T23:00:00',
			];

			const xTicks = getXTicks( [ '2018-01-01T23:00:00' ].concat( uniqueDates ), width, mode, interval );

			expect( xTicks ).toEqual( expectedXTicks );
		} );

		it( 'returns a tick for each unique date when all dates are from the same day and width is big enough', () => {
			const width = 9999;
			const mode = 'item-comparison';
			const interval = 'hour';
			const expectedXTicks = uniqueDates;

			const xTicks = getXTicks( uniqueDates, width, mode, interval );

			expect( xTicks ).toEqual( expectedXTicks );
		} );
	} );
} );

describe( 'compareStrings', () => {
	it( 'return an array of unique words from s2 that dont appear in base string', () => {
		expect( compareStrings( 'Jul 2018', 'Aug 2018' ).join( ' ' ) ).toEqual( 'Aug' );
		expect( compareStrings( 'Jul 2017', 'Aug 2018' ).join( ' ' ) ).toEqual( 'Aug 2018' );
		expect( compareStrings( 'Jul 2017', 'Jul 2018' ).join( ' ' ) ).toEqual( '2018' );
		expect( compareStrings( 'Jul, 2018', 'Aug, 2018' ).join( ' ' ) ).toEqual( 'Aug' );
	} );
} );

describe( 'getYGrids', () => {
	describe( 'when baseValue is 0', () => {
		it( 'returns a single 0 when yMax, yMin are 0', () => {
			expect( getYGrids( 0, 0, 0 ) ).toEqual( [ 0 ] );
		} );

		describe( 'positive charts', () => {
			it( 'returns decimal values when yMax is <= 1 and yMin is 0', () => {
				expect( getYGrids( 0, 1, 0 ) ).toEqual( [ 0, 0.3333333333333333, 0.6666666666666666, 1 ] );
			} );

			it( 'returns decimal values when yMax and yMin are <= 1', () => {
				expect( getYGrids( 1, 1, 0 ) ).toEqual( [ 0, 0.3333333333333333, 0.6666666666666666, 1 ] );
			} );

			it( 'doesn\'t return decimal values when yMax is > 1', () => {
				expect( getYGrids( 0, 2, 0 ) ).toEqual( [ 0, 1, 2 ] );
			} );

			it( 'returns up to four values when yMax is a big number', () => {
				expect( getYGrids( 0, 10000, 0 ) ).toEqual( [ 0, 3333, 6667, 10000 ] );
			} );
		} );

		describe( 'negative charts', () => {
			it( 'returns decimal values when yMin is >= -1 and yMax and baseValue are 0', () => {
				expect( getYGrids( -1, 0, 0 ) ).toEqual( [ 0, -0.3333333333333333, -0.6666666666666666, -1 ] );
			} );

			it( 'returns decimal values when yMax and yMin are >= -1', () => {
				expect( getYGrids( -1, -1, 0 ) ).toEqual( [ 0, -0.3333333333333333, -0.6666666666666666, -1 ] );
			} );

			it( 'doesn\'t return decimal values when yMin is < -1', () => {
				expect( getYGrids( -2, 0, 0 ) ).toEqual( [ 0, -1, -2 ] );
			} );

			it( 'returns up to four values when yMin is a big negative number', () => {
				expect( getYGrids( -10000, 0, 0 ) ).toEqual( [ 0, -3333, -6667, -10000 ] );
			} );
		} );

		describe( 'positive & negative charts', () => {
			it( 'returns decimal values when yMax is <= 1 and yMin is 0', () => {
				expect( getYGrids( -1, 1, 0 ) ).toEqual( [ 0, -0.5, -1, 0.5, 1 ] );
			} );

			it( 'doesn\'t return decimal values when yMax is >1', () => {
				expect( getYGrids( -2, 2, 0 ) ).toEqual( [ 0, -1, -2, 1, 2 ] );
			} );

			it( 'returns up to four values when yMax is a big number', () => {
				expect( getYGrids( -10000, 10000, 0 ) ).toEqual( [ 0, -5000, -10000, 5000, 10000 ] );
			} );
		} );
	} );

	describe( 'when baseValue is not 0', () => {
		it( 'returns a single value when yMax, yMin = baseValue', () => {
			expect( getYGrids( 100, 100, 100 ) ).toEqual( [ 100 ] );
		} );

		it( 'returns decimal values when yMax and yMin are 1 unit higher than baseValue', () => {
			expect( getYGrids( 101, 101, 100 ) ).toEqual( [ 100, 100.3333333333333333, 100.6666666666666666, 101 ] );
		} );

		it( 'returns decimal values when yMax and yMin are 1 unit lower than baseValue', () => {
			expect( getYGrids( 99, 99, 100 ) ).toEqual( [ 100, 99.6666666666666666, 99.3333333333333333, 99 ] );
		} );

		it( 'returns decimal values when yMax and yMin are 1 unit higher/lower than baseValue', () => {
			expect( getYGrids( 99, 101, 100 ) ).toEqual( [ 100, 99.5, 99, 100.5, 101 ] );
		} );

		it( 'doesn\'t return decimal values when the differente between yMax or yMin and baseValue is bigger than 1 unit', () => {
			expect( getYGrids( 100, 102, 100 ) ).toEqual( [ 100, 101, 102 ] );
			expect( getYGrids( 98, 100, 100 ) ).toEqual( [ 100, 99, 98 ] );
		} );

		it( 'returns up to five values when yMax and yMin difference with baseValue is bigger than 1', () => {
			expect( getYGrids( 98, 102, 100 ) ).toEqual( [ 100, 99, 98, 101, 102 ] );
		} );

		it( 'returns up to four values when yMax difference with baseValue is bigger than 1', () => {
			expect( getYGrids( 100, 10100, 100 ) ).toEqual( [ 100, 3433, 6767, 10100 ] );
		} );

		it( 'returns up to four values when yMin difference with baseValue is bigger than 1', () => {
			expect( getYGrids( -9900, 100, 100 ) ).toEqual( [ 100, -3233, -6567, -9900 ] );
		} );
	} );
} );
