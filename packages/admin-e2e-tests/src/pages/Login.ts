/**
 * Internal dependencies
 */
import { getElementByText } from '../utils/actions';
import { BasePage } from './BasePage';

/* eslint-disable @typescript-eslint/no-var-requires */
const { clearAndFillInput } = require( '@woocommerce/e2e-utils' );
const config = require( 'config' );

export class Login extends BasePage {
	url = 'wp-login.php';

	async login(): Promise< void > {
		await this.navigate();

		await getElementByText( 'label', 'Username or Email Address' );
		await clearAndFillInput( '#user_login', ' ' );

		await this.page.type(
			'#user_login',
			config.get( 'users.admin.username' )
		);
		await this.page.type(
			'#user_pass',
			config.get( 'users.admin.password' )
		);

		await Promise.all( [
			this.page.click( 'input[type=submit]' ),
			this.page.waitForNavigation( {
				waitUntil: 'networkidle0',
				timeout: 10000,
			} ),
		] );
	}

	async logout(): Promise< void > {
		// Log out link in admin bar is not visible so can't be clicked directly.
		const logoutLinks = await this.page.$$eval(
			'#wp-admin-bar-logout a',
			( am ) =>
				am
					.filter( ( e ) => ( e as HTMLLinkElement ).href )
					.map( ( e ) => ( e as HTMLLinkElement ).href )
		);

		await page.goto( logoutLinks[ 0 ], {
			waitUntil: 'networkidle0',
			timeout: 10000,
		} );
	}
}
