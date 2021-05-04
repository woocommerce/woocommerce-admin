export type PaymentGateway = {
	id: string;
	title: string;
	description: string;
	order: number | string;
	enabled: boolean;
	method_title: string;
	method_description: string;
	method_supports: Array< string >;
	settings: Record< string, Record< string, string > >;
};

export type PluginsState = {
	paymentGateways: Array< PaymentGateway >;
	requesting: Record< string, boolean >;
	errors: Record< string, RestApiError >;
};

interface RestApiErrorData {
	status: number;
}

export type RestApiError = {
	code: string;
	data: Partial< RestApiErrorData >;
	message: string;
};

export type SelectorKeysWithActions =
	| 'getPaymentGateways'
	| 'getPaymentGateway'
	| 'updatePaymentGateway';
