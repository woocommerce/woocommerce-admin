/** @format */
/**
 * External dependencies
 */
import { union } from 'lodash';

/**
 * Internal dependencies
 */
import TYPES from './action-types';
import { getResourceName } from '../utils';

const updateGroupDataInNewState = ( newState, { group, groupIds, data, time, error } ) => {
	groupIds.forEach( id => {
		newState[ getResourceName( group, id ) ] = {
			data: data[ id ],
			lastReceived: time,
			error,
		};
	} );
	return newState;
};

const receiveSettings = (
	state = {},
	{ type, group, data, error, time, dirtyKeys, persisting }
) => {
	const newState = {};
	switch ( type ) {
		case TYPES.SET_IS_DIRTY:
			state = {
				...state,
				[ group ]: {
					...state[ group ],
					dirty: union( state[ group ].dirty || [], dirtyKeys ),
				},
			};
			break;
		case TYPES.UPDATE_SETTINGS_FOR_GROUP:
		case TYPES.UPDATE_ERROR_FOR_GROUP:
			const groupIds = data ? Object.keys( data ) : [];
			if ( data === null ) {
				state = {
					...state,
					[ group ]: {
						data: state[ group ] ? state[ group ].data : [],
						error: error,
						lastReceived: time,
					},
				};
			} else {
				state = {
					...state,
					[ group ]: {
						data: state[ group ] ? [ ...state[ group ].data, ...groupIds ] : groupIds,
						error,
						lastReceived: time,
						persisting,
					},
					...updateGroupDataInNewState( newState, {
						group,
						groupIds,
						data,
						time,
						error,
					} ),
				};
			}
			break;
		case TYPES.CLEAR_SETTINGS:
			state = {};
	}
	return state;
};

export default receiveSettings;
