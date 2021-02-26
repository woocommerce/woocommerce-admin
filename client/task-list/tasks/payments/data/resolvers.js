/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { apiFetch } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import { handleFetchError, receiveRecommendedPaymentMethods } from './actions';
import { API_NAMESPACE } from './constants';

export function* getRecommendedPaymentMethods() {
	try {
		const response = yield apiFetch( {
			method: 'GET',
			path: `${ API_NAMESPACE }/payment-method-recommendations`,
		} );

		if ( response ) {
			yield receiveRecommendedPaymentMethods( response );
		} else {
			throw new Error();
		}
	} catch ( error ) {
		yield handleFetchError(
			error,
			__(
				'There was an error loading recommended payment methods.',
				'woocommerce-admin'
			)
		);
	}
}
