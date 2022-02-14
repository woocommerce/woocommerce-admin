/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { fireEvent, render, screen } from '@testing-library/react';
import { recordEvent } from '@woocommerce/tracks';
/**
 * Internal dependencies
 */

import { PaymentGatewaySuggestions } from '../index';

jest.mock( '@wordpress/data', () => ( {
	...jest.requireActual( '@wordpress/data' ),
	useSelect: jest.fn(),
	useDispatch: jest.fn().mockImplementation( () => ( {
		updatePaymentGateway: jest.fn(),
	} ) ),
} ) );

jest.mock( '@woocommerce/tracks', () => ( { recordEvent: jest.fn() } ) );

const paymentGatewaySuggestions = [
	{
		id: 'stripe',
		title: 'Stripe',
		content:
			'Accept debit and credit cards in 135+ currencies, methods such as Alipay, and one-touch checkout with Apple Pay.',
		image:
			'http://localhost:8888/wp-content/plugins/woocommerce/assets/images/stripe.png',
		plugins: [ 'woocommerce-gateway-stripe' ],
		is_visible: true,
		recommendation_priority: 3,
	},
	{
		id: 'ppcp-gateway',
		title: 'PayPal Payments',
		content:
			"Safe and secure payments using credit cards or your customer's PayPal account.",
		image:
			'http://localhost:8888/wp-content/plugins/woocommerce/assets/images/paypal.png',
		plugins: [ 'woocommerce-paypal-payments' ],
		is_visible: true,
	},
	{
		id: 'cod',
		title: 'Cash on delivery',
		content: 'Take payments in cash upon delivery.',
		image:
			'http://localhost:8888/wp-content/plugins/woocommerce-admin/images/onboarding/cod.svg',
		is_visible: true,
	},
	{
		id: 'bacs',
		title: 'Direct bank transfer',
		content: 'Take payments via bank transfer.',
		image:
			'http://localhost:8888/wp-content/plugins/woocommerce-admin/images/onboarding/bacs.svg',
		is_visible: true,
	},
	{
		id: 'woocommerce_payments:non-us',
		title: 'WooCommerce Payments',
		content:
			'Manage transactions without leaving your WordPress Dashboard. Only with WooCommerce Payments.',
		image:
			'http://localhost:8888/wp-content/plugins/woocommerce-admin/images/onboarding/wcpay.svg',
		plugins: [ 'woocommerce-payments' ],
		description:
			'With WooCommerce Payments, you can securely accept major cards, Apple Pay, and payments in over 100 currencies. Track cash flow and manage recurring revenue directly from your store’s dashboard - with no setup costs or monthly fees.',
		is_visible: true,
		recommendation_priority: 1,
	},
	{
		id: 'eway',
		title: 'Eway',
		content:
			'The Eway extension for WooCommerce allows you to take credit card payments directly on your store without redirecting your customers to a third party site to make payment.',
		image:
			'http://localhost:8888/wp-content/plugins/woocommerce-admin/images/onboarding/eway.png',
		plugins: [ 'woocommerce-gateway-eway' ],
		is_visible: true,
	},
];

describe( 'PaymentGatewaySuggestions', () => {
	test( 'should render payment gateway lists', () => {
		const onComplete = jest.fn();
		const query = {};
		useSelect.mockImplementation( () => ( {
			isResolving: false,
			getPaymentGateway: jest.fn(),
			paymentGatewaySuggestions,
			installedPaymentGateways: [],
		} ) );

		const { container } = render(
			<PaymentGatewaySuggestions
				onComplete={ onComplete }
				query={ query }
			/>
		);

		const paymentTitleElements = container.querySelectorAll(
			'.woocommerce-task-payment__title'
		);

		const paymentTitles = Array.from( paymentTitleElements ).map(
			( e ) => e.textContent
		);

		expect( paymentTitles ).toEqual( [
			'Stripe',
			'PayPal Payments',
			'Eway',
			'Cash on delivery',
			'Direct bank transfer',
		] );

		expect(
			container.getElementsByTagName( 'title' )[ 0 ].textContent
		).toBe( 'WooCommerce Payments' );
	} );

	test( 'should the payment gateway offline options at the bottom', () => {
		const onComplete = jest.fn();
		const query = {};
		useSelect.mockImplementation( () => ( {
			isResolving: false,
			getPaymentGateway: jest.fn(),
			paymentGatewaySuggestions,
			installedPaymentGateways: [],
		} ) );

		const { container } = render(
			<PaymentGatewaySuggestions
				onComplete={ onComplete }
				query={ query }
			/>
		);

		const paymentTitles = container.querySelectorAll(
			'.woocommerce-task-payment__title'
		);

		expect( paymentTitles[ paymentTitles.length - 1 ].textContent ).toBe(
			'Direct bank transfer'
		);
	} );

	test( 'should have finish setup button for installed payment gateways', () => {
		const onComplete = jest.fn();
		const query = {};
		useSelect.mockImplementation( () => ( {
			isResolving: false,
			getPaymentGateway: jest.fn(),
			paymentGatewaySuggestions,
			installedPaymentGateways: [
				{
					id: 'ppcp-gateway',
					title: 'PayPal Payments',
					content:
						"Safe and secure payments using credit cards or your customer's PayPal account.",
					image:
						'http://localhost:8888/wp-content/plugins/woocommerce/assets/images/paypal.png',
					plugins: [ 'woocommerce-paypal-payments' ],
					is_visible: true,
				},
			],
		} ) );

		const { getByText } = render(
			<PaymentGatewaySuggestions
				onComplete={ onComplete }
				query={ query }
			/>
		);

		expect( getByText( 'Finish setup' ) ).toBeInTheDocument();
	} );
	test( 'should record event correctly when finish setup is clicked', () => {
		const onComplete = jest.fn();
		const query = {};
		useSelect.mockImplementation( () => ( {
			isResolving: false,
			getPaymentGateway: jest.fn(),
			paymentGatewaySuggestions,
			installedPaymentGateways: [
				{
					id: 'ppcp-gateway',
					title: 'PayPal Payments',
					content:
						"Safe and secure payments using credit cards or your customer's PayPal account.",
					image:
						'http://localhost:8888/wp-content/plugins/woocommerce/assets/images/paypal.png',
					plugins: [ 'woocommerce-paypal-payments' ],
					is_visible: true,
				},
			],
		} ) );

		render(
			<PaymentGatewaySuggestions
				onComplete={ onComplete }
				query={ query }
			/>
		);

		fireEvent.click( screen.getByText( 'Finish setup' ) );
		expect( recordEvent ).toHaveBeenCalledWith( 'tasklist_payment_setup', {
			selected: 'ppcp_gateway',
		} );
	} );
} );
