/**
 * Internal dependencies
 */
import { ACTION_TYPES as TYPES } from './action-types';
import { PluginsState } from './types';
import { Actions } from './actions';

const reducer = (
	state: PluginsState = {
		paymentGateways: [],
		requesting: {},
		errors: {},
	},
	payload?: Actions
): PluginsState => {
	if ( payload && 'type' in payload ) {
		switch ( payload.type ) {
			case TYPES.GET_PAYMENT_GATEWAYS_SUCESS:
				return {
					...state,
					paymentGateways: payload.paymentGateways,
				};
			case TYPES.SET_PAYMENT_GATEWAY:
				const targetIndex = state.paymentGateways.findIndex(
					( paymentGateway ) =>
						paymentGateway.id === payload.paymentGateway.id
				);

				if ( targetIndex === -1 ) {
					return {
						...state,
						paymentGateways: [
							...state.paymentGateways,
							payload.paymentGateway,
						],
					};
				}

				return {
					...state,
					paymentGateways: [
						...state.paymentGateways.slice( 0, targetIndex ),
						payload.paymentGateway,
						...state.paymentGateways.slice( targetIndex + 1 ),
					],
				};
			case TYPES.SET_ERROR:
				return {
					...state,
					errors: {
						...state.errors,
						[ payload.selector ]: payload.error,
					},
					requesting: {
						...state.requesting,
						[ payload.selector ]: false,
					},
				};
			case TYPES.SET_IS_REQUESTING:
				return {
					...state,
					requesting: {
						...state.requesting,
						[ payload.selector ]: true,
					},
				};
		}
	}
	return state;
};

export default reducer;
