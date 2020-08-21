/**
 * @format
 */

/**
 * Internal dependencies
 */
import { StoreOwnerFlow } from '../../utils/flows';
import { completeStoreDetailsSection } from './complete-store-details-section';
import { completeIndustrySection } from './complete-industry-section';
import { completeProductTypesSection } from './complete-product-types-section';
import { completeBusinessSection } from './complete-business-section';
import { completeThemeSelectionSection } from './complete-theme-selection-section';
import { completeBenefitsSection } from './complete-benefits-section';

/**
 * This tests a default, happy path for the onboarding wizard.
 */
describe( 'Store owner can complete onboarding wizard', () => {
	it( 'can complete the onboarding wizard', async () => {
		await StoreOwnerFlow.login();
		await StoreOwnerFlow.startProfileWizard();
		await completeStoreDetailsSection();
		await completeIndustrySection();
		await completeProductTypesSection();
		await completeBusinessSection();
		await completeThemeSelectionSection();
		await completeBenefitsSection();
	} );
} );
