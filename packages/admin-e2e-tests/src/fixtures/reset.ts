/**
 * Internal dependencies
 */
import { httpClient } from './http-client';

const resetEndpoint = '/woocommerce-reset/v1/state';

export async function resetWooCommerceState() {
	const response = await httpClient.delete( resetEndpoint );
	expect( response.data.options ).toEqual( true );
	expect( response.data.transients ).toEqual( true );
	expect( response.data.notes ).toEqual( true );
	expect( response.statusCode ).toEqual( 200 );
}
