/**
 * @format
 */

/**
 * Internal dependencies
 */
import { StoreOwnerFlow } from '@woocommerce/e2e-tests/utils/flows';

describe( 'Store owner can enable or disable onboarding', () => {
	beforeAll( async () => {
		await StoreOwnerFlow.login();
	} );

	it( 'enables the new onboarding experience', async () => {
		// Go to the orders page.
		await StoreOwnerFlow.openAllOrdersView();

		// Click the help tab
		await expect( page ).toClick( '#contextual-help-link' );
		await expect( page ).toClick( '#tab-link-woocommerce_onboard_tab a', { text: 'Setup wizard' } );

		await Promise.all( [
			page.waitForNavigation( { waitUntil: 'networkidle0' } ),
			expect( page ).toClick( '#tab-panel-woocommerce_onboard_tab a', { text: 'Enable' } ),
		] );

		await expect( page ).toMatchElement( '.woocommerce-profile-wizard__body' );
	} );
} );
