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
				key: 'net_revenue',
				label: __( 'Net Revenue', 'wc-admin' ),
				type: 'currency',
			},
			{
				key: 'avg_order_value',
				label: __( 'Avergae Order Value', 'wc-admin' ),
				type: 'currency',
			},
			{
				key: 'avg_items_per_order',
				label: __( 'Average Items Per Order', 'wc-admin' ),
				type: 'average',
			},
			{
				key: 'orders_count',
				label: __( 'Orders Count', 'wc-admin' ),
				type: 'number',
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
		const { query, primaryQuery, secondaryQuery, primaryData, secondaryData } = this.props;
		return (
			<Fragment>
				<ReportSummary
					charts={ this.getCharts() }
					endpoint="orders"
					query={ query }
					selectedChart={ this.getSelectedChart() }
					primaryQuery={ primaryQuery }
					secondaryQuery={ secondaryQuery }
				/>
				<ReportChart
					charts={ this.getCharts() }
					selectedChart={ this.getSelectedChart() }
					query={ query }
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
