/** @format */
/**
 * External dependencies
 */
import { useRef } from '@wordpress/element';
import { getAllSettings } from '@woocommerce/wc-admin-settings';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from './constants';

export const withSettingsHydration = group => OriginalComponent => {
	return ( props ) => {
		const settings = useRef( getAllSettings() );
		useSelect( ( select, registry ) => {
			if ( ! settings.current ) {
				return;
			}

			const { isResolving, hasFinishedResolution } = select( STORE_NAME );
			const { startResolution, finishResolution, updateSettingsForGroup } = registry.dispatch(
				STORE_NAME
			);

			if (
				! isResolving( 'getSettings', [ group ] ) &&
				! hasFinishedResolution( 'getSettings', [ group ] )
			) {
				startResolution( 'getSettings', [ group ] );
				updateSettingsForGroup( group, settings.current );
				finishResolution( 'getSettings', [ group ] );
			}
		}, [] );

		return <OriginalComponent { ...props } />;
	};
};
