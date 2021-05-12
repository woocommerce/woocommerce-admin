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
	key,
}: ControlProps ): JSX.Element => {
	const { label, description } = field;

	return (
		<CheckboxControl
			onChange={ () => {} }
			key={ key }
			title={ description }
			label={ label }
		/>
	);
};
