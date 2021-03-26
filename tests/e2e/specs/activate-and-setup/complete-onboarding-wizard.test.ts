/**
 * Internal dependencies
 */
import { StoreOwnerFlow } from '../../utils/flows';
import {
	chooseIndustries,
	completeIndustrySection,
} from './complete-industry-section';
import { completeProductTypesSection } from './complete-product-types-section';
import {
	completeBusinessSection,
	completeSelectiveBundleInstallBusinessDetailsTab,
} from './complete-business-section';
import { completeThemeSelectionSection } from './complete-theme-selection-section';
import { OnboardingWizard } from '../../pages/OnboardingWizard';
import { WcHomescreen } from '../../pages/WcHomescreen';
import { TaskTitles } from '../../constants/taskTitles';
import { getElementByText } from '../../utils/actions';

const config = require( 'config' );

/**
 * This tests a default, happy path for the onboarding wizard.
 */
describe( 'Store owner can complete onboarding wizard', () => {
	const profileWizard = new OnboardingWizard( page );

	it( 'can log in', StoreOwnerFlow.login );

	it( 'can start the profile wizard', async () => {
		await profileWizard.navigate();
	} );

	it( 'can complete the store details section', async () => {
		await profileWizard.storeDetails.completeStoreDetailsSection();
		// Wait for "Continue" button to become active
		await profileWizard.continue();

		// Wait for usage tracking pop-up window to appear
		await profileWizard.optionallySelectUsageTracking();
	} );

	it( 'can complete the industry section', async () =>
		await completeIndustrySection() );

	it( 'can complete the product types section', async () =>
		await completeProductTypesSection() );

	it( 'can complete the business section', async () => {
		await profileWizard.business.isDisplayed();
		await profileWizard.business.selectProductNumber(
			config.get( 'onboardingwizard.numberofproducts' )
		);
		await profileWizard.business.selectCurrentlySelling(
			config.get( 'onboardingwizard.sellingelsewhere' )
		);

		await profileWizard.continue();
	} );

	it( 'can unselect all business features and continue', async () => {
		await profileWizard.business.freeFeaturesIsDisplayed();
		// Add WC Pay check
		await profileWizard.business.expandRecommendedBusinessFeatures();

		expect( page ).toMatchElement( 'a', {
			text: 'WooCommerce Payments',
		} );

		await profileWizard.business.uncheckAllRecommendedBusinessFeatures();
		await profileWizard.continue();
	} );

	it( 'can complete the theme selection section', async () => {
		await profileWizard.themes.isDisplayed();
		await profileWizard.themes.continueWithActiveTheme();
	} );

	afterAll( StoreOwnerFlow.logout );
} );

/**
 * A non-US store doesn't get the "install recommended features" checkbox.
 */
describe( 'A spanish store does not get the install recommended features tab, but sees the benefits section', () => {
	const profileWizard = new OnboardingWizard( page );

	it( 'can log in', StoreOwnerFlow.login );

	it( 'can start the profile wizard', async () => {
		await profileWizard.navigate();
	} );

	it( 'can complete the store details section', async () => {
		await profileWizard.storeDetails.completeStoreDetailsSection( {
			countryRegionSubstring: 'spain',
			countryRegionSelector: 'ES\\:B',
			countryRegion: 'Spain - Barcelona',
		} );

		// Wait for "Continue" button to become active
		await profileWizard.continue();

		// Wait for usage tracking pop-up window to appear
		await profileWizard.optionallySelectUsageTracking();
	} );

	it( 'can complete the industry section', async () => {
		await completeIndustrySection( 7 );
	} );

	it( 'can complete the product types section', async () =>
		await completeProductTypesSection() );

	it( 'does not have the install recommended features checkbox', async () => {
		const installFeaturesCheckbox = await page.$(
			'#woocommerce-business-extensions__checkbox'
		);

		expect( installFeaturesCheckbox ).toBe( null );
	} );

	it( 'can complete the business section', async () => {
		await profileWizard.business.isDisplayed();
		await profileWizard.business.selectProductNumber(
			config.get( 'onboardingwizard.numberofproducts' )
		);
		await profileWizard.business.selectCurrentlySelling(
			config.get( 'onboardingwizard.sellingelsewhere' )
		);

		await profileWizard.continue();
	} );

	it( 'can complete the theme selection section', async () =>
		await completeThemeSelectionSection() );

	it( 'can complete the benefits section', async () => {
		await profileWizard.benefits.isDisplayed();
		// This performs a navigation to home screen.
		await profileWizard.benefits.noThanks();
	} );

	it( 'should display the choose payments task, and not the woocommerce payments task', async () => {
		const homescreen = new WcHomescreen( page );
		await homescreen.isDisplayed();
		await homescreen.possiblyDismissWelcomeModal();

		const tasks = await homescreen.getTaskList();

		expect( tasks ).toContain( TaskTitles.addPayments );
		expect( tasks ).not.toContain( TaskTitles.wooPayments );
	} );

	it( 'should not display woocommerce payments as a payments option', async () => {
		const homescreen = new WcHomescreen( page );
		await homescreen.clickOnTaskList( TaskTitles.addPayments );
		const wcPayLabel = await getElementByText(
			'h2',
			'WooCommerce Payments'
		);
		expect( wcPayLabel ).toBeUndefined();
	} );

	afterAll( StoreOwnerFlow.logout );
} );

describe( 'A japanese store can complete the selective bundle install but does not include WCPay. ', () => {
	const profileWizard = new OnboardingWizard( page );

	it( 'can log in', StoreOwnerFlow.login );

	it( 'can start the profile wizard', async () => {
		await profileWizard.navigate();
	} );

	it( 'can complete the store details section', async () => {
		await profileWizard.storeDetails.completeStoreDetailsSection( {
			countryRegionSubstring: 'japan',
			countryRegionSelector: 'JP\\:JP01',
			countryRegion: 'Japan — Hokkaido',
		} );

		// Wait for "Continue" button to become active
		await profileWizard.continue();

		// Wait for usage tracking pop-up window to appear
		await profileWizard.optionallySelectUsageTracking();
	} );

	// JP:JP01
	it( 'can choose the "Other" industry', async () => {
		await chooseIndustries( [ 'Other' ] );
	} );

	it( 'can complete the product types section', async () =>
		await completeProductTypesSection() );

	it( 'can complete the business details tab', async () => {
		await completeSelectiveBundleInstallBusinessDetailsTab();
	} );

	it( 'can choose not to install any extensions', async () => {
		await profileWizard.business.freeFeaturesIsDisplayed();
		// Add WC Pay check
		await profileWizard.business.expandRecommendedBusinessFeatures();

		expect( page ).not.toMatchElement( 'a', {
			text: 'WooCommerce Payments',
		} );

		await profileWizard.business.uncheckAllRecommendedBusinessFeatures();
		await profileWizard.continue();
	} );

	it( 'can finish the rest of the wizard successfully', async () => {
		await profileWizard.themes.isDisplayed();

		//  This navigates to the home screen
		await profileWizard.themes.continueWithActiveTheme();
	} );

	it( 'should display the choose payments task, and not the woocommerce payments task', async () => {
		const homescreen = new WcHomescreen( page );
		await homescreen.isDisplayed();
		await homescreen.possiblyDismissWelcomeModal();
		const tasks = await homescreen.getTaskList();
		expect( tasks ).toContain( TaskTitles.addPayments );
		expect( tasks ).not.toContain( TaskTitles.wooPayments );
	} );

	afterAll( StoreOwnerFlow.logout );
} );
