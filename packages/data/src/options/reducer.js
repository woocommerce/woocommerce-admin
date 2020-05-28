/**
 * Internal dependencies
 */
import TYPES from './action-types';

const optionsReducer = (
	state = { isRequesting: {}, isUpdating: false },
	{ type, options, error, isUpdating, optionName }
) => {
	switch ( type ) {
		case TYPES.RECEIVE_OPTIONS:
			const resolvedOptions = {};
			Object.keys( options ).forEach( name => {
				resolvedOptions[ name ] = false;
			} );
			state = {
				...state,
				...options,
				isRequesting: {
					...state.isRequesting,
					...resolvedOptions
				},
			};
			break;
		case TYPES.SET_IS_REQUESTING:
			state = {
				...state,
				isRequesting: {
					...state.isRequesting,
					[ optionName ]: true,
				},
			};
			break;
		case TYPES.SET_IS_UPDATING:
			state = {
				...state,
				isUpdating,
			};
			break;
		case TYPES.SET_REQUESTING_ERROR:
			state = {
				...state,
				requestingError: error,
				isRequesting: false,
			};
			break;
		case TYPES.SET_UPDATING_ERROR:
			state = {
				...state,
				error,
				updatingError: error,
				isUpdating: false,
			};
			break;
	}
	return state;
};

export default optionsReducer;
