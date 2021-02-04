/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import TYPES from './action-types';
import { WC_ADMIN_NAMESPACE } from '../constants';

export function setActiveItem( activeItem ) {
	return {
		type: TYPES.SET_ACTIVE_ITEM,
		activeItem,
	};
}

export function setMenuItems( menuItems ) {
	return {
		type: TYPES.SET_MENU_ITEMS,
		menuItems,
	};
}

export function addMenuItems( menuItems ) {
	return {
		type: TYPES.ADD_MENU_ITEMS,
		menuItems,
	};
}

export function getFavoritesFailure( error ) {
	return {
		type: TYPES.GET_FAVORITES_FAILURE,
		error,
	};
}

export function getFavoritesRequest( favorites ) {
	return {
		type: TYPES.GET_FAVORITES_REQUEST,
		favorites,
	};
}

export function getFavoritesSuccess( favorites ) {
	return {
		type: TYPES.GET_FAVORITES_SUCCESS,
		favorites,
	};
}

export function addFavoriteRequest( favorite ) {
	return {
		type: TYPES.ADD_FAVORITE_REQUEST,
		favorite,
	};
}

export function addFavoriteFailure( favorite, error ) {
	return {
		type: TYPES.ADD_FAVORITE_FAILURE,
		favorite,
		error,
	};
}

export function addFavoriteSuccess( favorite, error ) {
	return {
		type: TYPES.ADD_FAVORITE_SUCCESS,
		favorite,
		error,
	};
}

export function removeFavoriteRequest( favorite ) {
	return {
		type: TYPES.ADD_FAVORITE_REQUEST,
		favorite,
	};
}

export function removeFavoriteFailure( favorite, error ) {
	return {
		type: TYPES.ADD_FAVORITE_FAILURE,
		favorite,
		error,
	};
}

export function removeFavoriteSuccess( favorite, error ) {
	return {
		type: TYPES.ADD_FAVORITE_SUCCESS,
		favorite,
		error,
	};
}

export function* addFavorite( favorite ) {
	yield addFavoriteRequest( favorite );

	try {
		const results = yield apiFetch( {
			path: `${ WC_ADMIN_NAMESPACE }/navigation/favorites`,
			method: 'POST',
			data: {
				favorite,
			},
		} );

		if ( results ) {
			addFavoriteSuccess( favorite );
			return results;
		}

		throw new Error();
	} catch ( error ) {
		addFavoriteFailure( favorite, error );
		throw new Error();
	}
}

export function* removeFavorite( favorite ) {
	yield removeFavoriteRequest( favorite );

	try {
		const results = yield apiFetch( {
			path: `${ WC_ADMIN_NAMESPACE }/navigation/favorites`,
			method: 'DELETE',
			data: {
				favorite,
			},
		} );

		if ( results ) {
			removeFavoriteSuccess( favorite );
			return results;
		}

		throw new Error();
	} catch ( error ) {
		removeFavoriteFailure( favorite, error );
		throw new Error();
	}
}
