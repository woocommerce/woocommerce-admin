/**
 * @format
 */

/**
 * Internal dependencies
 */
import { completeOnboardingWizard } from './complete-onboarding-wizard';
import { StoreOwnerFlow } from '../../utils/flows';

/**
 * This tests a default, happy path for the onboarding wizard.
 */
describe( 'Store owner can complete onboarding wizard', () => {
	it( 'can start Setup Wizard when visiting the site for the first time. Skip all other times.', async () => {
		await StoreOwnerFlow.login();
		await StoreOwnerFlow.startProfileWizard();
		//await StoreOwnerFlow.runSetupWizard();
		await completeOnboardingWizard();
	} );
} );
