/**
 * External dependencies
 */
import { useState } from '@wordpress/element';
import { CheckboxControl } from '@wordpress/components';
import { Link } from '@woocommerce/components';
import { __ } from '@wordpress/i18n';
import { Icon, chevronDown, chevronUp } from '@wordpress/icons';
import interpolateComponents from 'interpolate-components';

/**
 * Internal dependencies
 */
import './style.scss';

const generatePluginDescriptionWithLink = ( description, productName ) => {
	return interpolateComponents( {
		mixedString: description,
		components: {
			link: (
				<Link
					type="external"
					target="_blank"
					className="woocommerce-admin__business-details__selective-extensions-bundle__link"
					href={ `https://woocommerce.com/products/${ productName }` }
				/>
			),
		},
	} );
};

// TODO use links/i18n
const installableExtensions = [
	{
		title: __( 'Get the basics', 'woocommerce-admin' ),
		plugins: [
			{
				name: 'woocommerce-payments',
				description: generatePluginDescriptionWithLink(
					__(
						'Accept credit cards with {{link}}WooCommerce Payments{{/link}}',
						'woocommerce-admin'
					),
					'woocommerce-payments'
				),
			},
			{
				name: 'woocommerce-shipping',
				description: generatePluginDescriptionWithLink(
					__(
						'Print shipping labels with {{link}}WooCommerce Shipping{{/link}}',
						'woocommerce-admin'
					),
					'shipping'
				),
			},
			{
				name: 'jetpack',
				description: generatePluginDescriptionWithLink(
					__(
						'Enhance speed and security with {{link}}Jetpack{{/link}}',
						'woocommerce-admin'
					),
					'jetpack'
				),
			},
		],
	},
	{
		title: 'Grow your store',
		plugins: [
			{
				name: 'facebook',
				description: generatePluginDescriptionWithLink(
					__(
						'Market on {{link}}Facebook{{/link}}',
						'woocommerce-admin'
					),
					'facebook'
				),
			},
			{
				name: 'google-ads',
				description: generatePluginDescriptionWithLink(
					__(
						'Drive sales with {{link}}Google Ads{{/link}}',
						'woocommerce-admin'
					),
					'google-ads-and-marketing'
				),
			},
			{
				name: 'mailchimp',
				description: generatePluginDescriptionWithLink(
					__(
						'Contact customers with {{link}}Mailchimp{{/link}}',
						'woocommerce-admin'
					),
					'mailchimp-for-woocommerce'
				),
			},
			{
				name: 'creative-mail',
				description: generatePluginDescriptionWithLink(
					__(
						'Reach new customers with {{link}}Creative Mail{{/link}}',
						'woocommerce-admin'
					),
					'creative-mail-for-woocommerce'
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
	const [ showExtensions, setShowExtensions ] = useState( false );

	// TODO, map the different extension slugs to each checkbox, turn them all on/off when
	// checking `install_extensions`
	return (
		<div className="woocommerce-admin__business-details__selective-extensions-bundle">
			<div className="woocommerce-admin__business-details__selective-extensions-bundle__extension">
				<CheckboxControl
					id="woocommerce-business-extensions__checkbox"
					{ ...getInputProps( 'install_extensions' ) }
				/>
				<p className="woocommerce-admin__business-details__selective-extensions-bundle__description">
					{ __( 'Add recommended business features to my site' ) }
				</p>
				<Icon
					className="woocommerce-admin__business-details__selective-extensions-bundle__expand"
					icon={ showExtensions ? chevronUp : chevronDown }
					onClick={ () => {
						setShowExtensions( ! showExtensions );
					} }
				/>
			</div>
			{ showExtensions &&
				installableExtensions.map( ( { plugins, title } ) => (
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
								<p className="woocommerce-admin__business-details__selective-extensions-bundle__description">
									{ description }
								</p>
								<FreeBadge />
							</div>
						) ) }
					</div>
				) ) }
		</div>
	);
};
