/**
 * Internal dependencies
 */
import { WPDataSelector, WPDataSelectors } from '../types';
import { getResourceName } from '../utils';
import { ReportQuery, ReportsState } from './types';

const EMPTY_OBJECT = {};

export const getReportItemsError = (
	state: ReportsState,
	endpoint: string,
	query: Partial< ReportQuery >
) => {
	const resourceName = getResourceName( endpoint, query );
	return state.itemErrors[ resourceName ] || false;
};

export const getReportItems = (
	state: ReportsState,
	endpoint: string,
	query: Partial< ReportQuery >
) => {
	const resourceName = getResourceName( endpoint, query );
	return state.items[ resourceName ] || EMPTY_OBJECT;
};

export const getReportStats = (
	state: ReportsState,
	endpoint: string,
	query: Partial< ReportQuery >
) => {
	const resourceName = getResourceName( endpoint, query );
	return state.stats[ resourceName ] || EMPTY_OBJECT;
};

export const getReportStatsError = (
	state: ReportsState,
	endpoint: string,
	query: Partial< ReportQuery >
) => {
	const resourceName = getResourceName( endpoint, query );
	return state.statErrors[ resourceName ] || false;
};

export type ReportsSelectors = {
	getReportItemsError: WPDataSelector< typeof getReportItemsError >;
	getReportItems: WPDataSelector< typeof getReportItems >;
	getReportStats: WPDataSelector< typeof getReportStats >;
	getReportStatsError: WPDataSelector< typeof getReportStatsError >;
} & WPDataSelectors;
