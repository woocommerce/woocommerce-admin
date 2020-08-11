/**
 * Internal dependencies
 */
import TYPES from './action-types';

const onboarding = (
	state = {
		errors: {},
		items: {},
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
		case TYPES.SET_ERROR:
			state = {
				...state,
				errors: {
					...state.errors,
					[ resourceName ]: error,
				},
			};
			break;
	}
	return state;
};

export default onboarding;
