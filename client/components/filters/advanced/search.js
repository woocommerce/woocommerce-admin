/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { debounce, partial } from 'lodash';
import { __, sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Search from 'components/search';

class FilterSearch extends Component {
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

	render() {
		const { filterKey, value, onFilterChange, config } = this.props;
		const { input, label } = config;
		return (
			<Search
				value={ value }
				onChange={ partial( onFilterChange, filterKey, 'value' ) }
				placeholder={ sprintf( __( 'Add %s', 'wc-admin' ), label ) }
				onInputChange={ debounce( this.onInputChange, 200 ) }
				search={ this.state.search }
				searchFn={ input.searchFn }
				requestingFn={ input.requestingFn }
				errorFn={ input.errorFn }
				getPath={ input.getPath }
				perPage={ 20 }
				orderby="popularity"
			/>
		);
	}
}

export default FilterSearch;
