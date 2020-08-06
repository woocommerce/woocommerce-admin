/**
 * Internal dependencies
 */
import TYPES from './action-types';
import { hashExportArgs } from './utils';

const exportReducer = (
	state = {
		errors: {},
		requesting: {},
		exportMeta: {},
		exportIds: {},
	},
	{
		error,
		exportArgs,
		exportId,
		exportType,
		isRequesting,
		selector,
		selectorArgs,
		type,
	}
) => {
	switch ( type ) {
		case TYPES.SET_IS_REQUESTING:
			state = {
				...state,
				requesting: {
					...state.requesting,
					[ selector ]: {
						...state.requesting[ selector ],
						[ hashExportArgs( selectorArgs ) ]: isRequesting,
					},
				},
			};
			break;
		case TYPES.SET_EXPORT_ID:
			state = {
				...state,
				exportMeta: {
					...state.exportMeta,
					[ exportId ]: {
						exportType,
						exportArgs,
					},
				},
				exportIds: {
					...state.exportIds,
					[ exportType ]: {
						...state.exportIds[ exportType ],
						[ hashExportArgs( {
							type: exportType,
							args: exportArgs,
						} ) ]: exportId,
					},
				},
			};
			break;
		case TYPES.SET_ERROR:
			state = {
				...state,
				errors: {
					...state.errors,
					[ selector ]: {
						...state.errors[ selector ],
						[ hashExportArgs( selectorArgs ) ]: error,
					},
				},
			};
			break;
	}

	return state;
};

export default exportReducer;
