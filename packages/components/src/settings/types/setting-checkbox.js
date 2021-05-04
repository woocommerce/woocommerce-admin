/**
 * Internal dependencies
 */
import { CheckboxControl } from '@wordpress/components';

export const SettingCheckbox = ( { field } ) => {
	return <TextControl key={ field.id } label={ field.label } required />;
};
