/** @format */
/**
 * External dependencies
 */
import { Fragment } from '@wordpress/element';
import PropTypes from 'prop-types';

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
import RevenueReportTable from './table';
import ReportFilters from 'analytics/components/report-filters';

const RevenueReport = ( { path, query } ) => {
	const { locale, getAdminLink, currency } = useSettings( 'wc_admin', [
		'locale',
		'getAdminLink',
		'currency',
	] );

	return (
		<Fragment>
			<ReportFilters
				query={ query }
				path={ path }
				report="revenue"
				filters={ filters }
				advancedFilters={ advancedFilters }
				locale={ locale }
			/>
			<ReportSummary
				charts={ charts }
				endpoint="revenue"
				query={ query }
				selectedChart={ getSelectedChart( query.chart, charts ) }
				filters={ filters }
				advancedFilters={ advancedFilters }
				getAdminLink={ getAdminLink }
			/>
			<ReportChart
				endpoint="revenue"
				path={ path }
				query={ query }
				selectedChart={ getSelectedChart( query.chart, charts ) }
				filters={ filters }
				advancedFilters={ advancedFilters }
				getAdminLink={ getAdminLink }
				currency={ currency }
			/>
			<RevenueReportTable
				query={ query }
				filters={ filters }
				advancedFilters={ advancedFilters }
				getAdminLink={ getAdminLink }
			/>
		</Fragment>
	);
};

RevenueReport.propTypes = {
	path: PropTypes.string.isRequired,
	query: PropTypes.object.isRequired,
};

export default RevenueReport;
