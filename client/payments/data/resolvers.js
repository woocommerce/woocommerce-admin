/**
 * External dependencies
 */
import { apiFetch } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import {
	receivePaymentGateways,
	receivePaymentGateway,
	handleFetchError,
} from './actions';

import { API_NAMESPACE } from './constants';

export function* listPaymentGateways() {
	try {
		const response = yield apiFetch( {
			path: API_NAMESPACE + '/payment_gateways',
		} );
		yield receivePaymentGateways( response );
	} catch ( e ) {
		yield handleFetchError(
			e,
			'There was an error loading payment gateways.'
		);
	}
}

export function* retrievePaymentGateway( id ) {
	try {
		const response = yield apiFetch( {
			path: API_NAMESPACE + '/payment_gateways/' + id,
		} );
		yield receivePaymentGateway( response );
	} catch ( e ) {
		yield handleFetchError(
			e,
			'There was an error loading payment gateway by I.D ' + id
		);
	}
}
