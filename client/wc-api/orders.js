/** @format */
/**
 * External dependencies
 */
import { compact, pick } from 'lodash';
import { getResourceName, getResourceIdentifier, isResourcePrefix } from './utils';

const operations = {
	read: ( { get } ) => resourceNames => {
		return [ ...readPagesOperation( get, resourceNames ) ];
	},
	update: ( { post } ) => ( resourceNames, resourceData ) => {
		return updateOrdersOperation( post, resourceNames, resourceData );
	},
};

function readPagesOperation( get, resourceNames ) {
	return compact(
		resourceNames.map( resourceName => {
			if ( isResourcePrefix( resourceName, 'orders-page' ) ) {
				const params = getResourceIdentifier( resourceName );

				// Filter the parameters sent to the api.
				const apiParams = pick( params, [ 'page', 'per_page' ] );

				// Do a get for each page.
				return get( [ 'orders' ], apiParams ).then( responseData => {
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
		} )
	);
}

function updateOrdersOperation( post, resourceNames, resourceData ) {
	return compact(
		resourceNames.map( resourceName => {
			if ( isResourcePrefix( resourceName, 'order' ) ) {
				const id = getResourceIdentifier( resourceName );
				const data = resourceData[ resourceName ];

				// Do a post for each order update.
				return post( [ 'orders', id ], { data } ).then( responseData => {
					return { [ resourceName ]: { data: responseData } };
				} );
			}
		} )
	);
}

const updateOrder = ( { update } ) => data => {
	const resourceName = getResourceName( 'order', data.id );
	const resourceData = { [ resourceName ]: data };
	return update( [ resourceName ], resourceData );
};

const fulfillOrder = ops => id => {
	const data = { id: Number( id ), status: 'completed' };
	return updateOrder( ops )( data );
};

const mutations = {
	updateOrder,
	fulfillOrder,
};

const selectors = {
	getOrdersPage: ( getData, requireData ) => (
		requirement,
		params = { page: 1, per_page: 10 }
	) => {
		const resourceName = getResourceName( 'orders-page', params );
		requireData( requirement, resourceName );
		const pageIds = getData( resourceName ) || [];
		const pageOrders = pageIds.map( id => getData( getResourceName( 'order', id ) ) || {} );
		return pageOrders;
	},
};

export default {
	operations,
	mutations,
	selectors,
};
