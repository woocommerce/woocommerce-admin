/**
 * External dependencies
 */
import { addQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies
 */
import { fetchWithHeaders } from '../controls';
import { getResourceName } from '../utils';
import { NAMESPACE } from '../constants';
import { setError, setReportItems, setReportStats } from './actions';

export function* getReportItems( endpoint, query ) {
	const fetchArgs = {
		parse: false,
		path: addQueryArgs( `${ NAMESPACE }/reports/${ endpoint }`, query ),
	};

	try {
		const response = yield fetchWithHeaders( fetchArgs );
		const data = response.data;
		const totalResults = parseInt(
			response.headers.get( 'x-wp-total' ),
			10
		);
		const totalPages = parseInt(
			response.headers.get( 'x-wp-totalpages' ),
			10
		);

		yield setReportItems( endpoint, query, {
			data,
			totalResults,
			totalPages,
		} );
	} catch ( error ) {
		const resourceName = getResourceName(
			`getReportItems-${ endpoint }`,
			query
		);
		yield setError( resourceName, error );
	}
}

export function* getReportStats( endpoint, query ) {
	const fetchArgs = {
		parse: false,
		path: addQueryArgs(
			`${ NAMESPACE }/reports/${ endpoint }/stats`,
			query
		),
	};

	try {
		const response = yield fetchWithHeaders( fetchArgs );
		const data = response.data;
		const totalResults = parseInt(
			response.headers.get( 'x-wp-total' ),
			10
		);
		const totalPages = parseInt(
			response.headers.get( 'x-wp-totalpages' ),
			10
		);

		yield setReportStats( endpoint, query, {
			data,
			totalResults,
			totalPages,
		} );
	} catch ( error ) {
		const resourceName = getResourceName(
			`getReportStats-${ endpoint }`,
			query
		);
		yield setError( resourceName, error );
	}
}
