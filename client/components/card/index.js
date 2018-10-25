/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import classnames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss';
import EllipsisMenu from 'components/ellipsis-menu';
import { Section } from 'components/section';
import { validateComponent } from 'lib/proptype-validator';
import SectionHeader from 'components/section-header';

/**
 * A basic card component with a header. The header can contain a title, an action, and an `EllipsisMenu` menu.
 */
class Card extends Component {
	render() {
		const { action, children, menu, title } = this.props;
		const className = classnames( 'woocommerce-card', this.props.className, {
			'has-menu': !! menu,
			'has-action': !! action,
		} );
		return (
			<div className={ className }>
				{ title && (
					<SectionHeader title={ title } menu={ menu }>
						{ action }
					</SectionHeader>
				) }
				<Section className="woocommerce-card__body">{ children }</Section>
			</div>
		);
	}
}

Card.propTypes = {
	/**
	 * One "primary" action for this card, appears in the card header.
	 */
	action: PropTypes.node,
	/**
	 * Additional CSS classes.
	 */
	className: PropTypes.string,
	/**
	 * An `EllipsisMenu`, with filters used to control the content visible in this card
	 */
	menu: validateComponent( EllipsisMenu ),
	/**
	 * The title to use for this card.
	 */
	title: PropTypes.oneOfType( [ PropTypes.string, PropTypes.node ] ),
};

export default Card;
