import { Page } from 'puppeteer';
import { getInputValue } from '../utils/actions';

export class DropdownField {
	page: Page;
	id: string;

	constructor( page: Page, id: string ) {
		this.page = page;
		this.id = id;
	}

	async select( value: string ) {
		const currentVal = await getInputValue( this.id + ' input' );
		if ( currentVal !== value ) {
			await this.page.click(
				this.id + ' .woocommerce-select-control__control'
			);
			await this.page.click( this.id + ' button:text("' + value + '")' );
			await this.checkSelected( value );
		}
	}

	async checkSelected( value: string ) {
		const currentVal = await getInputValue( this.id + ' input' );
		expect( currentVal ).toBe( value );
	}
}
