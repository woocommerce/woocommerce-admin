/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
	Card as WPCard,
	CardBody,
	CardHeader,
	__experimentalText as Text,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import EllipsisMenu from '../ellipsis-menu';
import { validateComponent } from '../lib/proptype-validator';

/**
 * A basic card component with a header. The header can contain a title, an action, and an `EllipsisMenu` menu.
 */
class Card extends Component {
	render() {
		const {
			action,
			children,
			className,
			description,
			isInactive,
			menu,
			size,
			title,
		} = this.props;
		const cardClasses = classnames(
			'woocommerce-card',
			className,
			{
				'has-menu': !! menu,
				'has-action': !! action,
				'is-inactive': !! isInactive,
			}
		);
		return (
			<WPCard className={ cardClasses }>
				{ title && (
					<CardHeader>
						<div className="woocommerce-card__title-wrapper">
							<Text variant="title.small">
								{ title }
							</Text>
							{ description && (
								<Text variant="caption">
									{ description }
								</Text>
							) }
						</div>
						{ action && (
							<div className="woocommerce-card__action woocommerce-card__header-item">
								{ action }
							</div>
						) }
						{ menu && (
							<div className="woocommerce-card__menu woocommerce-card__header-item">
								{ menu }
							</div>
						) }
					</CardHeader>
				) }
				<CardBody size={ size }>
					{ children }
				</CardBody>
			</WPCard>
		);
	}
}

Card.defaultProps = {
	size: 'none',
};

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
	 * The description displayed beneath the title.
	 */
	description: PropTypes.oneOfType( [ PropTypes.string, PropTypes.node ] ),
	/**
	 * Boolean representing whether the card is inactive or not.
	 */
	isInactive: PropTypes.bool,
	/**
	 * An `EllipsisMenu`, with filters used to control the content visible in this card
	 */
	menu: validateComponent( EllipsisMenu ),
	/**
	 * Size of card spacing.
	 */
	size: PropTypes.string,
	/**
	 * The title to use for this card.
	 */
	title: PropTypes.oneOfType( [ PropTypes.string, PropTypes.node ] ),
};

export default Card;
