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

		// Skip the Jetpack connection for testing purposes.
		await page.goto( baseUrl + 'wp-admin/admin.php?page=wc-admin&step=store-details', {
			waitUntil: 'networkidle0',
		} );

		// Store details.
		await expect( page ).toFill( '#inspector-text-control-0', '123 Peachtree Lane' );
		await expect( page ).toFill( '.woocommerce-select-control__control-input', 'United States (US) -- Georgia' );
		await page.keyboard.press( 'Enter' );
		await expect( page ).toFill( '#inspector-text-control-2', 'Atlanta' );
		await expect( page ).toFill( '#inspector-text-control-3', '30312' );
		await expect( page ).toClick( 'button', { text: 'Continue' } );

		// Industry.
		await page.waitForNavigation( { waitUntil: 'networkidle0' } );
		await expect( page ).toClick( '.woocommerce-profile-wizard__checkbox:first-child input' );
		await expect( page ).toClick( 'button', { text: 'Continue' } );

		// Product types
		await page.waitForNavigation( { waitUntil: 'networkidle0' } );
		await expect( page ).toClick( '.woocommerce-profile-wizard__checkbox:first-child input' );
		await expect( page ).toClick( '.woocommerce-profile-wizard__checkbox:nth-child(2) input' );
		await expect( page ).toClick( 'button', { text: 'Continue' } );

		// Business details.
		await Promise.all( [
			page.waitForNavigation( { waitUntil: 'networkidle0' } ),
			expect( page ).toMatchElement( '.woocommerce-card__body div:first-child .woocommerce-select-control__control' ),
		] );
		await expect( page ).toClick( '.woocommerce-card__body div:first-child .woocommerce-select-control__control' );
		await expect( page ).toClick( '#woocommerce-select-control__option-1-0' );
		await expect( page ).toClick( '.woocommerce-card__body div:nth-child(2) .woocommerce-select-control__control' );
		await expect( page ).toClick( '#woocommerce-select-control__option-2-no' );
		await expect( page ).toClick( 'button', { text: 'Continue' } );

		// Theme.
		await page.waitForNavigation( { waitUntil: 'networkidle0' } );
		await expect( page ).toClick( '.woocommerce-profile-wizard__theme:nth-child(2) button', { text: 'Choose' } );
		await expect( page ).toClick( 'button', { text: "I'll do it later" } );

		// Make sure the profiler is closed.
		await expect( page ).toMatchElement( 'body:not(.woocommerce-profile-wizard__body)' );
	} );
} );
