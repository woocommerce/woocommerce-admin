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
	publishVerification: string,
	trashVerification: string
) => {
	// Wait for auto save
	await page.waitFor( 2000 );
	// Publish
	await page.click( button );

	// Verify
	await expect( page ).toMatchElement( publishNotice, {
		text: publishVerification,
	} );
	if ( button === '.order_actions li .save_order' ) {
		await expect( page ).toMatchElement(
			'#select2-order_status-container',
			{ text: 'Processing' }
		);
		await expect( page ).toMatchElement(
			'#woocommerce-order-notes .note_content',
			{
				text:
					'Order status changed from Pending payment to Processing.',
			}
		);
	}

	// Trash
	await expect( page ).toClick( 'a', { text: 'Move to Trash' } );
	await page.waitForSelector( '#message' );

	// Verify
	await expect( page ).toMatchElement( publishNotice, {
		text: trashVerification,
	} );
};

const getInputValue = async ( selector: string ) => {
	await page.focus( selector );
	const field = await page.$( selector );
	if ( field ) {
		const fieldValue = await (
			await field.getProperty( 'value' )
		 ).jsonValue();

		return fieldValue;
	}
	return null;
};

const getAttribute = async ( selector: string, attribute: string ) => {
	await page.focus( selector );
	const field = await page.$( selector );
	if ( field ) {
		const fieldValue = await (
			await field.getProperty( 'attribute' )
		 ).jsonValue();

		return fieldValue;
	}
	return null;
};

const getElementByText = async ( element: string, text: string ) => {
	const els = await page.$x(
		`//${ element }[contains(text(), '${ text }')]`
	);
	return els[ 0 ];
};

export {
	clickTab,
	uiUnblocked,
	verifyPublishAndTrash,
	getInputValue,
	getAttribute,
	getElementByText,
};
