/**
 * External dependencies
 */
import {
	CheckboxControl,
	SelectControl,
	TextareaControl,
	TextControl,
} from '@wordpress/components';
import { NumberControl } from '@woocommerce/experimental';

export const SettingOption = ( {
	description,
	label,
	onChange = () => {},
	options,
	placeholder,
	type,
	value,
} ) => {
	if ( ! type ) {
		return null;
	}

	const renderControl = () => {
		if ( type === 'text' || type === 'password' ) {
			return (
				<TextControl
					value={ value }
					onChange={ onChange }
					placeholder={ placeholder }
					type={ type }
				/>
			);
		}

		if ( type === 'password' ) {
			return (
				<TextControl
					value={ value }
					onChange={ onChange }
					placeholder={ placeholder }
				/>
			);
		}

		if ( type === 'textarea' ) {
			return (
				<TextareaControl
					help={ description }
					value={ value }
					onChange={ onChange }
					rows="5"
				/>
			);
		}

		if ( type === 'checkbox' ) {
			return (
				<CheckboxControl
					label={ description }
					onChange={ onChange }
					checked={ value === 'yes' }
				/>
			);
		}

		if ( type === 'select' ) {
			return (
				<SelectControl
					value={ value }
					onChange={ onChange }
					options={ Object.keys( options ).map( ( option ) => {
						return {
							label: options[ option ],
							value: option,
						};
					} ) }
					multiple={ type === 'multiselect' }
				/>
			);
		}

		if ( type === 'number' ) {
			return <NumberControl value={ value } onChange={ onChange } />;
		}

		return null;
	};

	return (
		<div className="woocommerce-admin-setting-option">
			<div className="woocommerce-admin-setting-option__label">
				{ label }
			</div>
			<div className="woocommerce-admin-setting-option__description">
				{ description }
			</div>
			<div className="woocommerce-admin-setting-option__control">
				{ renderControl() }
			</div>
		</div>
	);
};

export default SettingOption;
