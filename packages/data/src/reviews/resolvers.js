/**
 * External dependencies
 */
import { apiFetch } from '@wordpress/data-controls';
import { addQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies
 */
import { WC_ADMIN_NAMESPACE } from '../constants';
import { setIsRequesting, setError, updateReviews } from './actions';

export function* getReviews( query ) {
	yield setIsRequesting( 'getReviews', true );
	try {
		const url = addQueryArgs(
			`${ WC_ADMIN_NAMESPACE }/products/reviews`,
			query
		);
		const response = yield apiFetch( {
			parse: false,
			path: url,
			method: 'GET',
		} );

		const reviews = yield response.json();
		const totalCount = parseInt( response.headers.get( 'x-wp-total' ), 10 );

		yield updateReviews( query, reviews, totalCount );
	} catch ( error ) {
		yield setError( 'getReviews', error );
	}
}
