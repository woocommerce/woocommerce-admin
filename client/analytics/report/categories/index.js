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
import CategoriesReportChart from './chart';

export default class CategoriesReport extends Component {
	render() {
		const { query, path } = this.props;

		return (
			<Fragment>
				<ReportFilters query={ query } path={ path } filters={ filters } />
				<CategoriesReportChart query={ query } />
			</Fragment>
		);
	}
}

CategoriesReport.propTypes = {
	query: PropTypes.object.isRequired,
};
