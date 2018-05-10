/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// Will be removed when EllipsisMenu is created
function EllipsisMenu() {}

class Card extends Component {
	render() {
		const { action, children, menu, title } = this.props;
		const className = classnames( 'woo-dash__card', this.props.className, {
			'has-menu': !! menu,
			'has-action': !! action,
		} );

		return (
			<div className={ className }>
				<div className="woo-dash__card-header">
					<h2>{ title }</h2>
					{ action && <div className="woo-dash__card-action">{ action }</div> }
					{ menu }
				</div>
				{ children }
			</div>
		);
	}
}

Card.propTypes = {
	action: PropTypes.node,
	className: PropTypes.string,
	menu: PropTypes.instanceOf( EllipsisMenu ),
	title: PropTypes.string.isRequired,
};

export default Card;
