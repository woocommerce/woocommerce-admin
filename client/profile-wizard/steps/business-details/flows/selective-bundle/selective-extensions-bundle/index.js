/**
 * External dependencies
 */
import { useState } from '@wordpress/element';
import {
	Button,
	Card,
	CheckboxControl,
	__experimentalText as Text,
} from '@wordpress/components';
import { Link } from '@woocommerce/components';
import { __, _n } from '@wordpress/i18n';
import { Icon, chevronDown, chevronUp } from '@wordpress/icons';
import interpolateComponents from 'interpolate-components';
import { pluginNames } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import { AppIllustration } from '../app-illustration';
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

const installableExtensions = [
	{
		title: __( 'Get the basics', 'woocommerce-admin' ),
		plugins: [
			{
				slug: 'woocommerce-payments',
				description: generatePluginDescriptionWithLink(
					__(
						'Accept credit cards with {{link}}WooCommerce Payments{{/link}}',
						'woocommerce-admin'
					),
					'woocommerce-payments'
				),
			},
			{
				slug: 'woocommerce-services',
				description: generatePluginDescriptionWithLink(
					__(
						'Print shipping labels with {{link}}WooCommerce Shipping{{/link}}',
						'woocommerce-admin'
					),
					'shipping'
				),
			},
			{
				slug: 'jetpack',
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
				slug: 'facebook-for-woocommerce',
				description: generatePluginDescriptionWithLink(
					__(
						'Market on {{link}}Facebook{{/link}}',
						'woocommerce-admin'
					),
					'facebook'
				),
			},
			{
				slug: 'kliken-marketing-for-google',
				description: generatePluginDescriptionWithLink(
					__(
						'Drive sales with {{link}}Google Ads{{/link}}',
						'woocommerce-admin'
					),
					'google-ads-and-marketing'
				),
			},
			{
				slug: 'mailchimp-for-woocommerce',
				description: generatePluginDescriptionWithLink(
					__(
						'Contact customers with {{link}}Mailchimp{{/link}}',
						'woocommerce-admin'
					),
					'mailchimp-for-woocommerce'
				),
			},
			{
				slug: 'creative-mail-by-constant-contact',
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

const initialValues = installableExtensions.reduce(
	( acc, curr ) => {
		const plugins = curr.plugins.reduce( ( pluginAcc, { slug } ) => {
			return { ...pluginAcc, [ slug ]: true };
		}, {} );

		return {
			...acc,
			...plugins,
		};
	},
	{ install_extensions: true }
);

const FreeBadge = () => {
	return (
		<div className="woocommerce-admin__business-details__free-badge">
			{ __( 'Free', 'woocommerce-admin' ) }
		</div>
	);
};

// Set all props of an object to a value
const setAllPropsToValue = ( obj, value ) => {
	return Object.entries( obj ).reduce( ( acc, [ key ] ) => {
		return {
			...acc,
			[ key ]: value,
		};
	}, {} );
};

const renderBusinessExtensionHelpText = ( values, isInstallingActivating ) => {
	const extensions = Object.keys( values ).filter(
		( key ) => values[ key ] && key !== 'install_extensions'
	);

	if ( extensions.length === 0 ) {
		return null;
	}

	const extensionsList = extensions
		.map( ( extension ) => {
			return pluginNames[ extension ];
		} )
		.join( ', ' );

	if ( isInstallingActivating ) {
		return (
			<div className="woocommerce-profile-wizard__footnote">
				<Text variant="caption" as="p">
					{ sprintf(
						_n(
							'Installing the following plugin: %s',
							'Installing the following plugins: %s',
							extensions.length,
							'woocommerce-admin'
						),
						extensionsList
					) }
				</Text>
			</div>
		);
	}

	// TODO is this conditional ok, and is the existing copy ok?
	const installingJetpackOrWcShipping =
		extensions.includes( 'jetpack' ) ||
		extensions.includes( 'woocommerce-shipping' );

	// TODO - do we need to switch this off if no extensions are chosen?
	const accountRequiredText = __(
		'User accounts are required to use these features.',
		'woocommerce-admin'
	);
	return (
		<div className="woocommerce-profile-wizard__footnote">
			<Text variant="caption" as="p">
				{ sprintf(
					_n(
						'The following plugin will be installed for free: %s. %s',
						'The following plugins will be installed for free: %s. %s',
						extensions.length,
						'woocommerce-admin'
					),
					extensionsList,
					accountRequiredText
				) }
			</Text>
			{ installingJetpackOrWcShipping && (
				<Text variant="caption" as="p">
					{ interpolateComponents( {
						mixedString: __(
							'By installing Jetpack and WooCommerce Shipping plugins for free you agree to our {{link}}Terms of Service{{/link}}.',
							'woocommerce-admin'
						),
						components: {
							link: (
								<Link
									href="https://wordpress.com/tos/"
									target="_blank"
									type="external"
								/>
							),
						},
					} ) }
				</Text>
			) }
		</div>
	);
};

export const SelectiveExtensionsBundle = ( {
	isInstallingActivating,
	onSubmit,
} ) => {
	const [ showExtensions, setShowExtensions ] = useState( false );
	const [ values, setValues ] = useState( initialValues );

	return (
		<div className="woocommerce-profile-wizard__business-details__free-features">
			<Card>
				<div className="woocommerce-profile-wizard__business-details__free-features__illustration">
					<AppIllustration />
				</div>
				<div className="woocommerce-admin__business-details__selective-extensions-bundle">
					<div className="woocommerce-admin__business-details__selective-extensions-bundle__extension">
						<CheckboxControl
							id="woocommerce-business-extensions__checkbox"
							checked={ values.install_extensions }
							onChange={ ( checked ) => {
								setValues(
									setAllPropsToValue( values, checked )
								);
							} }
						/>
						<p className="woocommerce-admin__business-details__selective-extensions-bundle__description">
							{ __(
								'Add recommended business features to my site'
							) }
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
								{ plugins.map( ( { description, slug } ) => (
									<div
										key={ slug }
										className="woocommerce-admin__business-details__selective-extensions-bundle__extension"
									>
										<CheckboxControl
											id="woocommerce-business-extensions__checkbox"
											checked={ values[ slug ] }
											onChange={ ( checked ) => {
												const newState = {
													...values,
													[ slug ]: checked,
												};

												const allExtensionsDisabled =
													Object.entries(
														newState
													).filter(
														( [ , val ] ) => val
													).length === 1 &&
													newState.install_extensions;

												if ( allExtensionsDisabled ) {
													// If all the extensions are disabled then disable the "Install Extensions" checkbox too
													setValues( {
														...newState,
														install_extensions: false,
													} );
												} else {
													setValues( {
														...values,
														[ slug ]: checked,
														install_extensions: true,
													} );
												}
											} }
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
				<div className="woocommerce-profile-wizard__business-details__free-features__action">
					<Button
						onClick={ () => {
							onSubmit( values );
						} }
						isBusy={ isInstallingActivating }
						isPrimary
					>
						Continue
					</Button>
				</div>
			</Card>
			{ renderBusinessExtensionHelpText(
				values,
				isInstallingActivating
			) }
		</div>
	);
};
