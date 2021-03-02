/**
 * External dependencies
 */
import { getAdminLink } from '@woocommerce/wc-admin-settings';

interface Item {
	id: string;
	matchExpression: string;
	url: string;
	order: number;
	title: string;
	parent: string;
	menuId: 'primary' | 'favorites' | 'plugins' | 'secondary';
	capability: string;
	isCategory: boolean;
}

/**
 * Get the full URL if a relative path is passed.
 */
export const getFullUrl = ( url: string ): string => {
	if ( url.indexOf( 'http' ) === 0 ) {
		return url;
	}

	return getAdminLink( url );
};

/**
 * Get a match score for a menu item given a location.
 */
export const getMatchScore = (
	location: Location,
	itemUrl: string,
	itemExpression: string | null = null
): number => {
	if ( ! itemUrl ) {
		return 0;
	}

	const fullUrl = getFullUrl( itemUrl );
	const { href } = location;

	// Return highest possible score for exact match.
	if ( fullUrl === href ) {
		return Number.MAX_SAFE_INTEGER;
	}

	const defaultExpression = getDefaultMatchExpression( fullUrl );
	const regexp = new RegExp( itemExpression || defaultExpression, 'i' );
	return ( decodeURIComponent( href ).match( regexp ) || [] ).length;
};

/**
 * Get a default regex expression to match the path and provided params.
 */
export const getDefaultMatchExpression = ( url: string ): string => {
	const escapedUrl = url.replace( /[-\/\\^$*+?.()|[\]{}]/gi, '\\$&' );
	const [ path, args, hash ] = escapedUrl.split( /\\\?|#/ );
	const hashExpression = hash ? `(.*#${ hash }$)` : '';
	const argsExpression = args
		? args.split( '&' ).reduce( ( acc, param ) => {
				return `${ acc }(?=.*[?|&]${ param }(&|$|#))`;
		  }, '' )
		: '';
	return '^' + path + argsExpression + hashExpression;
};

interface wcNavigation {
	menuItems: Array< Item >;
	rootBackLabel: string;
	rootBackUrl: string;
	historyPatched: boolean;
}

declare global {
	interface Window {
		wcNavigation: wcNavigation;
	}
}

/**
 * Adds a listener that runs on history change.
 *
 * @param {Function} listener Listener to add on history change.
 * @return {Function} Function to remove listeners.
 */
export const addHistoryListener = ( listener: Function ) => {
	// Monkey patch pushState to allow trigger the pushstate event listener.
	if ( ! window.wcNavigation.historyPatched ) {
		( ( history ) => {
			/* global CustomEvent */
			const pushState = history.pushState;
			const replaceState = history.replaceState;
			history.pushState = function ( state: object ) {
				const pushStateEvent = new CustomEvent( 'pushstate', {
					state,
				} );
				window.dispatchEvent( pushStateEvent );
				return pushState.apply( history, arguments );
			};
			history.replaceState = function ( state ) {
				const replaceStateEvent = new CustomEvent( 'replacestate', {
					state,
				} );
				window.dispatchEvent( replaceStateEvent );
				return replaceState.apply( history, arguments );
			};
			window.wcNavigation.historyPatched = true;
		} )( window.history );
	}

	window.addEventListener( 'popstate', listener );
	window.addEventListener( 'pushstate', listener );
	window.addEventListener( 'replacestate', listener );

	return () => {
		window.removeEventListener( 'popstate', listener );
		window.removeEventListener( 'pushstate', listener );
		window.removeEventListener( 'replacestate', listener );
	};
};

/**
 * Get the closest matching item.
 *
 * @param {Array} items An array of items to match against.
 */
export const getMatchingItem = ( items: Array< Item > ): Item | null => {
	let matchedItem = null;
	let highestMatchScore = 0;

	items.forEach( ( item ) => {
		const score = getMatchScore(
			window.location,
			item.url,
			item.matchExpression
		);
		if ( score > 0 && score >= highestMatchScore ) {
			highestMatchScore = score;
			matchedItem = item;
		}
	} );

	return matchedItem || null;
};

/**
 * Available menu IDs.
 */
export const menuIds = [ 'primary', 'favorites', 'plugins', 'secondary' ];

/**
 * Default categories for the menu.
 */
export const defaultCategories = {
	woocommerce: {
		id: 'woocommerce',
		isCategory: true,
		menuId: 'primary',
		migrate: true,
		order: 10,
		parent: '',
		title: 'WooCommerce',
	},
};

/**
 * Sort an array of menu items by their order property.
 *
 * @param {Array} menuItems Array of menu items.
 * @return {Array} Sorted menu items.
 */
export const sortMenuItems = ( menuItems: Array< Item > ): Array< Item > => {
	return menuItems.sort( ( a, b ) => {
		if ( a.order === b.order ) {
			return a.title.localeCompare( b.title );
		}

		return a.order - b.order;
	} );
};

interface Category {
	matchExpression: string;
	url: string;
	order: number;
	title: string;
	parent: string;
	menuId: 'primary' | 'favorites' | 'plugins' | 'secondary';
	capability: string;
	isCategory: boolean;
	primary?: Array< Item >;
	favorites?: Array< Item >;
	plugins?: Array< Item >;
	secondary?: Array< Item >;
}

/**
 * Get a flat tree structure of all Categories and thier children grouped by menuId
 *
 * @param {Array} menuItems Array of menu items.
 * @param {Function} currentUserCan Callback method passed the capability to determine if a menu item is visible.
 * @return {Object} Mapped menu items and categories.
 */
export const getMappedItemsCategories = (
	menuItems: Array< Item >,
	currentUserCan: Function | null = null
) => {
	const categories: {
		[ key: string ]: Category | object;
	} = { ...defaultCategories };

	const items = sortMenuItems( menuItems ).reduce(
		(
			acc: {
				[ key: string ]: Category | { [ key: string ]: Array< Item > };
			},
			item: Item
		) => {
			// Set up the category if it doesn't yet exist.
			if ( ! acc[ item.parent ] ) {
				acc[ item.parent ] = {};
				menuIds.forEach( ( menuId ) => {
					acc[ item.parent ][ menuId ] = [];
				} );
			}

			// Incorrect menu ID.
			if ( ! acc[ item.parent ][ item.menuId ] ) {
				return acc;
			}

			// User does not have permission to view this item.
			if (
				currentUserCan &&
				item.capability &&
				! currentUserCan( item.capability )
			) {
				return acc;
			}

			// Add categories.
			if ( item.isCategory ) {
				categories[ item.id ] = item;
			}

			acc[ item.parent ][ item.menuId ].push( item );
			return acc;
		},
		{}
	);

	return {
		items,
		categories,
	};
};

const assign = (
	obj: {
		[ key: string ]: Item;
	},
	item: Item
) => {
	obj[ item.title ] = item;
	return obj;
};
