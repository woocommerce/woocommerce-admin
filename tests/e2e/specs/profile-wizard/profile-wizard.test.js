/**
 * @format
 */

 /**
  * Internal dependencies
  */
 import { StoreOwnerFlow } from '../../utils/flows';

 describe( 'Profile wizard', () => {
	 beforeAll( async () => {
		 await StoreOwnerFlow.login();
		 await StoreOwnerFlow.startProfileWizard();
	 } );

	 it( 'has the correct page title', async () => {
		 await expect( page.title() ).resolves.toContain( 'Profiler' );
	 } );

	 it( 'can fill in the store details step', async () => {
		await expect( page )
			.toFill(
				'#woocommerce-store-address__address-line-1',
				'1 Tester Lane'
			);
		await expect( page )
			.toFill( '#woocommerce-store-address__address-line-2', 'Line 2' );
		
		// Type 'cali' in the country/region select, then select US:CA.
		await expect( page )
			.toFill( '#woocommerce-select-control-0__control-input', 'cali' );
		await expect( page )
			.toClick( '#woocommerce-select-control__option-0-US\\:CA' );
		
		// Make sure the country/region gets selected correctly.
		await expect( page )
			.toMatchElement(
				'#woocommerce-select-control-0__control-input',
				{
					value: 'United State (US) - California'
				}
			);
		
		await expect( page )
			.toFill( '#woocommerce-store-address__city', 'Testyville' );
		await expect( page )
			.toFill( '#woocommerce-store-address__post-code', '12345' );
	 } );
 } );