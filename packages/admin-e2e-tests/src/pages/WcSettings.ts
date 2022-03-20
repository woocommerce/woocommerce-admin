/**
 * Internal dependencies
 */
import { getAttribute, hasClass, waitForElementByText } from '../utils/actions';
import { BasePage } from './BasePage';

/* eslint-disable @typescript-eslint/no-var-requires */
const { setCheckbox } = require( '@woocommerce/e2e-utils' );
/* eslint-enable @typescript-eslint/no-var-requires */

export class WcSettings extends BasePage {
	url = 'wp-admin/admin.php?page=wc-settings';

	async navigate( tab = 'general', section = '' ): Promise< void > {
		let settingsUrl = this.url + `&tab=${ tab }`;

		if ( section ) {
			settingsUrl += `&section=${ section }`;
		}

		await this.goto( settingsUrl );
		await waitForElementByText( 'a', 'General' );
	}

	async enableTaxRates(): Promise< void > {
		await waitForElementByText( 'th', 'Enable taxes' );
		await setCheckbox( '#woocommerce_calc_taxes' );
	}

	async getTaxRateValue(): Promise< unknown > {
		return await getAttribute( '#woocommerce_calc_taxes', 'checked' );
	}

	async saveSettings(): Promise< void > {
		this.clickButtonWithText( 'Save changes' );
		await this.page.waitForNavigation( {
			waitUntil: 'networkidle0',
		} );
		await waitForElementByText(
			'strong',
			'Your settings have been saved.'
		);
	}

	async cleanPaymentMethods(): Promise< void > {
		this.navigate( 'checkout' );
		await waitForElementByText( 'h2', 'Payment methods' );
		const paymentMethods = await page.$$( 'span.woocommerce-input-toggle' );
		for ( const method of paymentMethods ) {
			if (
				method &&
				( await hasClass(
					method,
					'woocommerce-input-toggle--enabled'
				) )
			) {
				await method?.click();
			}
		}
		await this.saveSettings();
	}
}
