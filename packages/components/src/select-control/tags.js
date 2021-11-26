/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { Icon, cancelCircleFilled } from '@wordpress/icons';
import { createElement, Component, Fragment } from '@wordpress/element';
import { findIndex } from 'lodash';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import Tag from '../tag';

/**
 * A list of tags to display selected items.
 */
class Tags extends Component {
	constructor( props ) {
		super( props );
		this.removeAll = this.removeAll.bind( this );
		this.removeResult = this.removeResult.bind( this );
		this.state = {
			overflowActive: false
		};
	}

	isElementOverflown(e) {
		// Calculate total width of all child elements
		const totalWidth = Object.values(e.childNodes).reduce((total, i) => total + i.clientWidth, 0);
		return e.clientWidth < totalWidth;
	}

	removeAll() {
		const { onChange } = this.props;
		onChange( [] );
	}

	removeResult( key ) {
		return () => {
			const { selected, onChange } = this.props;
			const i = findIndex( selected, { key } );
			onChange( [
				...selected.slice( 0, i ),
				...selected.slice( i + 1 ),
			] );
		};
	}

	componentDidMount() {
		this.setState({ overflowActive: this.isElementOverflown(this.tagsParent) });
	}

	render() {
		const { selected, showClearButton } = this.props;
		const { overflowActive } = this.state;
		if ( ! selected.length ) {
			return null;
		}

		return (
			<Fragment>
				<div ref={ ref => this.tagsParent = ref } className={`woocommerce-select-control__tags${overflowActive ? " is-overflown" : ""}`}>
					{ selected.map( ( item, i ) => {
						if ( ! item.label ) {
							return null;
						}
						const screenReaderLabel = sprintf(
							__( '%1$s (%2$s of %3$s)', 'woocommerce-admin' ),
							item.label,
							i + 1,
							selected.length
						);
						return (
							<Tag
								key={ item.key }
								id={ item.key }
								label={ item.label }
								remove={ this.removeResult }
								screenReaderLabel={ screenReaderLabel }
							/>
						);
					} ) }
				</div>
				{ showClearButton && selected.length > 1 && (
					<Button
						className="woocommerce-select-control__clear"
						isLink={ false }
						onClick={ this.removeAll }
					>
						{ __( 'Clear all', 'woocommerce-admin' ) }
						<span className="screen-reader-text">
							{ __( 'Clear all', 'woocommerce-admin' ) }
						</span>
					</Button>
				) }
			</Fragment>
		);
	}
}

Tags.propTypes = {
	/**
	 * Function called when selected results change, passed result list.
	 */
	onChange: PropTypes.func,
	/**
	 * Function to execute when an option is selected.
	 */
	onSelect: PropTypes.func,
	/**
	 * An array of objects describing selected values. If the label of the selected
	 * value is omitted, the Tag of that value will not be rendered inside the
	 * search box.
	 */
	selected: PropTypes.arrayOf(
		PropTypes.shape( {
			key: PropTypes.oneOfType( [ PropTypes.number, PropTypes.string ] )
				.isRequired,
			label: PropTypes.string,
		} )
	),
	/**
	 * Render a 'Clear' button next to the input box to remove its contents.
	 */
	showClearButton: PropTypes.bool,
};

export default Tags;
