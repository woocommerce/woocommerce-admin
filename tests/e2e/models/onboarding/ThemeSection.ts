import { Page } from 'puppeteer';

export class ThemeSection {
	page: Page;

	constructor( page: Page ) {
		this.page = page;
	}

	async isDisplayed() {
		await this.page.waitForSelector( ':text("Choose a theme")' );
		await this.page.waitForSelector( ':text("All themes")' );
	}

	async continueWithActiveTheme() {
		await this.page.click( 'button:text("Continue with my active theme")' );
	}
}
