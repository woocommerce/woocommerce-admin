/**
 * Internal dependencies
 */
import { getResourceName } from '../utils';
import TYPES from './action-types';
import { ReportItems, ReportQuery, ReportStatData } from './types';

export function setReportItemsError(
	endpoint: string,
	query: ReportQuery,
	error: { status: number; message: string }
) {
	const resourceName = getResourceName( endpoint, query );

	return {
		type: TYPES.SET_ITEM_ERROR,
		resourceName,
		error,
	};
}

export function setReportItems(
	endpoint: string,
	query: ReportQuery,
	items: ReportItems
) {
	const resourceName = getResourceName( endpoint, query );

	return {
		type: TYPES.SET_REPORT_ITEMS,
		resourceName,
		items,
	};
}

export function setReportStats(
	endpoint: string,
	query: ReportQuery,
	stats: ReportStatData
) {
	const resourceName = getResourceName( endpoint, query );

	return {
		type: TYPES.SET_REPORT_STATS,
		resourceName,
		stats,
	};
}

export function setReportStatsError(
	endpoint: string,
	query: ReportQuery,
	error: { status: number; message: string }
) {
	const resourceName = getResourceName( endpoint, query );

	return {
		type: TYPES.SET_STAT_ERROR,
		resourceName,
		error,
	};
}
