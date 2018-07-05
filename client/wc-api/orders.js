/** @format */
/**
 * External dependencies
 */
import { startsWith } from 'lodash';

const operations = {
	read: ( { get } ) => resourceNames => {
		const requests = [ ...readPages( get, resourceNames ) ];
		return requests;
	},
};

function readPages( get, resourceNames ) {
	const requests = [];
	resourceNames.forEach( resourceName => {
		if ( startsWith( resourceName, 'orders-page:' ) ) {
			const [ , paramString ] = resourceName.split( 'orders-page:' );
			const params = JSON.parse( paramString );

			// Do a get for each page.
			const request = get( [ 'orders' ], params ).then( responseData => {
				// Store each order separately so it can be used by the rest of the app.
				const ordersById = responseData.reduce( ( orders, data ) => {
					orders[ `order:${ data.id }` ] = { data };
					return orders;
				}, {} );

				// Store the page as a list of ids so we don't duplicate data.
				const pageData = responseData.map( order => order.id );

				return { ...ordersById, [ resourceName ]: { data: pageData } };
			} );
			requests.push( request );
		}
	} );
	return requests;
}

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
	mutations: {},
	selectors,
};
