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
import { H } from 'components/section';
import { validateComponent } from 'lib/proptype-validator';

/**
 * A basic card component with a header. The header can contain a title, an action, and an `EllipsisMenu` menu.
 */
class SectionHeader extends Component {
	render() {
		const { children, menu, title, standAlone } = this.props;
		const className = classnames( 'woocommerce-section-header', this.props.className, {
			'stand-alone': !! standAlone,
		} );
		return (
			<div className={ className }>
				<H className="woocommerce-section-header__title woocommerce-section-header__header-item">
					{ title }
				</H>
				{ standAlone && <hr /> }
				{ children && (
					<div className="woocommerce-section-header__actions woocommerce-section-header__header-item">
						{ children }
					</div>
				) }
				{ menu && (
					<div className="woocommerce-section-header__menu woocommerce-section-header__header-item">
						{ menu }
					</div>
				) }
			</div>
		);
	}
}

SectionHeader.propTypes = {
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
	title: PropTypes.oneOfType( [ PropTypes.string, PropTypes.node ] ).isRequired,
	/**
	 * Is this a standalone header
	 */
	standAlone: PropTypes.bool,
};

export default SectionHeader;
