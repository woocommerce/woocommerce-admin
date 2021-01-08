/**
 * External dependencies
 */
import { ENTER } from '@wordpress/keycodes';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import Link from '../link';

/**
 * List component to display a list of items.
 *
 * @param {Object} props props for list item
 */
function ListItem( props ) {
	const handleKeyDown = ( event, onClick ) => {
		if ( typeof onClick === 'function' && event.keyCode === ENTER ) {
			onClick();
		}
	};

	const getItemLinkType = ( item ) => {
		const { href, linkType } = item;

		if ( linkType ) {
			return linkType;
		}

		return href ? 'external' : null;
	};

	const { item } = props;
	const hasAction = typeof item.onClick === 'function' || item.href;
	const InnerTag = item.href ? Link : 'div';

	const innerTagProps = {
		className: 'woocommerce-list__item-inner',
		onClick: typeof item.onClick === 'function' ? item.onClick : null,
		'aria-disabled': hasAction ? 'false' : null,
		tabIndex: hasAction ? '0' : null,
		role: hasAction ? 'menuitem' : null,
		onKeyDown: ( e ) =>
			hasAction ? handleKeyDown( e, item.onClick ) : null,
		target: item.href ? item.target : null,
		type: getItemLinkType( item ),
		href: item.href,
		'data-list-item-tag': item.listItemTag,
	};

	const { before, title, after, content } = item;
	return (
		<InnerTag { ...innerTagProps }>
			{ before && (
				<div className="woocommerce-list__item-before">{ before }</div>
			) }
			<div className="woocommerce-list__item-text">
				<span className="woocommerce-list__item-title">{ title }</span>
				{ content && (
					<span className="woocommerce-list__item-content">
						{ content }
					</span>
				) }
			</div>
			{ after && (
				<div className="woocommerce-list__item-after">{ after }</div>
			) }
		</InnerTag>
	);
}

ListItem.propTypes = {
	/**
	 * An array of list items.
	 */
	item: PropTypes.shape( {
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
		 * Content displayed beneath the list item title.
		 */
		content: PropTypes.oneOfType( [ PropTypes.string, PropTypes.node ] ),
		/**
		 * Href attribute used in a Link wrapped around the item.
		 */
		href: PropTypes.string,
		/**
		 * Called when the list item is clicked.
		 */
		onClick: PropTypes.func,
		/**
		 * Target attribute used for Link wrapper.
		 */
		target: PropTypes.string,
		/**
		 * Title displayed for the list item.
		 */
		title: PropTypes.oneOfType( [ PropTypes.string, PropTypes.node ] ),
	} ).isRequired,
};

export default ListItem;
