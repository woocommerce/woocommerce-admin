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

export async function completeIndustrySection() {
	// Query for the industries checkboxes
	const industryCheckboxes = await page.$$(
		'.components-checkbox-control__input'
	);
	expect( industryCheckboxes ).toHaveLength( 10 );

	// Select all industries including "Other"
	for ( let i = 0; i < 10; i++ ) {
		await setCheckboxToChecked( industryCheckboxes[ i ] );
	}

	// Fill "Other" industry
	await expect( page ).toFill(
		'.components-text-control__input',
		config.get( 'onboardingwizard.industry' )
	);

	await clickContinue();
}