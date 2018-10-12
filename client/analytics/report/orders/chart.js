/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
/**
 * Internal dependencies
 */
import OrdersReportSummary from './summary';

export default class OrdersReportChart extends Component {
	constructor( props ) {
		super( props );
	}

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
		const { query } = this.props;
		return (
			<OrdersReportSummary
				charts={ this.getCharts() }
				selected={ this.getSelectedChart() }
				query={ query }
			/>
		);
	}
}
