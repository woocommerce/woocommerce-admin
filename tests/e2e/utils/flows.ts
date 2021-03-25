/**
 * @format
 */
import { clearAndFillInput } from '@woocommerce/e2e-utils';
import { AllOrdersView } from '../pages/AllOrdersView';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { NewOrder } from '../pages/NewOrder';
import { NewProduct } from '../pages/NewProduct';
import { OnboardingWizard } from '../pages/OnboardingWizard';
import { Plugins } from '../pages/Plugins';
import { getElementByText } from './actions';
const config = require( 'config' );

const StoreOwnerFlow = {
	login: async () => {
		await new Login( page ).navigate();

		await getElementByText( 'label', 'Username or Email Address' );
		await expect( page.title() ).resolves.toMatch( 'Log In' );

		await clearAndFillInput( '#user_login', ' ' );

		await page.type( '#user_login', config.get( 'users.admin.username' ) );
		await page.type( '#user_pass', config.get( 'users.admin.password' ) );

		await Promise.all( [
			page.click( 'input[type=submit]' ),
			page.waitForNavigation( { waitUntil: 'networkidle0' } ),
		] );
	},

	logout: async () => {
		// Log out link in admin bar is not visible so can't be clicked directly.
		const logoutLinks = await page.$$eval(
			'#wp-admin-bar-logout a',
			( am ) =>
				am
					.filter( ( e ) => ( e as HTMLLinkElement ).href )
					.map( ( e ) => ( e as HTMLLinkElement ).href )
		);

		await page.goto( logoutLinks[ 0 ], {
			waitUntil: 'networkidle0',
		} );
	},

	openAllOrdersView: async () => {
		await new AllOrdersView( page ).navigate();
	},

	openDashboard: async () => {
		await new Dashboard( page ).navigate();
	},

	openNewCoupon: async () => {
		await new NewOrder( page ).navigate();
	},

	openNewOrder: async () => {
		await new NewOrder( page ).navigate();
	},

	openNewProduct: async () => {
		await new NewProduct( page ).navigate();
	},

	openPlugins: async () => {
		await new Plugins( page ).navigate();
	},

	startProfileWizard: async () => {
		await new OnboardingWizard( page ).navigate();
	},
};

export { StoreOwnerFlow };
