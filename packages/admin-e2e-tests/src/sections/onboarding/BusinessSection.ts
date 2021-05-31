/**
 * Internal dependencies
 */
import { BasePage } from '../../pages/BasePage';
import { waitForElementByText } from '../../utils/actions';

// External modules
const { setCheckbox, unsetCheckbox } = require( '@woocommerce/e2e-utils' );

export class BusinessSection extends BasePage {
	async isDisplayed() {
		await waitForElementByText( 'h2', 'Tell us about your business' );
	}

	async freeFeaturesIsDisplayed() {
		await waitForElementByText( 'h2', 'Included business features' );
	}

	async selectProductNumber( productLabel: string ) {
		const howManyProductsDropdown = this.getDropdownField(
			'.components-card__body > div:nth-child(1)'
		);

		await howManyProductsDropdown.select( productLabel );
	}

	async selectCurrentlySelling( currentlySelling: string ) {
		const sellingElsewhereDropdown = this.getDropdownField(
			'.components-card__body > div:nth-child(2)'
		);

		await sellingElsewhereDropdown.select( currentlySelling );
	}

	async selectInstallFreeBusinessFeatures( select: boolean ) {
		if ( select ) {
			await setCheckbox( '#woocommerce-business-extensions__checkbox' );
		} else {
			await unsetCheckbox( '#woocommerce-business-extensions__checkbox' );
		}
	}

	async expandRecommendedBusinessFeatures() {
		const expandButtonSelector =
			'.woocommerce-admin__business-details__selective-extensions-bundle__expand';

		await this.click( expandButtonSelector );

		// Confirm that expanding the list shows all the extensions available to install.
		await this.page.waitForFunction( () => {
			const inputsNum = document.querySelectorAll(
				'.components-checkbox-control__input'
			).length;
			return inputsNum > 6;
		} );
	}

	async uncheckAllRecommendedBusinessFeatures() {
		await this.unsetAllCheckboxes( '.components-checkbox-control__input' );
	}

	// The old list displayed on the dropdown page
	async uncheckBusinessFeatures() {
		await this.unsetAllCheckboxes(
			'.woocommerce-profile-wizard__benefit .components-form-toggle__input'
		);
	}
}
