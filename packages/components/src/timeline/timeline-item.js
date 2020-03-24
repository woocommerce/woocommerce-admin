/**
 * External dependencies
 */
import classnames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';

const TimelineItem = ( props ) => {
	const { item, itemKey, className } = props;
	const itemClassName = classnames( 'woocommerce-timeline-item', className );

	const itemBody = item.body.map( ( line, bodyLineIndex ) => {
		const bodyLineKey = itemKey + '-' + bodyLineIndex;
		return <p key={ bodyLineKey }>{ line }</p>;
	} );
	const itemTimeString = moment( item.datetime ).format( 'h:mma' );

	return (
		<li className={ itemClassName }>
			{ item.headline } <span>{ itemTimeString }</span>
			{ itemBody }
		</li>
	);
};

TimelineItem.propTypes = {
	/**
	 * Additional CSS classes.
	 */
	className: PropTypes.string,
	/**
	 * An array of list items.
	 */
	item: PropTypes.shape( {
		/**
		 * Timestamp (in seconds) for the timeline item.
		 */
		datetime: PropTypes.number.isRequired,
		/**
		 * GridIcon for the Timeline item.
		 */
		gridicon: PropTypes.string.isRequired,
		/**
		 * Headline displayed for the list item.
		 */
		headline: PropTypes.string.isRequired,
		/**
		 * Body displayed for the list item.
		 */
		body: PropTypes.arrayOf( PropTypes.string ),
	} ).isRequired,
	/**
	 * The index of this item in the items array.
	 */
	itemKey: PropTypes.string.isRequired,
};

TimelineItem.defaultProps = {
	className: '',
	item: {},
	itemKey: '00000000-0',
};

export default TimelineItem;
