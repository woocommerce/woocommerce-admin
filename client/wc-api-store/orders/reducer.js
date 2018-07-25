/** @format */

const DEFAULT_STATE = {
	orders: [],
};

export default function ordersReducer( state = DEFAULT_STATE, action ) {
	switch ( action.type ) {
		case 'SET_ORDERS':
			const { orders } = action;
			return {
				...state,
				orders,
			};
		default:
			return state;
	}
}
