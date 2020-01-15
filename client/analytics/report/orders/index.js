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
import { getAdvancedFilters, charts, filters } from './config';
import getSelectedChart from 'lib/get-selected-chart';
import OrdersReportTable from './table';
import ReportChart from 'analytics/components/report-chart';
import ReportSummary from 'analytics/components/report-summary';
import ReportFilters from 'analytics/components/report-filters';

const OrdersReport = ( { path, query } ) => {
	const { orderStatuses = {} } = useSettings( [ 'orderStatuses' ] );
	const advancedFilters = getAdvancedFilters( orderStatuses );
	return (
		<Fragment>
			<ReportFilters
				query={ query }
				path={ path }
				filters={ filters }
				advancedFilters={ advancedFilters }
				report="orders"
			/>
			<ReportSummary
				charts={ charts }
				endpoint="orders"
				query={ query }
				selectedChart={ getSelectedChart( query.chart, charts ) }
				filters={ filters }
				advancedFilters={ advancedFilters }
			/>
			<ReportChart
				endpoint="orders"
				path={ path }
				query={ query }
				selectedChart={ getSelectedChart( query.chart, charts ) }
				filters={ filters }
				advancedFilters={ advancedFilters }
			/>
			<OrdersReportTable
				query={ query }
				filters={ filters }
				advancedFilters={ advancedFilters }
				orderStatuses={ orderStatuses }
			/>
		</Fragment>
	);
};

OrdersReport.propTypes = {
	path: PropTypes.string.isRequired,
	query: PropTypes.object.isRequired,
};

export default OrdersReport;
