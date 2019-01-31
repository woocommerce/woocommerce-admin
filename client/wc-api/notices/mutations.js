/** @format */

const addNotice = operations => notice => {
	const resourceKey = 'notices';
	operations.create( [ resourceKey ], { [ resourceKey ]: notice } );
};

export default {
	addNotice,
};
