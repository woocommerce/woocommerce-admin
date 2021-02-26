/**
 * Internal dependencies
 */
import TYPES from './action-types';

const DEFAULT_STATE = [];

const reducer = ( state = DEFAULT_STATE, action ) => {
	switch ( action.type ) {
		case TYPES.SET_RECOMMENDED_PAYMENT_METHODS:
			return action.data;
		default:
			return state;
	}
};

export default reducer;
