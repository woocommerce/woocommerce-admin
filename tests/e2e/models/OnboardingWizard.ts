import { Page } from 'playwright';
import { WP_ADMIN_START_PROFILE_WIZARD } from '../utils/constants';
import { BenefitsSection } from './onboarding/BenefitsSection';
import { BusinessSection } from './onboarding/BusinessSection';
import { IndustrySection } from './onboarding/IndustrySection';
import { ProductTypeSection } from './onboarding/ProductTypesSection';
import { StoreDetailsSection } from './onboarding/StoreDetailsSection';
import { ThemeSection } from './onboarding/ThemeSection';

export class OnboardingWizard {
	page: Page;
	storeDetails: StoreDetailsSection;
	industry: IndustrySection;
	productTypes: ProductTypeSection;
	business: BusinessSection;
	themes: ThemeSection;
	benefits: BenefitsSection;

	constructor( page: Page ) {
		this.page = page;
		this.storeDetails = new StoreDetailsSection( page );
		this.industry = new IndustrySection( page );
		this.productTypes = new ProductTypeSection( page );
		this.business = new BusinessSection( page );
		this.themes = new ThemeSection( page );
		this.benefits = new BenefitsSection( page );
	}

	async start() {
		await this.page.goto( WP_ADMIN_START_PROFILE_WIZARD, {
			waitUntil: 'networkidle',
		} );
	}

	async continue() {
		await this.page.waitForSelector( 'button.is-primary:not(:disabled)' );
		await this.page.click( 'button.is-primary:text("Continue")' );
	}

	async optionallySelectUsageTracking( select = false ) {
		const usageTrackingHeader = await this.page.waitForSelector(
			'.components-modal__header-heading',
			{
				timeout: 2000,
			}
		);
		if ( ! usageTrackingHeader ) {
			return;
		}
		const content = await this.page.textContent(
			'.components-modal__header-heading'
		);
		expect( content ).toBe( 'Build a better WooCommerce' );

		// Query for primary buttons: "Continue" and "Yes, count me in"
		const primaryButtons = await this.page.$$( 'button.is-primary' );
		expect( primaryButtons ).toHaveLength( 2 );

		if ( select ) {
			await this.page.click(
				'button.is-secondary:text("Yes, count me in")'
			);
		} else {
			await this.page.click( 'button.is-secondary:text("No thanks")' );
		}
		this.page.waitForNavigation( {
			waitUntil: 'networkidle',
			timeout: 2000,
		} );
	}
}
