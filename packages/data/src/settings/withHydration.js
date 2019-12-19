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

export default function withSettingsHydration( group ) {
	return OriginalComponent => {
		return ( props ) => {
			const settings = useRef( getAllSettings() );
			useSelect( ( select, registry ) => {
				if ( ! settings.current ) {
					return;
				}

				const { updateSettingsForGroup } = registry.dispatch(
					STORE_NAME
				);

				updateSettingsForGroup( group, settings.current );
			}, [] );

			return <OriginalComponent { ...props } />;
		};
	};
}
