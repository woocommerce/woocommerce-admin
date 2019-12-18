/** @format */
/**
 * External dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { createHigherOrderComponent } from '@wordpress/compose';
import { partial } from 'lodash';

/**
 * Internal dependencies
 */
import { STORE_NAME } from './constants';

export const withSettings = group =>
	createHigherOrderComponent(
		WrappedComponent => props => {
			const { persistSettingsForGroup } = useDispatch( STORE_NAME );
			const { getSetting, setSetting, getSettingError, isRequesting } = useSelect( select => {
				const store = select( STORE_NAME );
				return {
					isRequesting: store.isResolving( 'setSetting', [ group ] ),
					getSetting: partial( store.getSetting, group ),
					setSetting: partial( persistSettingsForGroup, group ),
					getSettingError: () => {
						return Boolean( store.getLastSettingsErrorForGroup( group ) );
					},
				};
			}, [] );

			return (
				<WrappedComponent
					getSetting={ getSetting }
					setSetting={ setSetting }
					getSettingError={ getSettingError }
					isRequestingSetting={ isRequesting }
					{ ...props }
				/>
			);
		},
		'withSettings'
	);
