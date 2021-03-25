import {
	setCheckbox,
	clearAndFillInput,
	verifyCheckboxIsSet,
	verifyCheckboxIsUnset,
} from '@woocommerce/e2e-utils';
import { BaseSection } from '../../pages/BaseSection';

export class StoreDetailsSection extends BaseSection {
	async fillAddress( address: string ) {
		await clearAndFillInput( '#inspector-text-control-0', address );
	}

	async fillAddressLineTwo( address: string ) {
		await clearAndFillInput( '#inspector-text-control-1', address );
	}

	async selectCountry( search: string, selector: string ) {
		const countryDropdown = this.getDropdownTypeahead(
			'#woocommerce-select-control'
		);
		await countryDropdown.search( search );
		await countryDropdown.select( selector );
	}

	async fillCity( city: string ) {
		await clearAndFillInput( '#inspector-text-control-2', city );
	}

	async fillPostalCode( postalCode: string ) {
		await clearAndFillInput( '#inspector-text-control-3', postalCode );
	}

	async selectSetupForClient() {
		setCheckbox( '.components-checkbox-control__input' );
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
