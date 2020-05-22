/**
 * Internal dependencies
 */
import TYPES from './action-types';

const onboarding = (
	state = {
		profileItems: {},
		errors: {},
	},
	{ type, profileItems, replace, error, selector }
) => {
	switch ( type ) {
		case TYPES.SET_PROFILE_ITEMS:
			state = {
				...state,
				profileItems: replace
					? profileItems
					: { ...state.profileItems, profileItems },
			};
			break;
		case TYPES.SET_ERROR:
			state = {
				...state,
				errors: {
					...state.errors,
					[ selector ]: error,
				},
			};
			break;
	}
	return state;
};

export default onboarding;
