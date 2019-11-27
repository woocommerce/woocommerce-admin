/** @format */
/**
 * External dependencies
 */
import { Fragment } from '@wordpress/element';
import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';

/**
 * WooCommerce dependencies
 */
import { useSettings } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import { advancedFilters, charts, filters } from './config';
import getSelectedChart from 'lib/get-selected-chart';
import ReportChart from 'analytics/components/report-chart';
import ReportSummary from 'analytics/components/report-summary';
import TaxesReportTable from './table';
import ReportFilters from 'analytics/components/report-filters';

const getChartMeta = query => {
	const isCompareTaxView = 'compare-taxes' === query.filter;
	const mode = isCompareTaxView ? 'item-comparison' : 'time-comparison';
	const itemsLabel = __( '%d taxes', 'woocommerce-admin' );

	return {
		itemsLabel,
		mode,
	};
};

const TaxesReport = ( { isRequesting, query, path } ) => {
	const { mode, itemsLabel } = getChartMeta( query );

	const { locale, getAdminLink, currency } = useSettings( 'wc_admin', [
		'locale',
		'getAdminLink',
		'currency',
	] );

	const chartQuery = {
		...query,
	};

	if ( 'item-comparison' === mode ) {
		chartQuery.segmentby = 'tax_rate_id';
	}
	return (
		<Fragment>
			<ReportFilters
				query={ query }
				path={ path }
				filters={ filters }
				advancedFilters={ advancedFilters }
				report="taxes"
				locale={ locale }
			/>
			<ReportSummary
				charts={ charts }
				endpoint="taxes"
				isRequesting={ isRequesting }
				query={ chartQuery }
				selectedChart={ getSelectedChart( query.chart, charts ) }
				filters={ filters }
				advancedFilters={ advancedFilters }
				getAdminLink={ getAdminLink }
			/>
			<ReportChart
				filters={ filters }
				advancedFilters={ advancedFilters }
				mode={ mode }
				endpoint="taxes"
				query={ chartQuery }
				path={ path }
				isRequesting={ isRequesting }
				itemsLabel={ itemsLabel }
				selectedChart={ getSelectedChart( query.chart, charts ) }
				getAdminLink={ getAdminLink }
				currency={ currency }
			/>
			<TaxesReportTable
				isRequesting={ isRequesting }
				query={ query }
				filters={ filters }
				advancedFilters={ advancedFilters }
				getAdminLink={ getAdminLink }
			/>
		</Fragment>
	);
};
TaxesReport.propTypes = {
	query: PropTypes.object.isRequired,
};

export default TaxesReport;
