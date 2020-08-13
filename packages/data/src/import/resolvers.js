/**
 * External dependencies
 */
import { addQueryArgs } from '@wordpress/url';
import { apiFetch } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import { NAMESPACE } from '../constants';
import { setImportError, setImportStatus, setImportTotals } from './actions';

export function* getImportStatus( endpoint, query ) {
	try {
		const url = addQueryArgs(
			`${ NAMESPACE }/reports/import/status`,
			query
		);
		const response = yield apiFetch( { path: url } );
		yield setImportStatus( endpoint, query, response );
	} catch ( error ) {
		yield setImportError( endpoint, query, error );
	}
}

export function* getImportTotals( endpoint, query ) {
	try {
		const url = addQueryArgs(
			`${ NAMESPACE }/reports/import/totals`,
			query
		);
		const response = yield apiFetch( { path: url } );
		yield setImportTotals( endpoint, query, response );
	} catch ( error ) {
		yield setImportError( endpoint, query, error );
	}
}
