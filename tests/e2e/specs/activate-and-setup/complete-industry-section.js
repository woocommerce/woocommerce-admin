/**
 * @format
 */

/**
 * Internal dependencies
 */
import {
	clickContinue,
	getElementByText,
	getPreviousSibling,
	setCheckboxToChecked,
} from './utils';
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
	// get sibling checkbox
	const fashionCheckboxContainer = await getPreviousSibling( fashionLabel );
	const fashionCheckbox = await fashionCheckboxContainer.$( 'input' );

	await setCheckboxToChecked( fashionCheckbox );

	const healthBeautyLabel = await getElementByText(
		'label',
		'Health and beauty'
	);
	const healthBeautyCheckboxContainer = await getPreviousSibling(
		fashionLabel
	);
	const healthBeautyCheckbox = await healthBeautyCheckboxContainer.$(
		'input'
	);
	await setCheckboxToChecked( healthBeautyCheckbox );

	await clickContinue();
}
