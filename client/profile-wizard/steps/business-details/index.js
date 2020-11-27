/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import {
	Button,
	TabPanel,
	__experimentalText as Text,
} from '@wordpress/components';
import interpolateComponents from 'interpolate-components';
import { withDispatch, withSelect } from '@wordpress/data';
import { keys, pickBy } from 'lodash';
import {
	Card,
	Link,
	SelectControl,
	Form,
	TextControl,
} from '@woocommerce/components';
import {
	ONBOARDING_STORE_NAME,
	PLUGINS_STORE_NAME,
	pluginNames,
	SETTINGS_STORE_NAME,
} from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import { getCountryCode } from '../../../dashboard/utils';
import { CurrencyContext } from '../../../lib/currency-context';
import { createNoticesFromResponse } from '../../../lib/notices';
import { platformOptions } from './data/platform-options';
import { sellingVenueOptions } from './data/selling-venue-options';
import { getRevenueOptions } from './data/revenue-options';
import { getProductCountOptions } from './data/product-options';
import { FreeFeatures } from './free-features';

import './style.scss';

const BUSINESS_DETAILS_TAB_NAME = 'business-details';
const FREE_FEATURES_TAB_NAME = 'free-features';

class BusinessDetails extends Component {
	constructor( props ) {
		super();
		const settings = props.settings || {};
		const profileItems = props.profileItems || {};
		const industrySlugs = ( profileItems.industry || [] ).map(
			( industry ) => industry.slug
		);

		const businessExtensions = profileItems.business_extensions || false;

		this.state = {
			isPopoverVisible: false,
			isValid: false,
			currentTab: 'business-details',
			savedValues: null,
		};

		this.initialValues = {
			other_platform: profileItems.other_platform || '',
			other_platform_name: profileItems.other_platform_name || '',
			product_count: profileItems.product_count || '',
			selling_venues: profileItems.selling_venues || '',
			revenue: profileItems.revenue || '',
			'facebook-for-woocommerce': businessExtensions
				? businessExtensions.includes( 'facebook-for-woocommerce' )
				: true,
			'mailchimp-for-woocommerce': businessExtensions
				? businessExtensions.includes( 'mailchimp-for-woocommerce' )
				: true,
			'creative-mail-by-constant-contact': businessExtensions
				? businessExtensions.includes(
						'creative-mail-by-constant-contact'
				  )
				: true,
			'kliken-marketing-for-google': businessExtensions
				? businessExtensions.includes( 'kliken-marketing-for-google' )
				: true,
			install_extensions: true,
		};

		this.extensions = [
			'facebook-for-woocommerce',
			'mailchimp-for-woocommerce',
			'kliken-marketing-for-google',
			'creative-mail-by-constant-contact',
		];

		// TODO convert this to some kind of segmentation we can use generically and pass to <FreeFeatures>
		this.bundleInstall =
			getCountryCode( settings.woocommerce_default_country ) === 'US' &&
			( industrySlugs.includes( 'fashion-apparel-accessories' ) ||
				industrySlugs.includes( 'health-beauty' ) ) &&
			! industrySlugs.includes( 'cbd-other-hemp-derived-products' );

		this.onContinue = this.onContinue.bind( this );
		this.validate = this.validate.bind( this );
	}

	async onContinue( values ) {
		const {
			createNotice,
			goToNextStep,
			installAndActivatePlugins,
			updateProfileItems,
		} = this.props;
		const {
			install_extensions: installExtensions,
			other_platform: otherPlatform,
			other_platform_name: otherPlatformName,
			product_count: productCount,
			revenue,
			selling_venues: sellingVenues,
		} = values;
		const businessExtensions = this.getBusinessExtensions( values );
		const { getCurrencyConfig } = this.context;

		recordEvent( 'storeprofiler_store_business_details_continue', {
			product_number: productCount,
			already_selling: sellingVenues,
			currency: getCurrencyConfig().code,
			revenue,
			used_platform: otherPlatform,
			used_platform_name: otherPlatformName,
			install_woocommerce_services: businessExtensions.includes(
				'woocommerce-services'
			),
			install_jetpack: businessExtensions.includes( 'jetpack' ),
			install_facebook: businessExtensions.includes(
				'facebook-for-woocommerce'
			),
			install_mailchimp: businessExtensions.includes(
				'mailchimp-for-woocommerce'
			),
			install_creative_mail: businessExtensions.includes(
				'creative-mail-by-constant-contact'
			),
			install_google_ads: businessExtensions.includes(
				'kliken-marketing-for-google'
			),
			install_extensions: installExtensions,
			bundle_install: this.bundleInstall,
		} );

		const _updates = {
			other_platform: otherPlatform,
			other_platform_name:
				otherPlatform === 'other' ? otherPlatformName : '',
			product_count: productCount,
			revenue,
			selling_venues: sellingVenues,
			business_extensions: businessExtensions,
		};

		// Remove possible empty values like `revenue` and `other_platform`.
		const updates = Object.entries( _updates ).filter( ( { value } ) => {
			return value !== '';
		} );

		const promises = [
			updateProfileItems( updates ).catch( () => {
				throw new Error();
			} ),
		];

		if ( businessExtensions.length ) {
			promises.push(
				installAndActivatePlugins( businessExtensions )
					.then( ( response ) => {
						createNoticesFromResponse( response );
					} )
					.catch( ( error ) => {
						createNoticesFromResponse( error );
						throw new Error();
					} )
			);
		}

		Promise.all( promises )
			.then( () => {
				goToNextStep();
			} )
			.catch( () => {
				createNotice(
					'error',
					__(
						'There was a problem updating your business details.',
						'woocommerce-admin'
					)
				);
			} );
	}

	validate( values ) {
		const errors = {};

		if ( ! values.product_count.length ) {
			errors.product_count = __(
				'This field is required',
				'woocommerce-admin'
			);
		}

		if ( ! values.selling_venues.length ) {
			errors.selling_venues = __(
				'This field is required',
				'woocommerce-admin'
			);
		}

		if (
			! values.other_platform.length &&
			[ 'other', 'brick-mortar-other' ].includes( values.selling_venues )
		) {
			errors.other_platform = __(
				'This field is required',
				'woocommerce-admin'
			);
		}

		if (
			! values.other_platform_name &&
			values.other_platform === 'other' &&
			[ 'other', 'brick-mortar-other' ].includes( values.selling_venues )
		) {
			errors.other_platform_name = __(
				'This field is required',
				'woocommerce-admin'
			);
		}

		if (
			! values.revenue.length &&
			[
				'other',
				'brick-mortar',
				'brick-mortar-other',
				'other-woocommerce',
			].includes( values.selling_venues )
		) {
			errors.revenue = __(
				'This field is required',
				'woocommerce-admin'
			);
		}

		if ( Object.keys( errors ).length === 0 ) {
			this.setState( { isValid: true } );
		}

		return errors;
	}

	getBusinessExtensions( values ) {
		if ( this.bundleInstall ) {
			return values.install_extensions
				? [
						'jetpack',
						'woocommerce-services',
						'woocommerce-payments',
						...this.extensions,
				  ]
				: [];
		}

		if ( values.selling_venues === '' ) {
			return [];
		}

		return keys( pickBy( values ) ).filter( ( name ) =>
			this.extensions.includes( name )
		);
	}

	renderBusinessExtensionHelpText( values ) {
		const { isInstallingActivating } = this.props;
		const extensions = this.getBusinessExtensions( values );

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
			);
		}
		const accountRequiredText = this.bundleInstall
			? __(
					'User accounts are required to use these features.',
					'woocommerce-admin'
			  )
			: '';

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
				{ this.bundleInstall && (
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
	}

	renderBusinessDetailsStep() {
		const {
			goToNextStep,
			isInstallingActivating,
			hasInstallActivateError,
		} = this.props;

		const { getCurrencyConfig } = this.context;

		const productCountOptions = getProductCountOptions(
			getCurrencyConfig()
		);

		return (
			<Form
				initialValues={ this.state.savedValues || this.initialValues }
				onSubmitCallback={ ( values ) => {
					this.setState( {
						savedValues: values,
						currentTab: 'free-features',
					} );
				} }
				onChangeCallback={ ( _, values, isValid ) => {
					this.setState( { savedValues: values, isValid } );
				} }
				validate={ this.validate }
			>
				{ ( { getInputProps, handleSubmit, values, isValidForm } ) => {
					return (
						<>
							<div className="woocommerce-profile-wizard__step-header">
								<Text variant="title.small" as="h2">
									{ __(
										'Tell us about your business',
										'woocommerce-admin'
									) }
								</Text>
								<Text variant="body">
									{ __(
										"We'd love to know if you are just getting started or you already have a business in place.",
										'woocommerce-admin'
									) }
								</Text>
							</div>
							<Card>
								<>
									<SelectControl
										label={ __(
											'How many products do you plan to display?',
											'woocommerce-admin'
										) }
										options={ productCountOptions }
										required
										{ ...getInputProps( 'product_count' ) }
									/>

									<SelectControl
										label={ __(
											'Currently selling elsewhere?',
											'woocommerce-admin'
										) }
										options={ sellingVenueOptions }
										required
										{ ...getInputProps( 'selling_venues' ) }
									/>

									{ [
										'other',
										'brick-mortar',
										'brick-mortar-other',
										'other-woocommerce',
									].includes( values.selling_venues ) && (
										<SelectControl
											label={ __(
												"What's your current annual revenue?",
												'woocommerce-admin'
											) }
											options={ getRevenueOptions(
												this.props.settings
													.woocommerce_default_country
											) }
											required
											{ ...getInputProps( 'revenue' ) }
										/>
									) }

									{ [
										'other',
										'brick-mortar-other',
									].includes( values.selling_venues ) && (
										<>
											<div className="business-competitors">
												<SelectControl
													label={ __(
														'Which platform is the store using?',
														'woocommerce-admin'
													) }
													options={ platformOptions }
													required
													{ ...getInputProps(
														'other_platform'
													) }
												/>
												{ values.other_platform ===
													'other' && (
													<TextControl
														label={ __(
															'What is the platform name?',
															'woocommerce-admin'
														) }
														required
														{ ...getInputProps(
															'other_platform_name'
														) }
													/>
												) }
											</div>
										</>
									) }

									<div className="woocommerce-profile-wizard__card-actions">
										<Button
											isPrimary
											onClick={ handleSubmit }
											disabled={ ! isValidForm }
											isBusy={ isInstallingActivating }
										>
											{ ! hasInstallActivateError
												? __(
														'Continue',
														'woocommerce-admin'
												  )
												: __(
														'Retry',
														'woocommerce-admin'
												  ) }
										</Button>
										{ hasInstallActivateError && (
											<Button
												onClick={ () => goToNextStep() }
											>
												{ __(
													'Continue without installing',
													'woocommerce-admin'
												) }
											</Button>
										) }
									</div>
								</>
							</Card>
						</>
					);
				} }
			</Form>
		);
	}

	renderFreeFeaturesStep() {
		return (
			<Form onSubmitCallback={ this.onContinue }>
				{ ( { getInputProps, values } ) => {
					return (
						<>
							<div className="woocommerce-profile-wizard__step-header">
								<Text variant="title.small" as="h2">
									{ __(
										'Included business features',
										'woocommerce-admin'
									) }
								</Text>
								<Text variant="body">
									{ __(
										'We recommend enhancing your store with these free extensions',
										'woocommerce-admin'
									) }
								</Text>
								<Text variant="body">
									{ __(
										'No commitment required - you can remove them at any time.',
										'woocommerce-admin'
									) }
								</Text>
							</div>
							<Card>
								<FreeFeatures
									getInputProps={ getInputProps }
									values={ this.state.savedValues }
								/>
							</Card>
							{ this.renderBusinessExtensionHelpText( values ) }
						</>
					);
				} }
			</Form>
		);
	}

	render() {
		// There is a hack here to help us manage the selected tab programatically.
		// We set the tab name "current-tab". when its the one we want selected. This tricks
		// the logic in the TabPanel and allows us to switch which tab has the name "current-tab"
		// and force it to re-render with a different tab selected.
		return (
			<TabPanel
				activeClass="is-active"
				initialTabName="current-tab"
				onSelect={ ( tabName ) => {
					this.setState( { currentTab: tabName } );
				} }
				tabs={ [
					{
						name:
							this.state.currentTab === BUSINESS_DETAILS_TAB_NAME
								? 'current-tab'
								: BUSINESS_DETAILS_TAB_NAME,
						id: BUSINESS_DETAILS_TAB_NAME,
						title: __( 'Business details', 'woocommerce-admin' ),
					},
					{
						name:
							this.state.currentTab === FREE_FEATURES_TAB_NAME
								? 'current-tab'
								: FREE_FEATURES_TAB_NAME,
						id: FREE_FEATURES_TAB_NAME,
						title: __( 'Free features', 'woocommerce-admin' ),
						className: this.state.isValid ? '' : 'is-disabled',
					},
				] }
			>
				{ ( tab ) => <>{ this.getTab( tab.id ) }</> }
			</TabPanel>
		);
	}

	getTab( tabId ) {
		if ( tabId === BUSINESS_DETAILS_TAB_NAME ) {
			return this.renderBusinessDetailsStep();
		}
		return this.renderFreeFeaturesStep();
	}
}

BusinessDetails.contextType = CurrencyContext;

export default compose(
	withSelect( ( select ) => {
		const { getSettings, getSettingsError } = select( SETTINGS_STORE_NAME );
		const { getProfileItems, getOnboardingError } = select(
			ONBOARDING_STORE_NAME
		);
		const { getPluginsError, isPluginsRequesting } = select(
			PLUGINS_STORE_NAME
		);
		const { general: settings = {} } = getSettings( 'general' );

		return {
			hasInstallActivateError:
				getPluginsError( 'installPlugins' ) ||
				getPluginsError( 'activatePlugins' ),
			isError: Boolean( getOnboardingError( 'updateProfileItems' ) ),
			profileItems: getProfileItems(),
			isSettingsError: Boolean( getSettingsError( 'general' ) ),
			settings,
			isInstallingActivating:
				isPluginsRequesting( 'installPlugins' ) ||
				isPluginsRequesting( 'activatePlugins' ) ||
				isPluginsRequesting( 'getJetpackConnectUrl' ),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { updateProfileItems } = dispatch( ONBOARDING_STORE_NAME );
		const { installAndActivatePlugins } = dispatch( PLUGINS_STORE_NAME );
		const { createNotice } = dispatch( 'core/notices' );

		return {
			createNotice,
			installAndActivatePlugins,
			updateProfileItems,
		};
	} )
)( BusinessDetails );
