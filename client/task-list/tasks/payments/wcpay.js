/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { withDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { WC_ADMIN_NAMESPACE } from 'wc-api/constants';

class WCPay extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			isPending: false,
		};

		this.connect = this.connect.bind( this );
	}

	componentDidMount() {
		const { createNotice, markConfigured, query, installStep } = this.props;
		// Handle redirect back from WCPay on-boarding
		if ( query[ 'wcpay-connection-success' ] ) {
			createNotice(
				'success',
				__(
					'WooCommerce Payments connected successfully.',
					'woocommerce-admin'
				)
			);
			markConfigured( 'wcpay' );
		} else if ( installStep.isComplete ) {
			this.connect();
		}
	}

	componentDidUpdate( prevProps ) {
		if (
			! prevProps.installStep.isComplete &&
			this.props.installStep.isComplete
		) {
			this.connect();
		}
	}

	async connect() {
		const { createNotice, markConfigurationFinished } = this.props;

		const errorMessage = __(
			'There was an error connecting to WooCommerce Payments. Please try again or connect later in store settings.',
			'woocommerce-admin'
		);

		try {
			// Fetch the business verification (connect) URL (Stripe KYC) from the backend
			const result = await apiFetch( {
				path: WC_ADMIN_NAMESPACE + '/plugins/connect-wcpay',
				method: 'POST',
			} );

			if ( ! result || ! result.connectUrl ) {
				markConfigurationFinished();
				createNotice( 'error', errorMessage );
				return;
			}

			window.location = result.connectUrl;
		} catch ( error ) {
			markConfigurationFinished();
			createNotice( 'error', errorMessage );
		}
	}

	render() {
		const { installStep, query } = this.props;

		// When being redirected from the WCPay onboarding flow, don't render the Install step so there isn't an extra "Plugins successfully activated" notice.
		if ( query[ 'wcpay-connection-success' ] ) {
			return null;
		}

		return installStep.content;
	}
}

export default withDispatch( ( dispatch ) => {
	const { createNotice } = dispatch( 'core/notices' );
	return {
		createNotice,
	};
} )( WCPay );
