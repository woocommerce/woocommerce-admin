/** @format */
/**
 * External dependencies
 */
import { useRef } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from './constants';

export const withSettingsHydration = settings => OriginalComponent => {
	return props => {
		const settingsRef = useRef( settings );

		useSelect( ( select, registry ) => {
			if ( ! settingsRef.current ) {
				return;
			}

			const { isResolving, hasFinishedResolution } = select( STORE_NAME );
			const {
				startResolution,
				finishResolution,
				updateSettings,
				clearIsDirty,
			} = registry.dispatch( STORE_NAME );

			if (
				! isResolving( 'getSettings', [ 'seemingly-required-string' ] ) &&
				! hasFinishedResolution( 'getSettings', [ 'seemingly-required-string' ] )
			) {
				startResolution( 'getSettings', [ 'seemingly-required-string' ] );
				updateSettings( settingsRef.current, 'seemingly-required-string' );
				clearIsDirty();
				finishResolution( 'getSettings', [ 'seemingly-required-string' ] );
			}
		}, [] );

		return <OriginalComponent { ...props } />;
	};
};
