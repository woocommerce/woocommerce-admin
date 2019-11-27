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
import CouponsReportTable from './table';
import getSelectedChart from 'lib/get-selected-chart';
import ReportChart from 'analytics/components/report-chart';
import ReportSummary from 'analytics/components/report-summary';
import ReportFilters from 'analytics/components/report-filters';

const getChartMeta = query => {
	const isCompareView =
		'compare-coupons' === query.filter && query.coupons && query.coupons.split( ',' ).length > 1;

	const mode = isCompareView ? 'item-comparison' : 'time-comparison';
	const itemsLabel = __( '%d coupons', 'woocommerce-admin' );

	return {
		itemsLabel,
		mode,
	};
};

const CouponsReport = ( { isRequesting, query, path } ) => {
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
		chartQuery.segmentby = 'coupon';
	}

	return (
		<Fragment>
			<ReportFilters
				query={ query }
				path={ path }
				filters={ filters }
				advancedFilters={ advancedFilters }
				report="coupons"
				locale={ locale }
			/>
			<ReportSummary
				charts={ charts }
				endpoint="coupons"
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
				endpoint="coupons"
				path={ path }
				query={ chartQuery }
				isRequesting={ isRequesting }
				itemsLabel={ itemsLabel }
				selectedChart={ getSelectedChart( query.chart, charts ) }
				getAdminLink={ getAdminLink }
				currency={ currency }
			/>
			<CouponsReportTable
				isRequesting={ isRequesting }
				query={ query }
				filters={ filters }
				advancedFilters={ advancedFilters }
				getAdminLink={ getAdminLink }
			/>
		</Fragment>
	);
};

CouponsReport.propTypes = {
	query: PropTypes.object.isRequired,
};

export default CouponsReport;
