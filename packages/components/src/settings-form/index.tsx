/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Form } from '../index';
import {
	TextField,
	PasswordField,
	CheckboxField,
	SelectField,
} from './field-types';

import { Field, FormInputProps } from './types';

type SettingsFormProps = {
	fields: Field[] | { [ key: string ]: Field };
	validate: ( values: Record< string, string > ) => Record< string, string >;
	isBusy?: boolean;
	onSubmit?: ( values: Record< string, string > ) => void;
	onButtonClick?: () => void;
	onChange?: (
		value: Record< string, string >,
		values: Record< string, string >[],
		result: boolean
	) => void;
	buttonLabel?: string;
};

const fieldTypeMap = {
	text: TextField,
	password: PasswordField,
	checkbox: CheckboxField,
	select: SelectField,
	default: TextField,
};

export const SettingsForm: React.FC< SettingsFormProps > = ( {
	fields: baseFields = [],
	isBusy = false,
	onSubmit = () => {},
	onButtonClick = () => {},
	onChange = () => {},
	validate = () => ( {} ),
	buttonLabel = __( 'Proceed', 'woocommerce-admin' ),
} ) => {
	// Support accepting fields in the format provided by the API (object), but transform to Array
	const fields =
		baseFields instanceof Array ? baseFields : Object.values( baseFields );

	const getInitialConfigValues = () =>
		fields.reduce(
			( data, field ) => ( {
				...data,
				[ field.id ]:
					field.type === 'checkbox'
						? field.value === 'yes'
						: field.value,
			} ),
			{}
		);

	return (
		<Form
			initialValues={ getInitialConfigValues() }
			onChangeCallback={ onChange }
			onSubmitCallback={ onSubmit }
			validate={ validate }
		>
			{ ( {
				getInputProps,
				handleSubmit,
			}: {
				getInputProps: ( name: string ) => FormInputProps;
				handleSubmit: () => void;
			} ) => {
				return (
					<div className="woocommerce-component-settings">
						{ fields.map( ( field ) => {
							if (
								field.type &&
								! ( field.type in fieldTypeMap )
							) {
								/* eslint-disable no-console */
								console.warn(
									`Field type of ${ field.type } not current supported in SettingsForm component`
								);
								/* eslint-enable no-console */
								return null;
							}

							const Control =
								fieldTypeMap[ field.type || 'default' ];
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
							onClick={ () => {
								handleSubmit();
								onButtonClick();
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
