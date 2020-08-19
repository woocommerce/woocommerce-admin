/**
 * External dependencies
 */
import { addQueryArgs } from '@wordpress/url';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import { NAMESPACE } from '../constants';
import { setError, updateItems } from './actions';
import { fetchWithHeaders } from '../controls';

export function* getItems( itemType, query ) {
	const endpoint =
		itemType === 'categories' ? 'products/categories' : itemType;
	try {
		const url = addQueryArgs( `${ NAMESPACE }/${ endpoint }`, query );
		const isUnboundedRequest = query.per_page === -1;
		const fetch = isUnboundedRequest ? apiFetch : fetchWithHeaders;
		const response = yield fetch( {
			path: url,
			method: 'GET',
		} );

		const totalCount = isUnboundedRequest
			? response.data.length
			: parseInt( response.headers.get( 'x-wp-total' ), 10 );
		yield updateItems( itemType, query, response.data, totalCount );
	} catch ( error ) {
		yield setError( query, error );
	}
}

export function* getReviewsTotalCount( itemType, query ) {
	yield getItems( itemType, query );
}
