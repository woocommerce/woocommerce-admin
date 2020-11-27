/**
 * External dependencies
 */
import { CheckboxControl } from '@wordpress/components';

// TODO use links/i18n
const installableExtensions = [
	{
		title: 'Get the basics',
		plugins: [
			{
				name: 'woocommerce-payments',
				description: 'Accept credit cards with WooCommerce Payments',
			},
			{
				name: 'woocommerce-shipping',
				description: 'Print shipping labels WooCommerce Shipping',
			},
			{
				name: 'jetpack',
				description: 'Enhance speed and security with Jetpack',
			},
		],
	},
	{
		title: 'Grow your store',
		plugins: [
			{ name: 'facebook', description: 'Market on Facebook' },
			{
				name: 'google-ads',
				description: 'Drive sales with Google Ads',
			},
			{
				name: 'mailchimp',
				description: 'Contact customers with Mailchimp',
			},
			{
				name: 'creative-mail',
				description: 'Reach new customers with Creative Mail',
			},
		],
	},
];

export const SelectiveExtensionsBundle = ( { getInputProps, values } ) => {
	return installableExtensions.map( ( { plugins } ) =>
		plugins.map( ( { description, name } ) => (
			<div
				key={ name }
				className="woocommerce-admin__business-details__selective-extensions-bundle__extension"
			>
				<CheckboxControl
					id="woocommerce-business-extensions__checkbox"
					{ ...getInputProps( 'install_extensions' ) }
				/>
				{ description }
			</div>
		) )
	);
};
