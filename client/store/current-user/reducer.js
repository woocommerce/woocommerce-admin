/** @format */

const DEFAULT_STATE = {
	data: {},
};

export default function currentUserReducer( state = DEFAULT_STATE, action ) {
	switch ( action.type ) {
		case 'SET_CURRENT_USER':
			const { user } = action;
			return {
				...state,
				data: Object.assign( {}, state.data, user ),
			};
	}

	return state;
}
