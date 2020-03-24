/**
 * External dependencies
 */
import classnames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import TimelineGroup from './timeline-group';

const Timeline = ( props ) => {
	const { className, items } = props;
	const timelineClassName = classnames( 'woocommerce-timeline', className );

	if ( ! items || items.length === 0 ) {
		return (
			<div className={ timelineClassName }>
				<p className="timeline_no_events">
					{ __( 'No events to display', 'woocommerce-admin' ) }
				</p>
			</div>
		);
	}

	// Sort all the items reverse chronologically
	items.sort( ( a, b ) => {
		return a.datetime - b.datetime;
	} );

	// Group items by days.
	// TODO: Maybe the items passed into the Timeline component
	// should already be grouped and sorted?
	const groups = items.reduce( ( acc, curr ) => {
		const itemLocalDatetime = moment.unix( curr.datetime );
		const formattedDate = itemLocalDatetime.format( 'YYYYMMDD' );

		return {
			...acc,
			[ formattedDate ]: [ ...( acc[ formattedDate ] || [] ), curr ],
		};
	}, {} );

	const timelineGroups = Object.keys( groups ).map( ( key ) => (
		<TimelineGroup key={ key } items={ groups[ key ] } groupKey={ key } />
	) );

	return (
		<div className={ timelineClassName }>
			<ul>{ timelineGroups }</ul>
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
		} )
	).isRequired,
};

Timeline.defaultProps = {
	className: '',
	items: [],
};

export default Timeline;
