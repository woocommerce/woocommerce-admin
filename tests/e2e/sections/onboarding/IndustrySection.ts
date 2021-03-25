import { waitForElementByText } from '../../utils/actions';
import { BaseSection } from '../../pages/BaseSection';

export class IndustrySection extends BaseSection {
	async isDisplayed( industryCount?: number ) {
		await waitForElementByText(
			'h2',
			'In which industry does the store operate?'
		);

		if ( industryCount ) {
			const length = await this.page.$$eval(
				'.components-checkbox-control__input',
				( items ) => items.length
			);

			expect( length === industryCount ).toBeTruthy();
		}
	}

	async uncheckIndustries() {
		await this.unsetAllCheckboxes( '.components-checkbox-control__input' );
	}

	async selectIndustry( industryLabel: string ) {
		await this.setCheckboxWithLabel( industryLabel );
	}
}
