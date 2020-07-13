/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { Button, CheckboxControl } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import interpolateComponents from 'interpolate-components';
import { withDispatch, withSelect } from '@wordpress/data';
import { isEmail } from '@wordpress/url';

/**
 * WooCommerce dependencies
 */
import { Form, Link, Stepper, TextControl } from '@woocommerce/components';
import { getQuery } from '@woocommerce/navigation';
import { WC_ADMIN_NAMESPACE } from 'wc-api/constants';
import { PLUGINS_STORE_NAME, OPTIONS_STORE_NAME } from '@woocommerce/data';

class PayPal extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			autoConnectFailed: false,
			connectURL: '',
			isPending: false,
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
			! prevProps.activePlugins.includes(
				'woocommerce-gateway-paypal-express-checkout'
			) &&
			activePlugins.includes(
				'woocommerce-gateway-paypal-express-checkout'
			)
			// TODO: check for active WCS here?
		) {
			this.fetchOAuthConnectURL();
		}
	}

	isWooCommerceServicesConnected() {
		const { activePlugins, isJetpackConnected } = this.props;

		return (
			isJetpackConnected &&
			activePlugins.includes( 'woocommerce-services' )
		);
	}

	async fetchOAuthConnectURL() {
		const { activePlugins } = this.props;

		if (
			! activePlugins.includes(
				'woocommerce-gateway-paypal-express-checkout'
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

		const update = await updateOptions( {
			woocommerce_ppec_paypal_settings: {
				...options.woocommerce_ppec_paypal_settings,
				api_username: values.api_username,
				api_password: values.api_password,
				enabled: 'yes',
			},
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
		return {
			api_username: '',
			api_password: '',
			create_account: this.isWooCommerceServicesConnected(),
			account_email: '',
		};
	}

	validate( values ) {
		const errors = {};

		if ( ! values.api_username ) {
			errors.api_username = __(
				'Please enter your API username',
				'woocommerce-admin'
			);
		}
		if ( ! values.api_password ) {
			errors.api_password = __(
				'Please enter your API password',
				'woocommerce-admin'
			);
		}

		if (
			this.isWooCommerceServicesConnected() &&
			values.create_account &&
			! isEmail( values.account_email )
		) {
			errors.account_email = __(
				'Please enter a valid email address',
				'woocommerce-admin'
			);
		}

		return errors;
	}

	renderManualConfig() {
		const { isOptionsUpdating } = this.props;
		const link = (
			<Link
				href="https://docs.woocommerce.com/document/paypal-express-checkout/#section-8"
				target="_blank"
				type="external"
			/>
		);
		const help = interpolateComponents( {
			mixedString: __(
				'Your API details can be obtained from your {{link}}PayPal account{{/link}}',
				'woocommerce-admin'
			),
			components: {
				link,
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
									'API Username',
									'woocommerce-admin'
								) }
								required
								{ ...getInputProps( 'api_username' ) }
							/>
							<TextControl
								label={ __(
									'API Password',
									'woocommerce-admin'
								) }
								required
								{ ...getInputProps( 'api_password' ) }
							/>

							<Button
								onClick={ handleSubmit }
								isPrimary
								isBusy={ isOptionsUpdating }
							>
								{ __( 'Proceed', 'woocommerce-admin' ) }
							</Button>

							<p>{ help }</p>
						</Fragment>
					);
				} }
			</Form>
		);
	}

	renderAutomaticConfig() {
		const { isOptionsUpdating } = this.props;
		const { autoConnectFailed, connectURL, isPending } = this.state;

		const canAutoCreate = this.isWooCommerceServicesConnected();
		const initialValues = this.getInitialConfigValues();

		// TODO: break this up into multiple functions?
		return (
			<Form
				initialValues={ initialValues }
				onSubmitCallback={ this.updateSettings }
				validate={ this.validate }
			>
				{ ( { getInputProps, handleSubmit, values } ) => {
					return (
						<Fragment>
							{ canAutoCreate && (
								<CheckboxControl
									label={ __(
										'Create a PayPal account for me',
										'woocommerce-admin'
									) }
									{ ...getInputProps( 'create_account' ) }
								/>
							) }

							{ canAutoCreate && values.create_account && (
								<TextControl
									label={ __(
										'Email address',
										'woocommerce-admin'
									) }
									type="email"
									{ ...getInputProps( 'account_email' ) }
								/>
							) }

							{ ! isPending &&
								( autoConnectFailed || ! connectURL ) &&
								! values.create_account && (
									<Fragment>
										<TextControl
											label={ __(
												'API Username',
												'woocommerce-admin'
											) }
											required
											{ ...getInputProps(
												'api_username'
											) }
										/>
										<TextControl
											label={ __(
												'API Password',
												'woocommerce-admin'
											) }
											required
											{ ...getInputProps(
												'api_password'
											) }
										/>

										<Button
											onClick={ handleSubmit }
											isPrimary
											isBusy={ isOptionsUpdating }
										>
											{ __(
												'Proceed',
												'woocommerce-admin'
											) }
										</Button>

										<p>
											{ interpolateComponents( {
												mixedString: __(
													'Your API details can be obtained from your {{link}}PayPal account{{/link}}',
													'woocommerce-admin'
												),
												components: {
													link: (
														<Link
															href="https://docs.woocommerce.com/document/paypal-express-checkout/#section-8"
															target="_blank"
															type="external"
														/>
													),
												},
											} ) }
										</p>
									</Fragment>
								) }

							{ canAutoCreate && values.create_account && (
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
								! values.create_account && (
									<Fragment>
										<Button isPrimary href={ connectURL }>
											{ __(
												'Connect',
												'woocommerce-admin'
											) }
										</Button>
										<p>
											{ __(
												'You will be redirected to the Paypal website to create the connection.',
												'woocommerce-admin'
											) }
										</p>
									</Fragment>
								) }
						</Fragment>
					);
				} }
			</Form>
		);
	}

	getConnectStep() {
		return {
			key: 'connect',
			label: __( 'Connect your PayPal account', 'woocommerce-admin' ),
			description: __(
				'A Paypal account is required to process payments. Connect your store to your PayPal account.',
				'woocommerce-admin'
			),
			content: this.renderAutomaticConfig(),
		};
	}

	render() {
		const { installStep } = this.props;
		const { isPending } = this.state;

		return (
			<Stepper
				isVertical
				isPending={ ! installStep.isComplete || isPending }
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
		const { getOption, isOptionsUpdating } = select( OPTIONS_STORE_NAME );
		const { getActivePlugins, isJetpackConnected } = select(
			PLUGINS_STORE_NAME
		);
		const options = getOption( 'woocommerce_ppec_paypal_settings' );
		const activePlugins = getActivePlugins();

		return {
			activePlugins,
			isJetpackConnected: isJetpackConnected(),
			isOptionsUpdating: isOptionsUpdating(),
			options,
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
