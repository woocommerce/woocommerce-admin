/** @format */

const getNotices = getResource => () => {
	return getResource( 'notices' ).data || [];
};

export default {
	getNotices,
};
