/** @format */

const updateOptions = operations => options => {
	const resourceKey = 'options';
	operations.update( [ resourceKey ], { [ resourceKey ]: options } );
};

export default {
	updateOptions,
};
