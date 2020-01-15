/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
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
import ProductsReportTable from './table';
import ReportChart from 'analytics/components/report-chart';
import ReportError from 'analytics/components/report-error';
import ReportSummary from 'analytics/components/report-summary';
import VariationsReportTable from './table-variations';
import withSelect from 'wc-api/with-select';
import ReportFilters from 'analytics/components/report-filters';

const getChartMeta = props => {
	const { query, isSingleProductView, isSingleProductVariable } = props;
	const isCompareView =
		'compare-products' === query.filter && query.products && query.products.split( ',' ).length > 1;

	const mode =
		isCompareView || ( isSingleProductView && isSingleProductVariable )
			? 'item-comparison'
			: 'time-comparison';
	const compareObject = isSingleProductView && isSingleProductVariable ? 'variations' : 'products';
	const label =
		isSingleProductView && isSingleProductVariable
			? __( '%d variations', 'woocommerce-admin' )
			: __( '%d products', 'woocommerce-admin' );

	return {
		compareObject,
		itemsLabel: label,
		mode,
	};
};

const ProductsReport = props => {
	const { compareObject, itemsLabel, mode } = getChartMeta( props );
	const { path, query, isError, isRequesting, isSingleProductVariable } = props;

	if ( isError ) {
		return <ReportError isError />;
	}

	const { getAdminLink, manageStock = 'no', stockStatuses = {} } = useSettings( [
		'getAdminLink',
		'manageStock',
		'stockStatuses',
	] );

	const chartQuery = {
		...query,
	};

	if ( 'item-comparison' === mode ) {
		chartQuery.segmentby = 'products' === compareObject ? 'product' : 'variation';
	}

	return (
		<Fragment>
			<ReportFilters
				query={ query }
				path={ path }
				filters={ filters }
				advancedFilters={ advancedFilters }
				report="products"
			/>
			<ReportSummary
				mode={ mode }
				charts={ charts }
				endpoint="products"
				isRequesting={ isRequesting }
				query={ chartQuery }
				selectedChart={ getSelectedChart( query.chart, charts ) }
				filters={ filters }
				advancedFilters={ advancedFilters }
			/>
			<ReportChart
				mode={ mode }
				filters={ filters }
				advancedFilters={ advancedFilters }
				endpoint="products"
				isRequesting={ isRequesting }
				itemsLabel={ itemsLabel }
				path={ path }
				query={ chartQuery }
				selectedChart={ getSelectedChart( chartQuery.chart, charts ) }
			/>
			{ isSingleProductVariable ? (
				<VariationsReportTable
					baseSearchQuery={ { filter: 'single_product' } }
					isRequesting={ isRequesting }
					query={ query }
					filters={ filters }
					advancedFilters={ advancedFilters }
					getAdminLink={ getAdminLink }
					manageStock={ manageStock }
					stockStatuses={ stockStatuses }
				/>
			) : (
				<ProductsReportTable
					isRequesting={ isRequesting }
					query={ query }
					filters={ filters }
					advancedFilters={ advancedFilters }
					getAdminLink={ getAdminLink }
					manageStock={ manageStock }
					stockStatuses={ stockStatuses }
				/>
			) }
		</Fragment>
	);
};

ProductsReport.propTypes = {
	path: PropTypes.string.isRequired,
	query: PropTypes.object.isRequired,
};

export default compose(
	withSelect( ( select, props ) => {
		const { query, isRequesting } = props;
		const isSingleProductView =
			! query.search && query.products && 1 === query.products.split( ',' ).length;
		if ( isRequesting ) {
			return {
				query: {
					...query,
				},
				isSingleProductView,
				isRequesting,
			};
		}

		const { getItems, isGetItemsRequesting, getItemsError } = select( 'wc-api' );
		if ( isSingleProductView ) {
			const productId = parseInt( query.products );
			const includeArgs = { include: productId };
			// TODO Look at similar usage to populate tags in the Search component.
			const products = getItems( 'products', includeArgs );
			const isVariable =
				products && products.get( productId ) && 'variable' === products.get( productId ).type;
			const isProductsRequesting = isGetItemsRequesting( 'products', includeArgs );
			const isProductsError = Boolean( getItemsError( 'products', includeArgs ) );
			return {
				query: {
					...query,
					'is-variable': isVariable,
				},
				isSingleProductView,
				isSingleProductVariable: isVariable,
				isRequesting: isProductsRequesting,
				isError: isProductsError,
			};
		}

		return {
			query,
			isSingleProductView,
		};
	} )
)( ProductsReport );
