/*
* @format
*/

/**
 * Internal dependencies
 */
import { isReportDataEmpty } from '../utils';

describe( 'isReportRevenueStatsEmpty()', () => {
	it( 'returns false if report is valid', () => {
		const report = {
			data: {
				totals: {
					orders_count: 10,
					num_items_sold: 9,
				},
				intervals: [ 0, 1, 2 ],
			},
		};
		expect( isReportDataEmpty( report ) ).toEqual( false );
	} );
	it( 'returns true if report object is undefined', () => {
		expect( isReportDataEmpty( undefined ) ).toEqual( true );
	} );
	it( 'returns true if data response object is missing', () => {
		expect( isReportDataEmpty( {} ) ).toEqual( true );
	} );
	it( 'returns true if totals response object is missing', () => {
		expect( isReportDataEmpty( { data: {} } ) ).toEqual( true );
	} );
	it( 'returns true if intervals response object is empty', () => {
		expect( isReportDataEmpty( { data: { intervals: [], totals: 2 } } ) ).toEqual( true );
	} );
} );
