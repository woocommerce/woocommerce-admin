/*global ppcp_onboarding */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { Button } from '@wordpress/components';
import { Component, Fragment, useEffect } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import interpolateComponents from 'interpolate-components';
import { withDispatch, withSelect } from '@wordpress/data';
import { isEmail } from '@wordpress/url';
import { Form, Link, Stepper, TextControl } from '@woocommerce/components';
import { getQuery } from '@woocommerce/navigation';
import {
	PLUGINS_STORE_NAME,
	OPTIONS_STORE_NAME,
	WC_ADMIN_NAMESPACE,
} from '@woocommerce/data';

export const PAYPAL_PLUGIN = 'woocommerce-paypal-payments';

function PaypalConnectBtn({ connectUrl, onSuccess }) {

	useEffect(() => {
		function onOnboardingCallback(data, error) {
			if (data && !error && onSuccess && data.success) {
				onSuccess(data);
			}
		}
		if (ppcp_onboarding) {
			ppcp_onboarding.reload();
			ppcp_onboarding.registerCallback(onOnboardingCallback);
		}
		return () => {
			if (ppcp_onboarding) {
				ppcp_onboarding.unregisterCallback(onOnboardingCallback);
			}
		}
	}, []);


	return (<a className="button-primary" target="_blank" href={ connectUrl } data-paypal-onboard-button="true" data-paypal-button="true" data-paypal-onboard-complete="ppcp_onboarding_productionCallback">
	{ __(
		'Connect',
		'woocommerce-admin'
	) }
</a>);
}

export class PayPal extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			autoConnectFailed: false,
			connectURL: '',
		};

		this.updateSettings = this.updateSettings.bind( this );
		this.validate = this.validate.bind( this );
	}

	componentDidMount() {
		const { createNotice, markConfigured } = this.props;

		const query = getQuery();
		// Handle redirect back from PayPal
		if ( query[ 'paypal-connect' ] ) {
			if ( query[ 'paypal-connect' ] === '1' ) {
				createNotice(
					'success',
					__( 'PayPal connected successfully.', 'woocommerce-admin' )
				);
				markConfigured( 'paypal' );
				return;
			}

			/* eslint-disable react/no-did-mount-set-state */
			this.setState( {
				autoConnectFailed: true,
			} );
			/* eslint-enable react/no-did-mount-set-state */
			return;
		}
		this.fetchOAuthConnectURL();
	}

	componentDidUpdate( prevProps ) {
		const { activePlugins } = this.props;

		if (
			! prevProps.activePlugins.includes(PAYPAL_PLUGIN
			) &&
			activePlugins.includes(PAYPAL_PLUGIN
			)
		) {
			this.fetchOAuthConnectURL();
		}
	}

	async fetchOAuthConnectURL() {
		const { activePlugins } = this.props;

		if (
			! activePlugins.includes(
				PAYPAL_PLUGIN
			)
		) {
			return;
		}

		this.setState( { isPending: true } );
		try {
			const result = await apiFetch( {
				path: WC_ADMIN_NAMESPACE + '/plugins/connect-paypal',
				method: 'POST',
			} );
			if ( ! result || ! result.connectUrl ) {
				this.setState( {
					autoConnectFailed: true,
					isPending: false,
				} );
				return;
			}
			this.setState( {
				connectURL: result.connectUrl,
				isPending: false,
			} );
		} catch ( error ) {
			this.setState( {
				autoConnectFailed: true,
				isPending: false,
			} );
		}
	}

	async updateSettings( values ) {
		const {
			createNotice,
			options,
			updateOptions,
			markConfigured,
		} = this.props;

		const optionValues = {
			...options,
			enabled: true,
			...values
		};

		const update = await updateOptions( {
			'woocommerce-ppcp-settings': optionValues,
		} );

		if ( update.success ) {
			createNotice(
				'success',
				__( 'PayPal connected successfully.', 'woocommerce-admin' )
			);
			markConfigured( 'paypal' );
		} else {
			createNotice(
				'error',
				__(
					'There was a problem saving your payment settings.',
					'woocommerce-admin'
				)
			);
		}
	}

	getInitialConfigValues() {
		const { options } = this.props;
		return [ 'merchant_email', 'merchant_id_production',
			'client_id_production',
			'client_secret_production',
			].reduce((initialVals, key) => {
		return {
			...initialVals,
			[key]: options && options[key] ? options[key] : ''
		}
	}, {});
	}

	validate( values ) {
		const errors = {};

		if ( ! values.merchant_email ) {
			errors.merchant_email = __(
				'Please enter your Merchant email',
				'woocommerce-admin'
			);
		}
		if (! isEmail( values.merchant_email )) {
			errors.merchant_email = __(
				'Please enter a valid email address',
				'woocommerce-admin'
			);
		}
		if ( ! values.merchant_id_production ) {
			errors.merchant_id_production = __(
				'Please enter your Merchand Id',
				'woocommerce-admin'
			);
		}
		if ( ! values.client_id_production ) {
			errors.client_id_production = __(
				'Please enter your Client Id',
				'woocommerce-admin'
			);
		}
		if ( ! values.client_secret_production ) {
			errors.client_secret_production = __(
				'Please enter your Client Secret',
				'woocommerce-admin'
			);
		}

		return errors;
	}

	renderAutomaticConfig() {
		const { isOptionsUpdating } = this.props;
		const { autoConnectFailed, connectURL, isPending } = this.state;

		// const canAutoCreate = this.isWooCommerceServicesConnected();
		const initialValues = this.getInitialConfigValues();

		return (
			<Form
				initialValues={ initialValues }
				onSubmitCallback={ this.updateSettings }
				validate={ this.validate }
			>
				{ ( { values } ) => {
					return (
						<Fragment>
							{ ! autoConnectFailed &&
								connectURL &&
										<><PaypalConnectBtn connectUrl={ connectURL } onSuccess={() => console.log('success')} />
										<p>
											{ __(
												'You will be redirected to the PayPal website to create the connection.',
												'woocommerce-admin'
											) }
										</p></>
				}
						</Fragment>
					);
				} }
			</Form>
		);
	}

	renderManualConfig() {
		const { isOptionsUpdating } = this.props;
		const stripeHelp = interpolateComponents( {
			mixedString: __(
				'Your API details can be obtained from your {{docsLink}}Paypal developer account{{/docsLink}}. Don’t have a Paypal account? {{registerLink}}Create one.{{/registerLink}}',
				'woocommerce-admin'
			),
			components: {
				docsLink: (
					<Link
						href="https://developer.paypal.com/docs/api-basics/manage-apps/#create-or-edit-sandbox-and-live-apps"
						target="_blank"
						type="external"
					/>
				),
				registerLink: (
					<Link
						href="https://www.paypal.com/us/business"
						target="_blank"
						type="external"
					/>
				),
			},
		} );

		return (
			<Form
				initialValues={ this.getInitialConfigValues() }
				onSubmitCallback={ this.updateSettings }
				validate={ this.validate }
			>
				{ ( { getInputProps, handleSubmit } ) => {
					return (
						<Fragment>
							<TextControl
								label={ __(
									'Email address',
									'woocommerce-admin'
								) }
								required
								{ ...getInputProps( 'merchant_email' ) }
							/>
							<TextControl
								label={ __(
									'Merchant Id',
									'woocommerce-admin'
								) }
								required
								{ ...getInputProps( 'merchant_id_production' ) }
							/>
							<TextControl
								label={ __(
									'Client Id',
									'woocommerce-admin'
								) }
								required
								{ ...getInputProps( 'client_id_production' ) }
							/>
							<TextControl
								label={ __(
									'Secret Key',
									'woocommerce-admin'
								) }
								required
								{ ...getInputProps( 'client_secret_production' ) }
							/>

							{ values.create_account && (
								<Button
									onClick={ handleSubmit }
									isPrimary
									isBusy={ isOptionsUpdating }
								>
									{ __(
										'Create account',
										'woocommerce-admin'
									) }
								</Button>
							) }

							{ ! autoConnectFailed &&
								connectURL &&
								( 
									! values.create_account ) && (
									<Fragment>
										<a className="button-primary" target="_blank" href={ connectURL } data-paypal-onboard-button="true" data-paypal-button="true" data-paypal-onboard-complete="ppcp_onboarding_productionCallback">
											{ __(
												'Connect',
												'woocommerce-admin'
											) }
										</a>
										<p>
											{ __(
												'You will be redirected to the PayPal website to create the connection.',
												'woocommerce-admin'
											) }
										</p>
									</Fragment>
									) }
							<Button
								isPrimary
								isBusy={ isOptionsUpdating }
								onClick={ handleSubmit }
							>
								{ __( 'Proceed', 'woocommerce-admin' ) }
							</Button>

							<p>{ stripeHelp }</p>
						</Fragment>
					);
				} }
			</Form>
		);
	}

	getConnectStep() {
		const { isRequestingOptions } = this.props;
		return {
			key: 'connect',
			label: __( 'Connect your PayPal account', 'woocommerce-admin' ),
			description: __(
				'A PayPal account is required to process payments. Connect your store to your PayPal account.',
				'woocommerce-admin'
			),
			content: isRequestingOptions ? null : this.renderAutomaticConfig(), //this.renderManualConfig(),
		};
	}

	render() {
		const { installStep, isRequestingOptions, isPending } = this.props;

		return (
			<Stepper
				isVertical
				isPending={ ! installStep.isComplete || isPending || isRequestingOptions }
				currentStep={ installStep.isComplete ? 'connect' : 'install' }
				steps={ [ installStep, this.getConnectStep() ] }
			/>
		);
	}
}

PayPal.defaultProps = {
	manualConfig: false, // WCS is not required for the PayPal OAuth flow, so we can default to smooth connection.
};

export default compose(
	withSelect( ( select ) => {
		const { getOption, isOptionsUpdating, isRequestingOption, hasFinishedResolution } = select( OPTIONS_STORE_NAME );
		const { getActivePlugins } = select(
			PLUGINS_STORE_NAME
		);
		const paypalOptions = getOption( 'woocommerce-ppcp-settings' );
		const isRequestingOptions = !hasFinishedResolution( 'getOption', [ 'woocommerce-ppcp-settings' ] )
		const activePlugins = getActivePlugins();

		return {
			activePlugins,
			isOptionsUpdating: isOptionsUpdating(),
			options: paypalOptions,
			isRequestingOptions
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { createNotice } = dispatch( 'core/notices' );
		const { updateOptions } = dispatch( OPTIONS_STORE_NAME );
		return {
			createNotice,
			updateOptions,
		};
	} )
)( PayPal );
