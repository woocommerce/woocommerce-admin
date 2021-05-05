/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState } from '@wordpress/element';
import { Text } from '@woocommerce/experimental';

/**
 * Internal dependencies
 */
import { Form, Spinner } from '../index';
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
	apiPath = '',
	settingsTransformCallback = ( settings ) => settings,
	isBusy,
	onSubmitCallback,
	buttonLabel,
	onButtonClickCallback,
	validate = () => {},
} ) => {
	const [ state, setState ] = useState( 'loading' );
	const [ fields, setFields ] = useState( null );

	useEffect( () => {
		apiFetch( {
			path: apiPath,
		} )
			.then( ( results ) => {
				setFields( settingsTransformCallback( results.settings ) );
				setState( 'loaded' );
			} )
			.catch( ( e ) => {
				setState( 'error' );
				/* eslint-disable no-console */
				console.error( e );
				/* eslint-enable no-console */
			} );
	}, [] );

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

	if ( state === 'error' ) {
		return (
			<Text>
				{ __( 'There was an error loading the payment fields' ) }
			</Text>
		);
	}

	if ( state === 'loading' ) {
		return <Spinner />;
	}

	return (
		<Form
			initialValues={ getInitialConfigValues() }
			onSubmitCallback={ ( values ) => {
				return onSubmitCallback( values, fields );
			} }
			validate={ ( values ) => validate( values, fields ) }
		>
			{ ( { getInputProps, handleSubmit } ) => {
				return (
					<div className="woocommerce-component-settings">
						{ ( fields || [] ).map( ( field ) => {
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
