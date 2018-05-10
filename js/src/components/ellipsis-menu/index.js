/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import classnames from 'classnames';
import { IconButton, Dropdown, NavigableMenu } from '@wordpress/components';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss';

class EllipsisMenu extends Component {
	constructor() {
		super( ...arguments );
		this.state = {
			isFocused: false,
		};

		this.onFocus = this.onFocus.bind( this );
		this.onBlur = this.onBlur.bind( this );
	}

	onFocus() {
		this.setState( {
			isFocused: true,
		} );
	}

	onBlur() {
		this.setState( {
			isFocused: false,
		} );
	}

	render() {
		const { children, label, isHidden } = this.props;
		const { isFocused } = this.state;
		if ( ! children ) {
			return null;
		}

		return (
			<div
				className={ classnames( 'woo-dash__ellipsis-menu', {
					'is-visible': isFocused || ! isHidden,
				} ) }
			>
				<Dropdown
					contentClassName="woo-dash__ellipsis-menu-popover"
					position="bottom left"
					renderToggle={ ( { onToggle, isOpen } ) => {
						const toggleClassname = classnames( 'woo-dash__ellipsis-menu-toggle', {
							'is-opened': isOpen,
						} );

						return (
							<IconButton
								className={ toggleClassname }
								onClick={ onToggle }
								icon="ellipsis"
								label={ label }
								aria-expanded={ isOpen }
								onFocus={ this.onFocus }
								onBlur={ this.onBlur }
							/>
						);
					} }
					renderContent={ () => (
						<NavigableMenu className="woo-dash__ellipsis-menu-content">{ children }</NavigableMenu>
					) }
				/>
			</div>
		);
	}
}

EllipsisMenu.propTypes = {
	label: PropTypes.string.isRequired,
};

export default EllipsisMenu;
