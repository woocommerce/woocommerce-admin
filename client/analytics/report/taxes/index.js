/** @format */
/**
 * External dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import PropTypes from 'prop-types';
/**
 * Internal dependencies
 */
import { filters } from './config';
import { ReportFilters } from '@woocommerce/components';
import TaxesReportChart from './chart';
export default class TaxesReport extends Component {
	render() {
		const { query, path } = this.props;
		return (
			<Fragment>
				<ReportFilters query={ query } path={ path } filters={ filters } />
				<TaxesReportChart query={ query } path={ path } />
			</Fragment>
		);
	}
}
TaxesReport.propTypes = {
	query: PropTypes.object.isRequired,
};
