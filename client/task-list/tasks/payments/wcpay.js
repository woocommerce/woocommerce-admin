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
import { getQuery } from '@woocommerce/navigation';
import { WC_ADMIN_NAMESPACE } from 'wc-api/constants';
import { Stepper } from '@woocommerce/components';

class WCPay extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			isPending: false,
		};

		this.connect = this.connect.bind( this );
	}

	componentDidMount() {
		const { createNotice, markConfigured } = this.props;
		const query = getQuery();
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
		} else if ( this.props.installStep.isComplete ) {
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
		const { createNotice } = this.props;
		this.setState( { isPending: true } );

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

	render() {
		const { installStep } = this.props;
		const { isPending } = this.state;

		// When being redirected from the WCPay onboarding flow, don't render the Stepper so there isn't an extra "Plugins successfully activated" notice.
		if ( getQuery()[ 'wcpay-connection-success' ] ) {
			return null;
		}

		return (
			<Stepper
				isVertical
				isPending={ ! installStep.isComplete || isPending }
				currentStep="install"
				steps={ [ installStep ] }
			/>
		);
	}
}

export default withDispatch( ( dispatch ) => {
	const { createNotice } = dispatch( 'core/notices' );
	return {
		createNotice,
	};
} )( WCPay );
