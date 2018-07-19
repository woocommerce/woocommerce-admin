/** @format */
/**
 * External dependencies
 */
import { FreshDataApi } from '@fresh-data/framework';

/**
 * Internal dependencies
 */
import orders from './orders';

export default class WooCommerceRestApi extends FreshDataApi {
	constructor( apiMethods ) {
		super();
		this.methods = apiMethods;

		this.operations = {
			read: methods => ( resourceNames, resourceData ) => {
				return [ ...orders.operations.read( methods )( resourceNames, resourceData ) ];
			},
			update: methods => ( resourceNames, resourceData ) => {
				return [ ...orders.operations.update( methods )( resourceNames, resourceData ) ];
			},
		};

		this.mutations = {
			...orders.mutations,
		};

		this.selectors = {
			...orders.selectors,
		};
	}
}
