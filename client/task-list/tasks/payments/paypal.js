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
import { Form, Link, Stepper, TextControl } from '@woocommerce/components';
import { getQuery } from '@woocommerce/navigation';
import {
	PLUGINS_STORE_NAME,
	OPTIONS_STORE_NAME,
	WC_ADMIN_NAMESPACE,
} from '@woocommerce/data';

export const PAYPAL_PLUGIN = 'woocommerce-paypal-payments';

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
			content: isRequestingOptions ? null : this.renderManualConfig(),
		};
	}

	render() {
		const { installStep, isRequestingOptions } = this.props;

		return (
			<Stepper
				isVertical
				isPending={ ! installStep.isComplete || isRequestingOptions }
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
