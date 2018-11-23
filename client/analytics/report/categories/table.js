/** @format */
/**
 * External dependencies
 */
import { __, _n } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { get, map, orderBy } from 'lodash';

/**
 * WooCommerce dependencies
 */
import { Link, TableCard } from '@woocommerce/components';
import { formatCurrency, getCurrencyFormatDecimal } from '@woocommerce/currency';
import { onQueryChange } from '@woocommerce/navigation';

/**
 * Internal dependencies
 */
import ReportError from 'analytics/components/report-error';
import { getReportChartData, getReportTableData } from 'store/reports/utils';
import { numberFormat } from 'lib/number';

class CategoriesReportTable extends Component {
	getHeadersContent() {
		return [
			{
				label: __( 'Category', 'wc-admin' ),
				key: 'category',
				required: true,
				isLeftAligned: true,
				isSortable: true,
			},
			{
				label: __( 'Items sold', 'wc-admin' ),
				key: 'items_sold',
				required: true,
				defaultSort: true,
				isSortable: true,
				isNumeric: true,
			},
			{
				label: __( 'G. Revenue', 'wc-admin' ),
				key: 'gross_revenue',
				isSortable: true,
				isNumeric: true,
			},
			{
				label: __( 'Products', 'wc-admin' ),
				key: 'products_count',
				isSortable: true,
				isNumeric: true,
			},
			{
				label: __( 'Orders', 'wc-admin' ),
				key: 'orders_count',
				isSortable: true,
				isNumeric: true,
			},
		];
	}

	getRowsContent( categories ) {
		return map( categories, category => {
			const { category_id, items_sold, gross_revenue, products_count, orders_count } = category;

			// @TODO it should link to the Products report filtered by category
			const productsLink = (
				<Link
					href={ '/analytics/orders?filter=advanced&code_includes=' + category_id }
					type="wc-admin"
				>
					{ numberFormat( products_count ) }
				</Link>
			);

			return [
				// @TODO it should be the category name, not the category ID
				{
					display: category_id,
					value: category_id,
				},
				{
					display: numberFormat( items_sold ),
					value: items_sold,
				},
				{
					display: formatCurrency( gross_revenue ),
					value: getCurrencyFormatDecimal( gross_revenue ),
				},
				{
					display: productsLink,
					value: products_count,
				},
				{
					display: numberFormat( orders_count ),
					value: orders_count,
				},
			];
		} );
	}

	getSummary( totals ) {
		if ( ! totals ) {
			return [];
		}
		return [
			{
				label: _n( 'category', 'categories', totals.categories_count, 'wc-admin' ),
				value: numberFormat( totals.categories_count ),
			},
			{
				label: _n( 'item sold', 'items sold', totals.items_sold, 'wc-admin' ),
				value: numberFormat( totals.items_sold ),
			},
			{
				label: __( 'gross revenue', 'wc-admin' ),
				value: formatCurrency( totals.gross_revenue ),
			},
			{
				label: _n( 'orders', 'orders', totals.orders_count, 'wc-admin' ),
				value: numberFormat( totals.orders_count ),
			},
		];
	}

	render() {
		const { tableData, primaryData } = this.props;
		const { items, query } = tableData;

		const isError = tableData.isError || primaryData.isError;

		if ( isError ) {
			return <ReportError isError />;
		}

		const isRequesting = tableData.isRequesting || primaryData.isRequesting;

		const headers = this.getHeadersContent();
		const orderedCategories = orderBy( items, query.orderby, query.order );
		const rows = this.getRowsContent( orderedCategories );
		const totalRows = get( primaryData, [ 'data', 'totals', 'categories_count' ], items.length );
		const summary = primaryData.data.totals ? this.getSummary( primaryData.data.totals ) : null;

		return (
			<TableCard
				title={ __( 'Coupons', 'wc-admin' ) }
				compareBy={ 'coupons' }
				ids={ orderedCategories.map( category => category.category_id ) }
				rows={ rows }
				totalRows={ totalRows }
				rowsPerPage={ query.per_page }
				headers={ headers }
				isLoading={ isRequesting }
				onQueryChange={ onQueryChange }
				query={ query }
				summary={ summary }
				downloadable
			/>
		);
	}
}

export default compose(
	withSelect( ( select, props ) => {
		const { query } = props;
		const primaryData = getReportChartData( 'categories', 'primary', query, select );
		const tableData = getReportTableData( 'categories', query, select );

		return {
			primaryData,
			tableData,
		};
	} )
)( CategoriesReportTable );
