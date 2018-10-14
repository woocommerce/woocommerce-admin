/** @format */

/**
 * External dependencies
 */
import { merge } from 'lodash';

/**
 * Internal dependencies
 */
import { ERROR } from 'store/constants';
import { getJsonString } from 'store/utils';

const DEFAULT_STATE = {};

export default function ordersReducer( state = DEFAULT_STATE, action ) {
	const queryKey = getJsonString( action.query );

	switch ( action.type ) {
		case 'SET_ORDERS':
			return merge( {}, state, {
				[ queryKey ]: action.orders,
			} );

		case 'SET_ORDERS_ERROR':
			return merge( {}, state, {
				[ queryKey ]: ERROR,
			} );

		case 'UPDATE_ORDER':
			const updatedOrders = { ...state.orders };
			updatedOrders[ action.order.id ] = action.order;
			return {
				...state,
				orders: updatedOrders,
			};
	}

	return state;
}
