import { Page } from 'playwright';

export class BenefitsSection {
	page: Page;

	constructor( page: Page ) {
		this.page = page;
	}

	async isDisplayed() {
		await this.page.isVisible(
			'.woocommerce-profile-wizard__container.benefits'
		);
	}

	async noThanks() {
		// Click on "No thanks" button to move to the next step
		await this.page.click( ':text("No thanks")' );
	}
}
