/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { Button } from '@wordpress/components';
import { withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { addQueryArgs } from '@wordpress/url';
import { includes, filter } from 'lodash';

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
			step: 'install',
			isPending: ! props.installStep.isComplete,
			isJetpackRequired: getQuery().from === 'jetpack',
		};

		this.connect = this.connect.bind( this );

		// Cache Jetpack connection state to prevent removal of steps.
		this.isJetpackActive = props.isJetpackActive;
		this.isJetpackConnected = props.isJetpackConnected;
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

		if ( this.props.installStep.isComplete ) {
			this.isJetpackMissing();
		}
	}

	componentDidUpdate( prevProps ) {
		if (
			! prevProps.installStep.isComplete &&
			this.props.installStep.isComplete
		) {
			this.isJetpackMissing();
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

	// Check for WCPay dependency on Jetpack.
	async isJetpackMissing() {
		const { createNotice } = this.props;

		if (
			this.state.isJetpackRequired ||
			( this.isJetpackActive && this.isJetpackConnected )
		) {
			this.setState( { step: 'connect-wcpay' } );
			return;
		}

		this.setState( { isPending: true } );

		const errorMessage = __(
			'There was an error connecting to WooCommerce Payments. Please try again or skip to connect later in store settings.',
			'woocommerce-admin'
		);

		try {
			const path = WC_ADMIN_NAMESPACE + '/plugins/wcpay-deps';
			const result = await apiFetch( { path } );
			if ( ! result ) {
				throw new Error();
			}

			const isJetpackRequired = result.jetpack === 'yes';

			let step = 'connect-wcpay';
			if ( isJetpackRequired ) {
				step = this.isJetpackActive
					? 'connect-jetpack'
					: 'install-jetpack';
			}

			this.setState( { isJetpackRequired, step } );
		} catch ( error ) {
			createNotice( 'error', errorMessage );
		} finally {
			this.setState( { isPending: false } );
		}
	}

	getSteps() {
		const { installStep } = this.props;
		const { isPending, isJetpackRequired } = this.state;

		const steps = [
			{ ...installStep, visible: true },
			{
				key: 'install-jetpack',
				label: __( 'Install Jetpack', 'woocommerce-admin' ),
				description: __(
					'WooCommerce Payments uses the Jetpack connection to accept and manage payments.',
					'woocommerce-admin'
				),
				content: (
					<Plugins
						pluginSlugs={ [ 'jetpack' ] }
						onComplete={ () => {
							recordEvent( 'tasklist_wcpay_install_jetpack', {
								install_jetpack: true,
							} );

							// Despite being a safe assumption as currently implemented, the step logic
							// does not assume that Jetpack isn't connected just because it wasn't active.
							const step = this.isJetpackConnected
								? 'connect-wcpay'
								: 'connect-jetpack';
							this.setState( { step } );
						} }
					/>
				),
				visible: ! this.isJetpackActive && isJetpackRequired,
			},
			{
				key: 'connect-jetpack',
				label: __( 'Connect your store', 'woocommerce-admin' ),
				description: __(
					'Connect your store to WordPress.com to enable WooCommerce Payments.',
					'woocommerce-admin'
				),
				content: (
					<Connect
						{ ...this.props }
						setIsPending={ this.setIsPending }
						redirectUrl={ addQueryArgs( window.location.href, {
							from: 'jetpack',
						} ) }
						onConnect={ () => {
							recordEvent( 'tasklist_wcpay_connect_jetpack', {
								connect: true,
							} );
						} }
					/>
				),
				visible: ! this.isJetpackConnected && isJetpackRequired,
			},
			{
				key: 'connect-wcpay',
				label: __( 'Verify business details', 'woocommerce-admin' ),
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
							{ __( 'Verify details', 'woocommerce-admin' ) }
						</Button>
					</Fragment>
				),
				visible: true,
			},
		];

		return filter( steps, 'visible' );
	}

	render() {
		const { isPending, step } = this.state;

		return (
			<Stepper
				isVertical
				isPending={ isPending }
				currentStep={ step }
				steps={ this.getSteps() }
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

		return {
			options,
			optionsIsRequesting,
			isJetpackActive: includes( getActivePlugins(), 'jetpack' ),
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
