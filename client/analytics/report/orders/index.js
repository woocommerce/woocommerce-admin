/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { format as formatDate } from '@wordpress/date';
import { withSelect, withDispatch } from '@wordpress/data';
import { map, orderBy } from 'lodash';

/**
 * Internal dependencies
 */
import { Card, ReportFilters, TableCard, TablePlaceholder } from '@woocommerce/components';
import { filters, advancedFilterConfig } from './config';
import { formatCurrency, getCurrencyFormatDecimal } from 'lib/currency';
import { getIntervalForQuery, getDateFormatsForInterval } from 'lib/date';
import { getAdminLink, onQueryChange } from 'lib/nav-utils';

class OrdersReport extends Component {
	constructor( props ) {
		super( props );

		this.toggleStatus = this.toggleStatus.bind( this );
	}

	toggleStatus( order ) {
		const { requestUpdateOrder } = this.props;
		const updatedOrder = { ...order };
		const status = updatedOrder.status === 'completed' ? 'processing' : 'completed';
		updatedOrder.status = status;
		requestUpdateOrder( updatedOrder );
	}

	getHeadersContent() {
		return [
			{
				label: __( 'Date', 'wc-admin' ),
				key: 'dateCreated',
				required: true,
				defaultSort: true,
				isSortable: true,
			},
			{
				label: __( 'Order #', 'wc-admin' ),
				key: 'id',
				required: true,
				isSortable: true,
			},
			{
				label: __( 'Status', 'wc-admin' ),
				key: 'status',
				required: false,
				isSortable: true,
			},
			{
				label: __( 'Customer', 'wc-admin' ),
				key: 'customerId',
				required: false,
				isSortable: true,
			},
			{
				label: __( 'Product(s)', 'wc-admin' ),
				key: 'products',
				required: false,
				isSortable: true,
			},
			{
				label: __( 'Items Sold', 'wc-admin' ),
				key: 'numberOfProducts',
				required: false,
				isSortable: true,
				isNumeric: true,
			},
			{
				label: __( 'Coupon(s)', 'wc-admin' ),
				key: 'coupons',
				required: false,
				isSortable: true,
			},
			{
				label: __( 'N. Revenue', 'wc-admin' ),
				key: 'total',
				required: false,
				isSortable: true,
				isNumeric: true,
			},
		];
	}

	formatRowData( row, statusNames ) {
		const { date_created, id, status, customer_id, line_items, coupon_lines, total } = row;

		return {
			dateCreated: date_created,
			orderLink: getAdminLink( 'post.php?post=' + id + '&action=edit' ),
			id,
			statusName: statusNames[ status ],
			status,
			customerId: customer_id,
			productsDisplay: line_items.map( ( item, i ) => (
				<Fragment>
					{ i === 0 ? null : ', ' }
					<a
						className={ line_items.length > 1 ? 'inline' : null }
						href={ getAdminLink( 'post.php?post=' + item.product_id + '&action=edit' ) }
					>
						{ item.name }
					</a>
				</Fragment>
			) ),
			products: line_items
				.map( item => item.name )
				.join()
				.toLowerCase(),
			numberOfProducts: line_items.length,
			couponsDisplay: coupon_lines.map( ( coupon, i ) => (
				<Fragment>
					{ i === 0 ? null : ', ' }
					<a
						className={ coupon_lines.length > 1 ? 'inline' : null }
						href={ getAdminLink( 'post.php?post=' + coupon.meta_data.value.id + '&action=edit' ) }
					>
						{ coupon.code }
					</a>
				</Fragment>
			) ),
			coupons: coupon_lines
				.map( item => item.code )
				.join()
				.toLowerCase(),
			total: getCurrencyFormatDecimal( total ),
		};
	}

	formatTableData( data ) {
		const statusNames = {
			failed: __( 'Failed', 'wc-admin' ),
			processing: __( 'Processing', 'wc-admin' ),
			'on-hold': __( 'On hold', 'wc-admin' ),
			completed: __( 'Completed', 'wc-admin' ),
		};

		return map( data, row => this.formatRowData( row, statusNames ) );
	}

	getRowsContent( tableData ) {
		const { query } = this.props;
		const currentInterval = getIntervalForQuery( query );
		const formats = getDateFormatsForInterval( currentInterval );

		return map( tableData, row => {
			const {
				dateCreated,
				orderLink,
				id,
				statusName,
				status,
				customerId,
				productsDisplay,
				products,
				numberOfProducts,
				couponsDisplay,
				coupons,
				total,
			} = row;

			return [
				{
					display: formatDate( formats.tableFormat, dateCreated ),
					value: dateCreated,
				},
				{
					display: <a href={ orderLink }>{ id }</a>,
					value: id,
				},
				{
					display: statusName,
					value: status,
				},
				{
					display: customerId,
					value: customerId,
				},
				{
					display: productsDisplay,
					value: products,
				},
				{
					display: numberOfProducts,
					value: numberOfProducts,
				},
				{
					display: couponsDisplay,
					value: coupons,
				},
				{
					display: formatCurrency( total ),
					value: getCurrencyFormatDecimal( total ),
				},
			];
		} );
	}

	renderPlaceholderTable() {
		const headers = this.getHeadersContent();

		return (
			<Card
				title={ __( 'Revenue', 'wc-admin' ) }
				className="woocommerce-analytics__table-placeholder"
			>
				<TablePlaceholder caption={ __( 'Orders last week', 'wc-admin' ) } headers={ headers } />
			</Card>
		);
	}

	renderTable() {
		const { orders, query } = this.props;

		const page = parseInt( query.page ) || 1;
		const rowsPerPage = parseInt( query.per_page ) || 25;
		const rows = this.getRowsContent(
			orderBy(
				this.formatTableData( orders ),
				query.orderby || 'dateCreated',
				query.order || 'asc'
			).slice( ( page - 1 ) * rowsPerPage, page * rowsPerPage )
		);

		const headers = this.getHeadersContent();

		const tableQuery = {
			...query,
			orderby: query.orderby || 'date_start',
			order: query.order || 'asc',
		};

		return (
			<TableCard
				title={ __( 'Orders last week', 'wc-admin' ) }
				rows={ rows }
				totalRows={ Object.keys( orders ).length }
				rowsPerPage={ rowsPerPage }
				headers={ headers }
				onClickDownload={ () => null /*this.onDownload( headers, rows, tableQuery )*/ }
				onQueryChange={ onQueryChange }
				query={ tableQuery }
				summary={ null }
			/>
		);
	}

	render() {
		const { isRequesting, query, path } = this.props;

		return (
			<Fragment>
				<ReportFilters
					query={ query }
					path={ path }
					filters={ filters }
					advancedConfig={ advancedFilterConfig }
				/>
				<p>Below is a temporary example</p>
				{ isRequesting ? this.renderPlaceholderTable() : this.renderTable() }
			</Fragment>
		);
	}
}

export default compose(
	withSelect( select => {
		const { getOrders } = select( 'wc-admin' );
		const orders = getOrders();
		const isRequesting = select( 'core/data' ).isResolving( 'wc-admin', 'getOrders' );
		return { isRequesting, orders };
	} ),
	withDispatch( dispatch => {
		return {
			requestUpdateOrder: function( updatedOrder ) {
				dispatch( 'wc-admin' ).requestUpdateOrder( updatedOrder );
			},
		};
	} )
)( OrdersReport );
