/**
 * Internal dependencies
 */
import TYPES from './action-types';

const optionsReducer = (
	state = { isRequesting: false, isUpdating: false },
	{ type, options, isRequesting, error, isUpdating }
) => {
	switch ( type ) {
		case TYPES.RECIEVE_OPTIONS:
			state = {
				...state,
				...options,
				isRequesting: false,
			};
			break;
		case TYPES.SET_IS_REQUESTING:
			state = {
				...state,
				isRequesting,
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
