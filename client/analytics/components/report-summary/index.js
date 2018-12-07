/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import PropTypes from 'prop-types';

/**
 * WooCommerce dependencies
 */
import { getDateParamsFromQuery } from '@woocommerce/date';
import { getNewPath } from '@woocommerce/navigation';
import { SummaryList, SummaryListPlaceholder, SummaryNumber } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import { getSummaryNumbers } from 'store/reports/utils';
import ReportError from 'analytics/components/report-error';
import { getFormattedValues } from './utils';

export class ReportSummary extends Component {
	render() {
		const { charts, query, selectedChart, summaryData } = this.props;

		if ( summaryData.isError ) {
			return <ReportError isError />;
		}

		if ( summaryData.isRequesting ) {
			return <SummaryListPlaceholder numberOfItems={ charts.length } />;
		}

		const totals = summaryData.totals.primary || {};
		const secondaryTotals = summaryData.totals.secondary || {};
		const { compare } = getDateParamsFromQuery( query );

		const summaryNumbers = charts.map( chart => {
			const { key, label, type } = chart;
			const isSelected = selectedChart.key === key;
			const { delta, secondaryValue, value } = getFormattedValues(
				type,
				totals[ key ],
				secondaryTotals[ key ]
			);
			const href = getNewPath( { chart: key } );

			return (
				<SummaryNumber
					key={ key }
					value={ value }
					label={ label }
					selected={ isSelected }
					prevValue={ secondaryValue }
					prevLabel={
						'previous_period' === compare
							? __( 'Previous Period:', 'wc-admin' )
							: __( 'Previous Year:', 'wc-admin' )
					}
					delta={ delta }
					href={ href }
				/>
			);
		} );

		return <SummaryList>{ summaryNumbers }</SummaryList>;
	}
}

ReportSummary.propTypes = {
	charts: PropTypes.array.isRequired,
	endpoint: PropTypes.string.isRequired,
	query: PropTypes.object.isRequired,
	selectedChart: PropTypes.object.isRequired,
};

export default compose(
	withSelect( ( select, props ) => {
		const { query, endpoint } = props;
		const summaryData = getSummaryNumbers( endpoint, query, select );

		return {
			summaryData,
		};
	} )
)( ReportSummary );
