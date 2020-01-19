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

/**
 * Add helper functions to the settings object. This ia a legacy way
 * of interacting with settings.
 *
 * @todo house these functions elsewhere because they're not really settings.
 *
 * @param {object} settings - settings global.
 * @return {object} - object of functions to add to settings global.
 */
const getHelperFunctions = settings => {
	const getAdminLink = path => ( settings.adminUrl || '' ) + path;
	return { getAdminLink };
};

export const withSettingsHydration = ( group, settings ) => OriginalComponent => {
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
				updateSettingsForGroup,
				clearIsDirty,
			} = registry.dispatch( STORE_NAME );

			if (
				! isResolving( 'getSettings', [ group ] ) &&
				! hasFinishedResolution( 'getSettings', [ group ] )
			) {
				startResolution( 'getSettings', [ group ] );
				updateSettingsForGroup( group, settingsRef.current );
				updateSettingsForGroup( group, getHelperFunctions( settingsRef.current ) );
				clearIsDirty( group );
				finishResolution( 'getSettings', [ group ] );
			}
		}, [] );

		return <OriginalComponent { ...props } />;
	};
};
