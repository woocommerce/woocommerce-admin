/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import apiFetch from '@wordpress/api-fetch';
import { withDispatch } from '@wordpress/data';
import interpolateComponents from 'interpolate-components';
import { Button, Modal } from '@wordpress/components';
import { getQuery } from '@woocommerce/navigation';
import { get } from 'lodash';

/**
 * WooCommerce dependencies
 */
import { Form, Link, TextControl } from '@woocommerce/components';
import { getAdminLink } from '@woocommerce/wc-admin-settings';
import { recordEvent } from 'lib/tracks';
import { WCS_NAMESPACE } from 'wc-api/constants';
import withSelect from 'wc-api/with-select';

/**
 * Internal dependencies
 */
import { getCountryCode } from 'dashboard/utils';

class Stripe extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			autoConnectFailed: false,
			connectURL: null,
			errorTitle: null,
			errorMessage: null,
		};

		this.autoCreateAccount = this.autoCreateAccount.bind( this );
		this.updateSettings = this.updateSettings.bind( this );
	}

	componentDidMount() {
		const { stripeSettings } = this.props;
		const query = getQuery();

		// Handle redirect back from Stripe.
		if ( query[ 'stripe-connect' ] && query[ 'stripe-connect' ] === '1' ) {
			const isStripeConnected =
				stripeSettings.publishable_key && stripeSettings.secret_key;

			if ( isStripeConnected ) {
				this.completeMethod();
				return;
			}

			/* eslint-disable react/no-did-mount-set-state */
			this.setState( {
				autoConnectFailed: true,
			} );
			/* eslint-enable react/no-did-mount-set-state */
		}

		if ( ! this.requiresManualConfig() ) {
			this.fetchOAuthConnectURL();
		}
	}

	requiresManualConfig() {
		const { activePlugins, isJetpackConnected } = this.props;
		const { autoConnectFailed } = this.state;

		return isJetpackConnected &&
			activePlugins.includes( 'woocommerce-services' ) &&
			! autoConnectFailed
			? false
			: true;
	}

	completeMethod() {
		recordEvent( 'tasklist_payment_connect_method', {
			payment_method: 'stripe',
		} );
		this.props.setRequestPending( false );
		this.props.createNotice(
			'success',
			__( 'Stripe connected successfully.', 'woocommerce-admin' )
		);
		this.props.markConfigured( 'stripe' );
	}

	async fetchOAuthConnectURL() {
		try {
			this.props.setRequestPending( true );
			const result = await apiFetch( {
				path: WCS_NAMESPACE + '/connect/stripe/oauth/init',
				method: 'POST',
				data: {
					returnUrl: getAdminLink(
						'admin.php?page=wc-admin&task=payments&method=stripe&stripe-connect=1'
					),
				},
			} );
			if ( ! result || ! result.oauthUrl ) {
				this.props.setRequestPending( false );
				this.setState( {
					autoConnectFailed: true,
				} );
				return;
			}
			this.props.setRequestPending( false );
			this.setState( {
				connectURL: result.oauthUrl,
			} );
		} catch ( error ) {
			this.props.setRequestPending( false );
			this.setState( {
				autoConnectFailed: true,
			} );
		}
	}

	async autoCreateAccount( values ) {
		const { countryCode } = this.props;
		const { connectURL } = this.state;
		const { email } = values;

		try {
			this.props.setRequestPending( true );
			const result = await apiFetch( {
				path: WCS_NAMESPACE + '/connect/stripe/account',
				method: 'POST',
				data: {
					email,
					country: countryCode,
				},
			} );

			if ( result ) {
				this.completeMethod();
				return;
			}
		} catch {
			if ( ! connectURL ) {
				const errorTitle = __( 'Stripe', 'woocommerce-admin' );
				const errorMessage = interpolateComponents( {
					mixedString: sprintf(
						__(
							'We tried to create a Stripe account automatically for {{strong}}%s{{/strong}}, but an error occured. Please try connecting manually to continue.',
							'woocommerce-admin'
						),
						email
					),
					components: {
						strong: <strong />,
					},
				} );

				this.setState( {
					autoConnectFailed: true,
					errorTitle,
					errorMessage,
				} );
			} else {
				// An account with that email may exist so send them to Stripe to connect via oAuth.
				window.location = connectURL;
			}
		}
	}

	renderErrorModal() {
		const { errorTitle, errorMessage } = this.state;
		return (
			<Modal
				title={ errorTitle }
				onRequestClose={ () =>
					this.setState( { errorMessage: null, errorTitle: null } )
				}
				className="woocommerce-task-payments__stripe-error-modal"
			>
				<div className="woocommerce-task-payments__stripe-error-wrapper">
					<div className="woocommerce-task-payments__stripe-error-message">
						{ errorMessage }
					</div>
					<Button
						isPrimary
						isDefault
						onClick={ () =>
							this.setState( {
								errorMessage: null,
								errorTitle: null,
							} )
						}
					>
						{ __( 'OK', 'woocommerce-admin' ) }
					</Button>
				</div>
			</Modal>
		);
	}

	renderAutoConnect() {
		return (
			<Form
				initialValues={ {
					email: '',
				} }
				onSubmitCallback={ this.autoCreateAccount }
				validate={ this.validateAutoConnect }
			>
				{ ( { getInputProps, handleSubmit } ) => {
					return (
						<div className="woocommerce-task-payments__woocommerce-services-options">
							<TextControl
								label={ __(
									'Email address',
									'woocommerce-admin'
								) }
								{ ...getInputProps( 'email' ) }
							/>
							<Button
								isPrimary
								isDefault
								onClick={ handleSubmit }
							>
								{ __( 'Connect', 'woocommerce-admin' ) }
							</Button>
						</div>
					);
				} }
			</Form>
		);
	}

	async updateSettings( values ) {
		const {
			createNotice,
			isSettingsError,
			updateOptions,
			stripeSettings,
		} = this.props;

		this.props.setRequestPending( true );
		await updateOptions( {
			woocommerce_stripe_settings: {
				...stripeSettings,
				publishable_key: values.publishable_key,
				secret_key: values.secret_key,
				enabled: 'yes',
			},
		} );

		if ( ! isSettingsError ) {
			this.completeMethod();
		} else {
			this.props.setRequestPending( false );
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
			publishable_key: '',
			secret_key: '',
		};
	}

	validateManualConfig( values ) {
		const errors = {};

		if ( ! values.publishable_key ) {
			errors.publishable_key = __(
				'Please enter your publishable key',
				'woocommerce-admin'
			);
		}
		if ( ! values.secret_key ) {
			errors.secret_key = __(
				'Please enter your secret key',
				'woocommerce-admin'
			);
		}

		return errors;
	}

	validateAutoConnect( values ) {
		const errors = {};

		if ( ! values.email ) {
			errors.email = __( 'Please enter your email', 'woocommerce-admin' );
		}

		return errors;
	}

	renderManualConfig() {
		const stripeHelp = interpolateComponents( {
			mixedString: __(
				'Your API details can be obtained from your {{link}}Stripe account{{/link}}',
				'woocommerce-admin'
			),
			components: {
				link: (
					<Link
						href="https://stripe.com/docs/account"
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
				validate={ this.validateManualConfig }
			>
				{ ( { getInputProps, handleSubmit } ) => {
					return (
						<Fragment>
							<TextControl
								label={ __(
									'Live Publishable Key',
									'woocommerce-admin'
								) }
								required
								{ ...getInputProps( 'publishable_key' ) }
							/>
							<TextControl
								label={ __(
									'Live Secret Key',
									'woocommerce-admin'
								) }
								required
								{ ...getInputProps( 'secret_key' ) }
							/>

							<Button onClick={ handleSubmit } isPrimary>
								{ __( 'Proceed', 'woocommerce-admin' ) }
							</Button>

							<Button
								onClick={ () => {
									this.props.markConfigured( 'stripe' );
								} }
							>
								{ __( 'Skip', 'woocommerce-admin' ) }
							</Button>

							<p>{ stripeHelp }</p>
						</Fragment>
					);
				} }
			</Form>
		);
	}

	render() {
		const { errorMessage } = this.state;

		if ( errorMessage ) {
			return this.renderErrorModal();
		}

		if ( ! this.requiresManualConfig() ) {
			return this.renderAutoConnect();
		}

		return this.renderManualConfig();
	}
}

export default compose(
	withSelect( ( select ) => {
		const { isJetpackConnected, getActivePlugins, getOptions } = select(
			'wc-api'
		);
		const options = getOptions( [
			'woocommerce_stripe_settings',
			'woocommerce_default_country',
		] );
		const countryCode = getCountryCode(
			options.woocommerce_default_country
		);
		const stripeSettings = get(
			options,
			[ 'woocommerce_stripe_settings' ],
			[]
		);

		return {
			activePlugins: getActivePlugins(),
			countryCode,
			isJetpackConnected: isJetpackConnected(),
			stripeSettings,
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
)( Stripe );
