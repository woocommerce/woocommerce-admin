/**
 * External dependencies
 */
import { apiFetch } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import TYPES from './action-types';
import { NAMESPACE } from '../constants';

export function setExportId( exportType, exportArgs, exportId ) {
	return {
		type: TYPES.SET_EXPORT_ID,
		exportType,
		exportArgs,
		exportId,
	};
}

export function setIsRequesting( selector, selectorArgs, isRequesting ) {
	return {
		type: TYPES.SET_IS_REQUESTING,
		selector,
		selectorArgs,
		isRequesting,
	};
}

export function setError( selector, selectorArgs, error ) {
	return {
		type: TYPES.SET_ERROR,
		selector,
		selectorArgs,
		error,
	};
}

export function* startExport( type, args ) {
	yield setIsRequesting( 'startExport', { type, args }, true );

	try {
		const result = yield apiFetch( {
			path: `${ NAMESPACE }/reports/${ type }/export`,
			method: 'POST',
			data: {
				report_args: args,
				email: true,
			},
		} );

		if ( result && result.status === 'success' ) {
			yield setExportId( type, args, result.export_id );
			yield setIsRequesting( 'startExport', { type, args }, false );

			return result;
		}

		if ( result && result.status === 'error' ) {
			throw new Error( result.message );
		}

		throw new Error();
	} catch ( error ) {
		yield setError( 'startExport', { type, args }, error.message );
		yield setIsRequesting( 'startExport', { type, args }, false );
		throw new Error();
	}
}
