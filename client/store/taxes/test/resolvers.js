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
const { getTaxes } = resolvers;
jest.mock( '@wordpress/data', () => ( {
	dispatch: jest.fn().mockReturnValue( {
		setTaxes: jest.fn(),
	} ),
} ) );
jest.mock( '@wordpress/api-fetch', () => jest.fn() );
describe( 'getTaxes', () => {
	const TAXES_1 = [
		{
			id: 3,
			name: 'my-tax-3',
		},
		{
			id: 4,
			name: 'my-tax-2-4',
		},
	];
	const TAXES_2 = [
		{
			id: 1,
			name: 'my-tax-1',
		},
		{
			id: 2,
			name: 'my-tax-2',
		},
	];
	beforeAll( () => {
		apiFetch.mockImplementation( options => {
			if ( options.path === '/wc/v3/reports/taxes' ) {
				return Promise.resolve( TAXES_1 );
			}
			if ( options.path === '/wc/v3/reports/taxes?orderby=date' ) {
				return Promise.resolve( TAXES_2 );
			}
		} );
	} );
	it( 'returns requested taxes', async () => {
		expect.assertions( 1 );
		await getTaxes( {} );
		expect( dispatch().setTaxes ).toHaveBeenCalledWith( TAXES_1, undefined );
	} );
	it( 'returns requested taxes for a specific query', async () => {
		expect.assertions( 1 );
		await getTaxes( {}, { orderby: 'date' } );
		expect( dispatch().setTaxes ).toHaveBeenCalledWith( TAXES_2, { orderby: 'date' } );
	} );
} );
