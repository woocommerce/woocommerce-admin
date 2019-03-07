/** @format */

const addNotice = notice => {
	return { type: 'ADD_NOTICE', notice };
};

const refreshStoreAlerts = () => {
	return { type: 'REFRESH_STORE_ALERTS', timestamp: Date.now() };
};

export default {
	addNotice,
	refreshStoreAlerts,
};
