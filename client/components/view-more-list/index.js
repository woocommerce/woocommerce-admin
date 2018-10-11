/** @format */
/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import Tag from 'components/tag';
import './style.scss';

/**
 * This component displays a list of items with a 'X more' button at the end if
 * the number of items to display is higher than the value of numberOfVisibleItems.
 *
 * @return { object } -
 */
const ViewMoreList = ( { popoverItems } ) => {
	return (
		<Tag
			className="woocommerce-view-more-list"
			label={ sprintf( __( '+%d more', 'wc-admin' ), popoverItems.length - 1 ) }
			popoverContents={
				<ul className="woocommerce-view-more-list__popover">
					{ popoverItems.map( ( item, i ) => (
						<li key={ i } className="woocommerce-view-more-list__popover__item">
							{ item }
						</li>
					) ) }
				</ul>
			}
		/>
	);
};

ViewMoreList.propTypes = {
	/**
	 * Items to list in the popover
	 */
	popoverItems: PropTypes.arrayOf(
		PropTypes.oneOfType( [ PropTypes.string, PropTypes.element, PropTypes.node ] )
	),
};

ViewMoreList.defaultProps = {
	popoverItems: [],
	visibleItems: [],
};

export default ViewMoreList;
