/**
 * External dependencies
 */
import { takeScreenshotFor } from '@woocommerce/e2e-environment';

/**
 * Internal dependencies
 */
import { Login } from '../../pages/Login';
import { OnboardingWizard } from '../../pages/OnboardingWizard';
import { WcHomescreen } from '../../pages/WcHomescreen';
// import { addProducts, removeAllProducts } from '../../fixtures';

/* eslint-disable @typescript-eslint/no-var-requires */
const { createSimpleProduct } = require( '@woocommerce/e2e-utils' );
const { afterAll, beforeAll, describe, it } = require( '@jest/globals' );
/* eslint-enable @typescript-eslint/no-var-requires */

const testAdminHomescreenActivityPanel = () => {
	describe( 'Homescreen activity panel', () => {
		const profileWizard = new OnboardingWizard( page );
		const homeScreen = new WcHomescreen( page );
		const login = new Login( page );

		beforeAll( async () => {
			await login.login();

			// This makes this test more isolated, by always navigating to the
			// profile wizard and skipping, this behaves the same as if the
			// profile wizard had not been run yet and the user is redirected
			// to it when trying to go to wc-admin.
			await profileWizard.navigate();
			await profileWizard.skipStoreSetup();

			await homeScreen.isDisplayed();
			await homeScreen.possiblyDismissWelcomeModal();
		} );

		afterAll( async () => {
			// await removeAllProducts();
			await login.logout();
		} );

		it( 'should not show activity panel while task list is displayed', async () => {
			expect( await homeScreen.isActivityPanelShown() ).toBe( false );
		} );

		it( 'should not show panels when there are no orders or products yet with task list hidden', async () => {
			await homeScreen.hideTaskList();
			expect( await homeScreen.isTaskListDisplayed() ).toBe( false );
			expect( await homeScreen.isActivityPanelShown() ).toBe( false );
		} );

		it.only( 'should show Stock panel when we have at-least one product', async () => {
			// await addProducts();
			await createSimpleProduct();
			await page.reload( {
				waitUntil: [ 'networkidle0', 'domcontentloaded' ],
			} );
			const activityPanels = await homeScreen.getActivityPanels();
			expect(
				activityPanels.findIndex( ( p ) => p.title === 'Stock' )
			).toBeGreaterThanOrEqual( 0 );
		} );
	} );
};

module.exports = { testAdminHomescreenActivityPanel };
