/**
 * Internal dependencies
 */
import TYPES from './action-types';

const DEFAULT_STATE = {
	paymentGateways: [],
};

const reducer = ( state = DEFAULT_STATE, action ) => {
	switch ( action.type ) {
		case TYPES.RECEIVE_PAYMENT_GATEWAYS:
			return {
				...state,
				paymentGateways: action.paymentGateways,
			};
		case TYPES.RECEIVE_PAYMENT_GATEWAY:
			const paymentGateways = state.paymentGateways.filter(
				( gateway ) => {
					return gateway.id !== action.paymentGateway.id;
				}
			);
			paymentGateways.push( action.paymentGateway );

			return {
				...state,
				paymentGateways,
			};
		default:
			return state;
	}
};

export default reducer;
