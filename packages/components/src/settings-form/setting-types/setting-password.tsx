/**
 * Internal dependencies
 */
import { SettingText } from './setting-text';
import { ControlProps } from '../types';

export const SettingPassword = ( props: ControlProps ): JSX.Element => {
	return <SettingText { ...props } type="password" />;
};
