/**
 * External dependencies
 */
import { apiFetch } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import { ACTION_TYPES as TYPES } from './action-types';
import { API_NAMESPACE } from './constants';
import { PaymentGateway, RestApiError, SelectorKeysWithActions } from './types';

export function getPaymentGatewaysSuccess(
	paymentGateways: Array< PaymentGateway >
): {
	type: TYPES.GET_PAYMENT_GATEWAYS_SUCESS;
	paymentGateways: Array< PaymentGateway >;
} {
	return {
		type: TYPES.GET_PAYMENT_GATEWAYS_SUCESS,
		paymentGateways,
	};
}

export function setPaymentGateway(
	paymentGateway: PaymentGateway
): {
	type: TYPES.SET_PAYMENT_GATEWAY;
	paymentGateway: PaymentGateway;
} {
	return {
		type: TYPES.SET_PAYMENT_GATEWAY,
		paymentGateway,
	};
}

export function setError(
	selector: SelectorKeysWithActions,
	error: RestApiError
): {
	type: TYPES.SET_ERROR;
	selector: SelectorKeysWithActions;
	error: RestApiError;
} {
	return {
		type: TYPES.SET_ERROR,
		selector,
		error,
	};
}

export function setIsRequesting(
	selector: SelectorKeysWithActions,
	isRequesting: boolean
): {
	type: TYPES.SET_IS_REQUESTING;
	selector: SelectorKeysWithActions;
	isRequesting: boolean;
} {
	return {
		type: TYPES.SET_IS_REQUESTING,
		selector,
		isRequesting,
	};
}

export function* updatePaymentGateway(
	id: string,
	data: Partial< PaymentGateway >
) {
	yield setIsRequesting( 'updatePaymentGateway', true );

	try {
		const response: PaymentGateway = yield apiFetch( {
			method: 'PUT',
			path: API_NAMESPACE + '/payment_gateways/' + id,
			body: JSON.stringify( data ),
		} );

		if ( response && response.id === id ) {
			// Update the already loaded payment gateway list with the new data
			yield setPaymentGateway( response );
			return response;
		}
	} catch ( e ) {
		yield setError( 'updatePaymentGateway', e );
	}
}

export type Actions =
	| ReturnType< typeof updatePaymentGateway >
	| ReturnType< typeof setPaymentGateway >
	| ReturnType< typeof getPaymentGatewaysSuccess >
	| ReturnType< typeof setError >
	| ReturnType< typeof setIsRequesting >;
