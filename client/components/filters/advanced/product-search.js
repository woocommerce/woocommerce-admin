/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { debounce, partial } from 'lodash';
import { __, sprintf } from '@wordpress/i18n';
import { select } from '@wordpress/data';

/**
 * Internal dependencies
 */
import Search from 'components/search';

class ProductSearch extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			search: '',
		};
		this.onInputChange = this.onInputChange.bind( this );
	}

	onInputChange( search ) {
		this.setState( { search } );
	}

	mapProductsToSuggestions( products, error ) {
		return products && ! error ? products.map( product => product.name ) : null;
	}

	render() {
		const { filterKey, value, onFilterChange, config } = this.props;
		const query = {
			search: this.state.search,
			per_page: 20,
			orderby: 'popularity',
		};
		const { getProducts, isProductsRequesting, isProductsError } = select( 'wc-admin' );

		return (
			<Search
				value={ value }
				onChange={ partial( onFilterChange, filterKey, 'value' ) }
				placeholder={ sprintf( __( 'Add %s', 'wc-admin' ), config.label ) }
				onInputChange={ debounce( this.onInputChange, 200 ) }
				query={ query }
				selector={ getProducts }
				isRequesting={ isProductsRequesting }
				isError={ isProductsError }
				getSuggestions={ this.mapProductsToSuggestions }
			/>
		);
	}
}

export default ProductSearch;
