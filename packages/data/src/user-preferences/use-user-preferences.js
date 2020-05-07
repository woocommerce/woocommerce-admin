/**
 * External dependencies
 */
import { mapValues, pick } from 'lodash';

/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from './constants';

export const useUserPreferences = ( preferenceKeys = [] ) => {
	const { isRequesting, userPreferences } = useSelect( ( select ) => {
		const {
			getCurrentUser,
			hasStartedResolution,
			hasFinishedResolution,
		} = select( STORE_NAME );

		const user = getCurrentUser();
		let wooMeta = user.woocommerce_meta || {};

		if ( preferenceKeys.length ) {
			wooMeta = pick( wooMeta, preferenceKeys );
		}

		const userData = mapValues( wooMeta, ( data ) => {
			if ( ! data || data.length === 0 ) {
				return '';
			}
			return JSON.parse( data );
		} );

		return {
			isRequesting:
				hasStartedResolution( 'getCurrentUser' ) &&
				! hasFinishedResolution( 'getCurrentUser' ),
			userPreferences: userData,
		};
	} );

	return {
		isRequesting,
		...userPreferences,
	};
};
