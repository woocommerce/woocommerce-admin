/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import {
	Button,
	Card,
	CardBody,
	CardMedia,
	CardFooter,
	Spinner,
} from '@wordpress/components';
import { withDispatch, withSelect } from '@wordpress/data';
import { H } from '@woocommerce/components';
import { getAdminLink } from '@woocommerce/wc-admin-settings';
import {
	getHistory,
	getNewPath,
	updateQueryString,
} from '@woocommerce/navigation';
import {
	ONBOARDING_STORE_NAME,
	OPTIONS_STORE_NAME,
	PLUGINS_STORE_NAME,
	SETTINGS_STORE_NAME,
} from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import { getCountryCode } from '../../../dashboard/utils';
import { getPaymentMethods } from './methods';
import { RecommendedRibbon } from './recommended-ribbon';
import { Setup } from './setup';

export const setMethodEnabledOption = async (
	optionName,
	value,
	{ clearTaskStatusCache, updateOptions, options }
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
	constructor( props ) {
		super( ...arguments );
		const { methods } = props;

		const enabledMethods = {};
		methods.forEach(
			( method ) => ( enabledMethods[ method.key ] = method.isEnabled )
		);
		this.state = {
			busyMethod: null,
			enabledMethods,
			recommendedMethod: this.getRecommendedMethod(),
		};

		this.markConfigured = this.markConfigured.bind( this );
	}

	componentDidUpdate() {
		const { recommendedMethod } = this.state;

		const method = this.getRecommendedMethod();
		if ( recommendedMethod !== method ) {
			this.setState( {
				recommendedMethod: method,
			} );
		}
	}

	getRecommendedMethod() {
		const { methods } = this.props;
		const recommendedMethod = methods.find(
			( m ) =>
				( m.key === 'wcpay' && m.visible ) ||
				( m.key === 'mercadopago' && m.visible )
		);
		if ( ! recommendedMethod ) {
			return 'stripe';
		}
		return recommendedMethod.key;
	}

	async markConfigured( methodName, queryParams = {} ) {
		const { enabledMethods } = this.state;
		const { methods } = this.props;

		const method = methods.find( ( option ) => option.key === methodName );

		if ( ! method ) {
			throw `Method ${ methodName } not found in available methods list`;
		}

		this.setState( {
			enabledMethods: {
				...enabledMethods,
				[ methodName ]: true,
			},
		} );

		await setMethodEnabledOption( method.optionName, 'yes', this.props );

		recordEvent( 'tasklist_payment_connect_method', {
			payment_method: methodName,
		} );

		getHistory().push(
			getNewPath( { ...queryParams, task: 'payments' }, '/', {} )
		);
	}

	getCurrentMethod() {
		const { methods, query } = this.props;

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

	async enableMethod( key ) {
		const { methods } = this.props;
		const { enabledMethods } = this.state;
		const method = methods.find( ( option ) => option.key === key );

		if ( ! method ) {
			throw `Method ${ key } not found in available methods list`;
		}

		enabledMethods[ key ] = ! enabledMethods[ key ];
		this.setState( { enabledMethods } );

		recordEvent( 'tasklist_payment_toggle', {
			enabled: true,
			payment_method: key,
		} );

		await setMethodEnabledOption( method.optionName, 'yes', this.props );
	}

	async handleClick( method ) {
		const { methods } = this.props;
		const { key, onClick } = method;

		recordEvent( 'tasklist_payment_setup', {
			options: methods.map( ( option ) => option.key ),
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
		const { busyMethod, enabledMethods, recommendedMethod } = this.state;
		const { container, isConfigured, key } = method;
		const isEnabled = enabledMethods[ key ];

		if ( container && ! isConfigured ) {
			return (
				<div>
					<Button
						isPrimary={ key === recommendedMethod }
						isSecondary={ key !== recommendedMethod }
						isBusy={ busyMethod === key }
						disabled={ busyMethod }
						onClick={ () => this.handleClick( method ) }
					>
						{ __( 'Set up', 'woocommerce-admin' ) }
					</Button>
				</div>
			);
		}

		if ( ( container && isConfigured ) || ( ! container && isEnabled ) ) {
			return (
				<div>
					<Button
						isSecondary
						href={ getAdminLink(
							'admin.php?page=wc-settings&tab=checkout&section=' +
								key
						) }
					>
						{ __( 'Manage', 'woocommerce-admin' ) }
					</Button>
				</div>
			);
		}

		return (
			<Button isSecondary onClick={ () => this.enableMethod( key ) }>
				{ __( 'Enable', 'woocommerce-admin' ) }
			</Button>
		);
	}

	render() {
		const currentMethod = this.getCurrentMethod();
		const { recommendedMethod } = this.state;
		const { methods } = this.props;

		if ( currentMethod ) {
			return (
				<Setup
					method={ currentMethod }
					markConfigured={ this.markConfigured }
				/>
			);
		}

		return (
			<div className="woocommerce-task-payments">
				{ methods.map( ( method ) => {
					const {
						before,
						content,
						isConfigured,
						key,
						title,
						visible,
						loading,
					} = method;

					if ( ! visible ) {
						return null;
					}

					const classes = classnames(
						'woocommerce-task-payment',
						'woocommerce-task-card',
						! isConfigured &&
							'woocommerce-task-payment-not-configured',
						'woocommerce-task-payment-' + key
					);

					const isRecommended =
						key === recommendedMethod && ! isConfigured;

					return (
						<Card key={ key } className={ classes }>
							{ isRecommended && key !== 'wcpay' && (
								<RecommendedRibbon key={ key } />
							) }
							<CardMedia isBorderless>{ before }</CardMedia>
							<CardBody>
								<H className="woocommerce-task-payment__title">
									{ title }
									{ isRecommended && key === 'wcpay' && (
										<RecommendedRibbon isPill key={ key } />
									) }
								</H>
								<div className="woocommerce-task-payment__content">
									{ content }
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
	withSelect( ( select, props ) => {
		const { createNotice, installAndActivatePlugins } = props;
		const { getProfileItems } = select( ONBOARDING_STORE_NAME );
		const { getOption } = select( OPTIONS_STORE_NAME );
		const {
			getActivePlugins,
			isJetpackConnected,
			getPaypalOnboardingStatus,
			hasFinishedResolution,
		} = select( PLUGINS_STORE_NAME );
		const { getSettings } = select( SETTINGS_STORE_NAME );
		const { general: generalSettings = {} } = getSettings( 'general' );
		const { getTasksStatus } = select( ONBOARDING_STORE_NAME );

		const activePlugins = getActivePlugins();
		const onboardingStatus = getTasksStatus();
		const profileItems = getProfileItems();

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
			'woocommerce_paystack_settings',
			'woocommerce_woo-mercado-pago-basic_settings',
		];

		const options = optionNames.reduce( ( result, name ) => {
			result[ name ] = getOption( name );
			return result;
		}, {} );
		const countryCode = getCountryCode(
			generalSettings.woocommerce_default_country
		);

		const paypalOnboardingStatus = activePlugins.includes(
			'woocommerce-paypal-payments'
		)
			? getPaypalOnboardingStatus()
			: null;

		const methods = getPaymentMethods( {
			activePlugins,
			countryCode,
			createNotice,
			installAndActivatePlugins,
			isJetpackConnected: isJetpackConnected(),
			onboardingStatus,
			options,
			profileItems,
			paypalOnboardingStatus,
			loadingPaypalStatus:
				! hasFinishedResolution( 'getPaypalOnboardingStatus' ) &&
				! paypalOnboardingStatus,
		} );

		return {
			countryCode,
			profileItems,
			activePlugins,
			options,
			methods,
		};
	} )
)( Payments );
