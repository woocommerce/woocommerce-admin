/**
 * External dependencies
 */
import { addQueryArgs } from '@wordpress/url';
import { apiFetch } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import { NAMESPACE } from '../constants';
import { setError, setItems, setItemsTotalCount } from './actions';
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

		if ( isUnboundedRequest ) {
			yield setItemsTotalCount( itemType, query, response.length );
			yield setItems( itemType, query, response );
		} else {
			const totalCount = parseInt(
				response.headers.get( 'x-wp-total' ),
				10
			);
			yield setItemsTotalCount( itemType, query, totalCount );
			yield setItems( itemType, query, response.data );
		}
	} catch ( error ) {
		yield setError( itemType, query, error );
	}
}

export function* getReviewsTotalCount( itemType, query ) {
	yield getItems( itemType, query );
}

export function* getItemsTotalCount( itemType, query ) {
	yield getItems( itemType, query );
}
