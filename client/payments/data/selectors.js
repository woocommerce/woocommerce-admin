export function retrievePaymentGateway( state, id ) {
	const paymentGateway = state.paymentGateways.filter( ( gateway ) => {
		return gateway.id === id;
	} );
	return paymentGateway ? paymentGateway[ 0 ] : null;
}

export function listPaymentGateways( state ) {
	return state.paymentGateways;
}
