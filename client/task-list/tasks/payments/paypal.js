/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import interpolateComponents from 'interpolate-components';
import { withDispatch, withSelect } from '@wordpress/data';
import { ADMIN_URL as adminUrl } from '@woocommerce/wc-admin-settings';
import { Link, Stepper } from '@woocommerce/components';
import {
	PLUGINS_STORE_NAME,
	OPTIONS_STORE_NAME,
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
		this.continue = this.continue.bind( this );
	}

	continue() {
		const { markConfigured } = this.props;

		markConfigured( 'paypal' );
	}

	async updateSettings( values ) {
		const {
			createNotice,
			options,
			updateOptions,
			markConfigured,
		} = this.props;

		const productionValues = Object.keys(values).reduce((vals, key) => {
			const prodKey = key + '_production';
			return {
				...vals,
				[prodKey]: values[key]
			}
		}, {});

		const optionValues = {
			...options,
			enabled: true,
			...values,
			...productionValues
		};

		const update = await updateOptions( {
			'woocommerce-ppcp-settings': optionValues,
			'woocommerce_ppcp-gateway_settings': {
				enabled: 'yes'
			}
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
		return [ 'merchant_email', 'merchant_id',
			'client_id',
			'client_secret',
			].reduce((initialVals, key) => {
		return {
			...initialVals,
			[key]: options && options[key] ? options[key] : ''
		}
	}, {});
	}

	renderConnectConfig() {
		const configureText = interpolateComponents( {
			mixedString: __(
				'Paypal payments can be configured under your {{link}}store settings{{/link}}. Figure out {{helpLink}}what you need{{/helpLink}}.',
				'woocommerce-admin'
			),
			components: {
				link: (
					<Link
						href={
							adminUrl +
							'admin.php?page=wc-settings&tab=checkout&section=ppcp-gateway'
						}
						target="_blank"
						type="external"
					/>
				),
				helpLink: (
					<Link
						href="https://docs.woocommerce.com/document/2-0/woocommerce-paypal-payments/#section-4"
						target="_blank"
						type="external"
					/>
				),
			},
		} );

		return (
			<Fragment>
				<p>{ configureText }</p>
				<Button isPrimary onClick={ this.continue }>
					{ __( 'Continue', 'woocommerce-admin' ) }
				</Button>
			</Fragment>
		);
	}

	getConnectStep() {
		return {
			key: 'connect',
			label: __( 'Connect your PayPal account', 'woocommerce-admin' ),
			content: this.renderConnectConfig(),
		};
	}

	render() {
		const { installStep } = this.props;

		return (
			<Stepper
				isVertical
				isPending={ ! installStep.isComplete }
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
		const { isOptionsUpdating } = select( OPTIONS_STORE_NAME );
		const { getActivePlugins } = select(
			PLUGINS_STORE_NAME
		);
		const activePlugins = getActivePlugins();

		return {
			activePlugins,
			isOptionsUpdating: isOptionsUpdating(),
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
