/**
 * External dependencies
 */
import { CheckboxControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { ControlProps } from '../types';

export const SettingCheckbox = ( {
	field,
	onChange,
}: ControlProps ): JSX.Element => {
	const { label, description, id } = field;

	return (
		<CheckboxControl
			onChange={ () => onChange( id ) }
			title={ description }
			label={ label }
		/>
	);
};
