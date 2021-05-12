/**
 * Internal dependencies
 */
import { TextControl } from '../../index';
import { ControlProps } from '../types';

export const SettingText = ( {
	field,
	type = 'text',
	key,
	...props
}: ControlProps & { type?: string } ): JSX.Element => {
	const { label, description } = field;

	return (
		<TextControl
			type={ type }
			title={ description }
			key={ key }
			label={ label }
			{ ...props }
		/>
	);
};
