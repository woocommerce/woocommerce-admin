/** @format */
/**
 * External dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import { ReportFilters } from '@woocommerce/components';
import { appendTimestamp, getCurrentDates } from 'lib/date';
import { filters } from './config';
import { getSummaryNumbers } from 'store/reports/utils';
import ProductsReportChart from './chart';
import ProductsReportTable from './table';

class ProductsReport extends Component {
	render() {
		const {
			isProductsError,
			isProductsRequesting,
			products,
			path,
			summaryNumbers,
			query,
		} = this.props;

		return (
			<Fragment>
				<ReportFilters query={ query } path={ path } filters={ filters } />
				<ProductsReportChart query={ query } />
				<ProductsReportTable
					isError={ isProductsError || summaryNumbers.isError }
					isRequesting={ isProductsRequesting || summaryNumbers.isRequesting }
					products={ products }
					query={ query }
					totalRows={ get( summaryNumbers, [ 'totals', 'primary', 'products_count' ], 0 ) }
				/>
			</Fragment>
		);
	}
}

export default compose(
	withSelect( ( select, props ) => {
		const { query } = props;
		const datesFromQuery = getCurrentDates( query );
		const { getProducts, isGetProductsError, isGetProductsRequesting } = select( 'wc-admin' );

		const tableQuery = {
			orderby: query.orderby || 'date',
			order: query.order || 'asc',
			page: query.page || 1,
			per_page: query.per_page || 25,
			after: appendTimestamp( datesFromQuery.primary.after, 'start' ),
			before: appendTimestamp( datesFromQuery.primary.before, 'end' ),
			extended_product_info: true,
		};
		const summaryNumbers = getSummaryNumbers( 'products', query, select );
		const products = getProducts( tableQuery );
		const isProductsError = isGetProductsError( tableQuery );
		const isProductsRequesting = isGetProductsRequesting( tableQuery );

		return {
			isProductsError,
			isProductsRequesting,
			products,
			summaryNumbers,
		};
	} )
)( ProductsReport );
