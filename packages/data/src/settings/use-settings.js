/** @format */
/**
 * External dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
import { STORE_NAME } from './constants';
import { useCallback } from '@wordpress/element';

export const useSettings = ( settingsKeys = [] ) => {
	const { requestedSettings, settingsError, isPersisting, isDirty } = useSelect(
		select => {
			const { getLastSettingsError, getSettingsForKeys, getIsDirty, getIsPersisting } = select(
				STORE_NAME
			);
			return {
				requestedSettings: getSettingsForKeys( settingsKeys ),
				settingsError: Boolean( getLastSettingsError() ),
				isPersisting: getIsPersisting(),
				isDirty: getIsDirty( settingsKeys ),
			};
		},
		[ settingsKeys ]
	);
	const { persistSettings, updateAndPersistSettings, updateSettings } = useDispatch( STORE_NAME );

	return {
		settingsError,
		isPersisting,
		isDirty,
		...requestedSettings,
		persistSettings: useCallback( () => persistSettings(), [] ),
		updateAndPersistSettings: useCallback( ( name, data ) => {
			updateAndPersistSettings( { [ name ]: data } );
		}, [] ),
		updateSettings: useCallback( ( name, data ) => {
			updateSettings( { [ name ]: data } );
		}, [] ),
	};
};
