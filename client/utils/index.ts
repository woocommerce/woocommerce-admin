/**
 * External dependencies
 */
import { getSetting } from '@woocommerce/wc-admin-settings';
const wcAdminAssetUrl: string = getSetting( 'wcAdminAssetUrl', '' );

type UrlParams = Record< string, string | number > & {
	page?: string;
	path?: string;
	post_type?: string;
};

/**
 * Get the URL params.
 *
 * @param {string} locationSearch - Querystring part of a URL, including the question mark (?).
 * @return {Object} - URL params.
 */
export function getUrlParams( locationSearch: string ): UrlParams {
	if ( locationSearch ) {
		return locationSearch
			.substr( 1 )
			.split( '&' )
			.reduce( ( params: UrlParams, query: string ) => {
				const chunks = query.split( '=' );
				const key = chunks[ 0 ];
				let value: string | number = decodeURIComponent( chunks[ 1 ] );
				value = isNaN( Number( value ) ) ? value : Number( value );
				return ( params[ key ] = value ), params;
			}, {} );
	}
	return {};
}

/**
 * Get the current screen name.
 *
 * @return {string} - Screen name.
 */
export function getScreenName(): string {
	let screenName = '';
	const { page, path, post_type: postType } = getUrlParams(
		window.location.search
	);
	if ( page ) {
		const currentPage = page === 'wc-admin' ? 'home_screen' : page;
		screenName = path
			? path.replace( /\//g, '_' ).substring( 1 )
			: currentPage;
	} else if ( postType ) {
		screenName = postType;
	}
	return screenName;
}

/**
 * Similar to filter, but return two arrays separated by a partitioner function
 *
 * @param {Array} arr - Original array of values.
 * @param {Function} partitioner - Function to return truthy/falsy values to separate items in array.
 *
 * @return {Array} - Array of two arrays, first including truthy values, and second including falsy.
 */
export const sift = < T >(
	arr: T[],
	partitioner: ( curr: T ) => boolean
): Array< T[] > =>
	arr.reduce(
		( all: Array< T[] >, curr: T ) => {
			all[ !! partitioner( curr ) ? 0 : 1 ].push( curr );
			return all;
		},
		[ [], [] ]
	);

/**
 * Get an absolute URL to an image by path.
 *
 * @param {string} path - Image path/filename.
 * @return {string} - Image URL.
 */
export function imageUrl( path: string ): string {
	return wcAdminAssetUrl + path;
}
