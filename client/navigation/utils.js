/**
 * External dependencies
 */
import { getAdminLink } from '@woocommerce/wc-admin-settings';

/**
 * Get the params from a location as a key/value pair object.
 *
 * @param {Object} location Window location
 * @return {Object} Params
 */
export const getParams = ( location ) => {
	const params = {};
	if ( location.search ) {
		new URLSearchParams( location.search.substring( 1 ) ).forEach(
			( value, key ) => {
				params[ key ] = value;
			}
		);
	}
	return params;
};

/**
 * Get the full URL if a relative path is passed.
 *
 * @param {string} url URL
 * @return {string} Full URL
 */
export const getFullUrl = ( url ) => {
	const { origin, pathname, search } = window.location;

	if ( url.indexOf( '#' ) === 0 ) {
		return origin + pathname + search + url;
	}

	if ( url.indexOf( 'http' ) === 0 ) {
		return url;
	}

	return origin + url;
};

/**
 * Check to see if a URL matches a given window location.
 *
 * @param {Object} location Window location
 * @param {string} itemUrl Item URL to compare
 * @param {Array} queryParams Params required to match this item.
 * @return {number} Number of matches or 0 if not matched.
 */
export const getMatchScore = ( location, itemUrl, queryParams = [] ) => {
	if ( ! itemUrl ) {
		return;
	}

	const fullItemUrl = getFullUrl( itemUrl );
	const itemLocation = new URL( fullItemUrl );
	const { origin: urlOrigin, pathname: urlPathname } = itemLocation;
	const { hash, origin, pathname, search } = location;

	// Exact match found.
	if ( origin + pathname + search + hash === fullItemUrl ) {
		return Number.MAX_SAFE_INTEGER;
	}

	// Matched URL without hash.
	if ( hash.length && origin + pathname + search === fullItemUrl ) {
		return Number.MAX_SAFE_INTEGER - 1;
	}

	const itemParams = getParams( itemLocation );

	// Post type match.
	if (
		window.wcNavigation.postType === itemParams.post_type &&
		urlPathname.indexOf( 'edit.php' ) >= 0 &&
		origin === urlOrigin
	) {
		return Number.MAX_SAFE_INTEGER - 2;
	}

	// Add points for each matching param.
	let matchingParamCount = 0;
	const locationParams = getParams( location );
	for ( const key in itemParams ) {
		if ( itemParams[ key ] === locationParams[ key ] ) {
			matchingParamCount++;
		} else if (
			queryParams.includes( key ) &&
			( itemParams[ key ] || locationParams[ key ] )
		) {
			// A determinant param was found and not matched.
			return 0;
		}
	}

	return origin === urlOrigin && pathname === urlPathname
		? matchingParamCount
		: 0;
};

/**
 * Adds a listener that runs on history change.
 *
 * @param {Function} listener Listener to add on history change.
 * @return {Function} Function to remove listeners.
 */
export const addHistoryListener = ( listener ) => {
	// Monkey patch pushState to allow trigger the pushstate event listener.
	if ( ! window.wcNavigation.historyPatched ) {
		( ( history ) => {
			/* global CustomEvent */
			const pushState = history.pushState;
			const replaceState = history.replaceState;
			history.pushState = function ( state ) {
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
export const getMatchingItem = ( items ) => {
	let matchedItem = null;
	let highestMatchScore = 0;

	items.forEach( ( item ) => {
		const score = getMatchScore(
			window.location,
			getAdminLink( item.url ),
			item.queryParams
		);
		if ( score >= highestMatchScore && score > 0 ) {
			matchedItem = item;
			highestMatchScore = score;
		}
	} );

	return matchedItem || null;
};
