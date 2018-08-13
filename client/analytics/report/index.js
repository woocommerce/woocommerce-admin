/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import QueryBoundaryError from 'components/query-boundary-error';
import ExampleReport from './example';
import RevenueReport from './revenue';
import ProductsReport from './products';
import OrdersReport from './orders/';

class Report extends Component {
	getReportType( report ) {
		switch ( report ) {
			case 'revenue':
				return RevenueReport;
			case 'products':
				return ProductsReport;
			case 'orders':
				return OrdersReport;
			default:
				return ExampleReport;
		}
	}

	render() {
		const { params, query, path } = this.props;
		const ReportType = this.getReportType( params.report );
		return (
			<QueryBoundaryError query={ query } path={ path }>
				<ReportType { ...this.props } />
			</QueryBoundaryError>
		);
	}
}

Report.propTypes = {
	params: PropTypes.object.isRequired,
};

export default Report;
