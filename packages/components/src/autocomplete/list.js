/** @format */
/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import classnames from 'classnames';
import { Component, createRef } from '@wordpress/element';
import { ENTER, ESCAPE, UP, DOWN, LEFT, TAB, RIGHT } from '@wordpress/keycodes';
import { isEqual } from 'lodash';
import PropTypes from 'prop-types';

/**
 * A list box that displays filtered options after search.
 */
class List extends Component {
	constructor() {
		super( ...arguments );

		this.handleKeyDown = this.handleKeyDown.bind( this );
		this.select = this.select.bind( this );
		this.optionRefs = {};
	}

	componentDidUpdate( prevProps ) {
		const { filteredOptions } = this.props;

		// Remove old option refs to avoid memory leaks.
		if ( ! isEqual( filteredOptions, prevProps.filteredOptions ) ) {
			this.optionRefs = {};
		}
	}

	getOptionRef( index ) {
		if ( ! this.optionRefs.hasOwnProperty( index ) ) {
			this.optionRefs[ index ] = createRef();
		}

		return this.optionRefs[ index ];
	}

	select( option ) {
		const { onSelect } = this.props;

		if ( option.isDisabled ) {
			return;
		}

		onSelect( option );
	}

	handleKeyDown( event ) {
		const { onChange, filteredOptions, selectedIndex } = this.props;
		if ( filteredOptions.length === 0 ) {
			return;
		}

		let nextSelectedIndex;
		switch ( event.keyCode ) {
			case UP:
				nextSelectedIndex = ( selectedIndex === 0 ? filteredOptions.length : selectedIndex ) - 1;
				onChange( nextSelectedIndex, this.optionRefs[ nextSelectedIndex ] );
				break;

			case TAB:
			case DOWN:
				nextSelectedIndex = ( selectedIndex + 1 ) % filteredOptions.length;
				onChange( nextSelectedIndex, this.optionRefs[ nextSelectedIndex ] );
				break;

			case ENTER:
				this.select( filteredOptions[ selectedIndex ] );
				break;

			case LEFT:
			case RIGHT:
			case ESCAPE:
				onChange( 0 );
				return;

			default:
				return;
		}

		// Any handled keycode should prevent original behavior. This relies on
		// the early return in the default case.
		event.preventDefault();
		event.stopPropagation();
	}

	toggleKeyEvents( isListening ) {
		const { node } = this.props;
		// This exists because we must capture ENTER key presses before RichText.
		// It seems that react fires the simulated capturing events after the
		// native browser event has already bubbled so we can't stopPropagation
		// and avoid RichText getting the event from TinyMCE, hence we must
		// register a native event handler.
		const handler = isListening ? 'addEventListener' : 'removeEventListener';
		node[ handler ]( 'keydown', this.handleKeyDown, true );
	}

	componentDidMount() {
		this.toggleKeyEvents( true );
	}

	componentWillUnmount() {
		this.toggleKeyEvents( false );
	}

	render() {
		const { filteredOptions, instanceId, listboxId, selectedIndex, staticList } = this.props;
		const listboxClasses = classnames( 'woocommerce-autocomplete__listbox', {
			'is-static': staticList,
		} );

		return (
			<div id={ listboxId } role="listbox" className={ listboxClasses }>
				{ filteredOptions.map( ( option, index ) => (
						<Button
							ref={ this.getOptionRef( index ) }
							key={ option.key }
							id={ `woocommerce-autocomplete__option-${ instanceId }-${ option.key }` }
							role="option"
							aria-selected={ index === selectedIndex }
							disabled={ option.isDisabled }
							className={ classnames( 'woocommerce-autocomplete__option', {
								'is-selected': index === selectedIndex,
							} ) }
							onClick={ () => this.select( option ) }
						>
							{ option.label }
						</Button>
					) ) }
			</div>
		);
	}
}

List.propTypes = {
	/**
	 * Array of filtered options to display.
	 */
	filteredOptions: PropTypes.arrayOf(
		PropTypes.shape( {
			isDisabled: PropTypes.bool,
			key: PropTypes.oneOfType( [
				PropTypes.number,
				PropTypes.string,
			] ).isRequired,
			keywords: PropTypes.arrayOf( PropTypes.string ),
			label: PropTypes.string,
			value: PropTypes.any,
		} )
	).isRequired,
	/**
	 * ID of the main Autocomplete instance.
	 */
	instanceId: PropTypes.number,
	/**
	 * ID used for a11y in the listbox.
	 */
	listboxId: PropTypes.string,
	/**
	 * Parent node to bind keyboard events to.
	 */
	node: PropTypes.instanceOf( Element ).isRequired,
	/**
	 * Function called when selected results change, passed result list.
	 */
	onChange: PropTypes.func,
	/**
	 * Function to execute when an option is selected.
	 */
	onSelect: PropTypes.func,
	/**
	 * Integer for the currently selected item.
	 */
	selectedIndex: PropTypes.number.isRequired,
	/**
	 * Bool to determine if the list should be positioned absolutely or staticly.
	 */
	staticList: PropTypes.bool,
};

export default List;
