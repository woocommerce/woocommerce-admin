/**
 * External dependencies
 */
import { CheckboxControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { Field } from '../types';

export const SettingCheckbox = ( {
	field,
	...props
}: {
	field: Field;
} ): JSX.Element => {
	const { label, id, description } = field;

	return (
		<CheckboxControl
			title={ description }
			key={ id }
			label={ label }
			{ ...props }
		/>
	);
};
