/** @format */
/**
 * External dependencies
 */
import { union } from 'lodash';

/**
 * Internal dependencies
 */
import TYPES from './action-types';

const updateDataInNewState = ( newState, { ids, data, error, time } ) => {
	ids.forEach( id => {
		newState[ id ] = {
			data: data[ id ],
			error,
			lastReceived: time,
		};
	} );
	return newState;
};

// const _state = {
// 	isPersisting,
// 	dirty,
// 	error,
// 	lastReceived,
// 	data: {
// 		'my_id': { data, lastReceived, error },
// 	},
// };

const receiveSettings = ( state = {}, { type, group, data, error, time, isPersisting } ) => {
	const newState = {};
	switch ( type ) {
		case TYPES.SET_IS_PERSISTING:
			state = {
				...state,
				isPersisting,
			};
			break;
		case TYPES.CLEAR_IS_DIRTY:
			state = {
				...state,
				dirty: [],
			};
			break;
		case TYPES.UPDATE_SETTINGS_FOR_GROUP:
		case TYPES.UPDATE_ERROR_FOR_GROUP:
			const ids = data ? Object.keys( data ) : [];
			if ( data === null ) {
				state = {
					...state,
					error,
					lastReceived: time,
					ids: state.ids || [],
				};
			} else {
				state = {
					...state,
					error,
					lastReceived: time,
					dirty: state.dirty ? union( state.dirty, ids ) : ids,
					ids: state[ group ].ids ? [ ...state[ group ].ids, ...ids ] : ids,
					...updateDataInNewState( newState, { ids, data, error, time } ),
				};
			}
			break;
		case TYPES.CLEAR_SETTINGS:
			state = {};
	}
	return state;
};

export default receiveSettings;
