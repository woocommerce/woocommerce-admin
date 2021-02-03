/**
 * Internal dependencies
 */
import TYPES from './action-types';

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

export function setFavorites( favorites ) {
	return {
		type: TYPES.SET_FAVORITES,
		favorites,
	};
}

export function addFavorite( favorite ) {
	return {
		type: TYPES.ADD_FAVORITE,
		favorite,
	};
}

export function removeFavorite( favorite ) {
	return {
		type: TYPES.REMOVE_FAVORITE,
		favorite,
	};
}
