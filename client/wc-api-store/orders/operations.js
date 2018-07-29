/** @format */
/**
 * External dependencies
 */
import { pick } from 'lodash';

/**
 * Internal dependencies
 */
import { getResourceName, getResourceIdentifier, isResourcePrefix } from '../utils';

const ALLOWED_PAGE_PARAMS = [ 'page', 'per_page' ];

function readPage( methods, resourceName ) {
	const params = getResourceIdentifier( resourceName );

	// Filter the params given to only those allowed by the API.
	const apiParams = pick( params, ALLOWED_PAGE_PARAMS );

	return methods.read( [ 'orders' ], apiParams ).then( responseData => {
		// Store each order separately so it can be used by the rest of the app.
		const ordersById = responseData.reduce( ( orders, data ) => {
			orders[ getResourceName( 'order', data.id ) ] = { data };
			return orders;
		}, {} );

		// Store the page as a list of ids so we don't duplicate data.
		const pageData = responseData.map( order => order.id );

		return { ...ordersById, [ resourceName ]: { data: pageData } };
	} );
}

function readPages( methods, resourceNames ) {
	const filteredNames = resourceNames.filter( name => isResourcePrefix( name, 'orders-page' ) );
	return filteredNames.map( name => readPage( methods, name ) );
}

export default {
	read: methods => resourceNames => {
		return [ ...readPages( methods, resourceNames ) ];
	},
};
