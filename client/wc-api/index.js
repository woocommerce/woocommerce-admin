/** @format */
/**
 * External dependencies
 */
import { FreshDataApi } from 'fresh-data';

/**
 * Internal dependencies
 */
import apiRequestMethods from './apirequest-methods';
import orders from './orders';

export function createApi( apiMethods ) {
	class WooCommerceRestApi extends FreshDataApi {}

	WooCommerceRestApi.methods = apiMethods;

	WooCommerceRestApi.operations = {
		read: methods => resourceNames => {
			return [ ...orders.operations.read( methods )( resourceNames ) ];
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
