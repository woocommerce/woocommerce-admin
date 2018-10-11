/** @format */
/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * This component displays the list of items wrapped in `li` tags and separated
 * with the given separator.
 *
 * @return { object } -
 */
const ViewMoreListItems = ( { items, itemsClassName, separator } ) => {
	return items.map( ( item, i ) => (
		<li key={ i } className={ classNames( itemsClassName, 'woocommerce-view-more-list__item' ) }>
			{ i > 0 ? separator : null }
			{ item }
		</li>
	) );
};

ViewMoreListItems.propTypes = {
	/**
	 * Items to list
	 */
	items: PropTypes.arrayOf(
		PropTypes.oneOfType( [ PropTypes.string, PropTypes.element, PropTypes.node ] ).isRequired
	),
	/**
	 * Classname to add to all `li` tags
	 */
	itemsClassName: PropTypes.string,
	/**
	 * Separator to display between the items
	 */
	separator: PropTypes.oneOfType( [ PropTypes.string, PropTypes.element, PropTypes.node ] ),
};

ViewMoreListItems.defaultProps = {
	separator: ', ',
};

export default ViewMoreListItems;
