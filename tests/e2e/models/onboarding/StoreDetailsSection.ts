import { Page } from 'playwright';
import { DropdownTypeaheadField } from '../DropdownTypeaheadField';
import {
	verifyCheckboxIsSet,
	verifyCheckboxIsUnset,
} from '../../utils/actions';

export class StoreDetailsSection {
	page: Page;
	countryDropdown: DropdownTypeaheadField;

	constructor( page: Page ) {
		this.page = page;
		this.countryDropdown = new DropdownTypeaheadField(
			page,
			'#woocommerce-select-control'
		);
	}

	async fillAddress( address: string ) {
		await this.page.fill( '#inspector-text-control-0', '' );
		await this.page.type( '#inspector-text-control-0', address );
	}

	async fillAddressLineTwo( address: string ) {
		await this.page.fill( '#inspector-text-control-1', '' );
		await this.page.type( '#inspector-text-control-1', address );
	}

	async selectCountry( search: string, selector: string ) {
		await this.countryDropdown.search( search );
		await this.countryDropdown.select( selector );
	}

	async fillCity( city: string ) {
		await this.page.fill( '#inspector-text-control-2', '' );
		await this.page.type( '#inspector-text-control-2', city );
	}

	async fillPostalCode( postalCode: string ) {
		await this.page.fill( '#inspector-text-control-3', '' );
		await this.page.type( '#inspector-text-control-3', postalCode );
	}

	async selectSetupForClient() {
		const checkbox = await this.page.$(
			'.components-checkbox-control__input'
		);
		await checkbox?.check();
	}

	async checkClientSetupCheckbox( selected: boolean ) {
		if ( selected ) {
			await verifyCheckboxIsSet( '.components-checkbox-control__input' );
		} else {
			await verifyCheckboxIsUnset(
				'.components-checkbox-control__input'
			);
		}
	}
}
