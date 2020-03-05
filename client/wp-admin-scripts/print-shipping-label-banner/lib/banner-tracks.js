import { recordEvent } from 'lib/tracks';

/**
 * Tracks events for banner. By default, include information for jetpack
 * and woocommerce services.
 *
 * @param {string} eventName Name of the event in the form of <source>_<context>_<optional subcontext>_<action>_<optional qualifier>
 */
export function trackBannerEvent( eventName ) {
    // TODO: pass jetpack_installed, jetpack_connected, wcs_installed in to props
    recordEvent( eventName, {
        jetpack_installed: this.props.jetpack_installed,
        jetpack_connected: this.props.jetpack_connected,
        wcs_installed: this.props.wcs_installed,
    } );
};
