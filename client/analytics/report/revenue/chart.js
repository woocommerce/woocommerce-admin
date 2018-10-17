/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { find } from 'lodash';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import ReportChart from 'analytics/components/report-chart';
import ReportSummary from 'analytics/components/report-summary';

class OrdersReportChart extends Component {
	getCharts() {
		return [
			{
				key: 'gross_revenue',
				label: __( 'Gross Revenue', 'wc-admin' ),
				type: 'currency',
			},
			{
				key: 'refunds',
				label: __( 'Refunds', 'wc-admin' ),
				type: 'currency',
			},
			{
				key: 'coupons',
				label: __( 'Coupons', 'wc-admin' ),
				type: 'currency',
			},
			{
				key: 'taxes',
				label: __( 'Taxes', 'wc-admin' ),
				type: 'currency',
			},
			{
				key: 'shipping',
				label: __( 'Shipping', 'wc-admin' ),
				type: 'currency',
			},
			{
				key: 'net_revenue',
				label: __( 'Net Revenue', 'wc-admin' ),
				type: 'currency',
			},
		];
	}

	getSelectedChart() {
		const { query } = this.props;
		const charts = this.getCharts();
		const chart = find( charts, { key: query.chart } );
		if ( chart ) {
			return chart;
		}

		return charts[ 0 ];
	}

	render() {
		const { query, primaryData, secondaryData, primaryQuery, secondaryQuery } = this.props;
		return (
			<Fragment>
				<ReportSummary
					charts={ this.getCharts() }
					endpoint="revenue"
					query={ query }
					selectedChart={ this.getSelectedChart() }
					primaryQuery={ primaryQuery }
					secondaryQuery={ secondaryQuery }
				/>
				<ReportChart
					charts={ this.getCharts() }
					query={ query }
					selectedChart={ this.getSelectedChart() }
					primaryData={ primaryData }
					secondaryData={ secondaryData }
				/>
			</Fragment>
		);
	}
}

OrdersReportChart.propTypes = {
	query: PropTypes.object.isRequired,
	primaryQuery: PropTypes.object.isRequired,
	secondaryQuery: PropTypes.object.isRequired,
	primaryData: PropTypes.object.isRequired,
	secondaryData: PropTypes.object.isRequired,
};

export default OrdersReportChart;
