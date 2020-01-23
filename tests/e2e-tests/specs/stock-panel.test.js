/**
 * @format
 */

/**
 * Internal dependencies
 */
import { StoreOwnerFlow } from '../../../../../tests/e2e-tests/utils/flows';
import {
	setCheckbox,
	unsetCheckbox,
	verifyCheckboxIsSet,
	verifyCheckboxIsUnset,
	settingsPageSaveChanges,
	// verifyValueOfInputField,
} from '../../../../../tests/e2e-tests/utils';

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
} );
