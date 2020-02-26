/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Fragment, cloneElement, Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { get, filter, keys, pickBy, difference } from 'lodash';
import { Button, FormToggle } from '@wordpress/components';
import { withDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { Card, H } from '@woocommerce/components';
import {
	getHistory,
	getNewPath,
	updateQueryString,
} from '@woocommerce/navigation';
import {
	WC_ASSET_URL as wcAssetUrl,
	getSetting,
} from '@woocommerce/wc-admin-settings';

/**
 * Internal dependencies
 */
import { recordEvent } from 'lib/tracks';
import { getCountryCode } from 'dashboard/utils';
import withSelect from 'wc-api/with-select';
import Plugins from '../steps/plugins';
import Stripe from './stripe';
import Square from './square';
import PayPal from './paypal';
import { pluginNames } from 'wc-api/onboarding/constants';
import Klarna from './klarna';
import PayFast from './payfast';

class Payments extends Component {
	constructor() {
		super( ...arguments );

		this.markConfigured = this.markConfigured.bind( this );
		this.setMethodRequestPending = this.setMethodRequestPending.bind(
			this
		);
	}

	componentDidUpdate( prevProps ) {
		const { methods, configured } = this.props;
		if (
			prevProps.configured.length !== configured.length &&
			methods.length > 0 &&
			configured.length > 0
		) {
			const stepsLeft = difference( methods, configured );
			const nextStep = stepsLeft[ 0 ];
			/* eslint-disable react/no-did-update-set-state */
			this.setState( {
				step: nextStep,
			} );
			/* eslint-enable react/no-did-update-set-state */
		}
	}

	completeTask() {
		const { createNotice } = this.props;

		createNotice(
			'success',
			__(
				'💰 Ka-ching! Your store can now accept payments 💳',
				'woocommerce-admin'
			)
		);

		getHistory().push( getNewPath( {}, '/', {} ) );
	}

	isStripeEnabled() {
		const { countryCode } = this.props;
		const stripeCountries = getSetting( 'onboarding', {
			stripeSupportedCountries: [],
		} ).stripeSupportedCountries;
		return stripeCountries.includes( countryCode );
	}

	getInitialValues() {
		const stripeEmail = getSetting( 'onboarding', { userEmail: '' } )
			.userEmail;
		const values = {
			stripe: this.isStripeEnabled(),
			paypal: false,
			klarna_checkout: false,
			klarna_payments: false,
			square: false,
			create_stripe: this.isStripeEnabled(),
			stripe_email: ( this.isStripeEnabled() && stripeEmail ) || '',
			payfast: false,
		};
		return values;
	}

	markConfigured( method ) {
		const { options, methods, configured } = this.props;
		configured.push( method );
		const stepsLeft = difference( methods, configured );

		this.props.updateOptions( {
			woocommerce_task_list_payments: {
				...options.woocommerce_task_list_payments,
				configured,
				completed: stepsLeft.length === 0 ? 1 : 0,
			},
		} );

		if ( stepsLeft.length === 0 ) {
			this.completeTask();
		}
	}

	setMethodRequestPending( status ) {
		this.setState( {
			methodRequestPending: status,
		} );
	}

	getMethodOptions() {
		const { countryCode, profileItems } = this.props;

		const methods = [
			{
				key: 'stripe',
				title: __(
					'Credit cards - powered by Stripe',
					'woocommerce-admin'
				),
				content: (
					<Fragment>
						{ __(
							'Accept debit and credit cards in 135+ currencies, methods such as Alipay, ' +
								'and one-touch checkout with Apple Pay.',
							'woocommerce-admin'
						) }
					</Fragment>
				),
				before: <img src={ wcAssetUrl + 'images/stripe.png' } alt="" />,
				visible: this.isStripeEnabled(),
				plugins: [ 'woocommerce-gateway-stripe' ],
				container: (
					<Stripe
						markConfigured={ this.markConfigured }
						setRequestPending={ this.setMethodRequestPending }
					/>
				),
			},
			{
				key: 'paypal',
				title: __( 'PayPal Checkout', 'woocommerce-admin' ),
				content: (
					<Fragment>
						{ __(
							"Safe and secure payments using credit cards or your customer's PayPal account.",
							'woocommerce-admin'
						) }
					</Fragment>
				),
				before: <img src={ wcAssetUrl + 'images/paypal.png' } alt="" />,
				visible: true,
			},
			{
				key: 'klarna_checkout',
				title: __( 'Klarna Checkout', 'woocommerce-admin' ),
				content: __(
					'Choose the payment that you want, pay now, pay later or slice it. No credit card numbers, no passwords, no worries.',
					'woocommerce-admin'
				),
				before: (
					<img
						src={ wcAssetUrl + 'images/klarna-black.png' }
						alt=""
					/>
				),
				visible: [ 'SE', 'FI', 'NO', 'NL' ].includes( countryCode ),
			},
			{
				key: 'klarna_payments',
				title: __( 'Klarna Payments', 'woocommerce-admin' ),
				content: __(
					'Choose the payment that you want, pay now, pay later or slice it. No credit card numbers, no passwords, no worries.',
					'woocommerce-admin'
				),
				before: (
					<img
						src={ wcAssetUrl + 'images/klarna-black.png' }
						alt=""
					/>
				),
				visible: [ 'DK', 'DE', 'AT' ].includes( countryCode ),
			},
			{
				key: 'square',
				title: __( 'Square', 'woocommerce-admin' ),
				content: __(
					'Securely accept credit and debit cards with one low rate, no surprise fees (custom rates available). ' +
						'Sell online and in store and track sales and inventory in one place.',
					'woocommerce-admin'
				),
				before: (
					<img
						src={ wcAssetUrl + 'images/square-black.png' }
						alt=""
					/>
				),
				visible:
					[ 'brick-mortar', 'brick-mortar-other' ].includes(
						profileItems.selling_venues
					) &&
					[ 'US', 'CA', 'JP', 'GB', 'AU' ].includes( countryCode ),
			},
			{
				key: 'payfast',
				title: __( 'PayFast', 'woocommerce-admin' ),
				content: (
					<Fragment>
						{ __(
							'The PayFast extension for WooCommerce enables you to accept payments by Credit Card and EFT via one of South Africa’s most popular payment gateways. No setup fees or monthly subscription costs.',
							'woocommerce-admin'
						) }
						<p>
							{ __(
								'Selecting this extension will configure your store to use South African rands as the selected currency.',
								'woocommerce-admin'
							) }
						</p>
					</Fragment>
				),
				before: (
					<img
						src={ wcAssetUrl + 'images/payfast.png' }
						alt="PayFast logo"
					/>
				),
				visible: [ 'ZA' ].includes( countryCode ),
			},
		];

		return filter( methods, ( method ) => method.visible );
	}

	getMethodsToConfigure() {
		const { options } = this.props;
		if (
			options &&
			options.woocommerce_task_list_payments &&
			options.woocommerce_task_list_payments.methods
		) {
			return options.woocommerce_task_list_payments.methods;
		}

		const { values } = this.formData;
		const methods = {
			stripe: values.stripe,
			paypal: values.paypal,
			'klarna-checkout': values.klarna_checkout,
			'klarna-payments': values.klarna_payments,
			square: values.square,
			payfast: values.payfast,
		};
		return keys( pickBy( methods ) );
	}

	getPluginsToInstall() {
		const { values } = this.formData;
		const pluginSlugs = {
			'woocommerce-gateway-stripe': values.stripe,
			'woocommerce-gateway-paypal-express-checkout': values.paypal,
			'klarna-checkout-for-woocommerce': values.klarna_checkout,
			'klarna-payments-for-woocommerce': values.klarna_payments,
			'woocommerce-square': values.square,
			'woocommerce-payfast-gateway': values.payfast,
		};
		return keys( pickBy( pluginSlugs ) );
	}

	getSteps() {
		const { showIndividualConfigs } = this.state;

		const methods = this.getMethodsToConfigure();

		const steps = [
			{
				key: 'paypal',
				label: __( 'Enable PayPal Checkout', 'woocommerce-admin' ),
				description: __(
					'Connect your store to your PayPal account',
					'woocommerce-admin'
				),
				content: (
					<PayPal
						markConfigured={ this.markConfigured }
						setRequestPending={ this.setMethodRequestPending }
					/>
				),
				visible: showIndividualConfigs && methods.includes( 'paypal' ),
			},
			{
				key: 'square',
				label: __( 'Enable Square', 'woocommerce-admin' ),
				description: __(
					'Connect your store to your Square account',
					'woocommerce-admin'
				),
				content: (
					<Square
						markConfigured={ this.markConfigured }
						setRequestPending={ this.setMethodRequestPending }
					/>
				),
				visible: showIndividualConfigs && methods.includes( 'square' ),
			},
			{
				key: 'klarna-checkout',
				label: __( 'Klarna', 'woocommerce-admin' ),
				description: '',
				content: (
					<Klarna
						markConfigured={ this.markConfigured }
						setRequestPending={ this.setMethodRequestPending }
						plugin={ 'checkout' }
					/>
				),
				visible:
					showIndividualConfigs &&
					methods.includes( 'klarna-checkout' ),
			},
			{
				key: 'klarna-payments',
				label: __( 'Klarna', 'woocommerce-admin' ),
				description: '',
				content: (
					<Klarna
						markConfigured={ this.markConfigured }
						setRequestPending={ this.setMethodRequestPending }
						plugin={ 'payments' }
					/>
				),
				visible:
					showIndividualConfigs &&
					methods.includes( 'klarna-payments' ),
			},
			{
				key: 'payfast',
				label: __( 'Enable PayFast', 'woocommerce-admin' ),
				description: __(
					'Connect your store to your PayFast account',
					'woocommerce-admin'
				),
				content: (
					<PayFast
						markConfigured={ this.markConfigured }
						setRequestPending={ this.setMethodRequestPending }
					/>
				),
				visible: showIndividualConfigs && methods.includes( 'payfast' ),
			},
		];

		return filter( steps, ( step ) => step.visible );
	}

	getCurrentMethod() {
		const { query } = this.props;

		if ( ! query.method ) {
			return;
		}

		const methods = this.getMethodOptions();

		return methods.find( ( method ) => method.key === query.method );
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
					onComplete={ () => {
						recordEvent( 'tasklist_payment_install_method', {
							plugins: currentMethod.plugins,
						} );
					} }
					autoInstall
					pluginSlugs={ currentMethod.plugins }
				/>
			),
			isComplete: ! pluginsToInstall.length,
		};
	}

	render() {
		const currentMethod = this.getCurrentMethod();
		const { query } = this.props;

		if ( currentMethod ) {
			return (
				<Card className="woocommerce-task-payment-method is-narrow">
					{ cloneElement( currentMethod.container, {
						query,
						installStep: this.getInstallStep(),
					} ) }
				</Card>
			);
		}

		const methods = this.getMethodOptions();

		return (
			<div className="woocommerce-task-payments">
				{ methods.map( ( method ) => {
					const {
						before,
						container,
						content,
						key,
						title,
						visible,
					} = method;

					if ( ! visible ) {
						return null;
					}

					return (
						<Card
							key={ key }
							className="woocommerce-task-payment is-narrow"
						>
							<div className="woocommerce-task-payment__before">
								{ before }
							</div>
							<div className="woocommerce-task-payment__text">
								<H className="woocommerce-task-payment__title">
									{ title }
								</H>
								<p className="woocommerce-task-payment__content">
									{ content }
								</p>
							</div>
							<div className="woocommerce-task-payment__after">
								{ container ? (
									<Button
										isPrimary={ key === 'stripe' }
										isDefault={ key !== 'stripe' }
										onClick={ () =>
											updateQueryString( { method: key } )
										}
									>
										{ __( 'Set up', 'woocommerce-admin' ) }
									</Button>
								) : (
									<FormToggle />
								) }
							</div>
						</Card>
					);
				} ) }
			</div>
		);
	}
}

export default compose(
	withSelect( ( select ) => {
		const {
			getProfileItems,
			isJetpackConnected,
			getActivePlugins,
			getOptions,
		} = select( 'wc-api' );

		const options = getOptions( [
			'woocommerce_task_list_payments',
			'woocommerce_default_country',
		] );
		const countryCode = getCountryCode(
			options.woocommerce_default_country
		);

		const methods = get(
			options,
			[ 'woocommerce_task_list_payments', 'methods' ],
			[]
		);
		const installed = get(
			options,
			[ 'woocommerce_task_list_payments', 'installed' ],
			false
		);
		const configured = get(
			options,
			[ 'woocommerce_task_list_payments', 'configured' ],
			[]
		);

		const completed = get(
			options,
			[ 'woocommerce_task_list_payments', 'completed' ],
			false
		);

		return {
			countryCode,
			profileItems: getProfileItems(),
			activePlugins: getActivePlugins(),
			isJetpackConnected: isJetpackConnected(),
			options,
			methods,
			installed,
			configured,
			completed,
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { createNotice } = dispatch( 'core/notices' );
		const { updateOptions } = dispatch( 'wc-api' );
		return {
			createNotice,
			updateOptions,
		};
	} )
)( Payments );
