/**
 * Internal dependencies
 */
import TYPES from './action-types';

const DEFAULT_STATE = {
	queue: [],
};

const reducer = ( state = DEFAULT_STATE, action ) => {
	switch ( action.type ) {
		case TYPES.SET_CES_SURVEY_TRACKS_QUEUE:
			return {
				...state,
				queue: action.queue,
			};
		case TYPES.ADD_CES_SURVEY_TRACK:
			// Prevent duplicate
			const registeredTracks = new Set(
				state.queue.map( ( track ) => track.action )
			);
			if ( registeredTracks.has( action.action ) ) {
				return state;
			}
			const newTrack = {
				action: action.action,
				label: action.label,
				pagenow: action.pageNow,
				adminpage: action.adminPage,
				onSubmitLabel: action.onSubmitLabel,
			};
			return {
				...state,
				queue: [ ...state.queue, newTrack ],
			};

		default:
			return state;
	}
};

export default reducer;
