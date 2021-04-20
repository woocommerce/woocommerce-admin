/**
 * External dependencies
 */
import { Text } from '@woocommerce/experimental';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { imageUrl } from '../../../../utils';

export const WCPayAcceptedMethods = () => (
	<>
		<Text as="h3" variant="label">
			{ __( 'Accepted payment methods', 'woocommerce-admin' ) }
		</Text>

		<div className="woocommerce-task-payment-wcpay__accepted">
			<img
				src={ imageUrl( 'onboarding/payments/cards/visa.svg' ) }
				alt=""
			/>
			<img
				src={ imageUrl( 'onboarding/payments/cards/mastercard.svg' ) }
				alt=""
			/>
			<img
				src={ imageUrl( 'onboarding/payments/cards/maestro.svg' ) }
				alt=""
			/>
			<img
				src={ imageUrl( 'onboarding/payments/cards/amex.svg' ) }
				alt=""
			/>
			<img
				src={ imageUrl( 'onboarding/payments/cards/diners.svg' ) }
				alt=""
			/>
			<img
				src={ imageUrl( 'onboarding/payments/cards/cb.svg' ) }
				alt=""
			/>
			<img
				src={ imageUrl( 'onboarding/payments/cards/discover.svg' ) }
				alt=""
			/>
			<img
				src={ imageUrl( 'onboarding/payments/cards/unionpay.svg' ) }
				alt=""
			/>
			<img
				src={ imageUrl( 'onboarding/payments/cards/jcb.svg' ) }
				alt=""
			/>
			<img
				src={ imageUrl( 'onboarding/payments/cards/applepay.svg' ) }
				alt=""
			/>
		</div>
	</>
);
