/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import classnames from 'classnames';
import { format as formatDate } from '@wordpress/date';
import { map, noop } from 'lodash';
import PropTypes from 'prop-types';
import { withSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { formatCurrency, getCurrencyFormatDecimal } from 'lib/currency';
import { getAdminLink, updateQueryString } from 'lib/nav-utils';
import { getReportData } from 'lib/swagger';
import Header from 'layout/header';
import { ReportFilters } from 'components/filters';
import { SummaryList, SummaryNumber } from 'components/summary';
import { TableCard, TableCardPlaceholder } from 'components/table';
import { isReportDataEmpty, generateReportTableRequest } from 'store/reports/utils';

// Mock data until we fetch from an API
import rawData from './mock-data';

class RevenueReport extends Component {
	constructor() {
		super();
		this.onQueryChange = this.onQueryChange.bind( this );

		// TODO remove this when we implement real endpoints
		this.state = { stats: {} };
	}

	componentDidMount() {
		// Swagger doesn't support returning different data based on query args
		// this is more or less to show how we will manipulate data calls based on props
		const statsQueryArgs = {
			interval: 'week',
			after: '2018-04-22',
			before: '2018-05-06',
		};

		getReportData( 'revenue/stats', statsQueryArgs ).then( response => {
			if ( ! response.ok ) {
				return;
			}

			response.json().then( () => {
				// Ignore data, just use our fake data once we have a response
				this.setState( { stats: rawData } );
			} );
		} );
	}

	/**
	 * This function returns an event handler for the given `param`
	 * @todo Move handling of this to a library?
	 * @param {string} param The parameter in the querystring which should be updated (ex `page`, `per_page`)
	 * @return {function} A callback which will update `param` to the passed value when called.
	 */
	onQueryChange( param ) {
		switch ( param ) {
			case 'sort':
				return ( key, dir ) => updateQueryString( { orderby: key, order: dir } );
			default:
				return value => updateQueryString( { [ param ]: value } );
		}
	}

	getHeadersContent() {
		return [
			{
				label: __( 'Date', 'wc-admin' ),
				key: 'date',
				required: true,
				defaultSort: true,
				isSortable: true,
			},
			{
				label: __( 'Orders', 'wc-admin' ),
				key: 'orders_count',
				required: false,
				isSortable: true,
			},
			{
				label: __( 'Gross Revenue', 'wc-admin' ),
				key: 'gross_revenue',
				required: true,
				isSortable: true,
				isNumeric: true,
			},
			{
				label: __( 'Refunds', 'wc-admin' ),
				key: 'refunds',
				required: false,
				isSortable: true,
				isNumeric: true,
			},
			{
				label: __( 'Coupons', 'wc-admin' ),
				key: 'coupons',
				required: false,
				isSortable: true,
				isNumeric: true,
			},
			{
				label: __( 'Taxes', 'wc-admin' ),
				key: 'taxes',
				required: false,
				isSortable: false, // For example
				isNumeric: true,
			},
			{
				label: __( 'Shipping', 'wc-admin' ),
				key: 'shipping',
				required: false,
				isSortable: true,
				isNumeric: true,
			},
			{
				label: __( 'Net Revenue', 'wc-admin' ),
				key: 'net_revenue',
				required: false,
				isSortable: true,
				isNumeric: true,
			},
		];
	}

	getRowsContent( data = [] ) {
		return map( data, row => {
			const {
				coupons,
				gross_revenue,
				net_revenue,
				orders_count,
				refunds,
				shipping,
				taxes,
			} = row.subtotals;

			// @TODO How to create this per-report? Can use `w`, `year`, `m` to build time-specific order links
			// we need to know which kind of report this is, and parse the `label` to get this row's date
			const orderLink = (
				<a
					href={ getAdminLink(
						'/edit.php?post_type=shop_order&m=' + formatDate( 'Ymd', row.date_start )
					) }
				>
					{ orders_count }
				</a>
			);
			return [
				{
					display: formatDate( 'm/d/Y', row.date_start ),
					value: row.date_start,
				},
				{
					display: orderLink,
					value: Number( orders_count ),
				},
				{
					display: formatCurrency( gross_revenue ),
					value: getCurrencyFormatDecimal( gross_revenue ),
				},
				{
					display: formatCurrency( refunds ),
					value: getCurrencyFormatDecimal( refunds ),
				},
				{
					display: formatCurrency( coupons ),
					value: getCurrencyFormatDecimal( coupons ),
				},
				{
					display: formatCurrency( taxes ),
					value: getCurrencyFormatDecimal( taxes ),
				},
				{
					display: formatCurrency( shipping ),
					value: getCurrencyFormatDecimal( shipping ),
				},
				{
					display: formatCurrency( net_revenue ),
					value: getCurrencyFormatDecimal( net_revenue ),
				},
			];
		} );
	}

	getSummaryContent( data = {} ) {
		return [
			{
				label: __( 'gross revenue', 'wc-admin' ),
				value: formatCurrency( data.gross_revenue ),
			},
			{
				label: __( 'refunds', 'wc-admin' ),
				value: formatCurrency( data.refunds ),
			},
			{
				label: __( 'coupons', 'wc-admin' ),
				value: formatCurrency( data.coupons ),
			},
			{
				label: __( 'taxes', 'wc-admin' ),
				value: formatCurrency( data.taxes ),
			},
			{
				label: __( 'shipping', 'wc-admin' ),
				value: formatCurrency( data.shipping ),
			},
			{
				label: __( 'net revenue', 'wc-admin' ),
				value: formatCurrency( data.net_revenue ),
			},
		];
	}

	renderTable() {
		const {
			tableData,
			isTableDataRequesting,
			isTableDataError,
			query,
			previousTableData,
		} = this.props;
		const headers = this.getHeadersContent();

		if ( isTableDataRequesting && isReportDataEmpty( previousTableData ) ) {
			return (
				<TableCardPlaceholder
					rows={ 10 }
					headers={ headers }
					title={ __( 'Revenue Last Week', 'wc-admin' ) }
				/>
			);
		}

		if ( isTableDataError ) {
			return (
				<div className="woocommerce-analytics__report-table-error">
					{ __( 'There was an error retrieving your revenue summary. Please try again.' ) }
				</div>
			);
		}

		if ( isReportDataEmpty( tableData ) && ! isTableDataRequesting ) {
			// TODO Return empty content component once it is built.
			return null;
		}

		const data = isTableDataRequesting ? previousTableData : tableData;
		const { totals = {}, intervals = [] } = ( data && data.data ) || {};
		const { totalResults } = data;
		const summary = this.getSummaryContent( totals ) || [];
		const rows = this.getRowsContent( intervals ) || [];

		const className = classnames( 'woocommerce-analytics__report-table-card', {
			'is-requesting': isTableDataRequesting,
		} );

		return (
			<TableCard
				title={ __( 'Revenue Last Week', 'wc-admin' ) }
				rows={ rows }
				totalRows={ totalResults }
				headers={ headers }
				onClickDownload={ noop }
				onQueryChange={ this.onQueryChange }
				query={ query }
				summary={ summary }
				className={ className }
			/>
		);
	}

	render() {
		const { path, query } = this.props;
		const { totals = {} } = this.state.stats;
		return (
			<Fragment>
				<Header
					sections={ [
						[ '/analytics', __( 'Analytics', 'wc-admin' ) ],
						__( 'Revenue', 'wc-admin' ),
					] }
				/>
				<ReportFilters query={ query } path={ path } />

				<SummaryList>
					<SummaryNumber
						value={ formatCurrency( totals.gross_revenue ) }
						label={ __( 'Gross Revenue', 'wc-admin' ) }
						delta={ 29 }
					/>
					<SummaryNumber
						value={ formatCurrency( totals.refunds ) }
						label={ __( 'Refunds', 'wc-admin' ) }
						delta={ -10 }
						selected
					/>
					<SummaryNumber
						value={ formatCurrency( totals.coupons ) }
						label={ __( 'Coupons', 'wc-admin' ) }
						delta={ 15 }
					/>
					<SummaryNumber
						value={ formatCurrency( totals.taxes ) }
						label={ __( 'Taxes', 'wc-admin' ) }
					/>
				</SummaryList>
				{ this.renderTable() }
			</Fragment>
		);
	}
}

RevenueReport.propTypes = {
	params: PropTypes.object.isRequired,
	path: PropTypes.string.isRequired,
	query: PropTypes.object.isRequired,
};

export default compose(
	withSelect( ( select, props ) => {
		const {
			getReportRevenueStats,
			isReportRevenueStatsRequesting,
			isReportRevenueStatsError,
		} = select( 'wc-admin' );
		const { query, previousQuery } = props;

		const args = generateReportTableRequest( query );

		const tableData = getReportRevenueStats( args );
		const isTableDataError = isReportRevenueStatsError( args );
		const isTableDataRequesting = isReportRevenueStatsRequesting( args );
		const previousTableData = getReportRevenueStats( generateReportTableRequest( previousQuery ) );

		return {
			tableData,
			isTableDataRequesting,
			isTableDataError,
			previousTableData,
		};
	} )
)( RevenueReport );
