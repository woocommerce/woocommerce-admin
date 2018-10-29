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

const { getCategories } = resolvers;

jest.mock( '@wordpress/data', () => ( {
	dispatch: jest.fn().mockReturnValue( {
		setCategories: jest.fn(),
	} ),
} ) );
jest.mock( '@wordpress/api-fetch', () => jest.fn() );

describe( 'getCategories', () => {
	const CATEGORIES_1 = [
		{
			id: 3,
			name: 'my-category-3',
		},
		{
			id: 4,
			name: 'my-category-2-4',
		},
	];
	const CATEGORIES_2 = [
		{
			id: 1,
			name: 'my-category-1',
		},
		{
			id: 2,
			name: 'my-category-2',
		},
	];

	beforeAll( () => {
		apiFetch.mockImplementation( options => {
			if ( options.path === '/wc/v3/reports/categories' ) {
				return Promise.resolve( CATEGORIES_1 );
			}
			if ( options.path === '/wc/v3/reports/categories?orderby=date' ) {
				return Promise.resolve( CATEGORIES_2 );
			}
		} );
	} );

	it( 'returns requested categories', async () => {
		expect.assertions( 1 );
		await getCategories( {} );
		expect( dispatch().setCategories ).toHaveBeenCalledWith( CATEGORIES_1, undefined );
	} );

	it( 'returns requested categories for a specific query', async () => {
		expect.assertions( 1 );
		await getCategories( {}, { orderby: 'date' } );
		expect( dispatch().setCategories ).toHaveBeenCalledWith( CATEGORIES_2, { orderby: 'date' } );
	} );
} );
