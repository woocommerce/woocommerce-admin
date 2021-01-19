/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { SETTINGS_STORE_NAME } from '@woocommerce/data';
import { Spinner } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { SettingOptions } from './setting-options';
import './style.scss';

export const SettingsPage = ( { params } ) => {
	const group = params.page;
	const { settingOptions, isLoading } = useSelect( ( select ) => {
		return {
			isLoading: ! select(
				SETTINGS_STORE_NAME
			).hasFinishedResolution( 'getSettingOptions', [ group ] ),
			settingOptions:
				select( SETTINGS_STORE_NAME ).getSettingOptions( group ) || {},
		};
	} );

	if ( isLoading ) {
		return <Spinner />;
	}

	return <SettingOptions options={ settingOptions[ group ] } />;
};

export default SettingsPage;
