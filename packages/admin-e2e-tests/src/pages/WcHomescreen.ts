/**
 * Internal dependencies
 */
import {
	waitForElementByText,
	getElementByAttributeAndValue,
	waitForElementByTextWithoutThrow,
	getElementByText,
} from '../utils/actions';
import { BasePage } from './BasePage';

export class WcHomescreen extends BasePage {
	url = 'wp-admin/admin.php?page=wc-admin';

	async isDisplayed() {
		// Wait for Benefits section to appear
		await waitForElementByText( 'h1', 'Home' );
	}

	async possiblyDismissWelcomeModal() {
		const modalText = 'Welcome to your WooCommerce store’s online HQ!';
		const modal = await waitForElementByTextWithoutThrow(
			'h2',
			modalText,
			10
		);

		if ( modal ) {
			await this.clickButtonWithText( 'Next' );
			await this.page.waitFor( 1000 );
			await this.clickButtonWithText( 'Next' );
			await this.page.waitFor( 1000 );
			await this.click( '.components-guide__finish-button' );
			await this.page.waitFor( 500 );
		}
	}

	async getTaskList() {
		await page.waitForSelector(
			'.woocommerce-task-card .woocommerce-task-list__item-title'
		);
		await waitForElementByText( '*', 'Get ready to start selling' );
		const list = await this.page.$$eval(
			'.woocommerce-task-card .woocommerce-task-list__item-title',
			( items ) => items.map( ( item ) => item.textContent )
		);
		return list.map( ( item: string | null ) => {
			const match = item?.match( /(.+)[0-9] minute/ );
			if ( match && match.length > 1 ) {
				return match[ 1 ];
			}
			return item;
		} );
	}

	async isTaskListDisplayed() {
		return !! ( await getElementByText(
			'*',
			'Get ready to start selling'
		) );
	}

	async clickOnTaskList( taskTitle: string ) {
		const item = await waitForElementByText( '*', taskTitle );

		if ( ! item ) {
			throw new Error(
				`Could not find task list item with title: ${ taskTitle }`
			);
		} else {
			await item.click();
			await waitForElementByText( 'h1', taskTitle );
		}
	}

	async hideTaskList() {
		const taskListOptions = await getElementByAttributeAndValue(
			'button',
			'title',
			'Task List Options'
		);
		await taskListOptions?.click();
		const hideThisButton = await waitForElementByText(
			'button',
			'Hide this'
		);
		await hideThisButton?.click();
	}

	async waitForNotesRequestToBeLoaded() {
		return await this.page.waitForResponse( ( response ) => {
			const url = encodeURIComponent( response.url() );
			return url.includes( '/wc-analytics/admin/notes' ) && response.ok();
		} );
	}

	async isActivityPanelShown() {
		return !! ( await this.page.$( '.woocommerce-activity-panel' ) );
	}

	async getActivityPanels() {
		const panelContainer = await page.waitForSelector(
			'.woocommerce-activity-panel'
		);
		const list = await panelContainer.$$eval( 'h2', ( items ) =>
			items.map( ( item ) => item.textContent )
		);
		return list.map( ( item: string | null ) => {
			const match = item?.match( /([a-zA-Z]+)([0-9]+)/ );
			if ( match && match.length > 2 ) {
				return {
					title: match[ 1 ],
					count: parseInt( match[ 2 ], 10 ),
				};
			}
			return { title: item };
		} );
	}
}
