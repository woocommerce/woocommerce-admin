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
import { filters, getAdvancedFilters } from './config';
import CustomersReportTable from './table';
import ReportFilters from 'analytics/components/report-filters';

const CustomersReport = ( { isRequesting, query, path } ) => {
	const { dataEndpoints, getAdminLink } = useSettings( [ 'dataEndpoints', 'getAdminLink' ] );
	const { countries = { countries: {} } } = dataEndpoints;
	const advancedFilters = getAdvancedFilters( countries );
	const tableQuery = {
		orderby: 'date_last_active',
		order: 'desc',
		...query,
	};

	return (
		<Fragment>
			<ReportFilters
				query={ query }
				path={ path }
				filters={ filters }
				showDatePicker={ false }
				advancedFilters={ advancedFilters }
				report="customers"
			/>
			<CustomersReportTable
				getAdminLink={ getAdminLink }
				countries={ countries }
				isRequesting={ isRequesting }
				query={ tableQuery }
				filters={ filters }
				advancedFilters={ advancedFilters }
			/>
		</Fragment>
	);
};

CustomersReport.propTypes = {
	query: PropTypes.object.isRequired,
};

export default CustomersReport;
