/**
 * External dependencies
 */
import { addQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies
 */
import { NAMESPACE } from '../constants';
import { setIsRequesting, setError, updateReviews } from './actions';
import { fetchWithHeaders } from './controls';

export function* getReviews( query ) {
	yield setIsRequesting( 'getReviews', true );
	try {
		const url = addQueryArgs( `${ NAMESPACE }/products/reviews`, query );
		const response = yield fetchWithHeaders( {
			path: url,
			method: 'GET',
		} );

		const totalCount = parseInt( response.headers.get( 'x-wp-total' ), 10 );
		console.log( response );

		yield updateReviews( query, response.data, totalCount );
	} catch ( error ) {
		console.log( error );
		yield setError( 'getReviews', error );
	}
}
