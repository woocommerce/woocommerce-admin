/** @format */
/**
 * Internal dependencies
 */
import { getResourceName } from '../utils';

const updateOrder = ( { update } ) => data => {
	const resourceName = getResourceName( 'order', data.id );
	const resourceData = { [ resourceName ]: data };
	return update( [ resourceName ], resourceData );
};

const fulfillOrder = operations => id => {
	const data = { id: Number( id ), status: 'completed' };
	return updateOrder( operations )( data );
};

export default {
	updateOrder,
	fulfillOrder,
};
