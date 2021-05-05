/**
 * External dependencies
 */
import { Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { Form } from '../index';
import {
	SettingText,
	SettingPassword,
	SettingCheckbox,
	SettingSelect,
} from './types';

const typeMap = {
	text: SettingText,
	password: SettingPassword,
	checkbox: SettingCheckbox,
	select: SettingSelect,
};

export const Settings = ( {
	fields: baseFields = [],
	isBusy,
	onSubmitCallback = () => {},
	onButtonClickCallback = () => {},
	onChangeCallback = () => {},
	validate = () => {},
	buttonLabel,
} ) => {
	// Support accepting fields in the format provided by the API (object), but transform to Array
	const fields =
		baseFields instanceof Array ? baseFields : Object.values( baseFields );

	const getInitialConfigValues = () => {
		if ( fields ) {
			return fields.reduce( ( data, field ) => {
				return {
					...data,
					[ field.id ]: field.value,
				};
			}, {} );
		}
	};

	return (
		<Form
			initialValues={ getInitialConfigValues() }
			onChangeCallback={ onChangeCallback }
			onSubmitCallback={ onSubmitCallback }
			validate={ validate }
		>
			{ ( { getInputProps, handleSubmit } ) => {
				return (
					<div className="woocommerce-component-settings">
						{ fields.map( ( field ) => {
							const Control = typeMap[ field.type ];
							return (
								<Control
									key={ field.id }
									field={ field }
									{ ...getInputProps( field.id ) }
								/>
							);
						} ) }

						<Button
							isPrimary
							isBusy={ isBusy }
							onClick={ ( event ) => {
								handleSubmit( event );
								onButtonClickCallback();
							} }
						>
							{ buttonLabel }
						</Button>
					</div>
				);
			} }
		</Form>
	);
};
