/**
 * External dependencies
 */
import moment from 'moment';

const orderByOptions = {
	ASC: 'asc',
	DESC: 'desc',
};

const groupByOptions = {
	DAY: 'day',
	WEEK: 'week',
	MONTH: 'month',
};

const sortAscending = ( groupA, groupB ) => groupA.datetime - groupB.datetime;
const sortDescending = ( groupA, groupB ) => groupB.datetime - groupA.datetime;

const sortByDateUsing = ( orderBy ) => {
	switch ( orderBy ) {
		case orderByOptions.ASC:
			return sortAscending;
		case orderByOptions.DESC:
		default:
			return sortDescending;
	}
};

const groupItemsUsing = ( groupBy ) => ( groups, newItem ) => {
	// Helper functions defined to make the logic a bit more readable.
	const timeToMoment = ( ts ) => moment.unix( ts );
	const hasSameMoment = ( group, item ) => {
		return timeToMoment( group.datetime ).isSame(
			timeToMoment( item.datetime ),
			groupBy
		);
	};
	const groupIndexExists = ( index ) => index >= 0;
	const groupForItem = groups.findIndex( ( group ) =>
		hasSameMoment( group, newItem )
	);

	if ( ! groupIndexExists( groupForItem ) ) {
		// Create new group for newItem.
		return [
			...groups,
			{
				datetime: newItem.datetime,
				title: timeToMoment( newItem.datetime ).format(
					'MMMM D, YYYY'
				),
				items: [ newItem ],
			},
		];
	}

	groups[ groupForItem ].items.push( newItem );
	return groups;
};

export { groupByOptions, groupItemsUsing, orderByOptions, sortByDateUsing };
