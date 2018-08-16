/** @format */

/**
 * External dependencies
 */
import { isNull } from 'lodash';

/**
 * Returns true if a revenue report object is empty.
 *
 * @param  {Object} report  Report to check
 * @return {Boolean}        True if report is data is empty.
 */
export function isReportDataEmpty( report ) {
	if ( ! report ) {
		return true;
	}

	if ( ! report.data ) {
		return true;
	}

	if ( ! report.data.totals || isNull( report.data.totals ) ) {
		return true;
	}

	if ( ! report.data.intervals || 0 === report.data.intervals.length ) {
		return true;
	}

	return false;
}

/**
 * Returns a set of API request args for getting table data based on a query string.
 *
 * @param  {Object} query   Query object.
 * @return {Object}         Object containing API request args for report endpoints.
 */
export function generateReportTableRequest( query ) {
	return {
		interval: 'day',
		orderby: query.orderby || 'date',
		order: query.order || 'desc',
		page: query.page || 1,
		per_page: query.per_page || 25,
	};
}
