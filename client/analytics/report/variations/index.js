/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import PropTypes from 'prop-types';
import { withDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { advancedFilters, charts, filters } from './config';
import getSelectedChart from '../../../lib/get-selected-chart';
import ReportChart from '../../components/report-chart';
import ReportError from '../../components/report-error';
import ReportSummary from '../../components/report-summary';
import VariationsReportTable from './table';
import ReportFilters from '../../components/report-filters';
import { STORE_KEY as CES_STORE_KEY } from '../../../customer-effort-score-tracks/data/constants';

const getChartMeta = ( { query } ) => {
	const isCompareView =
		query[ 'filter-variations' ] === 'compare-variations' &&
		query.variations &&
		query.variations.split( ',' ).length > 1;

	return {
		compareObject: 'variations',
		itemsLabel: __( '%d variations', 'woocommerce-admin' ),
		mode: isCompareView ? 'item-comparison' : 'time-comparison',
	};
};

const VariationsReport = ( props ) => {
	const { itemsLabel, mode } = getChartMeta( props );
	const {
		path,
		query,
		isError,
		isRequesting,
		addCesSurveyTrackForAnalytics,
	} = props;

	if ( isError ) {
		return <ReportError isError />;
	}

	const chartQuery = {
		...query,
	};

	if ( mode === 'item-comparison' ) {
		chartQuery.segmentby = 'variation';
	}

	const compareProducts = filters[ 0 ].filters.filter(
		( item ) => item.value === 'compare-variations'
	);
	if ( compareProducts.length ) {
		compareProducts[ 0 ].settings.onClick = addCesSurveyTrackForAnalytics;
	}

	return (
		<Fragment>
			<ReportFilters
				query={ query }
				path={ path }
				filters={ filters }
				advancedFilters={ advancedFilters }
				report="variations"
			/>
			<ReportSummary
				mode={ mode }
				charts={ charts }
				endpoint="variations"
				isRequesting={ isRequesting }
				query={ chartQuery }
				selectedChart={ getSelectedChart( query.chart, charts ) }
				filters={ filters }
				advancedFilters={ advancedFilters }
			/>
			<ReportChart
				charts={ charts }
				mode={ mode }
				filters={ filters }
				advancedFilters={ advancedFilters }
				endpoint="variations"
				isRequesting={ isRequesting }
				itemsLabel={ itemsLabel }
				path={ path }
				query={ chartQuery }
				selectedChart={ getSelectedChart( chartQuery.chart, charts ) }
			/>
			<VariationsReportTable
				isRequesting={ isRequesting }
				query={ query }
				filters={ filters }
				advancedFilters={ advancedFilters }
			/>
		</Fragment>
	);
};

VariationsReport.propTypes = {
	path: PropTypes.string.isRequired,
	query: PropTypes.object.isRequired,
};

export default withDispatch( ( dispatch ) => {
	const { addCesSurveyTrackForAnalytics } = dispatch( CES_STORE_KEY );
	return { addCesSurveyTrackForAnalytics };
} )( VariationsReport );
