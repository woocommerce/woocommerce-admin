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

/**
 * Internal dependencies
 */
import { PAYPAL_PLUGIN } from './paypal';
import WCPayLogo from './images/wcpay';
import TaskListPlaceholder from '../../placeholder';
import { createNoticesFromResponse } from '../../../lib/notices';
import {
	getDefaultPaymentMethods,
	getMethodContainerMap,
	installActivateAndConnectWcpay,
} from './methods';
import { Method } from './method';

export const setMethodEnabledOption = async (
	optionName,
	value,
	{ clearTaskStatusCache, options, updateOptions }
) => {
	const methodOptions = options[ optionName ];

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

		if ( ! method ) {
			throw `Method ${ key } not found in available methods list`;
		}

		this.setState( {
			enabledMethods: {
				...enabledMethods,
				[ key ]: true,
			},
		} );

		const { settings } = method.options;

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

		const { activePlugins } = this.props;
		const pluginsToInstall = currentMethod.plugins.filter(
			( method ) => ! activePlugins.includes( method )
		);
		const pluginNamesString = currentMethod.name;

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

		if ( ! method ) {
			throw `Method ${ key } not found in available methods list`;
		}

		const isEnabled = this.isMethodEnabled( method );
		enabledMethods[ key ] = ! enabledMethods[ key ];

		this.setState( { enabledMethods } );

		recordEvent( 'tasklist_payment_toggle', {
			enabled: ! isEnabled,
			payment_method: key,
		} );

		const { settings } = method.options;

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
		const { busyMethod, enabledMethods } = this.state;
		const { key, recommended } = method;
		const isConfigured = this.isMethodConfigured( method );

		if ( ! isConfigured ) {
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

			const defaultKeys = defaultMethods.map( ( m ) => m.key );

			return [
				...methods.filter( ( m ) => ! defaultKeys.includes( m.key ) ),
				...defaultMethods,
			];
		} catch {
			return defaultMethods;
		}
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

	getMethodLogo( method ) {
		const { imageContainer, imageUrl, key } = method;

		if ( imageContainer ) {
			return imageContainer;
		}

		if ( imageUrl ) {
			return <img src={ imageUrl } alt={ `${ key } logo.` } />;
		}

		return <WCPayLogo />;
	}

	isMethodConfigured( method ) {
		const { activePlugins, onboardingStatus, options } = this.props;
		const { key, options: methodOptions, slug } = method;

		if ( key === 'wcpay' ) {
			return onboardingStatus.wcPayIsConnected;
		}

		if ( key === 'paypal' ) {
			const { paypalOnboardingStatus } = this.props;

			return (
				paypalOnboardingStatus &&
				paypalOnboardingStatus.production &&
				paypalOnboardingStatus.production.onboarded
			);
		}

		const { config, settings } = methodOptions;

		if ( config && settings ) {
			return config.every( ( o ) => {
				return (
					options[ o ] ||
					( options[ settings ] && options[ settings ][ o ] )
				);
			} );
		}

		return activePlugins.includes( slug );
	}

	isMethodEnabled( method ) {
		const { onboardingStatus, options } = this.props;
		const { enabledPaymentGateways } = onboardingStatus;
		const { options: methodOptions, slug } = method;
		const { settings } = methodOptions;

		return (
			( options[ settings ] &&
				options[ settings ].enabled &&
				options[ settings ].enabled === 'yes' ) ||
			enabledPaymentGateways.includes( slug )
		);
	}

	render() {
		const { isLoading, methods } = this.state;

		if ( isLoading ) {
			return <TaskListPlaceholder />;
		}

		const {
			activePlugins,
			loadingPaypalStatus,
			methodContainerMap,
			query,
		} = this.props;

		const currentMethod = this.getCurrentMethod();

		if ( currentMethod ) {
			const container = methodContainerMap[ currentMethod.key ] || (
				<Method />
			);
			return (
				<Card className="woocommerce-task-payment-method woocommerce-task-card">
					<CardBody>
						{ cloneElement( container, {
							hasCbdIndustry: currentMethod.supportsCbd,
							installStep: this.getInstallStep(),
							markConfigured: this.markConfigured,
							method: currentMethod,
							query,
						} ) }
					</CardBody>
				</Card>
			);
		}

		return (
			<div className="woocommerce-task-payments">
				{ methods.map( ( method ) => {
					const { content, key, recommended, title, tos } = method;
					const isConfigured = this.isMethodConfigured( method );

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

					const logo = this.getMethodLogo( method );

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
							<CardMedia isBorderless>{ logo }</CardMedia>
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
		const { getOptions } = select( OPTIONS_STORE_NAME );
		const { getTasksStatus } = select( ONBOARDING_STORE_NAME );
		const {
			getActivePlugins,
			getPaypalOnboardingStatus,
			hasFinishedResolution,
		} = select( PLUGINS_STORE_NAME );

		const onboardingStatus = getTasksStatus();
		const activePlugins = getActivePlugins();
		const options = getOptions();
		const profileItems = getProfileItems();
		const paypalOnboardingStatus = getPaypalOnboardingStatus();
		const methodContainerMap = getMethodContainerMap();
		const loadingPaypalStatus =
			! hasFinishedResolution( 'getPaypalOnboardingStatus' ) &&
			! paypalOnboardingStatus;

		return {
			activePlugins,
			loadingPaypalStatus,
			methodContainerMap,
			onboardingStatus,
			options,
			paypalOnboardingStatus,
			profileItems,
		};
	} )
)( Payments );
