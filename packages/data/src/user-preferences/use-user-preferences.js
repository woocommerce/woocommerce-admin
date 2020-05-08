/**
 * External dependencies
 */
import { mapValues, pick } from 'lodash';

/**
 * WordPress dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from './constants';

/**
 * Custom react hook for retrieving thecurrent user's WooCommerce preferences.
 * 
 * This is a wrapper around @wordpress/core-data's getCurrentUser() and saveUser().
 */
export const useUserPreferences = () => {
	// Use getCurrentUser() to get WooCommerce meta values.
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

	// Use saveUser() to update WooCommerce meta values.
	const { receiveCurrentUser, saveUser } = useDispatch( STORE_NAME );

	const updateUserPrefs = async ( { id, ...userData } ) => {
		// Whitelist our meta fields.
		const userDataFields = [
			'categories_report_columns',
			'coupons_report_columns',
			'customers_report_columns',
			'orders_report_columns',
			'products_report_columns',
			'revenue_report_columns',
			'taxes_report_columns',
			'variations_report_columns',
			'dashboard_sections',
			'dashboard_chart_type',
			'dashboard_chart_interval',
			'dashboard_leaderboard_rows',
			'activity_panel_inbox_last_read',
			'homepage_stats',
		];

		// Prep valid fields for update.
		const metaData = mapValues(
			pick( userData, userDataFields ),
			JSON.stringify
		);

		// Update the `woocommerce_meta` user field.
		const updatedUser = await saveUser( { id, woocommerce_meta: metaData } );

		// @todo - handle error updating here.
		// console.log( { updatedUser } );

		// Propogate the updated User object to the store.
		receiveCurrentUser( updatedUser );
	};

	return {
		isRequesting,
		...userPreferences,
		updateUserPrefs,
	};
};
