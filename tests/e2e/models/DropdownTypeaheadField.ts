import { Page } from 'playwright';

export class DropdownTypeaheadField {
	page: Page;
	id: string;

	constructor( page: Page, id: string ) {
		this.page = page;
		this.id = id;
	}
	async search( text: string ) {
		const dropdown = await this.page.$( this.id + '-0__control-input' );
		await dropdown?.fill( '' );
		await dropdown?.type( text );
	}
	async select( selector: string ) {
		await this.page.click( this.id + `__option-0-${ selector }` );
	}

	async checkSelected( value: string ) {
		const currentVal = this.page.getAttribute(
			this.id + '-0__control-input',
			'value'
		);
		expect( currentVal ).toBe( value );
	}
}
