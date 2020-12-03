/**
 * @format
 */

/**
 * Internal dependencies
 */
import { clickContinue, getElementByText } from './utils';
import { waitForElementCount } from '../../utils/lib';
const config = require( 'config' );

export async function completeIndustrySection( expectedIndustryCount = 8 ) {
	// Query for the industries checkboxes
	await waitForElementCount(
		page,
		'.components-checkbox-control__input',
		expectedIndustryCount
	);

	// Select just "fashion" and "health/beauty" to get the single checkbox business section
	const fashionLabel = await getElementByText(
		'label',
		'Fashion, apparel, and accessories'
	);
	await fashionLabel.click();

	const healthBeautyLabel = await getElementByText(
		'label',
		'Health and beauty'
	);
	await healthBeautyLabel.click();

	await clickContinue();
}
