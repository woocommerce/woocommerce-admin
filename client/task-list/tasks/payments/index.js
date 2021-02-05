/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import classnames from 'classnames';
import {
	Button,
	Card,
	CardBody,
	CardMedia,
	CardFooter,
	FormToggle,
} from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { H, Plugins } from '@woocommerce/components';
import { cloneElement, useEffect, useState } from '@wordpress/element';
import {
	getHistory,
	getNewPath,
	updateQueryString,
} from '@woocommerce/navigation';
import {
	ONBOARDING_STORE_NAME,
	OPTIONS_STORE_NAME,
	PLUGINS_STORE_NAME,
	pluginNames,
	SETTINGS_STORE_NAME,
} from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import { createNoticesFromResponse } from '../../../lib/notices';
import { getCountryCode } from '../../../dashboard/utils';
import { getPaymentMethods } from './methods';

function Payments( { query } ) {
	const { createNotice } = useDispatch( 'core/notices' );
	const { installAndActivatePlugins } = useDispatch( PLUGINS_STORE_NAME );
	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );
	const {
		// invalidateResolution,
		invalidateResolutionForStoreSelector,
	} = useDispatch( ONBOARDING_STORE_NAME );

	const {
		countryCode,
		profileItems,
		activePlugins,
		jetpackConnected,
		onboardingStatus,
		...options
	} = useSelect( getPaymentStoreData );

	const [ methods, setMethods ] = useState( [] );
	const [ enabledMethods, setEnabledMethods ] = useState( {} );
	const [ recommendedMethod, setRecommendedMethod ] = useState();
	const [ busyMethod, setBusyMethod ] = useState( null );

	useEffect( () => {
		const paymentMethods = getPaymentMethods( {
			activePlugins,
			countryCode,
			createNotice,
			installAndActivatePlugins,
			isJetpackConnected: jetpackConnected,
			onboardingStatus,
			options,
			profileItems,
		} );
		setMethods( paymentMethods );
		setRecommendedMethod(
			paymentMethods.find( ( m ) => m.key === 'wcpay' && m.visible )
				? 'wcpay'
				: 'stripe'
		);
		setEnabledMethods(
			paymentMethods.reduce( ( data, method ) => {
				return {
					...data,
					[ method.key ]: method.isEnabled,
				};
			}, {} )
		);
	}, [
		countryCode,
		profileItems,
		activePlugins,
		jetpackConnected,
		onboardingStatus,
	] );

	useEffect( () => {
		// invalidateResolution( 'getProfileItems', [] );
		// invalidateResolution( 'getTasksStatus', [] );
	}, [] );

	const clearTaskStatusCache = () =>
		invalidateResolutionForStoreSelector( 'getTasksStatus' );

	const markConfigured = ( method, queryParams = {} ) => {
		setEnabledMethods( {
			...enabledMethods,
			[ method ]: true,
		} );

		clearTaskStatusCache();

		recordEvent( 'tasklist_payment_connect_method', {
			payment_method: method,
		} );

		getHistory().push(
			getNewPath( { ...queryParams, task: 'payments' }, '/', {} )
		);
	};

	const getCurrentMethod = () => {
		if ( ! query.method ) {
			return;
		}

		return methods.find( ( method ) => method.key === query.method );
	};

	const getInstallStep = () => {
		const currentMethod = getCurrentMethod();

		if ( ! currentMethod.plugins || ! currentMethod.plugins.length ) {
			return;
		}

		const pluginsToInstall = currentMethod.plugins.filter(
			( method ) => ! activePlugins.includes( method )
		);
		const pluginNamesString = currentMethod.plugins
			.map( ( pluginSlug ) => pluginNames[ pluginSlug ] )
			.join( ' ' + __( 'and', 'woocommerce-admin' ) + ' ' );

		return {
			key: 'install',
			label: sprintf(
				__( 'Install %s', 'woocommerce-admin' ),
				pluginNamesString
			),
			content: (
				<Plugins
					onComplete={ ( plugins, response ) => {
						createNoticesFromResponse( response );
						recordEvent( 'tasklist_payment_install_method', {
							plugins: currentMethod.plugins,
						} );
					} }
					onError={ ( errors, response ) =>
						createNoticesFromResponse( response )
					}
					autoInstall
					pluginSlugs={ currentMethod.plugins }
				/>
			),
			isComplete: ! pluginsToInstall.length,
		};
	};

	const toggleMethod = async ( key ) => {
		const method = methods.find( ( option ) => option.key === key );

		setEnabledMethods( {
			...enabledMethods,
			[ key ]: ! enabledMethods[ key ],
		} );

		recordEvent( 'tasklist_payment_toggle', {
			enabled: ! method.isEnabled,
			payment_method: key,
		} );

		await updateOptions( {
			[ method.optionName ]: {
				...options[ method.optionName ],
				enabled: method.isEnabled ? 'no' : 'yes',
			},
		} );

		clearTaskStatusCache();
	};

	const handleClick = async ( method ) => {
		const { key, onClick } = method;

		recordEvent( 'tasklist_payment_setup', {
			options: methods.map( ( option ) => option.key ),
			selected: key,
		} );

		if ( onClick ) {
			setBusyMethod( key );
			await new Promise( onClick )
				.then( () => {
					setBusyMethod( null );
				} )
				.catch( () => {
					setBusyMethod( null );
				} );

			return;
		}

		updateQueryString( {
			method: key,
		} );
	};

	const currentMethod = getCurrentMethod();

	if ( currentMethod ) {
		return (
			<Card className="woocommerce-task-payment-method woocommerce-task-card">
				<CardBody>
					{ cloneElement( currentMethod.container, {
						query,
						installStep: getInstallStep(),
						markConfigured,
						hasCbdIndustry: currentMethod.hasCbdIndustry,
					} ) }
				</CardBody>
			</Card>
		);
	}

	return (
		<div className="woocommerce-task-payments">
			{ methods.map( ( method ) => {
				const {
					before,
					container,
					content,
					isConfigured,
					key,
					title,
					visible,
				} = method;

				if ( ! visible ) {
					return null;
				}

				const classes = classnames(
					'woocommerce-task-payment',
					'woocommerce-task-card',
					! isConfigured && 'woocommerce-task-payment-not-configured',
					'woocommerce-task-payment-' + key
				);

				const isRecommended =
					key === recommendedMethod && ! isConfigured;
				const showRecommendedRibbon = isRecommended && key !== 'wcpay';
				const showRecommendedPill = isRecommended && key === 'wcpay';

				return (
					<Card key={ key } className={ classes }>
						<CardMedia isBorderless>
							{ showRecommendedRibbon && (
								<div className="woocommerce-task-payment__recommended-ribbon">
									<span>
										{ __(
											'Recommended',
											'woocommerce-admin'
										) }
									</span>
								</div>
							) }
							{ before }
						</CardMedia>
						<CardBody>
							<H className="woocommerce-task-payment__title">
								{ title }
								{ showRecommendedPill && (
									<span className="woocommerce-task-payment__recommended-pill">
										{ __(
											'Recommended',
											'woocommerce-admin'
										) }
									</span>
								) }
							</H>
							<div className="woocommerce-task-payment__content">
								{ content }
							</div>
						</CardBody>
						<CardFooter isBorderless>
							{ container && ! isConfigured ? (
								<div>
									<Button
										isPrimary={ key === recommendedMethod }
										isSecondary={
											key !== recommendedMethod
										}
										isBusy={ busyMethod === key }
										disabled={ busyMethod }
										onClick={ () => handleClick( method ) }
									>
										{ __( 'Set up', 'woocommerce-admin' ) }
									</Button>
								</div>
							) : (
								<FormToggle
									checked={ enabledMethods[ key ] }
									onChange={ () => toggleMethod( key ) }
									onClick={ ( e ) => e.stopPropagation() }
								/>
							) }
						</CardFooter>
					</Card>
				);
			} ) }
		</div>
	);
}

function getPaymentStoreData( select ) {
	const { getProfileItems } = select( ONBOARDING_STORE_NAME );
	const { getOption } = select( OPTIONS_STORE_NAME );
	const { getActivePlugins, isJetpackConnected } = select(
		PLUGINS_STORE_NAME
	);
	const { getSettings } = select( SETTINGS_STORE_NAME );
	const { general: generalSettings = {} } = getSettings( 'general' );
	const { getTasksStatus } = select( ONBOARDING_STORE_NAME );

	const optionNames = [
		'woocommerce_woocommerce_payments_settings',
		'woocommerce_stripe_settings',
		'woocommerce_ppec_paypal_settings',
		'woocommerce_payfast_settings',
		'woocommerce_square_credit_card_settings',
		'woocommerce_klarna_payments_settings',
		'woocommerce_kco_settings',
		'wc_square_refresh_tokens',
		'woocommerce_cod_settings',
		'woocommerce_bacs_settings',
		'woocommerce_bacs_accounts',
		'woocommerce_eway_settings',
		'woocommerce_razorpay_settings',
		'woocommerce_mollie_payments_settings',
	];

	const allOptions = optionNames.reduce( ( result, name ) => {
		result[ name ] = getOption( name );
		return result;
	}, {} );

	return {
		activePlugins: getActivePlugins(),
		onboardingStatus: getTasksStatus(),
		profileItems: getProfileItems(),
		countryCode: getCountryCode(
			generalSettings.woocommerce_default_country
		),
		jetpackConnected: isJetpackConnected(),
		...allOptions,
	};
}

export default Payments;
