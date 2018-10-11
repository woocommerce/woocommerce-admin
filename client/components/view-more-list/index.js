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
const ViewMoreList = ( { visibleItems, popoverItems, separator } ) => {
	return (
		<ul className="woocommerce-view-more-list">
			<ViewMoreListItems items={ visibleItems } separator={ separator } />
			{ popoverItems.length > 1 && (
				<li className="woocommerce-view-more-list__item">
					<Tag
						className="woocommerce-view-more-list__tag"
						label={ sprintf( __( '+%d more', 'wc-admin' ), popoverItems.length - 1 ) }
						popoverContents={
							<div className="woocommerce-view-more-list__popover">
								<ViewMoreListItems
									items={ popoverItems }
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
	 * Items to list in the popover
	 */
	popoverItems: PropTypes.arrayOf(
		PropTypes.oneOfType( [ PropTypes.string, PropTypes.element, PropTypes.node ] )
	),
	/**
	 * Separator to display between the items
	 */
	separator: PropTypes.oneOfType( [ PropTypes.string, PropTypes.element, PropTypes.node ] ),
	/**
	 * Items to list by default
	 */
	visibleItems: PropTypes.arrayOf(
		PropTypes.oneOfType( [ PropTypes.string, PropTypes.element, PropTypes.node ] )
	),
};

ViewMoreList.defaultProps = {
	popoverItems: [],
	separator: ', ',
	visibleItems: [],
};

export default ViewMoreList;
