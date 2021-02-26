/**
 * External dependencies
 */
import { dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import TYPES from './action-types';

export function receiveRecommendedPaymentMethods( methods ) {
	return {
		type: TYPES.SET_RECOMMENDED_PAYMENT_METHODS,
		data: methods,
	};
}

export function handleFetchError( error, message ) {
	const { createNotice } = dispatch( 'core/notices' );
	createNotice( 'error', message );

	// eslint-disable-next-line no-console
	console.log( error );
}
