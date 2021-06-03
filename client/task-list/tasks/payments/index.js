/**
 * Internal dependencies
 */
import { LocalPayments } from './LocalPayments';
import { PaymentGatewaySuggestions } from './PaymentGatewaySuggestions';

export const Payments = ( { query } ) => {
	if ( window.wcAdminFeatures[ 'remote-payment-methods' ] ) {
		return <PaymentGatewaySuggestions query={ query } />;
	}

	return <LocalPayments query={ query } />;
};

export default Payments;
