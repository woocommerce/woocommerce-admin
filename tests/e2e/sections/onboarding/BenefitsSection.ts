import { Page } from 'puppeteer';
import { BaseSection } from '../../pages/BaseSection';
import { getElementByText, waitForElementByText } from '../../utils/actions';

export class BenefitsSection extends BaseSection {
	async isDisplayed() {
		await waitForElementByText(
			'h2',
			'Enhance your store with Jetpack and WooCommerce Shipping & Tax'
		);
	}

	async noThanks() {
		// Click on "No thanks" button to move to the next step
		await this.clickButtonWithText( 'No thanks' );
	}
}
