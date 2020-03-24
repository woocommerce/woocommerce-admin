/**
 * External dependencies
 */
import moment from 'moment';
import PropTypes from 'prop-types';

const TimelineItem = ( props ) => {
	const { item, itemKey } = props;

	const itemTimeString = moment( item.datetime ).format( 'h:mma' );
	const itemBody = item.body.map( ( line, bodyLineIndex ) => {
		const bodyLineKey = itemKey + '-' + bodyLineIndex;
		return <p key={ bodyLineKey }>{ line }</p>;
	} );

	return (
		<li>
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

export default TimelineItem;
