/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { format as formatDate } from '@wordpress/date';
import { withSelect } from '@wordpress/data';
/**
 * Internal dependencies
 */
import { Chart, ChartPlaceholder } from '@woocommerce/components';
import {
	getAllowedIntervalsForQuery,
	getCurrentDates,
	getDateFormatsForInterval,
	getIntervalForQuery,
	getPreviousDate,
} from 'lib/date';
import { getReportChartData } from 'store/reports/utils';
import { MAX_PER_PAGE } from 'store/constants';

class ReportGraph extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		const { primaryData, secondaryData, selectedChart, query } = this.props;

		if ( primaryData.isRequesting || secondaryData.isRequesting ) {
			return (
				<Fragment>
					<span className="screen-reader-text">
						{ __( 'Your requested data is loading', 'wc-admin' ) }
					</span>
					<ChartPlaceholder />
				</Fragment>
			);
		}

		const currentInterval = getIntervalForQuery( query );
		const allowedIntervals = getAllowedIntervalsForQuery( query );
		const formats = getDateFormatsForInterval( currentInterval );
		const { primary, secondary } = getCurrentDates( query );
		const primaryKey = `${ primary.label } (${ primary.range })`;
		const secondaryKey = `${ secondary.label } (${ secondary.range })`;

		const chartData = primaryData.data.intervals.map( function( interval, index ) {
			const secondaryDate = getPreviousDate(
				formatDate( 'Y-m-d', interval.date_start ),
				primary.after,
				secondary.after,
				query.compare,
				currentInterval
			);

			const secondaryInterval = secondaryData.data.intervals[ index ];
			return {
				date: formatDate( 'Y-m-d\\TH:i:s', interval.date_start ),
				[ primaryKey ]: {
					labelDate: interval.date_start,
					value: interval.subtotals[ selectedChart.key ] || 0,
				},
				[ secondaryKey ]: {
					labelDate: secondaryDate,
					value: ( secondaryInterval && secondaryInterval.subtotals[ selectedChart.key ] ) || 0,
				},
			};
		} );

		return (
			<Chart
				data={ chartData }
				title={ selectedChart.label }
				interval={ currentInterval }
				allowedIntervals={ allowedIntervals }
				mode="time-comparison"
				pointLabelFormat={ formats.pointLabelFormat }
				tooltipTitle={ selectedChart.label }
				xFormat={ formats.xFormat }
				x2Format={ formats.x2Format }
				dateParser={ '%Y-%m-%dT%H:%M:%S' }
			/>
		);
	}
}

export default compose(
	withSelect( ( select, props ) => {
		const { query, endpoint } = props;
		const interval = getIntervalForQuery( query );
		const datesFromQuery = getCurrentDates( query );
		const baseArgs = {
			order: 'asc',
			interval: interval,
			per_page: MAX_PER_PAGE,
		};
		const primaryData = getReportChartData(
			endpoint,
			{
				...baseArgs,
				after: datesFromQuery.primary.after,
				before: datesFromQuery.primary.before,
			},
			select
		);

		const secondaryData = getReportChartData(
			endpoint,
			{
				...baseArgs,
				after: datesFromQuery.secondary.after,
				before: datesFromQuery.secondary.before,
			},
			select
		);
		return {
			primaryData,
			secondaryData,
		};
	} )
)( ReportGraph );
