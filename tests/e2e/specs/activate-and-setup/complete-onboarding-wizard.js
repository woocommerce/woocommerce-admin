/**
 * @format
 */

/**
 * Internal dependencies
 */
import { verifyCheckboxIsUnset } from '../../utils/actions';
const config  = require( 'config' );

async function clickContinue() {
	// Wait for "Continue" button to become active
	await page.waitForSelector( 'button.is-primary:not(:disabled)' );

	// Click on "Continue" button to move to the next step
	await page.click( 'button.is-primary' );

	// Wait for the page to load
	await page.waitForNavigation( { waitUntil: 'networkidle0' } );
}

async function setCheckboxToChecked( checkbox ) {
	const checkedProperty = await checkbox.getProperty( 'checked' );
	const checked = await checkedProperty.jsonValue();

	// Skip if the checkbox is already checked.
	if ( checked ) {
		return;
	}

	await checkbox.click();
}

async function setCheckboxToUnchecked( checkbox ) {
	const checkedProperty = await checkbox.getProperty( 'checked' );
	const checked = await checkedProperty.jsonValue();

	// Skip if the checkbox is already unchecked.
	if ( ! checked ) {
		return;
	}

	await checkbox.click();
}

export const completeOnboardingWizard = async () => {
	// Store Details section

	// Fill store's address - first line
	await expect( page ).toFill(
		'#inspector-text-control-0',
		config.get( 'addresses.admin.store.addressfirstline' )
	);

	// Fill store's address - second line
	await expect( page ).toFill(
		'#inspector-text-control-1',
		config.get( 'addresses.admin.store.addresssecondline' )
	);
		
	// Type 'cali' in the country/region select, then select US:CA.
	await expect( page )
		.toFill( '#woocommerce-select-control-0__control-input', 'cali' );
	await expect( page )
		.toClick( '#woocommerce-select-control__option-0-US\\:CA' );

	// Make sure the country/region gets selected correctly.
	await expect( page )
	.toMatchElement(
		'#woocommerce-select-control-0__control-input',
		{
			value: 'United State (US) - California'
		}
	);
	
	// Fill the city where the store is located
	await expect( page ).toFill(
		'#inspector-text-control-2',
		config.get( 'addresses.admin.store.city' )
	);

	// Fill postcode of the store
	await expect( page ).toFill(
		'#inspector-text-control-3',
		config.get( 'addresses.admin.store.postcode' )
	);

	// Verify that checkbox next to "I'm setting up a store for a client" is not selected
	await verifyCheckboxIsUnset( '.components-checkbox-control__input' );

	// Wait for "Continue" button to become active
	await page.waitForSelector( 'button.is-primary:not(:disabled)' );

	// Click on "Continue" button to move to the next step
	await page.click( 'button.is-primary', { text: 'Continue' } );

	// Wait for usage tracking pop-up window to appear
	await page.waitForSelector( '.components-modal__header-heading' );
	await expect( page ).toMatchElement( '.components-modal__header-heading', {
		text: 'Build a better WooCommerce',
	} );

	// Query for "Continue" buttons
	const continueButtons = await page.$$( 'button.is-primary' );
	expect( continueButtons ).toHaveLength( 2 );

	await Promise.all( [
		// Click on "Continue" button of the usage pop-up window to move to the next step
		continueButtons[ 1 ].click(),

		// Wait for "In which industry does the store operate?" section to load
		page.waitForNavigation( { waitUntil: 'networkidle0' } ),
	] );


	// Industry section

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

	
	// Product types section

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


	// Business Details section

	// Query for the <SelectControl>s
	const selectControls = await page.$$( '.woocommerce-select-control' );
	expect( selectControls ).toHaveLength( 2 );

	// Fill the number of products you plan to sell
	await selectControls[ 0 ].click();
	await page.waitForSelector( '.woocommerce-select-control__listbox' );
	await expect( page ).toClick( '.woocommerce-select-control__option', {
		text: config.get( 'onboardingwizard.numberofproducts' ),
	} );

	// Fill currently selling elsewhere
	await selectControls[ 1 ].click();
	await page.waitForSelector( '.woocommerce-select-control__listbox' );
	await expect( page ).toClick( '.woocommerce-select-control__option', {
		text: config.get( 'onboardingwizard.sellingelsewhere' ),
	} );

	// Site is in US so the "Install recommended free business features"
	// checkbox is present, uncheck it.
	const installFeaturesCheckbox = await page.$( '#woocommerce-business-extensions__checkbox' );
	await setCheckboxToUnchecked( installFeaturesCheckbox );

	await clickContinue();


	// Theme section
	await clickContinue();


	// Benefits section

	// Wait for Benefits section to appear
	await page.waitForSelector( '.woocommerce-profile-wizard__header-title' );

	// Wait for "No thanks" button to become active
	await page.waitForSelector( 'button.is-secondary:not(:disabled)' );
	// Click on "No thanks" button to move to the next step
	await page.click( 'button.is-secondary' );

	// // End of onboarding wizard
};
