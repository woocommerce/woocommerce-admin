/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { Button, Card, CardBody, CardFooter } from '@wordpress/components';
import { useEffect, useMemo, useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { filter } from 'lodash';
import interpolateComponents from 'interpolate-components';
import { H, Link } from '@woocommerce/components';
import {
	pluginNames,
	ONBOARDING_STORE_NAME,
	PLUGINS_STORE_NAME,
	OPTIONS_STORE_NAME,
} from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import { Text } from '@woocommerce/experimental';

/**
 * Internal dependencies
 */
import { createNoticesFromResponse } from '../../../lib/notices';
import Logo from './logo';
import ManagementIcon from './images/management';
import SalesTaxIcon from './images/sales_tax';
import ShippingLabels from './images/shipping_labels';
import SpeedIcon from './images/speed';

export const Benefits = ( { goToNextStep } ) => {
	const {
		activePlugins,
		isProfileItemsError,
		isUpdatingProfileItems,
	} = useSelect( ( select ) => {
		const { getOnboardingError, isOnboardingRequesting } = select(
			ONBOARDING_STORE_NAME
		);
		const { getActivePlugins } = select( PLUGINS_STORE_NAME );

		return {
			activePlugins: getActivePlugins(),
			isProfileItemsError: Boolean(
				getOnboardingError( 'updateProfileItems' )
			),
			isUpdatingProfileItems: isOnboardingRequesting(
				'updateProfileItems'
			),
		};
	} );

	const { createNotice } = useDispatch( 'core/notices' );
	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );
	const { updateProfileItems } = useDispatch( ONBOARDING_STORE_NAME );
	const { installAndActivatePlugins } = useDispatch( PLUGINS_STORE_NAME );

	const pluginsRemaining = [ 'jetpack', 'woocommerce-services' ].filter(
		( plugin ) => ! activePlugins.includes( plugin )
	);

	// Cache the initial plugin list so we don't change benefits midway through activation.
	const pluginsToInstall = useMemo( () => pluginsRemaining, [] );
	const [ isInstalling, setIsInstalling ] = useState( false );

	const isJetpackActive = pluginsToInstall
		? pluginsToInstall.includes( 'jetpack' )
		: false;
	const isWcsActive = pluginsToInstall
		? pluginsToInstall.includes( 'woocommerce-services' )
		: false;

	useEffect( () => {
		recordEvent( 'storeprofiler_plugins_to_install', {
			plugins: pluginsToInstall,
		} );
	}, [] );

	const skipPluginInstall = async () => {
		const plugins = isJetpackActive ? 'skipped-wcs' : 'skipped';
		await updateProfileItems( { plugins } );

		if ( isProfileItemsError ) {
			createNotice(
				'error',
				__(
					'There was a problem updating your preferences',
					'woocommerce-admin'
				)
			);
		} else {
			recordEvent( 'storeprofiler_install_plugins', {
				install: false,
				plugins,
			} );
		}

		goToNextStep();
	};

	const startPluginInstall = () => {
		const plugins = isJetpackActive ? 'installed-wcs' : 'installed';

		setIsInstalling( true );

		recordEvent( 'storeprofiler_install_plugins', {
			install: true,
			plugins,
		} );

		Promise.all( [
			pluginsToInstall.length
				? installAndActivatePlugins( pluginsToInstall )
				: null,
			updateProfileItems( { plugins } ),
			updateOptions( {
				woocommerce_setup_jetpack_opted_in: true,
			} ),
		] )
			.then( () => {
				setIsInstalling( false );
				goToNextStep();
			} )
			.catch( ( pluginError, profileError ) => {
				if ( pluginError ) {
					createNoticesFromResponse( pluginError );
				}
				if ( profileError ) {
					createNotice(
						'error',
						__(
							'There was a problem updating your preferences',
							'woocommerce-admin'
						)
					);
				}
				setIsInstalling( false );
				goToNextStep();
			} );
	};

	const renderBenefit = ( benefit ) => {
		const { description, icon, title } = benefit;

		return (
			<div
				className="woocommerce-profile-wizard__benefit-card"
				key={ title }
			>
				{ icon }
				<div className="woocommerce-profile-wizard__benefit-card-content">
					<H className="woocommerce-profile-wizard__benefit-card-title">
						{ title }
					</H>
					<p>{ description }</p>
				</div>
			</div>
		);
	};

	const getBenefits = () => {
		return [
			{
				title: __( 'Store management on the go', 'woocommerce-admin' ),
				icon: <ManagementIcon />,
				description: __(
					'Your store in your pocket. Manage orders, receive sales notifications, and more. Only with a Jetpack connection.',
					'woocommerce-admin'
				),
				visible: ! isJetpackActive,
			},
			{
				title: __( 'Automated sales taxes', 'woocommerce-admin' ),
				icon: <SalesTaxIcon />,
				description: __(
					'Ensure that the correct rate of tax is charged on all of your orders automatically, and print shipping labels at home.',
					'woocommerce-admin'
				),
				visible: ! isWcsActive || ! isJetpackActive,
			},
			{
				title: __( 'Improved speed & security', 'woocommerce-admin' ),
				icon: <SpeedIcon />,
				description: __(
					'Automatically block brute force attacks and speed up your store using our powerful, global server network to cache images.',
					'woocommerce-admin'
				),
				visible: ! isJetpackActive,
			},
			{
				title: __(
					'Print shipping labels at home',
					'woocommerce-admin'
				),
				icon: <ShippingLabels />,
				description: __(
					'Save time at the post office by printing shipping labels for your orders at home.',
					'woocommerce-admin'
				),
				visible: isJetpackActive && ! isWcsActive,
			},
		];
	};

	const renderBenefits = () => {
		return (
			<div className="woocommerce-profile-wizard__benefits">
				{ filter(
					getBenefits(),
					( benefit ) => benefit.visible
				).map( ( benefit ) => renderBenefit( benefit ) ) }
			</div>
		);
	};

	const pluginNamesString = pluginsToInstall
		.map( ( pluginSlug ) => pluginNames[ pluginSlug ] )
		.join( ' ' + __( 'and', 'woocommerce-admin' ) + ' ' );
	const isAcceptingTos = ! isWcsActive;
	const pluralizedPlugins = _n(
		'plugin',
		'plugins',
		pluginsToInstall.length,
		'woocommerce-admin'
	);

	return (
		<Card className="woocommerce-profile-wizard__benefits-card">
			<CardBody justify="center">
				<Logo />
				<div className="woocommerce-profile-wizard__step-header">
					<Text variant="title.small" as="h2">
						{ sprintf(
							__(
								'Enhance your store with %s',
								'woocommerce-admin'
							),
							pluginNamesString
						) }
					</Text>
				</div>

				{ renderBenefits() }
			</CardBody>
			<CardFooter isBorderless justify="center">
				<Button
					isPrimary
					isBusy={ isInstalling }
					disabled={ isUpdatingProfileItems || isInstalling }
					onClick={ startPluginInstall }
				>
					{ __( 'Yes please!', 'woocommerce-admin' ) }
				</Button>
				<Button
					isSecondary
					isBusy={ isUpdatingProfileItems && ! isInstalling }
					disabled={ isUpdatingProfileItems || isInstalling }
					className="woocommerce-profile-wizard__skip"
					onClick={ skipPluginInstall }
				>
					{ __( 'No thanks', 'woocommerce-admin' ) }
				</Button>
			</CardFooter>

			<CardFooter isBorderless justify="center">
				<p className="woocommerce-profile-wizard__benefits-install-notice">
					{ isAcceptingTos
						? interpolateComponents( {
								mixedString: sprintf(
									__(
										'%s %s will be installed & activated for free, and you agree to our {{link}}Terms of Service{{/link}}.',
										'woocommerce-admin'
									),
									pluginNamesString,
									pluralizedPlugins
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
						  } )
						: sprintf(
								__(
									'%s %s will be installed & activated for free.',
									'woocommerce-admin'
								),
								pluginNamesString,
								pluralizedPlugins
						  ) }
				</p>
			</CardFooter>
		</Card>
	);
};

export default Benefits;
