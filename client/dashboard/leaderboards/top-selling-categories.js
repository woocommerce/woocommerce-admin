/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { get, map } from 'lodash';

/**
 * WooCommerce dependencies
 */
import { formatCurrency, getCurrencyFormatDecimal } from '@woocommerce/currency';
import { getAdminLink } from '@woocommerce/navigation';

/**
 * Internal dependencies
 */
import { numberFormat } from 'lib/number';
import Leaderboard from 'analytics/components/leaderboard';

export class TopSellingCategories extends Component {
	constructor( props ) {
		super( props );

		this.getRowsContent = this.getRowsContent.bind( this );
		this.getHeadersContent = this.getHeadersContent.bind( this );
	}

	getHeadersContent() {
		return [
			{
				label: __( 'Category', 'wc-admin' ),
				key: 'category',
				required: true,
				isLeftAligned: true,
				isSortable: false,
			},
			{
				label: __( 'Items Sold', 'wc-admin' ),
				key: 'items_sold',
				required: false,
				isSortable: false,
				isNumeric: true,
			},
			{
				label: __( 'Net Revenue', 'wc-admin' ),
				key: 'net_revenue',
				required: true,
				isSortable: false,
				isNumeric: true,
			},
		];
	}

	getRowsContent( data ) {
		return map( data, row => {
			const { items_sold, net_revenue, extended_info } = row;
			const name = get( extended_info, [ 'name' ] );
			const productLink = <a href={ getAdminLink( '/post.php?post=' ) }>{ name }</a>;
			return [
				{
					display: productLink,
					value: name,
				},
				{
					display: numberFormat( items_sold ),
					value: items_sold,
				},
				{
					display: formatCurrency( net_revenue ),
					value: getCurrencyFormatDecimal( net_revenue ),
				},
			];
		} );
	}

	render() {
		const { query, totalRows } = this.props;
		const tableQuery = {
			orderby: 'items_sold',
			order: 'desc',
			per_page: totalRows,
			extended_info: true,
		};

		return (
			<Leaderboard
				endpoint="categories"
				getHeadersContent={ this.getHeadersContent }
				getRowsContent={ this.getRowsContent }
				query={ query }
				tableQuery={ tableQuery }
				title={ __( 'Top Selling Categories', 'wc-admin' ) }
			/>
		);
	}
}

export default TopSellingCategories;
