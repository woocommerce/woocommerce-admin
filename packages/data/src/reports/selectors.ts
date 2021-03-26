/**
 * Internal dependencies
 */
import { getResourceName } from '../utils';
import { ReportQuery, ReportsState } from './types';

const EMPTY_OBJECT = {};

export const getReportItemsError = (
	state: ReportsState,
	endpoint: string,
	query: ReportQuery
) => {
	const resourceName = getResourceName( endpoint, query );
	return state.itemErrors[ resourceName ] || false;
};

export const getReportItems = (
	state: ReportsState,
	endpoint: string,
	query: ReportQuery
) => {
	const resourceName = getResourceName( endpoint, query );
	return state.items[ resourceName ] || EMPTY_OBJECT;
};

export const getReportStats = (
	state: ReportsState,
	endpoint: string,
	query: ReportQuery
) => {
	const resourceName = getResourceName( endpoint, query );
	return state.stats[ resourceName ] || EMPTY_OBJECT;
};

export const getReportStatsError = (
	state: ReportsState,
	endpoint: string,
	query: ReportQuery
) => {
	const resourceName = getResourceName( endpoint, query );
	return state.statErrors[ resourceName ] || false;
};
