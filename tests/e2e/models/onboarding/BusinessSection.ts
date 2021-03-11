import { Page } from 'playwright';
import { DropdownField } from '../DropdownField';

export class BusinessSection {
	page: Page;
	howManyProductsDropdown: DropdownField;
	sellingElsewhereDropdown: DropdownField;

	constructor( page: Page ) {
		this.page = page;
		this.howManyProductsDropdown = new DropdownField(
			page,
			':nth-match(.woocommerce-select-control, 1)'
		);
		this.sellingElsewhereDropdown = new DropdownField(
			page,
			':nth-match(.woocommerce-select-control, 2)'
		);
	}

	async isDisplayed() {
		await this.page.isVisible( ':text("Tell us about your business")' );
	}

	async selectProductNumber( productLabel: string ) {
		await this.howManyProductsDropdown.select( productLabel );
	}

	async selectCurrentlySelling( currentlySelling: string ) {
		await this.sellingElsewhereDropdown.select( currentlySelling );
	}

	async selectInstallFreeBusinessFeatures( select: boolean ) {
		const installFeaturesCheckbox = await this.page.$(
			'#woocommerce-business-extensions__checkbox'
		);
		if ( select ) {
			await installFeaturesCheckbox?.check();
		} else {
			await installFeaturesCheckbox?.uncheck();
		}
	}

	async expandRecommendedBusinessFeatures() {
		const expandButtonSelector =
			'.woocommerce-admin__business-details__selective-extensions-bundle__expand';
		await this.page.click( expandButtonSelector );

		// Confirm that expanding the list shows all the extensions available to install.
		await this.page.isVisible(
			':nth-match(.components-checkbox-control__input, 8)'
		);
	}

	async uncheckAllRecommendedBusinessFeatures() {
		const allCheckboxes = await this.page.$$(
			'.components-checkbox-control__input'
		);

		// Uncheck all checkboxes, to avoid installing plugins
		for ( const checkbox of allCheckboxes ) {
			await checkbox.uncheck();
		}
	}

	// The old list displayed on the dropdown page
	async uncheckBusinessFeatures() {
		// checkbox is present, uncheck it.
		const installFeaturesCheckboxes = await page.$$(
			'.woocommerce-profile-wizard__benefit .components-form-toggle__input'
		);
		// Uncheck all checkboxes, to avoid installing plugins
		for ( const checkbox of installFeaturesCheckboxes ) {
			await checkbox.uncheck();
		}
	}
}
