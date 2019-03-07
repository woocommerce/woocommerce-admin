/** @format */

const getNotices = state => {
	return state.notices;
};

const getLastStoreAlertRefresh = state => {
	return state.lastStoreAlertRefresh;
};

export default {
	getNotices,
	getLastStoreAlertRefresh,
};
