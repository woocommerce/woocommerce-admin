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
import { __, _n, sprintf } from '@wordpress/i18n';
import { Icon, chevronDown, chevronUp } from '@wordpress/icons';
import interpolateComponents from 'interpolate-components';
import {
	pluginNames,
	SETTINGS_STORE_NAME,
	ONBOARDING_STORE_NAME,
} from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { AppIllustration } from '../app-illustration';
import './style.scss';
import { setAllPropsToValue } from '../../../../../../lib/collections';

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
				visible: true,
			},
			{
				slug: 'woocommerce-services:shipping',
				description: generatePluginDescriptionWithLink(
					__(
						'Print shipping labels with {{link}}WooCommerce Shipping{{/link}}',
						'woocommerce-admin'
					),
					'shipping'
				),
				visible: true,
			},
			{
				slug: 'woocommerce-services:tax',
				description: generatePluginDescriptionWithLink(
					__(
						'Get automated sales tax with {{link}}WooCommerce Tax{{/link}}',
						'woocommerce-admin'
					),
					'tax'
				),
				visible: true,
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
				visible: true,
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
				visible: true,
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
				visible: true,
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
				visible: true,
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
				visible: true,
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
						/* translators: %s: a comma separated list of plugins, e.g. Jetpack, Woocommerce Shipping */
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

	const installingJetpackOrWcShipping =
		extensions.includes( 'jetpack' ) ||
		extensions.includes( 'woocommerce-shipping' );

	const accountRequiredText = __(
		'User accounts are required to use these features.',
		'woocommerce-admin'
	);
	return (
		<div className="woocommerce-profile-wizard__footnote">
			<Text variant="caption" as="p">
				{ sprintf(
					/* translators: %1$s: a comma separated list of plugins, e.g. Jetpack, Woocommerce Shipping, %2$s: text: 'User accounts are required to use these features.'  */
					_n(
						'The following plugin will be installed for free: %1$s. %2$s',
						'The following plugins will be installed for free: %1$s. %2$s',
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

const BundleExtensionCheckbox = ( { onChange, description, isChecked } ) => {
	return (
		<div className="woocommerce-admin__business-details__selective-extensions-bundle__extension">
			<CheckboxControl
				id="woocommerce-business-extensions__checkbox"
				checked={ isChecked }
				onChange={ onChange }
			/>
			<p className="woocommerce-admin__business-details__selective-extensions-bundle__description">
				{ description }
			</p>
			<FreeBadge />
		</div>
	);
};

const determineShippingAndTaxInclusion = ( country, productTypes ) => {
	// Exclude the WooCommerce Shipping mention if the user is not in the US.
	// Exclude the WooCommerce Shipping mention if the user is in the US but
	// only selected digital products in the Product Types step.
	let shippingVisibility = true;
	if (
		country !== 'US' ||
		( country === 'US' &&
			productTypes.length === 1 &&
			productTypes[ 0 ] === 'downloads' )
	) {
		shippingVisibility = false;
	}

	installableExtensions[ 0 ].plugins.forEach( ( plugin ) => {
		if ( plugin.slug === 'woocommerce-services:shipping' ) {
			plugin.visible = shippingVisibility;
		}
	} );

	const taxExtensionAllowedCountries = [
		'US',
		'FR',
		'GB',
		'DE',
		'CA',
		'PL',
		'AU',
		'GR',
		'BE',
		'PT',
		'DK',
		'SE',
	];

	let taxVisibility = true;
	// Exclude the WooCommerce Tax if the user is not in one of the following countries:
	// US | FR | GB | DE | CA | PL | AU | GR | BE | PT | DK | SE
	if ( ! taxExtensionAllowedCountries.includes( country ) ) {
		taxVisibility = false;
	}

	installableExtensions[ 0 ].plugins.forEach( ( plugin ) => {
		if ( plugin.slug === 'woocommerce-services:tax' ) {
			plugin.visible = taxVisibility;
		}
	} );
};

const SelectiveExtensionsBundle = ( {
	isInstallingActivating,
	onSubmit,
	country,
	productTypes,
} ) => {
	const [ showExtensions, setShowExtensions ] = useState( false );
	const [ values, setValues ] = useState( initialValues );

	determineShippingAndTaxInclusion( country, productTypes );

	const getCheckboxChangeHandler = ( slug ) => {
		return ( checked ) => {
			const newState = {
				...values,
				[ slug ]: checked,
			};

			const allExtensionsDisabled =
				Object.entries( newState ).filter( ( [ , val ] ) => val )
					.length === 1 && newState.install_extensions;

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
		};
	};

	return (
		<div className="woocommerce-profile-wizard__business-details__free-features">
			<Card>
				<div className="woocommerce-profile-wizard__business-details__free-features__illustration">
					<AppIllustration />
				</div>
				<div className="woocommerce-admin__business-details__selective-extensions-bundle">
					<div className="woocommerce-admin__business-details__selective-extensions-bundle__extension">
						<CheckboxControl
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

								if ( ! showExtensions ) {
									// only record the accordion click when the accordion is opened.
									recordEvent(
										'storeprofiler_store_business_features_accordion_click'
									);
								}
							} }
						/>
					</div>
					{ showExtensions &&
						installableExtensions.map( ( { plugins, title } ) => (
							<div key={ title }>
								<div className="woocommerce-admin__business-details__selective-extensions-bundle__category">
									{ title }
								</div>
								{ plugins
									.filter(
										( plugin ) => plugin.visible === true
									)
									.map( ( { description, slug } ) => (
										<BundleExtensionCheckbox
											key={ slug }
											description={ description }
											isChecked={ values[ slug ] }
											onChange={ getCheckboxChangeHandler(
												slug
											) }
										/>
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

export default compose(
	withSelect( ( select ) => {
		const { general: generalSettings } = select(
			SETTINGS_STORE_NAME
		).getSettings( 'general' );

		const countryAndState =
			generalSettings.woocommerce_default_country || '';
		const country = countryAndState.split( ':' )[ 0 ];

		const { getProfileItems } = select( ONBOARDING_STORE_NAME );
		const productTypes = getProfileItems().product_types;

		return {
			country,
			productTypes,
		};
	} )
)( SelectiveExtensionsBundle );
