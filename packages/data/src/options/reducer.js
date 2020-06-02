/**
 * Internal dependencies
 */
import TYPES from './action-types';

const getIsRequestingObject = ( options, value ) => {
	return Object.keys( options ).reduce( ( result, name ) => {
		result[ name ] = value;
		return result;
	}, {} );
};

const optionsReducer = (
	state = { isRequesting: {}, isUpdating: false },
	{ type, options, error, isUpdating, optionName }
) => {
	switch ( type ) {
		case TYPES.RECEIVE_OPTIONS:
			state = {
				...state,
				...options,
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
				isRequesting: {
					...state.isRequesting,
					...getIsRequestingObject( options, false ),
				},
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
