/**
 * External dependencies
 */
import { useEffect, useMemo, useState } from '@wordpress/element';
import { Button, Card, CheckboxControl, Spinner } from '@wordpress/components';
import { Text } from '@woocommerce/experimental';
import { Link } from '@woocommerce/components';
import { __, _n, sprintf } from '@wordpress/i18n';
import { Icon, chevronDown, chevronUp } from '@wordpress/icons';
import interpolateComponents from 'interpolate-components';
import { pluginNames, ONBOARDING_STORE_NAME } from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { AppIllustration } from '../app-illustration';
import './style.scss';
import sanitizeHTML from '~/lib/sanitize-html';
import { setAllPropsToValue } from '~/lib/collections';
import { getCountryCode } from '../../../../../../dashboard/utils';

const ALLOWED_PLUGIN_CATEGORIES = [ 'obw/basics', 'obw/grow' ];

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
		.reduce( ( uniqueExtensionList, extension ) => {
			const extensionName = pluginNames[ extension ];
			return uniqueExtensionList.includes( extensionName )
				? uniqueExtensionList
				: [ ...uniqueExtensionList, extensionName ];
		}, [] )
		.join( ', ' );

	if ( isInstallingActivating ) {
		return (
			<div className="woocommerce-profile-wizard__footnote">
				<Text variant="caption" as="p" size="12" lineHeight="16px">
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
			<Text variant="caption" as="p" size="12" lineHeight="16px">
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
				<Text variant="caption" as="p" size="12" lineHeight="16px">
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
	const recordProductLinkClick = ( event ) => {
		const link = event.target.closest( 'a' );
		if (
			! link ||
			! event.currentTarget.contains( link ) ||
			! link.href.startsWith( 'https://woocommerce.com/products/' )
		) {
			return;
		}

		recordEvent( 'storeprofiler_store_business_features_link_click', {
			extension_name: link.href.split(
				'https://woocommerce.com/products/'
			)[ 1 ],
		} );
	};

	return (
		<div className="woocommerce-admin__business-details__selective-extensions-bundle__extension">
			<CheckboxControl
				id="woocommerce-business-extensions__checkbox"
				checked={ isChecked }
				onChange={ onChange }
			/>
			{
				// Disable reason: This click handler checks for interaction with anchor tags on
				// dynamically inserted HTML and records clicks only on interaction with those items.
				/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
			 }
			<p
				className="woocommerce-admin__business-details__selective-extensions-bundle__description"
				dangerouslySetInnerHTML={ sanitizeHTML( description ) }
				onClick={ recordProductLinkClick }
			/>
			{ /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */ }
			<FreeBadge />
		</div>
	);
};

export const ExtensionSection = ( {
	isResolving,
	title,
	extensions,
	installExtensionOptions,
	onCheckboxChange,
} ) => {
	if ( isResolving ) {
		return (
			<div>
				<Spinner />
			</div>
		);
	}

	if ( extensions.length === 0 ) {
		return null;
	}

	return (
		<div>
			<div className="woocommerce-admin__business-details__selective-extensions-bundle__category">
				{ title }
			</div>
			{ extensions.map( ( { description, key } ) => (
				<BundleExtensionCheckbox
					key={ key }
					description={ description }
					isChecked={ installExtensionOptions[ key ] }
					onChange={ onCheckboxChange( key ) }
				/>
			) ) }
		</div>
	);
};

export const createInstallExtensionOptions = ( {
	installableExtensions,
	prevInstallExtensionOptions,
} ) => {
	return installableExtensions.reduce( ( acc, curr ) => {
		const plugins = curr.plugins.reduce( ( pluginAcc, plugin ) => {
			// If the option exists in the previous state, use that so the option won't be reset.
			if ( prevInstallExtensionOptions.hasOwnProperty( plugin.key ) ) {
				return pluginAcc;
			}
			return {
				...pluginAcc,
				[ plugin.key ]: true,
			};
		}, {} );
		return {
			...acc,
			...plugins,
		};
	}, prevInstallExtensionOptions );
};

export const SelectiveExtensionsBundle = ( {
	isInstallingActivating,
	onSubmit,
	country,
	productTypes,
	industry,
} ) => {
	const [ showExtensions, setShowExtensions ] = useState( false );
	const [ installExtensionOptions, setInstallExtensionOptions ] = useState( {
		install_extensions: true,
	} );
	const {
		freeExtensions: freeExtensionBundleByCategory,
		isResolving,
	} = useSelect( ( select ) => {
		const { getFreeExtensions, hasFinishedResolution } = select(
			ONBOARDING_STORE_NAME
		);
		return {
			freeExtensions: getFreeExtensions(),
			isResolving: ! hasFinishedResolution( 'getFreeExtensions' ),
		};
	} );

	const { invalidateResolutionForStoreSelector } = useDispatch(
		ONBOARDING_STORE_NAME
	);

	useEffect( () => {
		invalidateResolutionForStoreSelector( 'getFreeExtensions' );
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ country, industry ] );

	const installableExtensions = useMemo( () => {
		return freeExtensionBundleByCategory.filter( ( extensionBundle ) => {
			if (
				window.wcAdminFeatures &&
				window.wcAdminFeatures.subscriptions &&
				getCountryCode( country ) === 'US'
			) {
				if ( productTypes.includes( 'subscriptions' ) ) {
					extensionBundle.plugins = extensionBundle.plugins.filter(
						( extension ) =>
							extension.key !== 'woocommerce-payments' ||
							( extension.key === 'woocommerce-payments' &&
								! extension.is_activated )
					);
				}
			}
			return ALLOWED_PLUGIN_CATEGORIES.includes( extensionBundle.key );
		} );
	}, [ freeExtensionBundleByCategory, productTypes, country ] );

	useEffect( () => {
		if ( ! isInstallingActivating ) {
			setInstallExtensionOptions( ( currInstallExtensionOptions ) =>
				createInstallExtensionOptions( {
					installableExtensions,
					prevInstallExtensionOptions: currInstallExtensionOptions,
				} )
			);
		}
		// Disable reason: This effect should only called when the installableExtensions are changed.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ installableExtensions ] );

	const getCheckboxChangeHandler = ( key ) => {
		return ( checked ) => {
			const newState = {
				...installExtensionOptions,
				[ key ]: checked,
			};

			const allExtensionsDisabled =
				Object.entries( newState ).filter( ( [ , val ] ) => val )
					.length === 1 && newState.install_extensions;

			if ( allExtensionsDisabled ) {
				// If all the extensions are disabled then disable the "Install Extensions" checkbox too
				setInstallExtensionOptions( {
					...newState,
					install_extensions: false,
				} );
			} else {
				setInstallExtensionOptions( {
					...installExtensionOptions,
					[ key ]: checked,
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
							checked={
								installExtensionOptions.install_extensions
							}
							onChange={ ( checked ) => {
								setInstallExtensionOptions(
									setAllPropsToValue(
										installExtensionOptions,
										checked
									)
								);
							} }
						/>
						<p className="woocommerce-admin__business-details__selective-extensions-bundle__description">
							{ __(
								'Add recommended business features to my site',
								'woocommerce-admin'
							) }
						</p>
						<Button
							className="woocommerce-admin__business-details__selective-extensions-bundle__expand"
							disabled={
								! installableExtensions ||
								installableExtensions.length === 0
							}
							onClick={ () => {
								setShowExtensions( ! showExtensions );

								if ( ! showExtensions ) {
									// only record the accordion click when the accordion is opened.
									recordEvent(
										'storeprofiler_store_business_features_accordion_click'
									);
								}
							} }
						>
							<Icon
								icon={
									showExtensions ? chevronUp : chevronDown
								}
							/>
						</Button>
					</div>
					{ showExtensions &&
						installableExtensions.map(
							( { plugins, key, title } ) => (
								<ExtensionSection
									key={ key }
									title={ title }
									extensions={ plugins }
									installExtensionOptions={
										installExtensionOptions
									}
									onCheckboxChange={
										getCheckboxChangeHandler
									}
								/>
							)
						) }
				</div>
				<div className="woocommerce-profile-wizard__business-details__free-features__action">
					<Button
						onClick={ () => {
							onSubmit( installExtensionOptions );
						} }
						isBusy={ isInstallingActivating || isResolving }
						disabled={ isInstallingActivating || isResolving }
						isPrimary
					>
						{ __( 'Continue', 'woocommerce-admin' ) }
					</Button>
				</div>
			</Card>
			{ renderBusinessExtensionHelpText(
				installExtensionOptions,
				isInstallingActivating
			) }
		</div>
	);
};
