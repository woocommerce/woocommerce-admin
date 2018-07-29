/** @format */
/**
 * Internal dependencies
 */
import { getResourceName } from '../utils';

export default {
	getOrdersPage: ( getResource, requireResource ) => ( requirement, params ) => {
		const resourceName = getResourceName( 'orders-page', params );
		const pageIds = requireResource( requirement, resourceName ).data || [];
		const pageOrders = pageIds.map(
			id => getResource( getResourceName( 'order', id ) ).data || {}
		);
		return pageOrders;
	},

	isOrdersPageLoading: getResource => params => {
		const resourceName = getResourceName( 'orders-page', params );
		const { data, lastRequested, lastReceived } = getResource( resourceName );
		return ! data || ( lastRequested && lastRequested > lastReceived );
	},
};
