/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { map, noop } from 'lodash';

/**
 * Internal dependencies
 */
import { filters } from './config';
import { formatCurrency, getCurrencyFormatDecimal } from 'lib/currency';
import { getAdminLink } from 'lib/nav-utils';
import { ReportFilters, TableCard } from '@woocommerce/components';
import './style.scss';

import products from './__mocks__/data';

export default class extends Component {
	getHeadersContent() {
		return [
			{
				label: __( 'Product Title', 'wc-admin' ),
				key: 'name',
				required: true,
				isSortable: true,
			},
			{
				label: __( 'Items Sold', 'wc-admin' ),
				key: 'items_sold',
				required: true,
				defaultSort: true,
				isSortable: true,
				isNumeric: true,
			},
			{
				label: __( 'Gross Revenue', 'wc-admin' ),
				key: 'gross_revenue',
				required: true,
				isSortable: true,
				isNumeric: true,
			},
			{
				label: __( 'Orders', 'wc-admin' ),
				key: 'orders_count',
				required: false,
				isSortable: true,
				isNumeric: true,
			},
			{
				label: __( 'Category', 'wc-admin' ),
				key: 'product_cat',
			},
			{
				label: __( 'Variations', 'wc-admin' ),
				key: 'variation',
			},
			{
				label: __( 'Status', 'wc-admin' ),
				key: 'stock_status',
			},
			{
				label: __( 'Stock', 'wc-admin' ),
				key: 'stock',
			},
		];
	}

	getRowsContent( data = [] ) {
		return map( data, row => {
			const {
				product_id,
				items_sold,
				gross_revenue,
				orders_count,
				name,
				stock_quantity,
				variations,
			} = row;

			return [
				{
					display: (
						<a href={ getAdminLink( 'post.php?action=edit&post=' + product_id ) }>{ name }</a>
					),
					value: name,
				},
				{
					display: items_sold,
					value: Number( items_sold ),
				},
				{
					display: formatCurrency( gross_revenue ),
					value: getCurrencyFormatDecimal( gross_revenue ),
				},
				{
					display: orders_count,
					value: Number( orders_count ),
				},
				{
					display: 'Categories',
					value: false,
				},
				{
					display: variations.length + '',
					value: false,
				},
				{
					display: 'Status',
					value: false,
				},
				{
					display: stock_quantity + '',
					value: Number( stock_quantity ),
				},
			];
		} );
	}

	renderTable() {
		const { query } = this.props;

		const rowsPerPage = parseInt( query.per_page ) || 25;

		const rows = this.getRowsContent( products );
		const headers = this.getHeadersContent();

		const tableQuery = {
			...query,
			orderby: query.orderby || 'date_start',
			order: query.order || 'asc',
		};
		return (
			<TableCard
				title={ __( 'Revenue', 'wc-admin' ) }
				rows={ rows }
				totalRows={ 500 }
				rowsPerPage={ rowsPerPage }
				headers={ headers }
				onClickDownload={ noop }
				onQueryChange={ noop }
				query={ tableQuery }
				summary={ null }
			/>
		);
	}

	render() {
		const { query, path } = this.props;

		return (
			<Fragment>
				<ReportFilters query={ query } path={ path } filters={ filters } />

				{ this.renderTable() }
			</Fragment>
		);
	}
}
