import { Page } from 'puppeteer';
import {
	clearAndFillInput,
	verifyValueOfInputField,
} from '@woocommerce/e2e-utils';

export class DropdownTypeaheadField {
	page: Page;
	id: string;

	constructor( page: Page, id: string ) {
		this.page = page;
		this.id = id;
	}
	async search( text: string ) {
		await clearAndFillInput( this.id + '-0__control-input', text );
	}
	async select( selector: string ) {
		await this.page.click( this.id + `__option-0-${ selector }` );
	}

	async checkSelected( value: string ) {
		await verifyValueOfInputField( this.id + '-0__control-input', value );
	}
}
