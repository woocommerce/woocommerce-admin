/**
 * External dependencies
 */
import { SettingsForm } from '@woocommerce/components';
import { useState } from '@wordpress/element';

const SettingsExample = () => {
	const [ submitted, setSubmitted ] = useState( null );
	return (
		<>
			<SettingsForm
				fields={ [
					{
						id: 'user_name',
						label: 'Username',
						description: 'This is your username.',
						type: 'text',
						value: '',
						default: '',
						tip: 'This is your username.',
						placeholder: '',
					},
					{
						id: 'pass_phrase',
						label: 'Passphrase',
						description:
							'* Required. Needed to ensure the data passed through is secure.',
						type: 'password',
						value: '',
						default: '',
						tip:
							'* Required. Needed to ensure the data passed through is secure.',
						placeholder: '',
					},
					{
						id: 'button_type',
						label: 'Button Type',
						description:
							'Select the button type you would like to show.',
						type: 'select',
						value: 'buy',
						default: 'buy',
						tip: 'Select the button type you would like to show.',
						placeholder: '',
						options: {
							default: 'Default',
							buy: 'Buy',
							donate: 'Donate',
							branded: 'Branded',
							custom: 'Custom',
						},
					},
					{
						id: 'checkbox_sample',
						label: 'Checkbox style',
						description: 'This is an example checkbox field.',
						type: 'checkbox',
						value: 'yes',
						default: 'yes',
						tip: 'This is an example checkbox field.',
						placeholder: '',
					},
				] }
				onSubmit={ ( values ) => setSubmitted( values ) }
			/>
			<h4>Submitted:</h4>
			<p>{ submitted ? JSON.stringify( submitted, null, 3 ) : 'None' }</p>
		</>
	);
};

export const Basic = () => <SettingsExample />;

export default {
	title: 'WooCommerce Admin/components/SettingsForm',
	component: SettingsForm,
};
