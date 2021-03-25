import { BaseSection } from '../../pages/BaseSection';
import { waitForElementByText } from '../../utils/actions';

export class ThemeSection extends BaseSection {
	async isDisplayed() {
		await waitForElementByText( 'h2', 'Choose a theme' );
		await waitForElementByText( 'button', 'All themes' );
	}

	async continueWithActiveTheme() {
		this.clickButtonWithText( 'Continue with my active theme' );
	}
}
