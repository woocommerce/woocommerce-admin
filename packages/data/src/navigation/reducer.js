/**
 * Internal dependencies
 */
import TYPES from './action-types';

const reducer = (
	state = {
		activeItem: null,
		menuItems: [],
		favorites: [],
	},
	{ type, activeItem, favorite, favorites, menuItems }
) => {
	switch ( type ) {
		case TYPES.SET_ACTIVE_ITEM:
			state = {
				...state,
				activeItem,
			};
			break;
		case TYPES.SET_MENU_ITEMS:
			state = {
				...state,
				menuItems,
			};
			break;
		case TYPES.ADD_MENU_ITEMS:
			state = {
				...state,
				menuItems: [ ...state.menuItems, ...menuItems ],
			};
			break;
		case TYPES.SET_FAVORITES:
			state = {
				...state,
				favorites,
			};
			break;
		case TYPES.ADD_FAVORITE:
			const newFavorites = ! state.favorites.includes( favorite )
				? [ ...state.favorites, favorite ]
				: state.favorites;

			state = {
				...state,
				favorites: newFavorites,
			};
			break;
		case TYPES.REMOVE_FAVORITE:
			const filteredFavorites = state.favorites.filter(
				( f ) => f !== favorite
			);

			state = {
				...state,
				favorites: filteredFavorites,
			};
			break;
	}
	return state;
};

export default reducer;
