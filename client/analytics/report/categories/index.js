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
import CategoriesReportTable from './table';
import getSelectedChart from 'lib/get-selected-chart';
import ReportChart from 'analytics/components/report-chart';
import ReportSummary from 'analytics/components/report-summary';
import ProductsReportTable from '../products/table';
import ReportFilters from 'analytics/components/report-filters';

const getChartMeta = ( { query } ) => {
	const isCompareView =
		'compare-categories' === query.filter &&
		query.categories &&
		query.categories.split( ',' ).length > 1;
	const isSingleCategoryView = 'single_category' === query.filter && !! query.categories;

	const mode = isCompareView || isSingleCategoryView ? 'item-comparison' : 'time-comparison';
	const itemsLabel = isSingleCategoryView
		? __( '%d products', 'woocommerce-admin' )
		: __( '%d categories', 'woocommerce-admin' );

	return {
		isSingleCategoryView,
		itemsLabel,
		mode,
	};
};

const CategoriesReport = props => {
	const { isRequesting, query, path } = props;
	const { mode, itemsLabel, isSingleCategoryView } = getChartMeta( props );

	const { locale, getAdminLink, currency, stockStatuses = {} } = useSettings( 'wc_admin', [
		'locale',
		'getAdminLink',
		'currency',
		'stockStatuses',
	] );

	const chartQuery = {
		...query,
	};

	if ( 'item-comparison' === mode ) {
		chartQuery.segmentby = isSingleCategoryView ? 'product' : 'category';
	}

	return (
		<Fragment>
			<ReportFilters
				query={ query }
				path={ path }
				filters={ filters }
				advancedFilters={ advancedFilters }
				report="categories"
				locale={ locale }
			/>
			<ReportSummary
				charts={ charts }
				endpoint="products"
				isRequesting={ isRequesting }
				limitProperties={ isSingleCategoryView ? [ 'products', 'categories' ] : [ 'categories' ] }
				query={ chartQuery }
				selectedChart={ getSelectedChart( query.chart, charts ) }
				filters={ filters }
				advancedFilters={ advancedFilters }
				report="categories"
				getAdminLink={ getAdminLink }
			/>
			<ReportChart
				filters={ filters }
				advancedFilters={ advancedFilters }
				mode={ mode }
				endpoint="products"
				limitProperties={ isSingleCategoryView ? [ 'products', 'categories' ] : [ 'categories' ] }
				path={ path }
				query={ chartQuery }
				isRequesting={ isRequesting }
				itemsLabel={ itemsLabel }
				selectedChart={ getSelectedChart( query.chart, charts ) }
				getAdminLink={ getAdminLink }
				currency={ currency }
			/>
			{ isSingleCategoryView ? (
				<ProductsReportTable
					isRequesting={ isRequesting }
					query={ chartQuery }
					baseSearchQuery={ { filter: 'single_category' } }
					hideCompare={ isSingleCategoryView }
					filters={ filters }
					advancedFilters={ advancedFilters }
					getAdminLink={ getAdminLink }
					stockStatuses={ stockStatuses }
				/>
			) : (
				<CategoriesReportTable
					isRequesting={ isRequesting }
					query={ query }
					filters={ filters }
					advancedFilters={ advancedFilters }
					getAdminLink={ getAdminLink }
				/>
			) }
		</Fragment>
	);
};

CategoriesReport.propTypes = {
	query: PropTypes.object.isRequired,
	path: PropTypes.string.isRequired,
};

export default CategoriesReport;
