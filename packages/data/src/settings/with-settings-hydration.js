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

const getHelperFunctions = settings => {
	const getAdminLink = path => ( settings.adminUrl || '' ) + path;
	return { getAdminLink };
};

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
				! isResolving( 'getSettings', [] ) &&
				! hasFinishedResolution( 'getSettings', [] )
			) {
				startResolution( 'getSettings', [] );
				updateSettings( settingsRef.current );
				updateSettings( getHelperFunctions( settingsRef.current ) );
				clearIsDirty();
				finishResolution( 'getSettings', [] );
			}
		}, [] );

		return <OriginalComponent { ...props } />;
	};
};
