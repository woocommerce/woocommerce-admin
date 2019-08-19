/** @format */
/**
 * External dependencies
 */
import classnames from 'classnames';
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * WooCommerce dependencies
 */
import Link from '../link';

/**
 * List component to display a list of items.
 */
class List extends Component {
	render() {
		const { className, items } = this.props;
		const listClassName = classnames( 'woocommerce-list', className );

		return (
			<ul className={ listClassName }>
				{ items.map( ( item, i ) => {
					const { after, before, className: itemClasses, description, href, onClick, target, title } = item;
					const hasAction = 'function' === typeof onClick || href;
					const itemClassName = classnames( 'woocommerce-list__item', itemClasses, {
						'has-action': hasAction,
					} );
					const InnerTag = href ? Link : 'div';
					const actionProps = {
						className: 'woocommerce-list__item-inner',
						href: href,
						onClick: 'function' === typeof onClick ? onClick : null,
						target: target,
						type: 'external',
					};

					return (
						<li
							className={ itemClassName }
							key={ i }
						>
							<InnerTag { ...actionProps }>
								{ before &&
									<div className="woocommerce-list__item-before">
										{ before }
									</div>
								}
								<div className="woocommerce-list__item-text">
									<span className="woocommerce-list__item-title">
										{ title }
									</span>
									{ description &&
										<span className="woocommerce-list__item-description">
											{ description }
										</span>
									}
								</div>
								{ after &&
									<div className="woocommerce-list__item-after">
										{ after }
									</div>
								}
							</InnerTag>
						</li>
                    );
                } ) }
			</ul>
		);
	}
}

List.propTypes = {
	/**
	 * Additional class name to style the component.
	 */
	className: PropTypes.string,
	/**
	 * An array of list items.
	 */
	items: PropTypes.arrayOf(
		PropTypes.shape( {
			/**
			 * Content displayed after the list item text.
			 */
			after: PropTypes.node,
			/**
			 * Content displayed before the list item text.
			 */
			before: PropTypes.node,
			/**
			 * Additional class name to style the list item.
			 */
			className: PropTypes.string,
			/**
			 * Description displayed beneath the list item title.
			 */
			description: PropTypes.string,
			/**
			 * Href attribute used in a Link wrapped around the item.
			 */
			href: PropTypes.string,
			/**
			 * Content displayed after the list item text.
			 */
			onClick: PropTypes.func,
			/**
			 * Target attribute used for Link wrapper.
			 */
			target: PropTypes.string,
			/**
			 * Title displayed for the list item.
			 */
			title: PropTypes.string.isRequired,
		} )
	).isRequired,
};

export default List;
