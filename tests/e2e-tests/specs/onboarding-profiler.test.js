/**
 * @format
 */

/**
 * Internal dependencies
 */
import { StoreOwnerFlow } from '@woocommerce/e2e-tests/utils/flows';

const config = require( 'config' );
const baseUrl = config.get( 'url' );

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

	it( 'walks through the profiler', async () => {
		// Open the dashboard/profiler.
		await page.goto( baseUrl + 'wp-admin/admin.php?page=wc-admin', {
			waitUntil: 'networkidle0',
		} );

		// Start step.
		await expect( page ).toClick( 'button', { text: 'Get started' } );
		await expect( page ).toMatchElement( '.woocommerce-profile-wizard__usage-modal' );
		await expect( page ).toClick( 'button', { text: 'Continue' } );

		// Store details.
		await page.waitForNavigation( { waitUntil: 'networkidle0' } );
		await expect( page ).toMatchElement( '.woocommerce-profile-wizard__plugins-actions' );
		await expect( page ).toClick( 'button', { text: 'Activate & continue' } );
	} );
} );
