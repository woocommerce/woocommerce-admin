/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { Button } from '@wordpress/components';
import { withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { includes } from 'lodash';

/**
 * WooCommerce dependencies
 */
import { getQuery } from '@woocommerce/navigation';
import { Stepper, Plugins } from '@woocommerce/components';
import { PLUGINS_STORE_NAME } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import Connect from 'dashboard/components/connect';
import { WC_ADMIN_NAMESPACE } from 'wc-api/constants';
import withSelect from 'wc-api/with-select';
import { recordEvent } from 'lib/tracks';

class WCPay extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			isPending: false,
			isJetpackRequired: false,
		};

		this.connect = this.connect.bind( this );
	}

	componentDidMount() {
		const { createNotice, markConfigured } = this.props;
		const query = getQuery();
		// Handle redirect back from WCPay on-boarding
		if ( query[ 'wcpay-connect' ] ) {
			if ( query[ 'wcpay-connect' ] === '1' ) {
				createNotice(
					'success',
					__(
						'WooCommerce Payments connected successfully.',
						'woocommerce-admin'
					)
				);
				markConfigured( 'wcpay' );
			}
		}
	}

	async connect() {
		const { createNotice, options, updateOptions } = this.props;
		this.setState( { isPending: true } );

		updateOptions( {
			woocommerce_woocommerce_payments_settings: {
				...options.woocommerce_woocommerce_payments_settings,
				enabled: 'yes',
			},
		} );

		const errorMessage = __(
			'There was an error connecting to WooCommerce Payments. Please try again or skip to connect later in store settings.',
			'woocommerce-admin'
		);

		try {
			// Fetch the business verification (connect) URL (Stripe KYC) from the backend
			const result = await apiFetch( {
				path: WC_ADMIN_NAMESPACE + '/plugins/connect-wcpay',
				method: 'POST',
			} );

			if ( ! result || ! result.connectUrl ) {
				this.setState( { isPending: false } );
				createNotice( 'error', errorMessage );
				return;
			}

			this.setState( { isPending: true } );
			window.location = result.connectUrl;
		} catch ( error ) {
			this.setState( { isPending: false } );
			createNotice( 'error', errorMessage );
		}
	}

	async isJetpackRequired() {
		const { createNotice } = this.props;
		this.setState( { isPending: true } );

		const errorMessage = __(
			'There was an error connecting to WooCommerce Payments. Please try again or skip to connect later in store settings.',
			'woocommerce-admin'
		);

		try {
			const result = await apiFetch( {
				path: WC_ADMIN_NAMESPACE + '/plugins/wcpay-deps',
			} );

			this.setState( { isPending: false } );

			if ( ! result || ! result.jetpack ) {
				createNotice( 'error', errorMessage );
				return;
			}

			this.setState( { isJetpackRequired: result.jetpack === 'yes' } );
		} catch ( error ) {
			this.setState( { isPending: false } );
			createNotice( 'error', errorMessage );
		}
	}

	render() {
		const { installStep, isJetpackActive, isJetpackConnected } = this.props;
		const { isPending, isJetpackRequired } = this.state;

		return (
			<Stepper
				isVertical
				isPending={ ! installStep.isComplete || isPending }
				currentStep={ installStep.isComplete ? 'connect' : 'install' }
				steps={ [
					installStep,
					{
						key: 'plugins',
						label: __( 'Install Jetpack', 'woocommerce-admin' ),
						description: __(
							'WooCommerce Payments uses the Jetpack connection to accept and manage payments',
							'woocommerce-admin'
						),
						content: (
							<Plugins
								pluginSlugs={ [ 'jetpack' ] }
								onComplete={ () => {
									recordEvent(
										'tasklist_wcpay_install_jetpack',
										{
											install_jetpack: true,
										}
									);
									this.completeStep();
								} }
							/>
						),
						visible: ! isJetpackActive && isJetpackRequired,
					},
					{
						key: 'connect-jetpack',
						label: __( 'Connect your store', 'woocommerce-admin' ),
						description: __(
							'Connect your store to WordPress.com to enable WooCommerce Payments',
							'woocommerce-admin'
						),
						content: (
							<Connect
								{ ...this.props }
								setIsPending={ this.setIsPending }
								onConnect={ () => {
									recordEvent(
										'tasklist_wcpay_connect_jetpack',
										{
											connect: true,
										}
									);
								} }
							/>
						),
						visible: ! isJetpackConnected && isJetpackRequired,
					},
					{
						key: 'connect',
						label: __(
							'Verify business details',
							'woocommerce-admin'
						),
						description: __(
							'Verify your business details with our payment partner, Stripe.',
							'woocommerce-admin'
						),
						content: (
							<Fragment>
								<Button
									isPrimary
									isDefault
									isBusy={ isPending }
									onClick={ this.connect }
								>
									{ __(
										'Verify details',
										'woocommerce-admin'
									) }
								</Button>
							</Fragment>
						),
					},
				] }
			/>
		);
	}
}

export default compose(
	withSelect( ( select ) => {
		const { getOptions, isGetOptionsRequesting } = select( 'wc-api' );
		const options = getOptions( [
			'woocommerce_woocommerce_payments_settings',
		] );
		const optionsIsRequesting = Boolean(
			isGetOptionsRequesting( [
				'woocommerce_woocommerce_payments_settings',
			] )
		);

		const { getActivePlugins, isJetpackConnected } = select(
			PLUGINS_STORE_NAME
		);
		const isJetpackActive = includes( getActivePlugins(), 'jetpack' );

		return {
			options,
			optionsIsRequesting,
			isJetpackActive,
			isJetpackConnected: isJetpackConnected(),
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
)( WCPay );
