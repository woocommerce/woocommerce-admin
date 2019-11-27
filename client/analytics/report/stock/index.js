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
import { advancedFilters, showDatePicker, filters } from './config';
import StockReportTable from './table';
import ReportFilters from 'analytics/components/report-filters';

const StockReport = ( { query, path } ) => {
	const { locale, getAdminLink, stockStatuses = {} } = useSettings( 'wc_admin', [
		'locale',
		'getAdminLink',
		'stockStatuses',
	] );

	return (
		<Fragment>
			<ReportFilters
				query={ query }
				path={ path }
				showDatePicker={ showDatePicker }
				filters={ filters }
				advancedFilters={ advancedFilters }
				report="stock"
				locale={ locale }
			/>
			<StockReportTable
				query={ query }
				filters={ filters }
				advancedFilters={ advancedFilters }
				getAdminLink={ getAdminLink }
				stockStatuses={ stockStatuses }
			/>
		</Fragment>
	);
};

StockReport.propTypes = {
	query: PropTypes.object.isRequired,
};

export default StockReport;
