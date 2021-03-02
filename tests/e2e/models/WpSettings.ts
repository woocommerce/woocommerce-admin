import { WP_ADMIN_PERMALINK_SETTINGS } from '../utils/constants';
import { Page } from 'playwright';

export class WpSettings {
	page: Page;

	constructor( page: Page ) {
		this.page = page;
	}

	async openPermalinkSettings() {
		await this.page.goto( WP_ADMIN_PERMALINK_SETTINGS, {
			waitUntil: 'networkidle',
		} );
	}

    async saveSettings() {
        await this.page.click('.button-primary:text("Save Changes")');
		await this.page.waitForNavigation( {
			waitUntil: 'networkidle'
		});
    }
}
