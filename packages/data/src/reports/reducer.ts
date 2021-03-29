/**
 * Internal dependencies
 */
import TYPES from './action-types';
import { ReportsState } from './types';

export type ReportsPayload = {
	type: TYPES;
	resourceName: string;
	items?: Record< string, unknown >[];
	stats?: Record< string, unknown >[];
	error?: { status: number; message: string };
};

const reports = (
	state: ReportsState = {
		itemErrors: {},
		items: {},
		statErrors: {},
		stats: {},
	},
	{ type, items, stats, error, resourceName }: ReportsPayload
) => {
	switch ( type ) {
		case TYPES.SET_REPORT_ITEMS:
			return {
				...state,
				items: { ...state.items, [ resourceName ]: items },
			};
		case TYPES.SET_REPORT_STATS:
			return {
				...state,
				stats: { ...state.stats, [ resourceName ]: stats },
			};
		case TYPES.SET_ITEM_ERROR:
			return {
				...state,
				itemErrors: {
					...state.itemErrors,
					[ resourceName ]: error,
				},
			};
		case TYPES.SET_STAT_ERROR:
			return {
				...state,
				statErrors: {
					...state.statErrors,
					[ resourceName ]: error,
				},
			};
		default:
			return state;
	}
};

export default reports;
