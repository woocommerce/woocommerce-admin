/**
 * @format
 */

/**
 * Internal dependencies
 */
import { StoreOwnerFlow } from '../../../../../tests/e2e-tests/utils/flows';

describe( 'Store owner can login and make sure WooCommerce Admin is activate', () => {
	it( 'can login', async () => {
		await StoreOwnerFlow.login();
	} );

	it( 'can make sure WooCommerce is activated. If not, activate it', async () => {
		const slug = 'woocommerce';
		await StoreOwnerFlow.openPlugins();
		const disableLink = await page.$( `tr[data-slug="${ slug }"] .deactivate a` );
		if ( disableLink ) {
			return;
		}
		await page.click( `tr[data-slug="${ slug }"] .activate a` );
		await page.waitForSelector( `tr[data-slug="${ slug }"] .deactivate a` );
	} );

	it( 'can verify WooCommerce Admin features are present', async () => {
		await expect( page ).toMatchElement( 'a[href="admin.php?page=wc-admin"]', { text: 'Dashboard' } );
	} );
} );
