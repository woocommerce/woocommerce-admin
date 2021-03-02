import { Page } from 'playwright';

export class DropdownField {
	page: Page;
	id: string;

	constructor( page: Page, id: string ) {
		this.page = page;
		this.id = id;
	}

	async select( value: string ) {
		await this.page.click(
			this.id + ' .woocommerce-select-control__control'
		);
		await this.page.waitForSelector(
			this.id + ' button:text("' + value + '")'
		);
		await this.page.click( this.id + ' button:text("' + value + '")' );
		await this.checkSelected( value );
	}

	async checkSelected( value: string ) {
		const currentVal = await this.page.getAttribute(
			this.id + ' input',
			'value'
		);
		expect( currentVal ).toBe( value );
	}
}
