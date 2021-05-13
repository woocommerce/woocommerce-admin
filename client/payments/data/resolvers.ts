/**
 * External dependencies
 */
import { apiFetch } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import {
	getPaymentGatewaysSuccess,
	updatePaymentGatewaySuccess,
	setError,
	setIsRequesting,
} from './actions';

import { API_NAMESPACE } from './constants';
import { PaymentGateway } from './types';

export function* getPaymentGateways() {
	yield setIsRequesting( 'getPaymentGateways', true );

	try {
		const response: Array< PaymentGateway > = yield apiFetch( {
			path: API_NAMESPACE + '/payment_gateways',
		} );
		yield setIsRequesting( 'getPaymentGateways', false );
		yield getPaymentGatewaysSuccess( response );
	} catch ( e ) {
		yield setError( 'getPaymentGateways', e );
	}
}

export function* getPaymentGateway( id: string ) {
	yield setIsRequesting( 'getPaymentGateway', true );

	try {
		const response: PaymentGateway = yield apiFetch( {
			path: API_NAMESPACE + '/payment_gateways/' + id,
		} );

		if ( response && response.id ) {
			yield setIsRequesting( 'getPaymentGateway', false );
			yield updatePaymentGatewaySuccess( response );
			return response;
		}
	} catch ( e ) {
		yield setError( 'getPaymentGateway', e );
	}
}
