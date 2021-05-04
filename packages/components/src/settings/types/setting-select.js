/**
 * External dependencies
 */
import { TextControl } from '@wordpress/components';

export const SettingSelect = ( { field } ) => {
	const { description, id, label, value } = field;
	return (
		<TextControl
			help={ description }
			key={ id }
			label={ label }
			value={ value }
			onChange={ ( ...args ) => {
				console.info( 'onChange', args );
			} }
			required
		/>
	);
};
