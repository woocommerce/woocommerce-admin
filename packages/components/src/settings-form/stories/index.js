/**
 * External dependencies
 */
import { SettingsForm } from '@woocommerce/components';

const SettingsExample = () => (
	<SettingsForm
		fields={ [
			{
				id: 'testmode',
				label: 'PayFast Sandbox',
				description: 'Place the payment gateway in development mode.',
				type: 'checkbox',
				value: 'yes',
				default: 'yes',
				tip: 'Place the payment gateway in development mode.',
				placeholder: '',
			},
			{
				id: 'merchant_id',
				label: 'Merchant ID',
				description: 'This is the merchant ID, received from PayFast.',
				type: 'text',
				value: '',
				default: '',
				tip: 'This is the merchant ID, received from PayFast.',
				placeholder: '',
			},
			{
				id: 'merchant_key',
				label: 'Merchant Key',
				description: 'This is the merchant key, received from PayFast.',
				type: 'text',
				value: '',
				default: '',
				tip: 'This is the merchant key, received from PayFast.',
				placeholder: '',
			},
			{
				id: 'pass_phrase',
				label: 'Passphrase',
				description:
					'* Required. Needed to ensure the data passed through is secure.',
				type: 'text',
				value: '',
				default: '',
				tip:
					'* Required. Needed to ensure the data passed through is secure.',
				placeholder: '',
			},
		] }
	/>
);

export const Basic = () => <SettingsExample />;

export default {
	title: 'WooCommerce Admin/components/Settings',
	component: SettingsForm,
};
