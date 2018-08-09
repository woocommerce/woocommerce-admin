/** @format */
/**
 * Internal dependencies
 */
import apiFetchMethods from './api-fetch-methods';
import orders from './orders';

export default {
	methods: apiFetchMethods,
	operations: {
		read: methods => ( resourceNames, resourceData ) => [
			...orders.operations.read( methods )( resourceNames, resourceData ),
		],
		update: methods => ( resourceNames, resourceData ) => [
			...orders.operations.update( methods )( resourceNames, resourceData ),
		],
	},
	mutations: {
		...orders.mutations,
	},
	selectors: {
		...orders.selectors,
	},
};
