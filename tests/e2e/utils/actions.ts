/**
 * Perform a "select all" and then fill a input.
 *
 * @param {string} selector
 * @param {string} value
 */
const clearAndFillInput = async ( selector: string, value: string ) => {
	await page.focus( selector );
	await page.fill( selector, value );
};

/**
 * Click a tab (on post type edit screen).
 *
 * @param {string} tabName Tab label
 */
const clickTab = async ( tabName: string ) => {
	await page.click( '.wc-tabs > li > a:text("' + tabName + '")' );
};

/**
 * Wait for UI blocking to end.
 */
const uiUnblocked = async () => {
	await page.waitForFunction(
		() => ! Boolean( document.querySelector( '.blockUI' ) )
	);
};

/**
 * Publish, verify that item was published. Trash, verify that item was trashed.
 *
 * @param {string} button (Publish)
 * @param {string} publishNotice
 * @param {string} publishVerification
 */
const verifyPublishAndTrash = async (
	button: string,
	publishNotice: string,
	publishVerification: string
) => {
	// Publish
	await page.click( button );

	// Verify
	await page.isVisible(
		publishNotice + ' :text("' + publishVerification + '")'
	);
	if ( button === '.order_actions li .save_order' ) {
		await page.isVisible(
			'#select2-order_status-container :text("Processing")'
		);
		await page.isVisible(
			'#woocommerce-order-notes .note_content :text("Order status changed from Pending payment to Processing.")'
		);
	}

	// Trash
	await page.click( 'a:text("Move to Trash")' );
	await page.isVisible( '#message' );

	// Verify
	await page.isVisible(
		publishNotice + ' :text("' + publishVerification + '")'
	);
};

/**
 * Verify that checkbox is set.
 *
 * @param {string} selector Selector of the checkbox that needs to be verified.
 */
const verifyCheckboxIsSet = async ( selector: string ) => {
	await page.focus( selector );
	const checkbox = await page.$( selector );
	const checkboxStatus = await (
		await checkbox?.getProperty( 'checked' )
	 )?.jsonValue();
	await expect( checkboxStatus ).toBe( true );
};

/**
 * Verify that checkbox is unset.
 *
 * @param {string} selector Selector of the checkbox that needs to be verified.
 */
const verifyCheckboxIsUnset = async ( selector: string ) => {
	await page.focus( selector );
	const checkbox = await page.$( selector );
	const checkboxStatus = await (
		await checkbox?.getProperty( 'checked' )
	 )?.jsonValue();
	await expect( checkboxStatus ).not.toBe( true );
};

/**
 * Verify the value of input field once it was saved (can be used for radio buttons verification as well).
 *
 * @param {string} selector Selector of the input field that needs to be verified.
 * @param {string} value Value of the input field that needs to be verified.
 */
const verifyValueOfInputField = async ( selector: string, value: string ) => {
	const fieldValue = await page.getAttribute( selector, 'value' );
	await expect( fieldValue ).toBe( value );
};

export {
	clearAndFillInput,
	clickTab,
	uiUnblocked,
	verifyPublishAndTrash,
	verifyCheckboxIsSet,
	verifyCheckboxIsUnset,
	verifyValueOfInputField,
};
