/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import PropTypes from 'prop-types';
import { find } from 'lodash';
import { withSelect } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { useFilters } from '@woocommerce/components';
import { getQuery, getSearchWords } from '@woocommerce/navigation';
import { SETTINGS_STORE_NAME } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import './style.scss';
import OrdersReport from './orders';
import ProductsReport from './products';
import RevenueReport from './revenue';
import CategoriesReport from './categories';
import CouponsReport from './coupons';
import TaxesReport from './taxes';
import DownloadsReport from './downloads';
import StockReport from './stock';
import CustomersReport from './customers';
import ReportError from 'analytics/components/report-error';
import { searchItemsByString } from 'wc-api/items/utils';

export const REPORTS_FILTER = 'woocommerce_admin_reports_list';

export const getReports = manageStock => {
	const reports = [
		{
			report: 'revenue',
			title: __( 'Revenue', 'woocommerce-admin' ),
			component: RevenueReport,
		},
		{
			report: 'products',
			title: __( 'Products', 'woocommerce-admin' ),
			component: ProductsReport,
		},
		{
			report: 'orders',
			title: __( 'Orders', 'woocommerce-admin' ),
			component: OrdersReport,
		},
		{
			report: 'categories',
			title: __( 'Categories', 'woocommerce-admin' ),
			component: CategoriesReport,
		},
		{
			report: 'coupons',
			title: __( 'Coupons', 'woocommerce-admin' ),
			component: CouponsReport,
		},
		{
			report: 'taxes',
			title: __( 'Taxes', 'woocommerce-admin' ),
			component: TaxesReport,
		},
		{
			report: 'downloads',
			title: __( 'Downloads', 'woocommerce-admin' ),
			component: DownloadsReport,
		},
		'yes' === manageStock
			? {
					report: 'stock',
					title: __( 'Stock', 'woocommerce-admin' ),
					component: StockReport,
				}
			: null,
		{
			report: 'customers',
			title: __( 'Customers', 'woocommerce-admin' ),
			component: CustomersReport,
		},
		{
			report: 'downloads',
			title: __( 'Downloads', 'woocommerce-admin' ),
			component: DownloadsReport,
		},
	].filter( Boolean );

	return applyFilters( REPORTS_FILTER, reports );
};

class Report extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			hasError: false,
		};
	}

	componentDidCatch( error ) {
		this.setState( {
			hasError: true,
		} );
		/* eslint-disable no-console */
		console.warn( error );
		/* eslint-enable no-console */
	}

	render() {
		if ( this.state.hasError ) {
			return null;
		}

		const { params, isError, manageStock } = this.props;

		if ( isError ) {
			return <ReportError isError />;
		}

		const report = find( getReports( manageStock ), { report: params.report } );
		if ( ! report ) {
			return null;
		}
		const Container = report.component;
		return <Container { ...this.props } />;
	}
}

Report.propTypes = {
	params: PropTypes.object.isRequired,
};

export default compose(
	useFilters( REPORTS_FILTER ),
	withSelect( ( select, props ) => {
		const { getSetting } = select( SETTINGS_STORE_NAME );
		const manageStock = getSetting( 'wc_admin', 'manageStock', 'no' );
		const query = getQuery();
		const { search } = query;

		if ( ! search ) {
			return { manageStock };
		}

		const { report } = props.params;
		const searchWords = getSearchWords( query );
		// Single Category view in Categories Report uses the products endpoint, so search must also.
		const mappedReport =
			'categories' === report && 'single_category' === query.filter ? 'products' : report;
		const itemsResult = searchItemsByString( select, mappedReport, searchWords );
		const { isError, isRequesting, items } = itemsResult;
		const ids = Object.keys( items );
		if ( ! ids.length ) {
			return {
				isError,
				isRequesting,
				manageStock,
			};
		}

		return {
			isError,
			isRequesting,
			query: {
				...props.query,
				[ mappedReport ]: ids.join( ',' ),
			},
			manageStock,
		};
	} )
)( Report );
