/**
 * External dependencies
 */
import { CheckboxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './style.scss';

// TODO use links/i18n
const installableExtensions = [
	{
		title: __( 'Get the basics', 'woocommerce-admin' ),
		plugins: [
			{
				name: 'woocommerce-payments',
				description: __(
					'Accept credit cards with WooCommerce Payments',
					'woocommerce-admin'
				),
			},
			{
				name: 'woocommerce-shipping',
				description: __(
					'Print shipping labels with WooCommerce Shipping',
					'woocommerce-admin'
				),
			},
			{
				name: 'jetpack',
				description: __(
					'Enhance speed and security with Jetpack',
					'woocommerce-admin'
				),
			},
		],
	},
	{
		title: 'Grow your store',
		plugins: [
			{
				name: 'facebook',
				description: __( 'Market on Facebook', 'woocommerce-admin' ),
			},
			{
				name: 'google-ads',
				description: __(
					'Drive sales with Google Ads',
					'woocommerce-admin'
				),
			},
			{
				name: 'mailchimp',
				description: __(
					'Contact customers with Mailchimp',
					'woocommerce-admin'
				),
			},
			{
				name: 'creative-mail',
				description: __(
					'Reach new customers with Creative Mail',
					'woocommerce-admin'
				),
			},
		],
	},
];

const FreeBadge = () => {
	return (
		<div className="woocommerce-admin__business-details__free-badge">
			{ __( 'Free', 'woocommerce-admin' ) }
		</div>
	);
};

export const SelectiveExtensionsBundle = ( { getInputProps, values } ) => {
	return (
		<div className="woocommerce-admin__business-details__selective-extensions-bundle">
			{ installableExtensions.map( ( { plugins, title } ) => (
				<div key={ title }>
					<div className="woocommerce-admin__business-details__selective-extensions-bundle__category">
						{ title }
					</div>
					{ plugins.map( ( { description, name } ) => (
						<div
							key={ name }
							className="woocommerce-admin__business-details__selective-extensions-bundle__extension"
						>
							<CheckboxControl
								id="woocommerce-business-extensions__checkbox"
								{ ...getInputProps( 'install_extensions' ) }
							/>
							{ description }
							<FreeBadge />
						</div>
					) ) }
				</div>
			) ) }
		</div>
	);
};
