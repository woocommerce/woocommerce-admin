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
import ViewMoreListItems from './items';
import './style.scss';

/**
 * This component displays a list of items with a 'X more' button at the end if
 * the number of items to display is higher than the value of numberOfVisibleItems.
 *
 * @return { object } -
 */
const ViewMoreList = ( { items, numberOfVisibleItems, separator } ) => {
	const visibleItems = items.slice( 0, numberOfVisibleItems );
	const popupItems = items.slice( numberOfVisibleItems );

	return (
		<ul className="woocommerce-view-more-list">
			<ViewMoreListItems items={ visibleItems } separator={ separator } />
			{ popupItems.length > 0 && (
				<li className="woocommerce-view-more-list__item">
					<Tag
						className="woocommerce-view-more-list__tag"
						label={ sprintf( __( '+%d more', 'wc-admin' ), popupItems.length ) }
						popoverContents={
							<div className="woocommerce-view-more-list__popover">
								<ViewMoreListItems
									items={ popupItems }
									itemsClassName="woocommerce-view-more-list__popover__item"
									separator={ null }
								/>
							</div>
						}
					/>
				</li>
			) }
		</ul>
	);
};

ViewMoreList.propTypes = {
	/**
	 * Items to list
	 */
	items: PropTypes.arrayOf(
		PropTypes.oneOfType( [ PropTypes.string, PropTypes.element, PropTypes.node ] ).isRequired
	),
	/**
	 * Number of items to display before the 'X more' button appears.
	 */
	numberOfVisibleItems: PropTypes.number,
	/**
	 * Separator to display between the items
	 */
	separator: PropTypes.oneOfType( [ PropTypes.string, PropTypes.element, PropTypes.node ] ),
};

ViewMoreList.defaultProps = {
	numberOfVisibleItems: 3,
	separator: ', ',
};

export default ViewMoreList;
