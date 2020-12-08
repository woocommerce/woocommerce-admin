/**
 * Internal dependencies
 */
import { getResourceName } from '../utils';
import { getTotalCountResourceName } from './utils';

export const getItems = ( state, itemType, query ) => {
	const resourceName = getResourceName( itemType, query );
	const ids =
		( state.items[ resourceName ] && state.items[ resourceName ].data ) ||
		[];
	return ids.reduce( ( map, id ) => {
		map.set( id, state.data[ itemType ][ id ] );
		return map;
	}, new Map() );
};

export const getItemsTotalCount = (
	state,
	itemType,
	query,
	defaultValue = 0
) => {
	const resourceName = getTotalCountResourceName( itemType, query );
	const totalCount = state.items.hasOwnProperty( resourceName )
		? state.items[ resourceName ]
		: defaultValue;
	return totalCount;
};

export const getItemsError = ( state, itemType, query ) => {
	const resourceName = getResourceName( itemType, query );
	return state.errors[ resourceName ];
};
