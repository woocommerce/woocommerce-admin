/**
 * Internal dependencies
 */
import TYPES from './action-types';

const reports = (
	state = {
		itemErrors: {},
		items: {},
		statErrors: {},
		stats: {},
	},
	{ type, items, stats, error, resourceName }
) => {
	switch ( type ) {
		case TYPES.SET_REPORT_ITEMS:
			state = {
				...state,
				items: { ...state.items, [ resourceName ]: items },
			};
			break;
		case TYPES.SET_REPORT_STATS:
			state = {
				...state,
				stats: { ...state.stats, [ resourceName ]: stats },
			};
			break;
		case TYPES.SET_ITEM_ERROR:
			state = {
				...state,
				itemErrors: {
					...state.itemErrors,
					[ resourceName ]: error,
				},
			};
			break;
		case TYPES.SET_STAT_ERROR:
			state = {
				...state,
				statErrors: {
					...state.statErrors,
					[ resourceName ]: error,
				},
			};
			break;
	}
	return state;
};

export default reports;
