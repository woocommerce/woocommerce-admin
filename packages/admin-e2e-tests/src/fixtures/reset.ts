/**
 * External dependencies
 */
import { withRestApi } from '@woocommerce/e2e-utils';
/**
 * Internal dependencies
 */
import { httpClient } from './http-client';

const resetEndpoint = '/woocommerce-reset/v1/state';

export async function resetWooCommerceState() {
	const response = await httpClient.delete( resetEndpoint );
	expect( response.statusCode ).toEqual( 200 );
	await withRestApi.resetSettingsGroupToDefault( 'general' );
	await withRestApi.resetSettingsGroupToDefault( 'products' );
	await withRestApi.resetSettingsGroupToDefault( 'tax' );
}
