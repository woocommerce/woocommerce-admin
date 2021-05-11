/**
 * Internal dependencies
 */
import { SettingText } from './setting-text';

export const SettingPassword = ( props ): JSX.Element => {
	return <SettingText { ...props } type="password" />;
};
