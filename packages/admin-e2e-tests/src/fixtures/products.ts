/**
 * External dependency
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const { HTTPClientFactory, SimpleProduct } = require( '@woocommerce/api' );
const config = require( 'config' );

// Prepare the HTTP client that will be consumed by the repository.
// This is necessary so that it can make requests to the REST API.
const admin = config.get( 'users.admin' );
const url = config.get( 'url' );

const httpClient = HTTPClientFactory.build( url )
	.withBasicAuth( admin.username, admin.password )
	.withIndexPermalinks()
	.create();

const repository = SimpleProduct.restRepository( httpClient );

export async function addProducts() {
	// The repository can now be used to create models.
	await repository.create( { name: 'Simple Product', regularPrice: '9.99' } );

	await repository.create( {
		name: 'Another Product',
		regularPrice: '9.99',
	} );
}

export async function removeAllProducts() {
	const products = await repository.list();
	return await Promise.all(
		products.map( ( pr: { id: string } ) => repository.delete( pr.id ) )
	);
}
