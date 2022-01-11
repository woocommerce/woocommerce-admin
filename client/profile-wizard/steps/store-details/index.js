/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CheckboxControl,
	FlexItem as MaybeFlexItem,
	Spinner,
	Popover,
} from '@wordpress/components';
import { Component, useRef } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withDispatch, withSelect } from '@wordpress/data';
import { Form, TextControl } from '@woocommerce/components';
import {
	ONBOARDING_STORE_NAME,
	OPTIONS_STORE_NAME,
	SETTINGS_STORE_NAME,
} from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import { Text } from '@woocommerce/experimental';
import { Icon, info } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { getCountryCode, getCurrencyRegion } from '../../../dashboard/utils';
import {
	StoreAddress,
	validateStoreAddress,
} from '../../../dashboard/components/settings/general/store-address';
import UsageModal from '../usage-modal';
import { CurrencyContext } from '../../../lib/currency-context';
import { getAdminSetting } from '~/utils/admin-settings';
import './style.scss';

// FlexItem is not available until WP version 5.5. This code is safe to remove
// once the minimum WP supported version becomes 5.5.
const FlextItemSubstitute = ( { children, align } ) => {
	const style = {
		display: 'flex',
		'justify-content': align ? 'center' : 'flex-start',
	};
	return <div style={ style }>{ children }</div>;
};
const FlexItem = MaybeFlexItem || FlextItemSubstitute;

const LoadingPlaceholder = () => (
	<div className="woocommerce-admin__store-details__spinner">
		<Spinner />
	</div>
);

class StoreDetails extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			showUsageModal: false,
			skipping: false,
			isStoreDetailsPopoverVisible: false,
			isSkipSetupPopoverVisible: false,
		};

		this.onContinue = this.onContinue.bind( this );
		this.onSubmit = this.onSubmit.bind( this );
	}

	deriveCurrencySettings( countryState ) {
		if ( ! countryState ) {
			return null;
		}

		const Currency = this.context;
		const country = getCountryCode( countryState );
		const { currencySymbols = {}, localeInfo = {} } = getAdminSetting(
			'onboarding',
			{}
		);
		return Currency.getDataForCountry(
			country,
			localeInfo,
			currencySymbols
		);
	}

	onSubmit() {
		this.setState( {
			showUsageModal: true,
			skipping: false,
		} );
	}

	async onContinue( values ) {
		const {
			createNotice,
			goToNextStep,
			updateProfileItems,
			updateAndPersistSettingsForGroup,
			profileItems,
			settings,
			errorsRef,
		} = this.props;

		const currencySettings = this.deriveCurrencySettings(
			values.countryState
		);
		const Currency = this.context;
		Currency.setCurrency( currencySettings );

		recordEvent( 'storeprofiler_store_details_continue', {
			store_country: getCountryCode( values.countryState ),
			derived_currency: currencySettings.currency_code,
			email_signup: values.isAgreeMarketing,
		} );

		await updateAndPersistSettingsForGroup( 'general', {
			general: {
				...settings,
				woocommerce_store_address: values.addressLine1,
				woocommerce_store_address_2: values.addressLine2,
				woocommerce_default_country: values.countryState,
				woocommerce_store_city: values.city,
				woocommerce_store_postcode: values.postCode,
				woocommerce_currency: currencySettings.code,
				woocommerce_currency_pos: currencySettings.symbolPosition,
				woocommerce_price_thousand_sep:
					currencySettings.thousandSeparator,
				woocommerce_price_decimal_sep:
					currencySettings.decimalSeparator,
				woocommerce_price_num_decimals: currencySettings.precision,
			},
		} );

		const profileItemsToUpdate = {
			is_agree_marketing: values.isAgreeMarketing,
			store_email: values.storeEmail,
		};

		const region = getCurrencyRegion( values.countryState );

		/**
		 * If a user has already selected cdb industry and returns to change to a
		 * non US store, remove cbd industry.
		 *
		 * NOTE: the following call to `updateProfileItems` does not respect the
		 * `await` and performs an update aysnchronously. This means the following
		 * screen may not be initialized with correct profile settings.
		 *
		 * This comment may be removed when a refactor to wp.data datatores is complete.
		 */
		if (
			region !== 'US' &&
			profileItems.industry &&
			profileItems.industry.length
		) {
			const cbdSlug = 'cbd-other-hemp-derived-products';
			const trimmedIndustries = profileItems.industry.filter(
				( industry ) => {
					return cbdSlug !== industry && cbdSlug !== industry.slug;
				}
			);
			profileItemsToUpdate.industry = trimmedIndustries;
		}

		let errorMessages = [];
		try {
			await updateProfileItems( profileItemsToUpdate );
		} catch ( error ) {
			// Array of error messages obtained from API response.
			if ( error?.data?.params ) {
				errorMessages = Object.values( error.data.params );
			}
		}

		if (
			! Boolean( errorsRef.current.settings ) &&
			! errorMessages.length
		) {
			goToNextStep();
		} else {
			createNotice(
				'error',
				__(
					'There was a problem saving your store details',
					'woocommerce-admin'
				)
			);

			errorMessages.forEach( ( message ) =>
				createNotice( 'error', message )
			);
		}
	}

	validateStoreDetails( values ) {
		const errors = validateStoreAddress( values );

		if (
			values.storeEmail &&
			values.storeEmail.trim().length &&
			values.storeEmail.indexOf( '@' ) === -1
		) {
			errors.storeEmail = __(
				'Invalid email address',
				'woocommerce-admin'
			);
		}

		return errors;
	}

	render() {
		const {
			showUsageModal,
			skipping,
			isStoreDetailsPopoverVisible,
			isSkipSetupPopoverVisible,
		} = this.state;
		const {
			skipProfiler,
			isLoading,
			isBusy,
			initialValues,
			invalidateResolutionForStoreSelector,
		} = this.props;

		/* eslint-disable @wordpress/i18n-no-collapsible-whitespace */
		const skipSetupText = __(
			'Manual setup is only recommended for\n experienced WooCommerce users or developers.',
			'woocommerce-admin'
		);

		const configureCurrencyText = __(
			'Your store address will help us configure currency\n options and shipping rules automatically.\n This information will not be publicly visible and can\n easily be changed later.',
			'woocommerce-admin'
		);
		/* eslint-enable @wordpress/i18n-no-collapsible-whitespace */

		if ( isLoading ) {
			return (
				<div className="woocommerce-profile-wizard__store-details">
					<LoadingPlaceholder />
				</div>
			);
		}

		return (
			<div className="woocommerce-profile-wizard__store-details">
				<div className="woocommerce-profile-wizard__step-header">
					<Text
						variant="title.small"
						as="h2"
						size="20"
						lineHeight="28px"
					>
						{ __( 'Welcome to WooCommerce', 'woocommerce-admin' ) }
					</Text>
					<Text variant="body" as="p">
						{ __(
							"Tell us about your store and we'll get you set up in no time",
							'woocommerce-admin'
						) }

						<Button
							isTertiary
							label={ __(
								'Learn more about store details',
								'woocommerce-admin'
							) }
							onClick={ () =>
								this.setState( {
									isStoreDetailsPopoverVisible: true,
								} )
							}
						>
							<Icon icon={ info } />
						</Button>
					</Text>
					{ isStoreDetailsPopoverVisible && (
						<Popover
							focusOnMount="container"
							position="top center"
							onClose={ () =>
								this.setState( {
									isStoreDetailsPopoverVisible: false,
								} )
							}
						>
							{ configureCurrencyText }
						</Popover>
					) }
				</div>

				<Form
					initialValues={ initialValues }
					onSubmit={ this.onSubmit }
					validate={ this.validateStoreDetails }
				>
					{ ( {
						getInputProps,
						handleSubmit,
						values,
						isValidForm,
						setValue,
					} ) => (
						<Card>
							{ showUsageModal && (
								<UsageModal
									onContinue={ () => {
										if ( skipping ) {
											skipProfiler();
										} else {
											this.onContinue( values );
										}
									} }
									onClose={ () =>
										this.setState( {
											showUsageModal: false,
											skipping: false,
										} )
									}
								/>
							) }
							<CardBody>
								<StoreAddress
									getInputProps={ getInputProps }
									setValue={ setValue }
								/>

								<TextControl
									label={
										values.isAgreeMarketing
											? __(
													'Email address',
													'woocommerce-admin'
											  )
											: __(
													'Email address (Optional)',
													'woocommerce-admin'
											  )
									}
									required={ values.isAgreeMarketing }
									autoComplete="email"
									{ ...getInputProps( 'storeEmail' ) }
								/>
								{ values.isAgreeMarketing &&
									( ! values.storeEmail ||
										! values.storeEmail.trim().length ) && (
										<div className="woocommerce-profile-wizard__store-details-error">
											{ __(
												'Please enter your email address to subscribe',
												'woocommerce-admin'
											) }
										</div>
									) }
								<FlexItem>
									<div className="woocommerce-profile-wizard__newsletter-signup">
										<CheckboxControl
											label={
												<>
													{ __(
														'Get tips, product updates and inspiration straight to your mailbox.',
														'woocommerce-admin'
													) }{ ' ' }
													<span className="woocommerce-profile-wizard__powered-by-mailchimp">
														{ __(
															'Powered by Mailchimp',
															'woocommerce-admin'
														) }
													</span>
												</>
											}
											{ ...getInputProps(
												'isAgreeMarketing'
											) }
										/>
									</div>
								</FlexItem>
							</CardBody>

							<CardFooter justify="center">
								<Button
									isPrimary
									onClick={ handleSubmit }
									isBusy={ isBusy }
									disabled={ ! isValidForm || isBusy }
								>
									{ __( 'Continue', 'woocommerce-admin' ) }
								</Button>
							</CardFooter>
						</Card>
					) }
				</Form>
				<div className="woocommerce-profile-wizard__footer">
					<Button
						isLink
						className="woocommerce-profile-wizard__footer-link"
						onClick={ () => {
							invalidateResolutionForStoreSelector(
								'getTaskLists'
							);
							this.setState( {
								showUsageModal: true,
								skipping: true,
							} );
							return false;
						} }
					>
						{ __(
							'Skip setup store details',
							'woocommerce-admin'
						) }
					</Button>
					<Button
						isTertiary
						label={ skipSetupText }
						onClick={ () =>
							this.setState( { isSkipSetupPopoverVisible: true } )
						}
					>
						<Icon icon={ info } />
					</Button>
					{ isSkipSetupPopoverVisible && (
						<Popover
							focusOnMount="container"
							position="top center"
							onClose={ () =>
								this.setState( {
									isSkipSetupPopoverVisible: false,
								} )
							}
						>
							{ skipSetupText }
						</Popover>
					) }
				</div>
			</div>
		);
	}
}

StoreDetails.contextType = CurrencyContext;

export default compose(
	withSelect( ( select ) => {
		const {
			getSettings,
			getSettingsError,
			isUpdateSettingsRequesting,
		} = select( SETTINGS_STORE_NAME );
		const {
			getProfileItems,
			isOnboardingRequesting,
			getEmailPrefill,
			hasFinishedResolution: hasFinishedResolutionOnboarding,
		} = select( ONBOARDING_STORE_NAME );
		const { isResolving } = select( OPTIONS_STORE_NAME );

		const profileItems = getProfileItems();
		const emailPrefill = getEmailPrefill();

		const { general: settings = {} } = getSettings( 'general' );
		const isBusy =
			isOnboardingRequesting( 'updateProfileItems' ) ||
			isUpdateSettingsRequesting( 'general' ) ||
			isResolving( 'getOption', [ 'woocommerce_allow_tracking' ] );
		const isLoading =
			! hasFinishedResolutionOnboarding( 'getProfileItems' ) ||
			! hasFinishedResolutionOnboarding( 'getEmailPrefill' );
		const errorsRef = useRef( {
			settings: null,
		} );
		errorsRef.current = {
			settings: getSettingsError( 'general' ),
		};
		// Check if a store address is set so that we don't default
		// to WooCommerce's default country of the UK.
		const countryState =
			( settings.woocommerce_store_address &&
				settings.woocommerce_default_country ) ||
			'';

		const initialValues = {
			addressLine1: settings.woocommerce_store_address || '',
			addressLine2: settings.woocommerce_store_address_2 || '',
			city: settings.woocommerce_store_city || '',
			countryState,
			postCode: settings.woocommerce_store_postcode || '',
			isAgreeMarketing:
				typeof profileItems.is_agree_marketing === 'boolean'
					? profileItems.is_agree_marketing
					: true,
			storeEmail:
				typeof profileItems.store_email === 'string'
					? profileItems.store_email
					: emailPrefill,
		};

		return {
			initialValues,
			isLoading,
			profileItems,
			isBusy,
			settings,
			errorsRef,
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { createNotice } = dispatch( 'core/notices' );
		const {
			invalidateResolutionForStoreSelector,
			updateProfileItems,
		} = dispatch( ONBOARDING_STORE_NAME );
		const { updateAndPersistSettingsForGroup } = dispatch(
			SETTINGS_STORE_NAME
		);

		return {
			createNotice,
			invalidateResolutionForStoreSelector,
			updateProfileItems,
			updateAndPersistSettingsForGroup,
		};
	} )
)( StoreDetails );
