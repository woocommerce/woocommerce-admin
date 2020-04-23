/**
 * External dependencies
 */
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import TimelineGroup from './timeline-group';
import { sortByDateUsing, groupItemsUsing } from './util';

const Timeline = ( props ) => {
	const { className, items, groupBy, orderBy } = props;
	const timelineClassName = classnames( 'woocommerce-timeline', className );

	// Early return in case no data was passed to the component.
	if ( ! items || items.length === 0 ) {
		return (
			<div className={ timelineClassName }>
				<p className={ 'timeline_no_events' }>
					{ __( 'No data to display', 'woocommerce-admin' ) }
				</p>
			</div>
		);
	}

	return (
		<div className={ timelineClassName }>
			<ul>
				{ items
					.reduce( groupItemsUsing( groupBy ), [] )
					.sort( sortByDateUsing( orderBy ) )
					.map( ( group ) => (
						<TimelineGroup
							key={ group.datetime.toString() }
							group={ group }
							orderBy={ orderBy }
						/>
					) ) }
			</ul>
		</div>
	);
};

Timeline.propTypes = {
	/**
	 * Additional CSS classes.
	 */
	className: PropTypes.string,
	/**
	 * An array of list items.
	 */
	items: PropTypes.arrayOf(
		PropTypes.shape( {
			/**
			 * Timestamp (in seconds) for the timeline item.
			 */
			datetime: PropTypes.number.isRequired,
			/**
			 * Icon for the Timeline item.
			 */
			icon: PropTypes.element.isRequired,
			/**
			 * Headline displayed for the list item.
			 */
			headline: PropTypes.element.isRequired,
			/**
			 * Body displayed for the list item.
			 */
			body: PropTypes.arrayOf( PropTypes.element ),
			/**
			 * Allows users to toggle the timestamp on or off.
			 */
			hideTimestamp: PropTypes.bool,
		} )
	).isRequired,
	/**
	 * Defines how items should be grouped together.
	 */
	groupBy: PropTypes.oneOf( [ 'day', 'week', 'month' ] ),
	/**
	 * Defines how groups should be ordered.
	 */
	orderBy: PropTypes.oneOf( [ 'asc', 'desc' ] ),
};

Timeline.defaultProps = {
	className: '',
	items: [],
	groupBy: 'day',
	orderBy: 'desc',
};

export { orderByOptions, groupByOptions } from './util';
export default Timeline;
