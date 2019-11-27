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
import { charts, filters, advancedFilters } from './config';
import DownloadsReportTable from './table';
import getSelectedChart from 'lib/get-selected-chart';
import ReportChart from 'analytics/components/report-chart';
import ReportSummary from 'analytics/components/report-summary';
import ReportFilters from 'analytics/components/report-filters';

const DownloadsReport = ( { query, path } ) => {
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
				filters={ filters }
				advancedFilters={ advancedFilters }
				report="downloads"
				locale={ locale }
			/>
			<ReportSummary
				charts={ charts }
				endpoint="downloads"
				query={ query }
				selectedChart={ getSelectedChart( query.chart, charts ) }
				filters={ filters }
				advancedFilters={ advancedFilters }
				getAdminLink={ getAdminLink }
			/>
			<ReportChart
				endpoint="downloads"
				path={ path }
				query={ query }
				selectedChart={ getSelectedChart( query.chart, charts ) }
				filters={ filters }
				advancedFilters={ advancedFilters }
				getAdminLink={ getAdminLink }
				currency={ currency }
			/>
			<DownloadsReportTable
				query={ query }
				filters={ filters }
				advancedFilters={ advancedFilters }
				getAdminLink={ getAdminLink }
			/>
		</Fragment>
	);
};

DownloadsReport.propTypes = {
	query: PropTypes.object.isRequired,
};

export default DownloadsReport;
