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

export const groupByOptions = {
	DAY: 'day',
	WEEK: 'week',
	MONTH: 'month',
};

export const orderByOptions = {
	ASC: 'asc',
	DESC: 'desc',
};

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

	// Reducer used for grouping items.
	const itemsToGroups = ( groups, item ) => {
		const timeToMoment = ( ts ) => moment.unix( ts );
		const haveSameMoment = ( g, i ) =>
			timeToMoment( g.id ).isSame( timeToMoment( i.datetime ), groupBy );

		const groupIndex = groups.findIndex( ( g ) =>
			haveSameMoment( g, item )
		);
		if ( groupIndex < 0 ) {
			return [
				...groups,
				{
					id: item.datetime,
					title: timeToMoment( item.datetime ).format(
						'MMMM D, YYYY'
					),
					items: [ item ],
				},
			];
		}

		groups[ groupIndex ].items.push( item );
		return groups;
	};

	const sortAscending = ( groupA, groupB ) => groupA.id - groupB.id;
	const sortDescending = ( groupA, groupB ) => groupB.id - groupA.id;
	const sortMethod =
		orderByOptions.ASC === orderBy ? sortAscending : sortDescending;

	// Group items together, sort, and map to Timeline groups.
	const timelineGroups = items
		.reduce( itemsToGroups, [] )
		.sort( sortMethod )
		.map( ( g ) => <TimelineGroup key={ g.id.toString() } group={ g } /> );

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
			 * Icon for the Timeline item.
			 */
			icon: PropTypes.element.isRequired,
			/**
			 * Headline displayed for the list item.
			 */
			headline: PropTypes.string.isRequired,
			/**
			 * Body displayed for the list item.
			 */
			body: PropTypes.arrayOf( PropTypes.element ),
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

export default Timeline;
