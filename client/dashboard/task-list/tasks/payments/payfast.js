/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { Button } from '@wordpress/components';
import interpolateComponents from 'interpolate-components';
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { Form, Link, TextControl } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import { recordEvent } from 'lib/tracks';
import withSelect from 'wc-api/with-select';

class PayFast extends Component {
	getInitialConfigValues = () => {
		return {
			merchant_id: '',
			merchant_key: '',
			pass_phrase: '',
		};
	};

	validate = ( values ) => {
		const errors = {};

		if ( ! values.merchant_id ) {
			errors.merchant_id = __(
				'Please enter your merchant ID',
				'woocommerce-admin'
			);
		}

		if ( ! values.merchant_key ) {
			errors.merchant_key = __(
				'Please enter your merchant key',
				'woocommerce-admin'
			);
		}

		if ( ! values.pass_phrase ) {
			errors.pass_phrase = __(
				'Please enter your passphrase',
				'woocommerce-admin'
			);
		}

		return errors;
	};

	componentDidUpdate( prevProps ) {
		const {
			createNotice,
			isOptionsRequesting,
			hasOptionsError,
			markConfigured,
		} = this.props;

		if ( prevProps.isOptionsRequesting && ! isOptionsRequesting ) {
			if ( ! hasOptionsError ) {
				recordEvent( 'tasklist_payment_connect_method', {
					payment_method: 'payfast',
				} );
				markConfigured( 'payfast' );
				createNotice(
					'success',
					__( 'PayFast connected successfully', 'woocommerce-admin' )
				);
			} else {
				createNotice(
					'error',
					__(
						'There was a problem saving your payment setings',
						'woocommerce-admin'
					)
				);
			}
		}
	}

	updateSettings = async ( values ) => {
		const { updateOptions } = this.props;

		// Because the PayFast extension only works with the South African Rand
		// currency, force the store to use it while setting the PayFast settings
		await updateOptions( {
			woocommerce_currency: 'ZAR',
			woocommerce_payfast_settings: {
				merchant_id: values.merchant_id,
				merchant_key: values.merchant_key,
				pass_phrase: values.pass_phrase,
				enabled: 'yes',
			},
		} );
	};

	render() {
		const helpText = interpolateComponents( {
			mixedString: __(
				'Your API details can be obtained from your {{link}}PayFast account{{/link}}',
				'woocommerce-admin'
			),
			components: {
				link: (
					<Link
						href="https://www.payfast.co.za/"
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
									'Merchant ID',
									'woocommerce-admin'
								) }
								required
								{ ...getInputProps( 'merchant_id' ) }
							/>
							<TextControl
								label={ __(
									'Merchant Key',
									'woocommerce-admin'
								) }
								required
								{ ...getInputProps( 'merchant_key' ) }
							/>
							<TextControl
								label={ __(
									'Passphrase',
									'woocommerce-admin'
								) }
								required
								{ ...getInputProps( 'pass_phrase' ) }
							/>
							<Button onClick={ handleSubmit } isPrimary>
								{ __( 'Proceed', 'woocommerce-admin' ) }
							</Button>
							<Button
								onClick={ () => {
									this.props.markConfigured( 'payfast' );
								} }
							>
								{ __( 'Skip', 'woocommerce-admin' ) }
							</Button>
							<p>{ helpText }</p>
						</Fragment>
					);
				} }
			</Form>
		);
	}
}

export default compose(
	withSelect( ( select ) => {
		const { getOptionsError, isUpdateOptionsRequesting } = select(
			'wc-api'
		);
		const isOptionsRequesting = Boolean(
			isUpdateOptionsRequesting( [
				'woocommerce_currency',
				'woocommerce_payfast_settings',
			] )
		);
		const hasOptionsError = getOptionsError( [
			'woocommerce_currency',
			'woocommerce_payfast_settings',
		] );

		return {
			hasOptionsError,
			isOptionsRequesting,
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
)( PayFast );
