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

export async function completeProductTypesSection() {
	// Query for the product types checkboxes
	const productTypesCheckboxes = await page.$$(
		'.components-checkbox-control__input'
	);
	expect( productTypesCheckboxes ).toHaveLength( 8 );

	// Select Physical and Downloadable products
	for ( let i = 0; i < 2; i++ ) {
		await setCheckboxToChecked( productTypesCheckboxes[ i ] );
	}

	await clickContinue();
}