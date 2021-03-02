/**
 * @format
 */

/**
 * Internal dependencies
 */
import { clearAndFillInput } from './actions';
import * as constants from './constants';

const config = require( 'config' );

const StoreOwnerFlow = {
	login: async () => {
		await page.goto( constants.WP_ADMIN_LOGIN, {
			waitUntil: 'networkidle',
		} );

		await expect( page.title() ).resolves.toMatch( 'Log In' );

		await clearAndFillInput( '#user_login', ' ' );

		await page.type( '#user_login', config.get( 'users.admin.username' ) );
		await page.type( '#user_pass', config.get( 'users.admin.password' ) );

		await Promise.all( [
			page.click( 'input[type=submit]' ),
			page.waitForNavigation( { waitUntil: 'networkidle' } ),
		] );
	},

	logout: async () => {
		// Log out link in admin bar is not visible so can't be clicked directly.
		const logoutLinks = await page.$$eval(
			'#wp-admin-bar-logout a',
			( am ) =>
				am
					.filter( ( e ) => ( <HTMLLinkElement>e ).href )
					.map( ( e ) => ( <HTMLLinkElement>e ).href )
		);

		await page.goto( logoutLinks[ 0 ], {
			waitUntil: 'networkidle',
		} );
	},

	openAllOrdersView: async () => {
		await page.goto( constants.WP_ADMIN_ALL_ORDERS_VIEW, {
			waitUntil: 'networkidle',
		} );
	},

	openDashboard: async () => {
		await page.goto( constants.WP_ADMIN_DASHBOARD, {
			waitUntil: 'networkidle',
		} );
	},

	openNewCoupon: async () => {
		await page.goto( constants.WP_ADMIN_NEW_COUPON, {
			waitUntil: 'networkidle',
		} );
	},

	openNewOrder: async () => {
		await page.goto( constants.WP_ADMIN_NEW_ORDER, {
			waitUntil: 'networkidle',
		} );
	},

	openNewProduct: async () => {
		await page.goto( constants.WP_ADMIN_NEW_PRODUCT, {
			waitUntil: 'networkidle',
		} );
	},

	openPlugins: async () => {
		await page.goto( constants.WP_ADMIN_PLUGINS, {
			waitUntil: 'networkidle',
		} );
	},

	startProfileWizard: async () => {
		await page.goto( constants.WP_ADMIN_START_PROFILE_WIZARD, {
			waitUntil: 'networkidle',
		} );
	},
};

export { StoreOwnerFlow };
