/**
 * Internal dependencies
 */
import { PaymentGatewaySuggestions } from './PaymentGatewaySuggestions';

export const Payments = ( { query } ) => {
	return <PaymentGatewaySuggestions query={ query } />;
};

export default Payments;
