/**
 * External dependencies
 */
import { cloneElement } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { SettingText } from './setting-text';

export const SettingPassword = ( { field } ) => {
	return cloneElement( SettingText, { type: 'password', field } );
};
