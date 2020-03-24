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

const Timeline = ( { className, items } ) => {
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

	// Group the items into local day collections
	const days = [];

	items.forEach( ( item ) => {
		const itemLocalDatetime = moment.unix( item.datetime );
		const dayNum = parseInt( itemLocalDatetime.format( 'YYYYMMDD' ), 10 );
		if ( ! ( dayNum in days ) ) {
			days[ dayNum ] = [];
		}
		days[ dayNum ].push( item );
	} );

	const timelineGroups = days.map( ( day, dayIndex ) => (
		<TimelineGroup key={ dayIndex } items={ day } groupKey={ dayIndex } />
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

export default Timeline;
