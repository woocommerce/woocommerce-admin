import { Page } from 'playwright';

export class IndustrySection {
	page: Page;

	constructor( page: Page ) {
		this.page = page;
	}

	async isDisplayed( industryCount?: number ) {
		await this.page.waitForSelector(
			'h2:text("In which industry does the store operate?")'
		);

		if ( industryCount ) {
			const length = await this.page.$$eval(
				'.components-checkbox-control__input',
				( items ) => items.length
			);

			expect( length === industryCount ).toBeTruthy();
		}
	}

	async uncheckIndustries() {
		const industryCheckboxes = await this.page.$$(
			'.components-checkbox-control__input'
		);

		for ( const checkbox of industryCheckboxes ) {
			await checkbox.uncheck();
		}
	}

	async selectIndustry( industryLabel: string ) {
		await this.page.check( 'label:text-is("' + industryLabel + '")' );
	}
}
