/**
 * @format
 */

/**
 * Internal dependencies
 */
import { StoreOwnerFlow } from '@woocommerce/e2e-tests/utils/flows';
import {
	clickTab,
	setCheckbox,
	settingsPageSaveChanges,
	unsetCheckbox,
	verifyCheckboxIsSet,
	verifyCheckboxIsUnset,
	// verifyValueOfInputField,
} from '@woocommerce/e2e-tests/utils';
import { verifyAndPublish } from '@woocommerce/e2e-tests/utils/components';

const config = require( 'config' );
const baseUrl = config.get( 'url' );

const goToInventorySettings = async () => {
	// Go to inventory settings page
	await StoreOwnerFlow.openSettings( 'products', 'inventory' );

	// Make sure the products tab is active
	await expect( page ).toMatchElement( 'a.nav-tab-active', { text: 'Products' } );

	// Make sure the inventory section is active
	await expect( page ).toMatchElement( 'ul.subsubsub a.current', { text: 'Inventory' } );
};

describe( 'Store owner can manage stock levels from activity panel', () => {
	beforeAll( async () => {
		await StoreOwnerFlow.login();
	} );

	it( "doesn't display panel when stock management is disabled", async () => {
		await goToInventorySettings();

		// Disable stock management.
		await unsetCheckbox( '#woocommerce_manage_stock' );

		await settingsPageSaveChanges();

		// Verify that settings have been saved
		await Promise.all( [
			expect( page ).toMatchElement( '#message', { text: 'Your settings have been saved.' } ),
			verifyCheckboxIsUnset( '#woocommerce_manage_stock' ),
		] );

		// Verify that the activty panel is rendered.
		await expect( page ).toMatchElement( '#woocommerce-activity-panel' );

		// Verify that the stock panel button is not rendered.
		await expect( page ).not.toMatchElement( '#activity-panel-tab-stock' );
	} );

	it( 'does display panel when stock management is enabled', async () => {
		await goToInventorySettings();

		// Enable stock management.
		await setCheckbox( '#woocommerce_manage_stock' );

		await settingsPageSaveChanges();

		// Verify that settings have been saved
		await Promise.all( [
			expect( page ).toMatchElement( '#message', { text: 'Your settings have been saved.' } ),
			verifyCheckboxIsSet( '#woocommerce_manage_stock' ),
		] );

		// Verify that the activty panel is rendered.
		await expect( page ).toMatchElement( '#woocommerce-activity-panel' );

		// Verify that the stock panel button is rendered.
		await expect( page ).toMatchElement( '#activity-panel-tab-stock' );
	} );

	it( 'shows products that are low in stock', async () => {
		// Create a product that is low in stock.
		await StoreOwnerFlow.openNewProduct();

		// Make sure we're on the add order page.
		await expect( page.title() ).resolves.toMatch( 'Add new product' );

		// Set product data.
		await expect( page ).toFill( '#title', 'Low in stock product' );
		await clickTab( 'General' );
		await expect( page ).toFill( '#_regular_price', '9.99' );
		await clickTab( 'Inventory' );
		await expect( page ).toClick( '#_manage_stock' );
		await page.waitForSelector( '#_stock' );
		await expect( page ).toFill( '#_stock', '1' );

		// Publish product.
		await Promise.all( [
			verifyAndPublish(),
			page.waitForNavigation( { waitUntil: 'networkidle0' } ),
		] );

		// Verify that the stock panel indicates unread.
		await page.waitForSelector( '#activity-panel-tab-stock.has-unread' );

		// Open stock panel.
		await expect( page ).toClick( '#activity-panel-tab-stock' );
		await page.waitForSelector( '.woocommerce-stock-activity-card:not(.is-loading)' );

		// Verify the low in stock product is displayed.
		const stockCard = await page.$( '.woocommerce-stock-activity-card' );
		await expect( stockCard ).toMatchElement( '.woocommerce-activity-card__title', { text: 'Low in stock product' } );
	} );

	it( 'can update inventory level', async () => {
		// Open dashboard.
		await page.goto( baseUrl + 'wp-admin/admin.php?page=wc-admin', {
			waitUntil: 'networkidle0',
		} );

		// Open stock panel.
		await expect( page ).toClick( '#activity-panel-tab-stock' );
		await page.waitForSelector( '.woocommerce-stock-activity-card:not(.is-loading)' );

		// Verify the low in stock product is displayed.
		let stockCard = await page.$( '.woocommerce-stock-activity-card' );
		await expect( stockCard ).toMatchElement( '.woocommerce-activity-card__title', { text: 'Low in stock product' } );

		// Modify the inventory level.
		await expect( stockCard ).toClick( 'button', { text: 'Update stock' } );

		// We apparently need to reselect the card when the innerHTML changes.
		stockCard = await page.$( '.woocommerce-stock-activity-card' );

		await page.waitForSelector( '.woocommerce-stock-activity-card__edit-quantity input' );
		await expect( stockCard ).toFill( 'input[type="number"]', '5' );
		await expect( stockCard ).toClick( 'button', { text: 'Save' } );

		// Refresh the page.
		// NOTE: we should be able to just close and reopen the stock panel.
		// There seems to be an issue where the panel doesn't recognize
		// an empty array response as "no low stock items".
		await page.reload( { waitUntil: 'networkidle0' } );

		// Open stock panel.
		await page.waitForSelector( '#activity-panel-tab-stock:not(.has-unread)' );
		await expect( page ).toClick( '#activity-panel-tab-stock' );
		await page.waitForSelector( '.woocommerce-empty-activity-card' );

		// Verify there are no more low stock products.
		await expect( page ).toMatchElement( '.woocommerce-layout__activity-panel-header-title', { text: 'No products with low stock' } );
	} );
} );
