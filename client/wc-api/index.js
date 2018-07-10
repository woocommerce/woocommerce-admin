/** @format */
/**
 * External dependencies
 */
import { FreshDataApi } from '@fresh-data/framework';

/**
 * Internal dependencies
 */
import apiRequestMethods from './methods';
import orders from './orders';

export function createApi( apiMethods ) {
	class WooCommerceRestApi extends FreshDataApi {}

	WooCommerceRestApi.methods = apiMethods;

	WooCommerceRestApi.operations = {
		read: methods => ( resourceNames, resourceData ) => {
			return [ ...orders.operations.read( methods )( resourceNames, resourceData ) ];
		},
		update: methods => ( resourceNames, resourceData ) => {
			return [ ...orders.operations.update( methods )( resourceNames, resourceData ) ];
		},
	};

	WooCommerceRestApi.mutations = {
		...orders.mutations,
	};

	WooCommerceRestApi.selectors = {
		...orders.selectors,
	};

	return WooCommerceRestApi;
}

export default createApi( apiRequestMethods );
