/**
 * Internal dependencies
 */
import { resetWooCommerceState } from '../../fixtures';
import { Login } from '../../pages/Login';
import { OnboardingWizard } from '../../pages/OnboardingWizard';
import { WcHomescreen } from '../../pages/WcHomescreen';
import { getElementByText, waitForElementByText } from '../../utils/actions';

/* eslint-disable @typescript-eslint/no-var-requires */
const { afterAll, beforeAll, describe, it } = require( '@jest/globals' );
/* eslint-enable @typescript-eslint/no-var-requires */

const testAdminPurchaseSetupTask = () => {
	describe( 'Purchase setup task', () => {
		const profileWizard = new OnboardingWizard( page );
		const homeScreen = new WcHomescreen( page );
		const login = new Login( page );

		beforeAll( async () => {
			await login.login();
		} );

		afterAll( async () => {
			await login.logout();
		} );

		describe( 'selecting paid product', () => {
			beforeAll( async () => {
				await resetWooCommerceState();

				await profileWizard.navigate();
				await profileWizard.walkThroughAndCompleteOnboardingWizard( {
					products: [ 'Memberships' ],
				} );

				await homeScreen.isDisplayed();
				await homeScreen.possiblyDismissWelcomeModal();
			} );

			it( 'should display add <product name> to my store task', async () => {
				expect(
					await getElementByText( '*', 'Add Memberships to my store' )
				).toBeDefined();
			} );

			it( 'should show paid features modal with option to buy now', async () => {
				const task = await getElementByText(
					'*',
					'Add Memberships to my store'
				);
				await task?.click();
				await waitForElementByText(
					'h1',
					'Would you like to add the following paid features to your store now?'
				);
				expect(
					await getElementByText( 'button', 'Buy now' )
				).toBeDefined();
			} );
		} );

		describe( 'selecting paid theme', () => {
			beforeAll( async () => {
				await resetWooCommerceState();

				await profileWizard.navigate();
				await profileWizard.walkThroughAndCompleteOnboardingWizard( {
					themeTitle: 'Blooms',
				} );

				await homeScreen.isDisplayed();
				await homeScreen.possiblyDismissWelcomeModal();
			} );

			it( 'should display add <theme name> to my store task', async () => {
				expect(
					await getElementByText( '*', 'Add Blooms to my store' )
				).toBeDefined();
			} );

			it( 'should show paid features modal with option to buy now', async () => {
				const task = await getElementByText(
					'*',
					'Add Blooms to my store'
				);
				await task?.click();
				await waitForElementByText(
					'h1',
					'Would you like to add the following paid features to your store now?'
				);
				expect(
					await getElementByText( 'button', 'Buy now' )
				).toBeDefined();
			} );
		} );
	} );
};

module.exports = { testAdminPurchaseSetupTask };
