/**
 * External dependencies
 */
import { render } from '@testing-library/react';

/**
 * Internal dependencies
 */
import { HelpPanel } from '../panels/help';

describe( 'Activity Panel > Help', () => {
	it( 'only shows links for available payment methods', () => {
		const fixtures = [
			{
				key: 'wcpay',
				text: 'WooCommerce Payments',
			},
			{
				key: 'stripe',
				text: 'Stripe',
			},
			{
				key: 'klarna_checkout',
				text: 'Klarna',
			},
			{
				key: 'klarna_payments',
				text: 'Klarna',
			},
			{
				key: 'paypal',
				text: 'PayPal Checkout',
			},
			{
				key: 'square',
				text: 'Square',
			},
			{
				key: 'payfast',
				text: 'PayFast',
			},
		];

		const noMethods = render(
			<HelpPanel
				getPaymentMethods={ () => ( [] ) }
				taskName="payments"
			/>
		);

		fixtures.forEach( method => {
			expect( noMethods.queryAllByText( ( text ) => text.includes( method.text ) ) ).toHaveLength( 0 );
		} );

		fixtures.forEach( method => {
			const { queryAllByText } = render(
				<HelpPanel
					getPaymentMethods={ () => ( [ method ] ) }
					taskName="payments"
				/>
			);

			expect( queryAllByText( ( text ) => text.includes( method.text ) ).length ).toBeGreaterThanOrEqual( 1 );
		} );
	} );

	it( 'only shows links for automated tax when supported', () => {
		const taxjarPluginEnabled = render(
			<HelpPanel
				countryCode="US"
				getSetting={ () => ( {
					automatedTaxSupportedCountries: [ 'US' ],
					taxJarActivated: true,
				} ) }
				taskName="tax"
			/>
		);

		expect( taxjarPluginEnabled.queryByText( /WooCommerce Services/ ) ).toBeNull();

		const unSupportedCountry = render(
			<HelpPanel
				countryCode="NZ"
				getSetting={ () => ( {
					automatedTaxSupportedCountries: [ 'US' ],
					taxJarActivated: false,
				} ) }
				taskName="tax"
			/>
		);

		expect( unSupportedCountry.queryByText( /WooCommerce Services/ ) ).toBeNull();

		const supportedCountry = render(
			<HelpPanel
				countryCode="US"
				getSetting={ () => ( {
					automatedTaxSupportedCountries: [ 'US' ],
					taxJarActivated: false,
				} ) }
				taskName="tax"
			/>
		);

		expect( supportedCountry.getByText( /WooCommerce Services/ ) ).toBeDefined();
	} );

	it( 'only shows links for WooCommerce Shipping when supported', () => {
		const wcsActive = render(
			<HelpPanel
				activePlugins={ [ 'woocommerce-services' ] }
				countryCode="US"
				taskName="shipping"
			/>
		);

		expect( wcsActive.queryByText( /WooCommerce Shipping/ ) ).toBeNull();

		const unSupportedCountry = render(
			<HelpPanel
				activePlugins={ [ 'woocommerce-services' ] }
				countryCode="UK"
				taskName="shipping"
			/>
		);

		expect( unSupportedCountry.queryByText( /WooCommerce Shipping/ ) ).toBeNull();

		const supportedCountry = render(
			<HelpPanel
				activePlugins={ [] }
				countryCode="US"
				taskName="shipping"
			/>
		);

		expect( supportedCountry.getByText( /WooCommerce Shipping/ ) ).toBeDefined();
	} );
} );
