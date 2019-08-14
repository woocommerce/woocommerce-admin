/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, createRef } from '@wordpress/element';
import Gridicon from 'gridicons';
import classnames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import Tags from './tags';

/**
 * A search control to allow user input to filter the options.
 */
class SearchControl extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			isActive: false,
		};

		this.input = createRef();

		this.updateSearch = this.updateSearch.bind( this );
		this.onFocus = this.onFocus.bind( this );
		this.onBlur = this.onBlur.bind( this );
		this.onKeyDown = this.onKeyDown.bind( this );
	}

	updateSearch( onSearch ) {
		return event => {
			onSearch( event );
		};
	}

	onFocus( onSearch ) {
		return event => {
			this.setState( { isActive: true } );
			onSearch( event );
		};
	}

	onBlur() {
		this.setState( { isActive: false } );
	}

	onKeyDown( event ) {
		const { selected, onChange, query } = this.props;

		if ( 8 === event.keyCode && ! query && selected.length ) {
			onChange( [ ...selected.slice( 0, -1 ) ] );
		}
	}

	renderInput() {
		const {
			activeId,
			hasTags,
			inlineTags,
			instanceId,
			isExpanded,
			listboxId,
			onSearch,
			placeholder,
			query,
		} = this.props;

		return <input
			className="woocommerce-autocomplete__input"
			ref={ this.input }
			type={ 'search' }
			value={ query }
			placeholder={ placeholder }
			onChange={ this.updateSearch( onSearch ) }
			onFocus={ this.onFocus( onSearch ) }
			onBlur={ this.onBlur }
			onKeyDown={ this.onKeyDown }
			role="combobox"
			aria-autocomplete="list"
			aria-expanded={ isExpanded }
			aria-haspopup="true"
			aria-owns={ listboxId }
			aria-controls={ listboxId }
			aria-activedescendant={ activeId }
			aria-describedby={
				hasTags && inlineTags ? `search-inline-input-${ instanceId }` : null
			}
			size={ inlineTags
				? ( ( query.length === 0 && placeholder && placeholder.length ) ||
					query.length ) + 1
				: null
			}
		/>;
	}

	render() {
		const {
			hasTags,
			inlineTags,
			instanceId,
		} = this.props;
		const { isActive } = this.state;

		return (
			// Disable reason: The div below visually simulates an input field. Its
			// child input is the actual input and responds accordingly to all keyboard
			// events, but click events need to be passed onto the child input. There
			// is no appropriate aria role for describing this situation, which is only
			// for the benefit of sighted users.
			/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
			<div
				className={ classnames( 'woocommerce-autocomplete__control', {
					'is-active': isActive,
					'has-tags': inlineTags && hasTags,
				} ) }
				onClick={ () => {
					this.input.current.focus();
				} }
			>
				<Gridicon className="woocommerce-autocomplete__icon" icon="search" size={ 18 } />
				{ inlineTags && <Tags { ...this.props } /> }
				{ this.renderInput() }
				{ inlineTags && <span id={ `search-inline-input-${ instanceId }` } className="screen-reader-text">
					{ __( 'Move backward for selected items', 'woocommerce-admin' ) }
				</span> }
			</div>
			/* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
		);
	}
}

SearchControl.propTypes = {
	/**
	 * Render tags inside input, otherwise render below input.
	 */
	inlineTags: PropTypes.bool,
	/**
	 * ID of the main Autocomplete instance.
	 */
	instanceId: PropTypes.number,
	/**
	 * ID used for a11y in the listbox.
	 */
	listboxId: PropTypes.string,
	/**
	 * Function called when selected results change, passed result list.
	 */
	onChange: PropTypes.func,
	/**
	 * Function called when input field is changed or focused.
	 */
	onSearch: PropTypes.func,
	/**
	 * A placeholder for the search input.
	 */
	placeholder: PropTypes.string,
	/**
	 * Search query entered by user.
	 */
	query: PropTypes.string,
	/**
	 * An array of objects describing selected values. If the label of the selected
	 * value is omitted, the Tag of that value will not be rendered inside the
	 * search box.
	 */
	selected: PropTypes.arrayOf(
		PropTypes.shape( {
			key: PropTypes.oneOfType( [
				PropTypes.number,
				PropTypes.string,
			] ).isRequired,
			label: PropTypes.string,
		} )
	),
	/**
	 * Bool to determine if tags should be rendered.
	 */
	hasTags: PropTypes.bool,
};

export default SearchControl;
