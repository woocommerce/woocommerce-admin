/** @format */
/**
 * External dependencies
 */
import classnames from 'classnames';
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss';

class TabItem extends Component {
	render() {
		const { onClick, children, selected, name } = this.props;
		const classNames = classnames( 'woo-dash__tabs-item', {
			'is-selected': selected,
		} );
		return (
			<button
				role="tab"
				name={ name }
				className={ classNames }
				tabIndex={ selected ? null : -1 }
				aria-selected={ selected }
				onClick={ onClick }
			>
				{ children }
			</button>
		);
	}
}

TabItem.propTypes = {
	name: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.node,
	selected: PropTypes.bool,
};

export default TabItem;
