/**
 * External dependencies
 */
import { apiFetch } from '@wordpress/data-controls';
import { dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import TYPES from './action-types';
import { API_NAMESPACE } from './constants';

export function handleFetchError( error, message ) {
	const { createNotice } = dispatch( 'core/notices' );
	createNotice( 'error', message );

	// eslint-disable-next-line no-console
	console.log( error );
}

export function receivePaymentGateways( paymentGateways ) {
	return {
		type: TYPES.RECEIVE_PAYMENT_GATEWAYS,
		paymentGateways,
	};
}
export function receivePaymentGateway( paymentGateway ) {
	return {
		type: TYPES.RECEIVE_PAYMENT_GATEWAY,
		paymentGateway,
	};
}

export function* updatePaymentGateway( id, data ) {
	try {
		const response = yield apiFetch( {
			method: 'PUT',
			path: API_NAMESPACE + '/payment_gateways/' + id,
			body: JSON.stringify( data ),
		} );

		if ( response && response.id === id ) {
			// Update the already loaded payment gateway list with the new data
			yield receivePaymentGateway( response );
			return response;
		}
	} catch ( e ) {
		yield handleFetchError(
			e,
			'There was an error updating payment gatewa by I.D ' + id
		);
	}
}
