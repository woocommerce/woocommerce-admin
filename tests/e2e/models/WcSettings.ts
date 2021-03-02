import { WP_ADMIN_PERMALINK_SETTINGS, WP_ADMIN_WC_SETTINGS } from '../utils/constants';
import { Page } from 'playwright';

export class WcSettings {
	page: Page;

	constructor( page: Page ) {
		this.page = page;
	}

	async open( tab = 'general', section = '' ) {
		let settingsUrl = WP_ADMIN_WC_SETTINGS + tab;

		if ( section ) {
			settingsUrl += `&section=${ section }`;
		}

		await this.page.goto( settingsUrl, {
			waitUntil: 'networkidle',
		} );
		await this.page.waitForSelector( 'a.nav-tab-active:text("General")' );
	}

	async enableTaxRates() {
		const checkbox = await this.page.$('#woocommerce_calc_taxes');
		await checkbox?.check();
	}

	async getTaxRateValue() {
		return await this.page.getAttribute('#woocommerce_calc_taxes', 'checked');
	}

	async saveSettings() {
		await this.page.click(':text("Save changes")');
		await this.page.waitForNavigation( {
			waitUntil: 'networkidle'
		});
		await this.page.waitForSelector(
			'#message :text("Your settings have been saved.")'
		);
	}
}
