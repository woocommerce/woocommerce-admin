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

class IconMenu extends Component {
	render() {
		const { children, label, icon, showLabel, position } = this.props;
		if ( ! children ) {
			return null;
		}

		const renderToggle = ( { onToggle, isOpen } ) => {
			const toggleClassname = classnames( 'woocommerce-icon-menu__toggle', {
				'is-opened': isOpen,
			} );

			return (
				<IconButton
					className={ toggleClassname }
					onClick={ onToggle }
					icon={ icon }
					label={ label }
					aria-expanded={ isOpen }
				>
					{ showLabel && label }
				</IconButton>
			);
		};

		const renderContent = () => (
			<NavigableMenu className="woocommerce-icon-menu__content">{ children }</NavigableMenu>
		);

		return (
			<div className="woocommerce-icon-menu">
				<Dropdown
					contentClassName="woocommerce-icon-menu__popover"
					position={ position }
					renderToggle={ renderToggle }
					renderContent={ renderContent }
				/>
			</div>
		);
	}
}

IconMenu.propTypes = {
	icon: PropTypes.oneOfType( [ PropTypes.node, PropTypes.string ] ).isRequired,
	label: PropTypes.string.isRequired,
	position: PropTypes.string,
	showLabel: PropTypes.bool,
};

IconMenu.defaultProps = {
	showLabel: false,
	position: 'bottom left',
};

export { IconMenu };
export { default as MenuItem } from './menu-item';
export { default as MenuTitle } from './menu-title';
