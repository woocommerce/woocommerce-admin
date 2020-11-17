/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import PropTypes from 'prop-types';
import { ITEMS_STORE_NAME } from '@woocommerce/data';
import { withSelect, withDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { advancedFilters, charts, filters } from './config';
import getSelectedChart from '../../../lib/get-selected-chart';
import ProductsReportTable from './table';
import ReportChart from '../../components/report-chart';
import ReportError from '../../components/report-error';
import ReportSummary from '../../components/report-summary';
import VariationsReportTable from '../variations/table';
import ReportFilters from '../../components/report-filters';
import { STORE_KEY as CES_STORE_KEY } from '../../../customer-effort-score-tracks/data/constants';

class ProductsReport extends Component {
	getChartMeta() {
		const {
			query,
			isSingleProductView,
			isSingleProductVariable,
		} = this.props;
		const isCompareView =
			query.filter === 'compare-products' &&
			query.products &&
			query.products.split( ',' ).length > 1;

		const mode =
			isCompareView || ( isSingleProductView && isSingleProductVariable )
				? 'item-comparison'
				: 'time-comparison';
		const compareObject =
			isSingleProductView && isSingleProductVariable
				? 'variations'
				: 'products';
		const label =
			isSingleProductView && isSingleProductVariable
				? __( '%d variations', 'woocommerce-admin' )
				: __( '%d products', 'woocommerce-admin' );

		return {
			compareObject,
			itemsLabel: label,
			mode,
		};
	}

	render() {
		const { compareObject, itemsLabel, mode } = this.getChartMeta();
		const {
			path,
			query,
			isError,
			isRequesting,
			isSingleProductVariable,
			addCesSurveyTrackForAnalytics,
		} = this.props;

		if ( isError ) {
			return <ReportError isError />;
		}

		const chartQuery = {
			...query,
		};

		if ( mode === 'item-comparison' ) {
			chartQuery.segmentby =
				compareObject === 'products' ? 'product' : 'variation';
		}

		const compareProducts = filters[ 0 ].filters.filter(
			( item ) => item.value === 'compare-products'
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
					charts={ charts }
					mode={ mode }
					filters={ filters }
					advancedFilters={ advancedFilters }
					endpoint="products"
					isRequesting={ isRequesting }
					itemsLabel={ itemsLabel }
					path={ path }
					query={ chartQuery }
					selectedChart={ getSelectedChart(
						chartQuery.chart,
						charts
					) }
				/>
				{ isSingleProductVariable ? (
					<VariationsReportTable
						baseSearchQuery={ { filter: 'single_product' } }
						isRequesting={ isRequesting }
						query={ query }
						filters={ filters }
						advancedFilters={ advancedFilters }
					/>
				) : (
					<ProductsReportTable
						isRequesting={ isRequesting }
						query={ query }
						filters={ filters }
						advancedFilters={ advancedFilters }
					/>
				) }
			</Fragment>
		);
	}
}

ProductsReport.propTypes = {
	path: PropTypes.string.isRequired,
	query: PropTypes.object.isRequired,
};

export default compose(
	withSelect( ( select, props ) => {
		const { query, isRequesting } = props;
		const isSingleProductView =
			! query.search &&
			query.products &&
			query.products.split( ',' ).length === 1;
		if ( isRequesting ) {
			return {
				query: {
					...query,
				},
				isSingleProductView,
				isRequesting,
			};
		}

		const { getItems, isResolving, getItemsError } = select(
			ITEMS_STORE_NAME
		);
		if ( isSingleProductView ) {
			const productId = parseInt( query.products, 10 );
			const includeArgs = { include: productId };
			// TODO Look at similar usage to populate tags in the Search component.
			const products = getItems( 'products', includeArgs );
			const isVariable =
				products &&
				products.get( productId ) &&
				products.get( productId ).type === 'variable';
			const isProductsRequesting = isResolving( 'getItems', [
				'products',
				includeArgs,
			] );
			const isProductsError = Boolean(
				getItemsError( 'products', includeArgs )
			);
			return {
				query: {
					...query,
					'is-variable': isVariable,
				},
				isSingleProductView,
				isRequesting: isProductsRequesting,
				isSingleProductVariable: isVariable,
				isError: isProductsError,
			};
		}

		return {
			query,
			isSingleProductView,
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { addCesSurveyTrackForAnalytics } = dispatch( CES_STORE_KEY );
		return { addCesSurveyTrackForAnalytics };
	} )
)( ProductsReport );
