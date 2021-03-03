import { Page } from 'playwright';

export class ProductTypeSection {
	page: Page;

	constructor( page: Page ) {
		this.page = page;
	}

	async isDisplayed( productCount: number ) {
		await this.page.waitForSelector(
			'h2:text("What type of products will be listed?")'
		);
		const length = await this.page.$$eval(
			'.components-checkbox-control__input',
			( items ) => items.length
		);
		expect( length === productCount ).toBeTruthy();
	}

	async uncheckProducts() {
		const productCheckboxes = await this.page.$$(
			'.components-checkbox-control__input'
		);

		for ( const checkbox of productCheckboxes ) {
			await checkbox.uncheck();
		}
	}

	async selectProduct( productLabel: string ) {
		await this.page.check(
			'.components-base-control :text("' + productLabel + '")'
		);
	}
}
