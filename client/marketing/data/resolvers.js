/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
	apiFetch,
	handleFetchError,
	receiveRecommendedPlugins,
} from './actions';
import { API_NAMESPACE } from './constants';

export function* getRecommendedPlugins() {
	try {
		const response = yield apiFetch( {
			path: `${API_NAMESPACE}/overview/recommended?per_page=6`
		} );

		yield receiveRecommendedPlugins( response );
	} catch ( error ) {
		yield handleFetchError( {}, __( 'There was an error loading recommended extensions.', 'woocommerce-admin' ) );
	}
}
