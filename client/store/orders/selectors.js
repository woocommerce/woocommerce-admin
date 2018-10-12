/** @format */

/**
 * External dependencies
 */
import { select } from '@wordpress/data';

export default {
	getOrders( state ) {
		return state.orders.orders;
	},

	/**
	 * Returns true if a query is pending.
	 *
	 * @param  {Object} state   Current state
	 * @return {Boolean}        True if the `getOrders` request is pending, false otherwise
	 */
	isGetOrdersRequesting( state, ...args ) {
		return select( 'core/data' ).isResolving( 'wc-admin', 'getOrders', args );
	},
};
