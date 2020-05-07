/**
 * External dependencies
 */
import { mapValues } from 'lodash';

/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from './constants';

/**
 * Custom react hook for retrieving thecurrent user's WooCommerce preferences.
 * 
 * This is a wrapper around @wordpress/core-data's getCurrentUser().
 */
export const useUserPreferences = () => {
	const { isRequesting, userPreferences } = useSelect(
		( select ) => {
			const {
				getCurrentUser,
				hasStartedResolution,
				hasFinishedResolution,
			} = select( STORE_NAME );

			// Retrieve the current user from the @wordpress/core-data store.
			const user = getCurrentUser();
			const wooMeta = user.woocommerce_meta || {};

			// JSON decode the WooCommerce meta values.
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
		}
	);

	return {
		isRequesting,
		...userPreferences,
	};
};
