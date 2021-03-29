/**
 * External dependencies
 */
import { addQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies
 */
import { fetchWithHeaders } from '../controls';
import { NAMESPACE } from '../constants';
import {
	setReportItemsError,
	setReportStatsError,
	setReportItems,
	setReportStats,
} from './actions';
import { ReportQuery, ReportsResponse, ReportStat } from './types';

export function* getReportItems( endpoint: string, query: ReportQuery ) {
	const fetchArgs = {
		parse: false,
		path: addQueryArgs( `${ NAMESPACE }/reports/${ endpoint }`, query ),
	};

	try {
		const response: ReportsResponse = yield fetchWithHeaders( fetchArgs );
		const data = response.data;
		const totalResults = parseInt(
			response.headers.get( 'x-wp-total' ) as string,
			10
		);
		const totalPages = parseInt(
			response.headers.get( 'x-wp-totalpages' ) as string,
			10
		);

		yield setReportItems( endpoint, query, {
			data,
			totalResults,
			totalPages,
		} );
	} catch ( error ) {
		yield setReportItemsError( endpoint, query, error );
	}
}

export function* getReportStats( endpoint: string, query: ReportQuery ) {
	const fetchArgs = {
		parse: false,
		path: addQueryArgs(
			`${ NAMESPACE }/reports/${ endpoint }/stats`,
			query
		),
	};

	try {
		const response: ReportsResponse< ReportStat > = yield fetchWithHeaders(
			fetchArgs
		);
		const data = response.data;
		const totalResults = parseInt(
			response.headers.get( 'x-wp-total' ) as string,
			10
		);
		const totalPages = parseInt(
			response.headers.get( 'x-wp-totalpages' ) as string,
			10
		);

		yield setReportStats( endpoint, query, {
			data,
			totalResults,
			totalPages,
		} );
	} catch ( error ) {
		yield setReportStatsError( endpoint, query, error );
	}
}
