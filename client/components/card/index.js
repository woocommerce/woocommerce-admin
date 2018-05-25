/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss';
import { EllipsisMenu } from '../ellipsis-menu';
import Tabs from '../tabs';

class Card extends Component {
	render() {
		const { action, children, settings, title } = this.props;
		const className = classnames( 'woo-dash__card', this.props.className, {
			'has-menu': !! settings && settings.type === EllipsisMenu,
			'has-tabs': !! settings && settings.type === Tabs,
			'has-action': !! action,
		} );
		return (
			<div className={ className }>
				<div className="woo-dash__card-header">
					<h2 className="woo-dash__card-title">{ title }</h2>
					{ action && <div className="woo-dash__card-action">{ action }</div> }
					{ settings && <div className="woo-dash__card-settings">{ settings }</div> }
				</div>
				<div className="woo-dash__card-body">{ children }</div>
			</div>
		);
	}
}

Card.propTypes = {
	action: PropTypes.node,
	className: PropTypes.string,
	settings: PropTypes.shape( {
		type: PropTypes.oneOf( [ EllipsisMenu, Tabs ] ),
	} ),
	title: PropTypes.oneOfType( [
		PropTypes.string,
		PropTypes.shape( {
			type: PropTypes.oneOf( [ Link ] ),
		} ),
	] ).isRequired,
};

export default Card;
