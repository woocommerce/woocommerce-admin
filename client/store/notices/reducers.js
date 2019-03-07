/** @format */

const DEFAULT_STATE = [];

const notices = ( state = DEFAULT_STATE, action ) => {
	if ( action.type === 'ADD_NOTICE' ) {
		return [ ...state, action.notice ];
	}

	return state;
};

const lastStoreAlertRefresh = ( state = DEFAULT_STATE, action ) => {
	if ( action.type === 'REFRESH_STORE_ALERTS' ) {
		return action.timestamp;
	}

	return state;
};

export default {
	notices,
	lastStoreAlertRefresh,
};
