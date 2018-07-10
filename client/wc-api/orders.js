/** @format */
/**
 * External dependencies
 */
import { compact, startsWith } from 'lodash';

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
			if ( startsWith( resourceName, 'orders-page:' ) ) {
				const [ , paramString ] = resourceName.split( 'orders-page:' );
				const params = JSON.parse( paramString );

				// Do a get for each page.
				return get( [ 'orders' ], params ).then( responseData => {
					// Store each order separately so it can be used by the rest of the app.
					const ordersById = responseData.reduce( ( orders, data ) => {
						orders[ `order:${ data.id }` ] = { data };
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
			if ( startsWith( resourceName, 'order:' ) ) {
				const [ , id ] = resourceName.split( 'order:' );
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
	const resourceName = `order:${ data.id }`;
	const resourceData = { [ resourceName ]: data };
	return update( [ resourceName ], resourceData );
};

const fulfillOrder = ops => id => {
	const data = { id, status: 'completed' };
	return updateOrder( ops )( data );
};

const mutations = {
	updateOrder,
	fulfillOrder,
};

const selectors = {
	getOrdersPage: ( getData, requireData ) => ( requirement, page = 1, perPage = 10 ) => {
		const resourceName = `orders-page:{"page":${ page },"per_page":${ perPage }}`;
		requireData( requirement, resourceName );
		const pageIds = getData( resourceName ) || [];
		const pageOrders = pageIds.map( id => getData( `order:${ id }` ) || {} );
		return pageOrders;
	},
};

export default {
	operations,
	mutations,
	selectors,
};
