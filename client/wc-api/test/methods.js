/** @format */
/**
 * Internal dependencies
 */
import { createMethods, URL_PREFIX } from '../methods';

describe( 'methods', () => {
	describe( '#get', () => {
		it( 'should perform a get request with no query string', () => {
			const responseData = {};
			const request = jest.fn();
			request.mockReturnValue( Promise.resolve().then( () => responseData ) );

			const methods = createMethods( request );
			methods
				.get()( [ 'my-endpoint', 'my-id' ] )
				.then( response => {
					const path = `${ URL_PREFIX }/my-endpoint/my-id`;
					expect( request ).toHaveBeenCalledTimes( 1 );
					expect( request ).toHaveBeenCalledWith( { path } );
					expect( response ).toBe( responseData );
				} );
		} );

		it( 'should perform a get request with a query string', () => {
			const responseData = {};
			const request = jest.fn();
			request.mockReturnValue( Promise.resolve().then( () => responseData ) );

			const methods = createMethods( request );
			methods
				.get()( [ 'my-endpoint', 'my-id' ], { param1: 'one', param2: 2 } )
				.then( response => {
					const path = `${ URL_PREFIX }/my-endpoint/my-id?param1=one&param2=2`;
					expect( request ).toHaveBeenCalledTimes( 1 );
					expect( request ).toHaveBeenCalledWith( { path } );
					expect( response ).toBe( responseData );
				} );
		} );
	} );

	describe( '#post', () => {
		it( 'should perform a post request with data', () => {
			const postData = {};
			const responseData = {};
			const request = jest.fn();
			request.mockReturnValue( Promise.resolve().then( () => responseData ) );

			const methods = createMethods( request );
			methods
				.post()( [ 'my-endpoint', 'my-id' ], { data: postData } )
				.then( response => {
					const path = `${ URL_PREFIX }/my-endpoint/my-id`;
					expect( request ).toHaveBeenCalledTimes( 1 );
					expect( request ).toHaveBeenCalledWith( { path, method: 'POST', data: postData } );
					expect( response ).toBe( responseData );
				} );
		} );
	} );
} );
