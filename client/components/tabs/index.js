/** @format */
/**
 * External dependencies
 */
import classnames from 'classnames';
import { Component, cloneElement } from '@wordpress/element';
import { NavigableMenu } from '@wordpress/components';
import { noop } from 'lodash';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss';

class Tabs extends Component {
	getChildren() {
		return this.props.children.map(
			function( child ) {
				if ( ! child ) {
					return null;
				}
				const passProps = {
					onClick: event => {
						event.preventDefault();
						this.props.onSelect( child.props.name );
					},
					key: child.props.name,
					selected: this.props.selectedTab === child.props.name,
				};
				return cloneElement( child, passProps );
			}.bind( this )
		);
	}

	render() {
		const { className } = this.props;
		const children = this.getChildren();
		const classNames = classnames( 'woo-dash__tabs', className );

		return (
			<NavigableMenu className={ classNames } role="tablist" orientation="horizontal">
				{ children }
			</NavigableMenu>
		);
	}
}

Tabs.propTypes = {
	className: PropTypes.string,
	selectedTab: PropTypes.string,
	onSelect: PropTypes.func,
};

Tabs.defaultProps = {
	onSelect: noop,
};

export default Tabs;
