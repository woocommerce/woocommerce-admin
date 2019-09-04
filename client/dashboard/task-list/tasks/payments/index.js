/** @format */

/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { filter, noop, keys, pickBy, difference } from 'lodash';
import { FormToggle, CheckboxControl } from '@wordpress/components';
import { Button, TextControl } from 'newspack-components';
import { withDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { getCountryCode } from 'dashboard/utils';
import { Form, Card, Stepper, List } from '@woocommerce/components';
import { getAdminLink, getHistory, getNewPath, getQuery } from '@woocommerce/navigation';

/**
 * Internal dependencies
 */
import withSelect from 'wc-api/with-select';
import Plugins from '../steps/plugins';
import Stripe from './stripe';
import PayPal from './paypal';

class Payments extends Component {
	constructor() {
		super( ...arguments );

		let step = 'choose';
		let showIndividualConfigs = false;
		let forceStripeManual = false;

		const query = getQuery();
		const { options } = this.props;
		const { woocommerce_onboarding_payments, woocommerce_stripe_settings } = options;

		const installed = woocommerce_onboarding_payments && woocommerce_onboarding_payments.installed;
		const methods =
			( woocommerce_onboarding_payments && woocommerce_onboarding_payments.methods ) || [];
		const configured =
			( woocommerce_onboarding_payments && woocommerce_onboarding_payments.configured ) || [];

		// Handle redirect back from Stripe
		if (
			query[ 'stripe-connect' ] &&
			'1' === query[ 'stripe-connect' ] &&
			methods.includes( 'stripe' )
		) {
			const isStripeConnected =
				( woocommerce_stripe_settings.publishable_key && woocommerce_stripe_settings.secret_key ) ||
				false;
			if ( isStripeConnected ) {
				this.markConfigured( 'stripe' );
				configured.push( 'stripe' );
				this.props.createNotice(
					'success',
					__( 'Stripe connected successfully.', 'woocommerce-admin' )
				);
			} else {
				step = 'stripe';
				showIndividualConfigs = true;
				// We could not connect via WCS or the user rejected the connection. Show fallback configuration fields.
				forceStripeManual = true;
			}
		}

		// Figure out which step to show initially if there are still steps to be configured, or redirect back to the task list.
		if ( methods.length > 0 && configured.length > 0 ) {
			step = difference( methods, configured )[ 0 ] || '';
			showIndividualConfigs = true;
			const stepsLeft = difference( methods, configured ).length;

			if ( 0 === stepsLeft ) {
				// @todo Mark as completed on the task list.
				this.state = {
					step: '',
				};
				getHistory().push( getNewPath( {}, '/', {} ) );
				return;
			}
		} else if ( 1 === installed && methods.length > 0 ) {
			// Methods have been installed but not configured yet.
			step = methods[ 0 ];
			showIndividualConfigs = true;
		}

		this.state = {
			step,
			showIndividualConfigs,
			forceStripeManual,
		};
		this.completeStep = this.completeStep.bind( this );
		this.markConfigured = this.markConfigured.bind( this );
		this.completePluginInstall = this.completePluginInstall.bind( this );
	}

	getInitialValues() {
		const values = {
			stripe: false,
			paypal: false,
			klarna_checkout: false,
			klarna_payments: false,
			square: false,
			create_stripe: false,
			create_paypal: false,
			stripe_email: '',
			paypal_email: '',
		};
		return values;
	}

	validate() {
		const errors = {};
		return errors;
	}

	completeStep() {
		const { step } = this.state;
		const steps = this.getSteps();
		const currentStepIndex = steps.findIndex( s => s.key === step );
		const nextStep = steps[ currentStepIndex + 1 ];

		if ( nextStep ) {
			this.setState( { step: nextStep.key } );
		} else {
			getHistory().push( getNewPath( {}, '/', {} ) );
		}
	}

	completePluginInstall() {
		this.props.updateOptions( {
			[ 'woocommerce_onboarding_payments' ]: {
				installed: 1,
				methods: this.getMethodsToConfigure(),
			},
		} );

		this.setState( { showIndividualConfigs: true }, function() {
			this.completeStep();
		} );
	}

	markConfigured( method ) {
		const { options } = this.props;
		const configured =
			( options &&
				options.woocommerce_onboarding_payments &&
				options.woocommerce_onboarding_payments.configured ) ||
			[];
		configured.push( method );
		this.props.updateOptions( {
			[ 'woocommerce_onboarding_payments' ]: {
				...options.woocommerce_onboarding_payments,
				configured,
			},
		} );
	}

	// If Jetpack is connected and WCS is enabled, we will offer a streamlined option.
	renderWooCommerceServicesStripeConnect() {
		const { getInputProps, values } = this.formData;
		if ( ! values.stripe ) {
			return null;
		}

		const { isJetpackConnected, activePlugins } = this.props;
		if ( ! isJetpackConnected || ! activePlugins.includes( 'woocommerce-services' ) ) {
			return null;
		}

		return (
			<div className="woocommerce-task-payments__woocommerce-services-options">
				<CheckboxControl
					label={ __( 'Create a Stripe account for me', 'woocommerce-admin' ) }
					{ ...getInputProps( 'create_stripe' ) }
				/>

				{ values.create_stripe && (
					<TextControl
						label={ __( 'Email address', 'woocommerce-admin' ) }
						{ ...getInputProps( 'stripe_email' ) }
					/>
				) }
			</div>
		);
	}

	renderWooCommerceServicesPayPalConnect() {
		const { getInputProps, values } = this.formData;
		if ( ! values.paypal ) {
			return null;
		}

		const { isJetpackConnected, activePlugins } = this.props;
		if ( ! isJetpackConnected || ! activePlugins.includes( 'woocommerce-services' ) ) {
			return null;
		}

		return (
			<div className="woocommerce-task-payments__woocommerce-services-options">
				<CheckboxControl
					label={ __( 'Create a Paypal account for me', 'woocommerce-admin' ) }
					{ ...getInputProps( 'create_paypal' ) }
				/>

				{ values.create_paypal && (
					<TextControl
						label={ __( 'Email address', 'woocommerce-admin' ) }
						{ ...getInputProps( 'paypal_email' ) }
					/>
				) }
			</div>
		);
	}

	getMethodOptions() {
		const { getInputProps } = this.formData;
		const { countryCode, profileItems } = this.props;
		const methods = [
			{
				title: __( 'Credit cards - powered by Stripe', 'woocommerce-admin' ),
				content: (
					<Fragment>
						{ __(
							'Accept debit and credit cards in 135+ currencies, methods such as Alipay, ' +
								'and one-touch checkout with Apple Pay.',
							'woocommerce-admin'
						) }
						{ this.renderWooCommerceServicesStripeConnect() }
					</Fragment>
				),
				before: <div />, // @todo Logo
				after: <FormToggle { ...getInputProps( 'stripe' ) } />,
				visible: true,
			},
			{
				title: __( 'PayPal Checkout', 'woocommerce-admin' ),
				content: (
					<Fragment>
						{ __(
							"Safe and secure payments using credit cards or your customer's PayPal account.",
							'woocommerce-admin'
						) }
						{ this.renderWooCommerceServicesPayPalConnect() }
					</Fragment>
				),
				before: <div />, // @todo Logo
				after: <FormToggle { ...getInputProps( 'paypal' ) } />,
				visible: true,
			},
			{
				title: __( 'Klarna Checkout', 'woocommerce-admin' ),
				content: __(
					'Choose the payment that you want, pay now, pay later or slice it. No credit card numbers, no passwords, no worries.',
					'woocommerce-admin'
				),
				before: <div />, // @todo Logo
				after: <FormToggle { ...getInputProps( 'klarna_checkout' ) } />,
				visible: [ 'SE', 'FI', 'NO', 'NL' ].includes( countryCode ),
			},
			{
				title: __( 'Klarna Payments', 'woocommerce-admin' ),
				content: __(
					'Choose the payment that you want, pay now, pay later or slice it. No credit card numbers, no passwords, no worries.',
					'woocommerce-admin'
				),
				before: <div />, // @todo Logo
				after: <FormToggle { ...getInputProps( 'klarna_payments' ) } />,
				visible: [ 'DK', 'DE', 'AT' ].includes( countryCode ),
			},
			{
				title: __( 'Square', 'woocommerce-admin' ),
				content: __(
					'Securely accept credit and debit cards with one low rate, no surprise fees (custom rates available). ' +
						'Sell online and in store and track sales and inventory in one place.',
					'woocommerce-admin'
				),
				before: <div />, // @todo Logo
				after: <FormToggle { ...getInputProps( 'square' ) } />,
				visible:
					[ 'brick-mortar', 'brick-mortar-other' ].includes( profileItems.selling_venues ) &&
					[ 'US', 'CA', 'JP', 'GB', 'AU' ].includes( countryCode ),
			},
		];

		return filter( methods, method => method.visible );
	}

	getMethodsToConfigure() {
		const { options } = this.props;
		if (
			options &&
			options.woocommerce_onboarding_payments &&
			options.woocommerce_onboarding_payments.methods
		) {
			return options.woocommerce_onboarding_payments.methods;
		}

		const { values } = this.formData;
		const methods = {
			stripe: values.stripe,
			paypal: values.paypal,
			'klarna-checkout': values.klarna_checkout,
			'klarna-payments': values.klarna_payments,
			square: values.square,
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
		};
		return keys( pickBy( pluginSlugs ) );
	}

	getSteps() {
		const { values } = this.formData;
		const isMethodSelected =
			values.stripe ||
			values.paypal ||
			values.klarna_checkout ||
			values.klarna_payments ||
			values.square;

		const { showIndividualConfigs, forceStripeManual } = this.state;
		const { activePlugins, countryCode, isJetpackConnected } = this.props;

		const manualConfig =
			isJetpackConnected && activePlugins.includes( 'woocommerce-services' ) ? false : true;

		const methods = this.getMethodsToConfigure();

		const steps = [
			{
				key: 'choose',
				label: __( 'Choose payment methods', 'woocommerce-admin' ),
				description: __( "Select which payment methods you'd like to use", 'woocommerce-admin' ),
				content: (
					<Fragment>
						<List items={ this.getMethodOptions() } />
						<Button onClick={ this.completeStep } isPrimary disabled={ ! isMethodSelected }>
							{ __( 'Proceed', 'woocommerce-admin' ) }
						</Button>
					</Fragment>
				),
				visible: true,
			},
			{
				key: 'install',
				label: __( 'Install selected methods', 'woocommerce-admin' ),
				description: __(
					'Install plugins required to offer the selected payment methods',
					'woocommerce-admin'
				),
				content: ! showIndividualConfigs && (
					<Plugins
						onComplete={ this.completePluginInstall }
						autoInstall
						pluginSlugs={ this.getPluginsToInstall() }
					/>
				),
				visible: true,
			},
			{
				key: 'configure',
				label: __( 'Configure payment methods', 'woocommerce-admin' ),
				description: __( 'Set up your chosen payment methods', 'woocommerce-admin' ),
				content: <Fragment />,
				visible: ! showIndividualConfigs,
			},
			{
				key: 'stripe',
				label: __( 'Enable Stripe', 'woocommerce-admin' ),
				description: __( 'Connect your store to your Stripe account', 'woocommerce-admin' ),
				content: (
					<Stripe
						manualConfig={ forceStripeManual || manualConfig }
						completeStep={ this.completeStep }
						markConfigured={ this.markConfigured }
						createAccount={ values.create_stripe }
						email={ values.stripe_email }
						countryCode={ countryCode }
						returnUrl={ getAdminLink( 'admin.php?page=wc-admin&task=payments&stripe-connect=1' ) }
					/>
				),
				visible: showIndividualConfigs && methods.includes( 'stripe' ),
			},
			{
				key: 'paypal',
				label: __( 'Enable PayPal Checkout', 'woocommerce-admin' ),
				description: __( 'Connect your store to your PayPal account', 'woocommerce-admin' ),
				content: <PayPal />,
				visible: showIndividualConfigs && methods.includes( 'paypal' ),
			},
			// @todo Klarna
			// @todo Square
		];

		return filter( steps, step => step.visible );
	}

	render() {
		const { step } = this.state;
		const { isSettingsRequesting } = this.props;
		return (
			<Form
				initialValues={ this.getInitialValues() }
				onSubmitCallback={ noop }
				validate={ this.validate }
			>
				{ formData => {
					this.formData = formData;
					return (
						<div className="woocommerce-task-payments">
							<Card className="is-narrow">
								<Stepper
									isVertical
									isPending={ isSettingsRequesting || 'install' === step }
									currentStep={ step }
									steps={ this.getSteps() }
								/>
							</Card>
						</div>
					);
				} }
			</Form>
		);
	}
}

export default compose(
	withSelect( select => {
		const {
			getSettings,
			getSettingsError,
			isGetSettingsRequesting,
			getProfileItems,
			isJetpackConnected,
			getActivePlugins,
			getOptions,
		} = select( 'wc-api' );

		const settings = getSettings( 'general' );
		const isSettingsError = Boolean( getSettingsError( 'general' ) );
		const isSettingsRequesting = isGetSettingsRequesting( 'general' );
		const countryCode = getCountryCode( settings.woocommerce_default_country );

		const options = getOptions( [
			'woocommerce_onboarding_payments',
			'woocommerce_stripe_settings',
		] );

		return {
			countryCode,
			isSettingsError,
			isSettingsRequesting,
			settings,
			profileItems: getProfileItems(),
			activePlugins: getActivePlugins(),
			isJetpackConnected: isJetpackConnected(),
			options,
		};
	} ),
	withDispatch( dispatch => {
		const { createNotice } = dispatch( 'core/notices' );
		const { updateOptions } = dispatch( 'wc-api' );
		return {
			createNotice,
			updateOptions,
		};
	} )
)( Payments );
