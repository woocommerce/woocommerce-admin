/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { Button } from '@wordpress/components';
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import Search from 'components/search';
import { stringifyQuery, updateQueryString } from 'lib/nav-utils';

class CompareFilter extends Component {
	constructor( { query } ) {
		super( ...arguments );
		this.state = {
			selected: [],
		};

		this.updateQuery = this.updateQuery.bind( this );
		this.updateLabels = this.updateLabels.bind( this );

		if ( query.products ) {
			const idList = query.products
				.split( ',' )
				.map( id => parseInt( id, 10 ) )
				.filter( Boolean );
			const payload = stringifyQuery( {
				include: idList.join( ',' ),
				per_page: idList.length,
			} );
			apiFetch( { path: '/wc/v3/products' + payload } ).then( this.updateLabels );
		}
	}

	updateLabels( data ) {
		const selected = data.map( p => ( { id: p.id, label: p.name } ) );
		this.setState( { selected } );
	}

	updateQuery() {
		const { path, query } = this.props;
		const { selected } = this.state;
		const idList = selected.map( p => p.id );
		updateQueryString( { products: idList.join( ',' ) }, path, query );
	}

	render() {
		const { selected } = this.state;
		return (
			<Card title={ __( 'Compare Products', 'wc-admin' ) } className="woocommerce-filters__compare">
				<div className="woocommerce-filters__compare-body">
					<Search
						type="products"
						selected={ selected }
						onChange={ value => {
							this.setState( { selected: value } );
						} }
					/>
				</div>
				<div className="woocommerce-filters__compare-footer">
					<Button onClick={ this.updateQuery } isDefault>
						{ __( 'Compare', 'wc-admin' ) }
					</Button>
				</div>
			</Card>
		);
	}
}

CompareFilter.propTypes = {
	/**
	 * The `path` parameter supplied by React-Router
	 */
	path: PropTypes.string.isRequired,
	/**
	 * The query string represented in object form
	 */
	query: PropTypes.object,
};

CompareFilter.defaultProps = {
	query: {},
};

export default CompareFilter;
