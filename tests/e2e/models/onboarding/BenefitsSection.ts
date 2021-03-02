import { Page } from 'playwright';

export class BenefitsSection {
	page: Page;

	constructor( page: Page ) {
		this.page = page;
	}

	async isDisplayed() {
		await this.page.waitForSelector(
			'.woocommerce-profile-wizard__container.benefits'
		);
	}

	async noThanks() {
		// Wait for "No thanks" button to become active
		await this.page.waitForSelector( ':text("No thanks")' );

		// Click on "No thanks" button to move to the next step
		await this.page.click( ':text("No thanks")' );
	}
}
