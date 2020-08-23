/**
 * @format
 */

/**
 * Internal dependencies
 */
import {
	clickContinue,
	setCheckboxToChecked,
} from './utils';
const config = require( 'config' );

export async function completeIndustrySection(
	expectedIndustryCount = 10
) {
	// Query for the industries checkboxes
	const industryCheckboxes = await page.$$(
		'.components-checkbox-control__input'
	);
	expect( industryCheckboxes ).toHaveLength( expectedIndustryCount );

	// Select all industries including "Other"
	for ( let i = 0; i < expectedIndustryCount; i++ ) {
		await setCheckboxToChecked( industryCheckboxes[ i ] );
	}

	// Fill "Other" industry
	await expect( page ).toFill(
		'.components-text-control__input',
		config.get( 'onboardingwizard.industry' )
	);

	await clickContinue();
}