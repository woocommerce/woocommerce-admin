/**
 * @format
 */

/**
 * Internal dependencies
 */
import { clickContinue, setCheckboxToChecked, getText } from './utils';
const config = require( 'config' );

export async function completeIndustrySection( expectedIndustryCount = 10 ) {
	// Query for the industries checkboxes
	const industryCheckboxes = await page.$$(
		'.components-checkbox-control__input'
	);

	const industryLabels = await page.$$(
		'.components-checkbox-control__label'
	);

	expect( industryCheckboxes ).toHaveLength( expectedIndustryCount );

	// Select all industries except for CBD to fulfill conditions required by business section tests.
	for ( let i = 0; i < expectedIndustryCount; i++ ) {
		const labelText = await getText( industryLabels[ i ] );

		if ( ! labelText.includes( 'CBD' ) ) {
			await setCheckboxToChecked( industryCheckboxes[ i ] );
		}
	}

	// Fill "Other" industry
	await expect( page ).toFill(
		'.components-text-control__input',
		config.get( 'onboardingwizard.industry' )
	);

	await clickContinue();
}
