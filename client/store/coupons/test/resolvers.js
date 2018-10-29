/*
 * @format
 */

/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import resolvers from '../resolvers';

const { getCoupons } = resolvers;

jest.mock( '@wordpress/data', () => ( {
	dispatch: jest.fn().mockReturnValue( {
		setCoupons: jest.fn(),
	} ),
} ) );
jest.mock( '@wordpress/api-fetch', () => jest.fn() );

describe( 'getCoupons', () => {
	const COUPONS_1 = [
		{
			id: 3,
			name: 'my-coupon-3',
		},
		{
			id: 4,
			name: 'my-coupon-2-4',
		},
	];
	const COUPONS_2 = [
		{
			id: 1,
			name: 'my-coupon-1',
		},
		{
			id: 2,
			name: 'my-coupon-2',
		},
	];

	beforeAll( () => {
		apiFetch.mockImplementation( options => {
			if ( options.path === '/wc/v3/reports/coupons' ) {
				return Promise.resolve( COUPONS_1 );
			}
			if ( options.path === '/wc/v3/reports/coupons?orderby=date' ) {
				return Promise.resolve( COUPONS_2 );
			}
		} );
	} );

	it( 'returns requested coupons', async () => {
		expect.assertions( 1 );
		await getCoupons( {} );
		expect( dispatch().setCoupons ).toHaveBeenCalledWith( COUPONS_1, undefined );
	} );

	it( 'returns requested coupons for a specific query', async () => {
		expect.assertions( 1 );
		await getCoupons( {}, { orderby: 'date' } );
		expect( dispatch().setCoupons ).toHaveBeenCalledWith( COUPONS_2, { orderby: 'date' } );
	} );
} );
