/** @format */
/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Autocomplete } from '@wordpress/components';
import { Component } from '@wordpress/element';
import { findIndex, noop } from 'lodash';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import { product } from './autocompleters';
import Tag from 'components/tag';
import './style.scss';

class Search extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			selected: [],
		};

		this.selectResult = this.selectResult.bind( this );
		this.removeResult = this.removeResult.bind( this );
		this.triggerChange = this.triggerChange.bind( this );
	}

	selectResult( value ) {
		// Note: `value` is an array
		this.setState(
			( { selected } ) => ( { selected: [ ...selected, ...value ] } ),
			this.triggerChange
		);
	}

	removeResult( id ) {
		return () => {
			this.setState( ( { selected } ) => {
				const i = findIndex( selected, { id } );
				return { selected: [ ...selected.slice( 0, i ), ...selected.slice( i + 1 ) ] };
			}, this.triggerChange );
		};
	}

	triggerChange() {
		const { onChange } = this.props;
		onChange( this.state.selected );
	}

	getAutocompleter() {
		switch ( this.props.type ) {
			case 'products':
				return [ product ];
			default:
				return [];
		}
	}

	render() {
		const autocompleter = this.getAutocompleter();
		const { selected = [] } = this.state;
		return (
			<div className="woocommerce-search">
				<Autocomplete completers={ autocompleter } onReplace={ this.selectResult }>
					{ /* eslint-disable jsx-a11y/aria-activedescendant-has-tabindex */ }
					{ ( { isExpanded, listBoxId, activeId } ) => (
						<div
							className="woocommerce-search__input"
							contentEditable
							suppressContentEditableWarning
							aria-autocomplete="list"
							aria-expanded={ isExpanded }
							aria-owns={ listBoxId }
							aria-activedescendant={ activeId }
						/>
					) }
					{ /* eslint-enable jsx-a11y/aria-activedescendant-has-tabindex */ }
				</Autocomplete>
				{ selected.length ? (
					<div className="woocommerce-search__token-list">
						{ selected.map( ( item, i ) => {
							const screenReaderLabel = sprintf(
								__( '%1$s (%2$s of %3$s)', 'wc-admin' ),
								item.label,
								i,
								selected.length
							);
							return (
								<Tag
									key={ item.id }
									id={ item.id }
									label={ item.label }
									remove={ this.removeResult }
									removeLabel={ __( 'Remove product', 'wc-admin' ) }
									screenReaderLabel={ screenReaderLabel }
								/>
							);
						} ) }
					</div>
				) : null }
			</div>
		);
	}
}

Search.propTypes = {
	onChange: PropTypes.func,
	type: PropTypes.oneOf( [ 'products', 'orders', 'customers' ] ).isRequired,
};

Search.defaultProps = {
	onChange: noop,
};

export default Search;
