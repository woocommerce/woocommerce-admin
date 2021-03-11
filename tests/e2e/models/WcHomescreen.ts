import { Page } from 'playwright';

export class WcHomescreen {
	page: Page;

	constructor( page: Page ) {
		this.page = page;
	}

	async isDisplayed() {
		// Wait for Benefits section to appear
		await this.page.waitForSelector( 'h1:text("Home")' );
	}

	async possiblyDismissWelcomeModal() {
		// Wait for Benefits section to appear
		const modal = await this.page.isVisible(
			'h2:text("Welcome to your WooCommerce store’s online HQ!")',
			{
				timeout: 2000,
			}
		);
		if ( modal ) {
			await this.page.click( 'button:text("Next")' );
			await this.page.click( 'button:text("Next")' );
			await this.page.click( '.components-guide__finish-button' );
		}
	}

	async getTaskList() {
		// Log out link in admin bar is not visible so can't be clicked directly.
		const list = ( await this.page.$$eval(
			'.woocommerce-task-card .woocommerce-list__item',
			( am ) => am.map( ( e ) => e.textContent )
		) ) as string[];
		return list.map( ( item: string ) => {
			const match = item.match( /(.+)[0-9] minute/ );
			if ( match && match.length > 1 ) {
				return match[ 1 ];
			}
			return item;
		} );
	}

	async clickOnTaskList( taskTitle: string ) {
		await this.page.click( ':text("' + taskTitle + '")' );
		await this.page.waitForSelector( 'h1:text("' + taskTitle + '")' );
	}
}
