/** @format */

/**
 * Internal dependencies
 */
import { getResourceName } from '../utils';

const updateItem = operations => async ( type, id, itemData, callback ) => {
	const resourceName = getResourceName( `items-query-${ type }-item`, id );
	const result = await operations.update( [ resourceName ], {
		[ resourceName ]: { id, ...itemData },
	} );
	if ( typeof callback === 'function' ) {
		callback( result[ 0 ][ resourceName ] );
	}
};

export default {
	updateItem,
};
