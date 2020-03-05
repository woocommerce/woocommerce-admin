import { recordEvent } from 'lib/tracks';

/**
 * Tracks events for banner. By default, include information for jetpack
 * and woocommerce services.
 *
 * @param {string} eventName Name of the event in the form of <source>_<context>_<optional subcontext>_<action>_<optional qualifier>
 * @param {Object} props Object with boolean properties of jetpack_installed, jetpack_connected, wcs_installed
 */
export function trackBannerEvent( eventName, props ) {
	// TODO: pass jetpack_installed, jetpack_connected, wcs_installed in to props
	recordEvent( eventName, {
		jetpack_installed: props.jetpack_installed,
		jetpack_connected: props.jetpack_connected,
		wcs_installed: props.wcs_installed,
	} );
}
