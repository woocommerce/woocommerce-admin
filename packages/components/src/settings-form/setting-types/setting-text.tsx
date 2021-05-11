/**
 * Internal dependencies
 */
import { TextControl } from '../../index';
import { Field } from '../types';

export const SettingText = ( {
	field,
	type = 'text',
	...props
}: {
	field: Field;
	type: 'text' | 'password';
} ): JSX.Element => {
	const { id, label, description } = field;

	return (
		<TextControl
			type={ type }
			title={ description }
			key={ id }
			label={ label }
			{ ...props }
		/>
	);
};
