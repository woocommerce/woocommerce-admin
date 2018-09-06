/** @format */
/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import { partial } from 'lodash';

/**
 * Internal dependencies
 */
import Search from 'components/search';

class Selector extends Component {
	constructor() {
		super();
		this.onSearchChange = this.onSearchChange.bind( this );
	}

	onSearchChange( values ) {
		const { filter, onFilterChange } = this.props;
		const nextValues = values.map( value => value.id );
		onFilterChange( filter.key, 'value', nextValues );
	}

	render() {
		const { filter, config, onFilterChange, searchValues } = this.props;
		const filterConfig = config[ filter.key ];
		const { input } = filterConfig;
		if ( ! input ) {
			return null;
		}
		if ( 'SelectControl' === input.component ) {
			return (
				<SelectControl
					className="woocommerce-filters-advanced__list-select"
					options={ input.options }
					value={ filter.value }
					onChange={ partial( onFilterChange, filter.key, 'value' ) }
					aria-label={ sprintf( __( 'Select %s', 'wc-admin' ), filterConfig.label ) }
				/>
			);
		}
		if ( 'Search' === input.component ) {
			return (
				<Search onChange={ this.onSearchChange } type={ input.type } selected={ searchValues } />
			);
		}
		return null;
	}
}

export default withSelect( ( select, props ) => {
	const { filter, config } = props;
	const filterConfig = config[ filter.key ];
	const { input } = filterConfig;
	return {
		searchValues: 'Search' === input.component ? input.getValues( filter.value, select ) : [],
	};
} )( Selector );
