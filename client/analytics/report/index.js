/** @format */
/**
 * External dependencies
 */
import { Component, Fragment, compose } from '@wordpress/element';
import PropTypes from 'prop-types';
import { stringify as stringifyQueryObject } from 'qs';
import { withRouter } from 'react-router-dom';

/**
 * Internal dependencies
 */
import ExampleReport from './example';
import RevenueReport from './revenue';
import Pagination from 'components/pagination';

class Report extends Component {
	constructor() {
		super();
		this.onPageChange = this.onPageChange.bind( this );
		this.onPerPageChange = this.onPerPageChange.bind( this );
	}
	onPageChange( page ) {
		this.updateLocation( { page } );
	}

	onPerPageChange( perPage ) {
		this.updateLocation( { per_page: perPage } );
	}

	updateLocation( data ) {
		const { path, query, history } = this.props;
		const queryString = stringifyQueryObject( Object.assign( query, data ) );
		history.push( `${ path }?${ queryString }` );
	}

	renderReport() {
		const { params } = this.props;
		switch ( params.report ) {
			case 'revenue':
				return <RevenueReport { ...this.props } />;
			default:
				return <ExampleReport />;
		}
	}

	render() {
		const { query } = this.props;
		return (
			<Fragment>
				{ this.renderReport() }
				<Pagination
					page={ parseInt( query.page ) || 1 }
					perPage={ parseInt( query.per_page ) || 25 }
					total={ 5000 }
					onPageChange={ this.onPageChange }
					onPerPageChange={ this.onPerPageChange }
				/>
			</Fragment>
		);
	}
}

Report.propTypes = {
	params: PropTypes.object.isRequired,
	history: PropTypes.shape( {
		push: PropTypes.func.isRequired,
	} ),
	path: PropTypes.string.isRequired,
	query: PropTypes.object.isRequired,
};

export default compose( [ withRouter ] )( Report );
