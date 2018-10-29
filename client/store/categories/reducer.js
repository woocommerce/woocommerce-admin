/** @format */
/**
 * External dependencies
 */
import { merge } from 'lodash';

/**
 * Internal dependencies
 */
import { ERROR } from 'store/constants';
import { getJsonString } from 'store/utils';

export const DEFAULT_STATE = {};

export default function categoriesReducer( state = DEFAULT_STATE, action ) {
	const queryKey = getJsonString( action.query );

	switch ( action.type ) {
		case 'SET_CATEGORIES':
			return merge( {}, state, {
				[ queryKey ]: action.categories,
			} );

		case 'SET_CATEGORIES_ERROR':
			return merge( {}, state, {
				[ queryKey ]: ERROR,
			} );
	}

	return state;
}
