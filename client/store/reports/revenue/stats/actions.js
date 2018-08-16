/** @format */

export default {
	setReportRevenueStats( query, report, totalResults ) {
		return {
			type: 'SET_REPORT_REVENUE_STATS',
			report,
			totalResults,
			query: query || {},
		};
	},
	setReportRevenueStatsError( query ) {
		return {
			type: 'SET_REPORT_REVENUE_STATS_ERROR',
			query: query || {},
		};
	},
};
