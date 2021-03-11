import { setCheckbox } from '@woocommerce/e2e-utils';
import { WP_ADMIN_WC_SETTINGS } from '../utils/constants';
import { Page } from 'puppeteer';
import { getAttribute } from '../utils/actions';

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
			waitUntil: 'networkidle0',
		} );
		await this.page.waitForSelector( 'a.nav-tab-active:text("General")' );
	}

	async enableTaxRates() {
		setCheckbox( '#woocommerce_calc_taxes' );
	}

	async getTaxRateValue() {
		return await getAttribute( '#woocommerce_calc_taxes', 'checked' );
	}

	async saveSettings() {
		await this.page.click( ':text("Save changes")' );
		await this.page.waitForNavigation( {
			waitUntil: 'networkidle0',
		} );
		await this.page.waitForSelector(
			'#message :text("Your settings have been saved.")'
		);
	}
}
