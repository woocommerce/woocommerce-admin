/**
 * External dependencies
 */
import classnames from 'classnames';
import interpolateComponents from 'interpolate-components';
import apiFetch from '@wordpress/api-fetch';
import { __, sprintf } from '@wordpress/i18n';
import { cloneElement, Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withDispatch, withSelect } from '@wordpress/data';
import {
	Button,
	Card,
	CardBody,
	CardMedia,
	CardFooter,
	FormToggle,
	Spinner,
} from '@wordpress/components';
import {
	ONBOARDING_STORE_NAME,
	OPTIONS_STORE_NAME,
	PLUGINS_STORE_NAME,
	WC_ADMIN_NAMESPACE,
} from '@woocommerce/data';
import {
	getHistory,
	getNewPath,
	updateQueryString,
} from '@woocommerce/navigation';
import { H, Link, Plugins } from '@woocommerce/components';
import { recordEvent } from '@woocommerce/tracks';
import { LOCALE } from '@woocommerce/wc-admin-settings';

/**
 * Internal dependencies
 */
import { PAYPAL_PLUGIN } from './paypal';
import WCPayLogo from './images/wcpay';
import { createNoticesFromResponse } from '../../../lib/notices';
import {
	getDefaultPaymentMethods,
	getMethodContainerMap,
	installActivateAndConnectWcpay,
} from './methods';

export const setMethodEnabledOption = async (
	optionName,
	value,
	{ clearTaskStatusCache, updateOptions, gatewayOptions }
) => {
	const methodOptions = gatewayOptions[ optionName ];

	// Don't update the option if it already has the same value.
	if ( methodOptions.enabled !== value ) {
		await updateOptions( {
			[ optionName ]: {
				...methodOptions,
				enabled: value,
			},
		} );

		clearTaskStatusCache();
	}
};

class Payments extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			busyMethod: null,
			enabledMethods: {},
			isLoading: true,
			methods: [],
		};

		this.markConfigured = this.markConfigured.bind( this );
	}

	componentDidMount() {
		this.getPaymentMethods().then( ( methods ) => {
			const enabledMethods = methods.reduce( ( obj, m ) => {
				return { ...obj, [ m.key ]: this.isMethodEnabled( m ) };
			}, {} );

			this.setState( {
				enabledMethods,
				isLoading: false,
				methods,
			} );
		} );
	}

	async markConfigured( key, queryParams = {} ) {
		const { enabledMethods, methods } = this.state;
		const method = methods.find( ( m ) => m.key === key );
		const { settings } = method.options;

		if ( ! method ) {
			throw `Method ${ methodName } not found in available methods list`;
		}

		this.setState( {
			enabledMethods: {
				...enabledMethods,
				[ key ]: true,
			},
		} );

		await setMethodEnabledOption( settings, 'yes', this.props );

		recordEvent( 'tasklist_payment_connect_method', {
			payment_method: key,
		} );

		getHistory().push(
			getNewPath( { ...queryParams, task: 'payments' }, '/', {} )
		);
	}

	getCurrentMethod() {
		const { methods } = this.state;
		const { query } = this.props;

		if ( ! query.method ) {
			return;
		}

		const currentMethod = methods.find(
			( method ) => method.key === query.method
		);

		if ( ! currentMethod ) {
			throw `Current method ${ query.method } not found in available methods list`;
		}

		return currentMethod;
	}

	getInstallStep() {
		const currentMethod = this.getCurrentMethod();

		if ( ! currentMethod.plugins || ! currentMethod.plugins.length ) {
			return;
		}

		const { activePlugins, siteLocale } = this.props;
		const pluginsToInstall = currentMethod.plugins.filter(
			( method ) => ! activePlugins.includes( method )
		);
		const pluginLocaleData = currentMethod.locales[ siteLocale ];
		const pluginNamesString = pluginLocaleData.name;

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
	}

	async toggleMethod( key ) {
		const { enabledMethods, methods } = this.state;
		const method = methods.find( ( m ) => m.key === key );
		const { settings } = method.options;
		const isEnabled = this.isMethodEnabled( method );

		if ( ! method ) {
			throw `Method ${ key } not found in available methods list`;
		}

		enabledMethods[ key ] = ! enabledMethods[ key ];
		this.setState( { enabledMethods } );

		recordEvent( 'tasklist_payment_toggle', {
			enabled: ! isEnabled,
			payment_method: key,
		} );

		await setMethodEnabledOption(
			settings,
			isEnabled ? 'no' : 'yes',
			this.props
		);
	}

	async handleClick( method ) {
		const { methods } = this.state;
		const { createNotice, installAndActivatePlugins } = this.props;
		const { key } = method;
		const onClick =
			key === 'wcpay'
				? ( resolve, reject ) =>
						installActivateAndConnectWcpay(
							resolve,
							reject,
							createNotice,
							installAndActivatePlugins
						)
				: null;

		recordEvent( 'tasklist_payment_setup', {
			options: methods.map( ( m ) => m.key ),
			selected: key,
		} );

		if ( onClick ) {
			this.setState( { busyMethod: key } );
			await new Promise( onClick )
				.then( () => {
					this.setState( { busyMethod: null } );
				} )
				.catch( () => {
					this.setState( { busyMethod: null } );
				} );

			return;
		}

		updateQueryString( {
			method: key,
		} );
	}

	getSetupButtons( method ) {
		const { key, recommended } = method;
		const { busyMethod, enabledMethods } = this.state;
		const { methodContainerMap } = this.props;
		const isConfigured = this.isMethodConfigured( method );
		const container = methodContainerMap[ key ];

		if ( container && ! isConfigured ) {
			return (
				<div>
					<Button
						isPrimary={ recommended === 'yes' }
						isSecondary={ recommended !== 'yes' }
						isBusy={ busyMethod === key }
						disabled={ busyMethod }
						onClick={ () => this.handleClick( method ) }
					>
						{ __( 'Set up', 'woocommerce-admin' ) }
					</Button>
				</div>
			);
		}
		return (
			<FormToggle
				checked={ enabledMethods[ key ] }
				onChange={ () => this.toggleMethod( key ) }
				onClick={ ( e ) => e.stopPropagation() }
			/>
		);
	}

	async getPaymentMethods() {
		const { profileItems } = this.props;
		const defaultMethods = getDefaultPaymentMethods( profileItems ) || [];
		const perPage = 5 - defaultMethods.length;

		try {
			const methods = await apiFetch( {
				method: 'GET',
				path: `${ WC_ADMIN_NAMESPACE }/onboarding/tasks/payment-method-recommendations?per_page=${ perPage }`,
			} );

			return [ ...methods, ...defaultMethods ];
		} catch {
			return defaultMethods;
		}
	}

	isMethodConfigured( method ) {
		const { activePlugins, gatewayOptions } = this.props;
		const {
			key,
			options: { config, settings },
			slug,
		} = method;

		if ( key === 'wcpay' ) {
			return this.props.wcPayIsConnected;
		}

		if ( key === 'paypal' ) {
			const { paypalOnboardingStatus } = this.props;

			return (
				paypalOnboardingStatus &&
				paypalOnboardingStatus.production &&
				paypalOnboardingStatus.production.onboarded
			);
		}

		if ( config && settings ) {
			return config.every( ( o ) => {
				return (
					gatewayOptions[ o ] ||
					( gatewayOptions[ settings ] &&
						gatewayOptions[ settings ][ o ] )
				);
			} );
		}

		return activePlugins.includes( slug );
	}

	isMethodEnabled( method ) {
		const { enabledPaymentGateways, gatewayOptions } = this.props;
		const {
			options: { settings },
			slug,
		} = method;

		return (
			( gatewayOptions[ settings ] &&
				gatewayOptions[ settings ].enabled &&
				gatewayOptions[ settings ].enabled === 'yes' ) ||
			enabledPaymentGateways.includes( slug )
		);
	}

	getTosPrompt() {
		const tosLink = (
			<Link
				href={ 'https://wordpress.com/tos/' }
				target="_blank"
				type="external"
			/>
		);

		const tosPrompt = interpolateComponents( {
			mixedString: __(
				'By clicking "Set up," you agree to the {{link}}Terms of Service{{/link}}',
				'woocommerce-admin'
			),
			components: {
				link: tosLink,
			},
		} );

		return <p>{ tosPrompt }</p>;
	}

	render() {
		const { isLoading, methods } = this.state;

		if ( isLoading ) {
			return <p>Loading...</p>; // Replace with pretty loading component.
		}

		const {
			activePlugins,
			loadingPaypalStatus,
			methodContainerMap,
			siteLocale,
			query,
		} = this.props;

		const currentMethod = this.getCurrentMethod();

		if ( currentMethod ) {
			const container = methodContainerMap[ currentMethod.key ];
			return (
				<Card className="woocommerce-task-payment-method woocommerce-task-card">
					<CardBody>
						{ cloneElement( container, {
							query,
							installStep: this.getInstallStep(),
							markConfigured: this.markConfigured,
							hasCbdIndustry: currentMethod.hasCbdIndustry,
						} ) }
					</CardBody>
				</Card>
			);
		}

		return (
			<div className="woocommerce-task-payments">
				{ methods.map( ( method ) => {
					const isConfigured = this.isMethodConfigured( method );
					const { key, locales, recommended } = method;
					const { content, title, tos } =
						locales[ siteLocale ] || locales.en_US;

					const classes = classnames(
						'woocommerce-task-payment',
						'woocommerce-task-card',
						! isConfigured &&
							'woocommerce-task-payment-not-configured',
						'woocommerce-task-payment-' + key
					);

					const isRecommended = recommended && ! isConfigured;
					const showRecommendedPill =
						isRecommended && key === 'wcpay';
					const showRecommendedRibbon =
						isRecommended && key !== 'wcpay';

					const loading =
						key === 'paypal' &&
						activePlugins.includes( PAYPAL_PLUGIN ) &&
						loadingPaypalStatus;

					return (
						<Card key={ key } className={ classes }>
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
							<CardMedia isBorderless>
								<WCPayLogo />
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
									{ tos && this.getTosPrompt() }
								</div>
							</CardBody>
							<CardFooter isBorderless>
								{ loading ? (
									<Spinner />
								) : (
									this.getSetupButtons( method )
								) }
							</CardFooter>
						</Card>
					);
				} ) }
			</div>
		);
	}
}

export default compose(
	withDispatch( ( dispatch ) => {
		const { createNotice } = dispatch( 'core/notices' );
		const {
			installAndActivatePlugins,
			invalidateResolutionForStoreSelector: invalidatePluginStoreSelector,
		} = dispatch( PLUGINS_STORE_NAME );
		const { updateOptions } = dispatch( OPTIONS_STORE_NAME );
		const {
			invalidateResolution,
			invalidateResolutionForStoreSelector,
		} = dispatch( ONBOARDING_STORE_NAME );
		invalidateResolution( 'getProfileItems', [] );
		invalidateResolution( 'getTasksStatus', [] );
		return {
			clearTaskStatusCache: () => {
				invalidateResolutionForStoreSelector( 'getTasksStatus' );
				invalidatePluginStoreSelector( 'getPaypalOnboardingStatus' );
			},
			createNotice,
			installAndActivatePlugins,
			updateOptions,
		};
	} ),
	withSelect( ( select ) => {
		const { getProfileItems } = select( ONBOARDING_STORE_NAME );
		const { getOption } = select( OPTIONS_STORE_NAME );
		const { getTasksStatus } = select( ONBOARDING_STORE_NAME );
		const {
			getActivePlugins,
			getPaypalOnboardingStatus,
			hasFinishedResolution,
		} = select( PLUGINS_STORE_NAME );

		const { enabledPaymentGateways, wcPayIsConnected } = getTasksStatus();
		const activePlugins = getActivePlugins();
		const profileItems = getProfileItems();
		const paypalOnboardingStatus = getPaypalOnboardingStatus();
		const loadingPaypalStatus =
			! hasFinishedResolution( 'getPaypalOnboardingStatus' ) &&
			! paypalOnboardingStatus;

		const optionNames = [
			'woocommerce_woocommerce_payments_settings',
			'woocommerce_stripe_settings',
			'woocommerce-ppcp-settings',
			'woocommerce_ppcp-gateway_settings',
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
			'woocommerce_payubiz_settings',
		];

		const gatewayOptions = optionNames.reduce( ( result, name ) => {
			result[ name ] = getOption( name );
			return result;
		}, {} );

		const methodContainerMap = getMethodContainerMap();
		const siteLocale = LOCALE.siteLocale;

		return {
			activePlugins,
			enabledPaymentGateways,
			gatewayOptions,
			loadingPaypalStatus,
			methodContainerMap,
			paypalOnboardingStatus,
			profileItems,
			siteLocale,
			wcPayIsConnected,
		};
	} )
)( Payments );
