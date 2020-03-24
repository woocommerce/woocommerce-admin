/**
 * External dependencies
 */
import classnames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';
import GridIcon from 'gridicons';

const GRIDICON_SIZE = 18;

const TimelineItem = ( props ) => {
	const { item, itemKey, className } = props;
	const itemClassName = classnames( 'woocommerce-timeline-item', className );

	const itemBody = item.body.map( ( line, bodyLineIndex ) => {
		const bodyLineKey = itemKey + '-' + bodyLineIndex;
		return <p key={ bodyLineKey }>{ line }</p>;
	} );
	const itemTimeString = moment.unix( item.datetime ).format( 'h:mma' );

	return (
		<li className={ itemClassName }>
			<div className={ 'woocommerce-timeline-item__title' }>
				<p className={ 'woocommerce-timeline-item__headline' }>
					<GridIcon icon={ item.gridicon } size={ GRIDICON_SIZE } />
					<span>{ item.headline }</span>
				</p>
				<span>{ itemTimeString }</span>
			</div>
			<div className={ 'woocommerce-timeline-item__body' }>
				{ itemBody }
			</div>
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
