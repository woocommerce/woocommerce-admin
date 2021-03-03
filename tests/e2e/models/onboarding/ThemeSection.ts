import { Page } from 'playwright';

export class ThemeSection {
	page: Page;

	constructor( page: Page ) {
		this.page = page;
	}

	async isDisplayed() {
		await this.page.isVisible( ':text("Choose a theme")' );
		await this.page.isVisible( ':text("All themes")' );
	}
}
