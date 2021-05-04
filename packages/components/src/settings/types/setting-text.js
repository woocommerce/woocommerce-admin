/**
 * External dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { TextControl } from '../../index';

export const SettingText = ( { field } ) => {
	const { id, label, value } = field;
	const [ fieldValue, setFieldValue ] = useState( value );

	return (
		<TextControl
			onChange={ setFieldValue }
			key={ id }
			value={ fieldValue }
			label={ label }
			required
		/>
	);
};
