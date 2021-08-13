/**
 * External dependencies
 */
import { takeScreenshotFor } from '@woocommerce/e2e-environment';

/**
 * Internal dependencies
 */
import { Login } from '../../pages/Login';
import { OnboardingWizard } from '../../pages/OnboardingWizard';
import { PaymentsSetup } from '../../pages/PaymentsSetup';
import { WcHomescreen } from '../../pages/WcHomescreen';
import { BankAccountTransferSetup } from '../../sections/payment-setup/BankAccountTransferSetup';
import { TaskTitles } from '../../constants/taskTitles';
import { HelpMenu } from '../../elements/HelpMenu';
import { WcSettings } from '../../pages/WcSettings';

/* eslint-disable @typescript-eslint/no-var-requires */
const { afterAll, beforeAll, describe, it } = require( '@jest/globals' );
/* eslint-enable @typescript-eslint/no-var-requires */

const testAdminHomescreenTasklist = () => {
	describe( 'Homescreen task list', () => {
		const profileWizard = new OnboardingWizard( page );
		const homeScreen = new WcHomescreen( page );
		const helpMenu = new HelpMenu( page );
		const settings = new WcSettings( page );
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
			await takeScreenshotFor( 'WooCommerce Admin Home Screen' );
		} );

		afterAll( async () => {
			await login.logout();
		} );

		it( 'should show 6 tasks on the home screen', async () => {
			const tasks = await homeScreen.getTaskList();
			expect( tasks.length ).toBe( 6 );
			expect( tasks ).toContain( TaskTitles.storeDetails );
			expect( tasks ).toContain( TaskTitles.addProducts );
			expect( tasks ).toContain( TaskTitles.taxSetup );
			expect( tasks ).toContain( TaskTitles.personalizeStore );
		} );

		it( 'should be able to hide the task list', async () => {
			await homeScreen.hideTaskList();
			expect( await homeScreen.isTaskListDisplayed() ).toBe( false );
		} );

		it( 'should be able to show the task list again through the help menu', async () => {
			await settings.navigate();
			await helpMenu.openHelpMenu();
			await helpMenu.enableTaskList();
			await homeScreen.navigate();
			await homeScreen.isDisplayed();
			expect( await homeScreen.isTaskListDisplayed() ).toBe( true );
		} );
	} );
};

module.exports = { testAdminHomescreenTasklist };
