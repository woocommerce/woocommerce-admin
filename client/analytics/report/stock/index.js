/** @format */
/**
 * External dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * WooCommerce dependencies
 */
import { ReportFilters } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import { showDatePicker, filters } from './config';
import StockReportTable from './table';

export default class StockReport extends Component {
	render() {
		const { isEmpty, query, path } = this.props;

		return (
			<Fragment>
				<ReportFilters
					query={ query }
					path={ path }
					showDatePicker={ showDatePicker }
					filters={ filters }
				/>
				<StockReportTable isEmpty={ isEmpty } query={ query } />
			</Fragment>
		);
	}
}

StockReport.propTypes = {
	query: PropTypes.object.isRequired,
};
