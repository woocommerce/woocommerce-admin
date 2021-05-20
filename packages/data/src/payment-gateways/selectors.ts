/**
 * Internal dependencies
 */
import {
	PaymentGateway,
	PluginsState,
	RestApiError,
	WPDataSelector,
	WPDataSelectors,
} from './types';

export function getPaymentGateway(
	state: PluginsState,
	id: string
): PaymentGateway | undefined {
	return state.paymentGateways.find(
		( paymentGateway ) => paymentGateway.id === id
	);
}

export function getPaymentGateways(
	state: PluginsState
): Array< PaymentGateway > {
	return state.paymentGateways;
}

export function getPaymentGatewayError(
	state: PluginsState,
	selector: string
): RestApiError | null {
	return state.errors[ selector ] || null;
}

export function isPaymentGatewayRequesting(
	state: PluginsState,
	selector: string
): boolean {
	return state.requesting[ selector ] || false;
}

export type PaymentSelectors = {
	getPaymentGateway: WPDataSelector< typeof getPaymentGateway >;
	getPaymentGateways: WPDataSelector< typeof getPaymentGateways >;
	isPaymentGatewayRequesting: WPDataSelector<
		typeof isPaymentGatewayRequesting
	>;
} & WPDataSelectors;
