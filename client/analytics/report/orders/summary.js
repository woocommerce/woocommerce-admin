/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { map } from 'lodash';
import { withSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { formatCurrency } from 'lib/currency';
import { getNewPath } from 'lib/nav-utils';
import { SummaryList, SummaryListPlaceholder, SummaryNumber } from '@woocommerce/components';
import { getCurrentDates, getDateParamsFromQuery } from 'lib/date';
import { getSummaryNumbers } from 'store/reports/utils';
class OrdersReportSummary extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		const { selectedChart, charts } = this.props;
		if ( this.props.summaryNumbers.isRequesting ) {
			return <SummaryListPlaceholder numberOfItems={ charts.length } />;
		}

		const totals = this.props.summaryNumbers.totals.primary || {};
		const secondaryTotals = this.props.summaryNumbers.totals.secondary || {};
		const { compare } = getDateParamsFromQuery( this.props.query );

		const summaryNumbers = map( this.getCharts(), chart => {
			const { key, label, type } = chart;
			const isSelected = selectedChart.key === key;
			let value = parseFloat( totals[ key ] );
			let secondaryValue =
				( secondaryTotals[ key ] && parseFloat( secondaryTotals[ key ] ) ) || undefined;

			let delta = 0;
			if ( secondaryValue && secondaryValue !== 0 ) {
				delta = Math.round( ( value - secondaryValue ) / secondaryValue * 100 );
			}

			switch ( type ) {
				case 'average':
					value = Math.round( value );
					secondaryValue = secondaryValue && Math.round( secondaryValue );
					break;
				case 'currency':
					value = formatCurrency( value );
					secondaryValue = secondaryValue && formatCurrency( secondaryValue );
					break;
				case 'number':
					break;
			}

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

export default compose(
	withSelect( ( select, props ) => {
		const { query } = props;
		const datesFromQuery = getCurrentDates( query );
		const summaryNumbers = getSummaryNumbers(
			'orders',
			{
				primary: datesFromQuery.primary,
				secondary: datesFromQuery.secondary,
			},
			select
		);

		return {
			summaryNumbers,
		};
	} )
)( OrdersReportSummary );
