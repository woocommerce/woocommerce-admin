/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import PropTypes from 'prop-types';
import { find } from 'lodash';
import { getQuery, getSearchWords } from '@woocommerce/navigation';
import { searchItemsByString } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import './style.scss';
import ReportError from '../components/report-error';
import {
	CurrencyContext,
	getFilteredCurrencyInstance,
} from '../../lib/currency-context';
import getReports from './get-reports';

/**
 * The Customers Report will not have the `report` param supplied by the router/
 * because it no longer exists under the path `/analytics/:report`. Use `props.path`/
 * instead to determine if the Customers Report is being rendered.
 *
 * @param {Object} args
 * @param {Object} args.params - url parameters
 * @param {string} args.path
 * @return {string} - report parameter
 */
const getReportParam = ( { params, path } ) => {
	return params.report || path.replace( /^\/+/, '' );
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

		const { isError } = this.props;

		if ( isError ) {
			return <ReportError />;
		}

		const reportParam = getReportParam( this.props );

		const report = find( getReports(), { report: reportParam } );
		if ( ! report ) {
			return null;
		}
		const Container = report.component;
		return (
			<CurrencyContext.Provider
				value={ getFilteredCurrencyInstance( getQuery() ) }
			>
				<Container { ...this.props } />
			</CurrencyContext.Provider>
		);
	}
}

Report.propTypes = {
	params: PropTypes.object.isRequired,
};

export default compose(
	withSelect( ( select, props ) => {
		const query = getQuery();
		const { search } = query;

		if ( ! search ) {
			return {};
		}

		const report = getReportParam( props );
		const searchWords = getSearchWords( query );
		// Single category view in Categories Report uses the products endpoint, so search must also.
		const mappedReport =
			report === 'categories' && query.filter === 'single_category'
				? 'products'
				: report;
		const itemsResult = searchItemsByString(
			select,
			mappedReport,
			searchWords,
			{
				per_page: 100,
			}
		);
		const { isError, isRequesting, items } = itemsResult;
		const ids = Object.keys( items );
		if ( ! ids.length ) {
			return {
				isError,
				isRequesting,
			};
		}

		return {
			isError,
			isRequesting,
			query: {
				...props.query,
				[ mappedReport ]: ids.join( ',' ),
			},
		};
	} )
)( Report );
