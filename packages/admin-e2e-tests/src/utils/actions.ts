/**
 * External dependencies
 */
import { ElementHandle } from 'puppeteer';

/* eslint-disable @typescript-eslint/no-var-requires */
const { expect } = require( '@jest/globals' );
/* eslint-enable @typescript-eslint/no-var-requires */

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

const hasClass = async ( element: ElementHandle, elementClass: string ) => {
	const classNameProp = await element.getProperty( 'className' );
	const classNameValue = ( await classNameProp.jsonValue() ) as string;

	return classNameValue.includes( elementClass );
};

const getInputValue = async ( selector: string ) => {
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
			await field.getProperty( attribute )
		 ).jsonValue();

		return fieldValue;
	}
	return null;
};

const getElementByText = async (
	element: string,
	text: string,
	parentSelector?: string
): Promise< ElementHandle | null > => {
	let parent: ElementHandle | null = null;
	if ( parentSelector ) {
		parent = await page.$( parentSelector );
	}
	const els = await ( parent || page ).$x(
		`//${ element }[contains(text(), "${ text }")]`
	);
	return els[ 0 ];
};

const getElementByAttributeAndValue = async (
	element: string,
	attribute: string,
	value: string,
	parentSelector?: string
): Promise< ElementHandle | null > => {
	let parent: ElementHandle | null = null;
	if ( parentSelector ) {
		parent = await page.$( parentSelector );
	}
	const els = await ( parent || page ).$x(
		`//${ element }[@${ attribute }="${ value }"]`
	);
	return els[ 0 ];
};

const waitForElementByText = async (
	element: string,
	text: string,
	options?: { timeout?: number }
): Promise< ElementHandle | null > => {
	const els = await page.waitForXPath(
		`//${ element }[contains(text(), "${ text }")]`,
		options
	);
	return els;
};

export const waitForElementByTextWithoutThrow = async (
	element: string,
	text: string,
	timeoutInSeconds = 5
) => {
	let selected = await getElementByText( element, text );
	for ( let s = 0; s < timeoutInSeconds; s++ ) {
		if ( selected ) {
			break;
		}
		await page.waitFor( 1000 );
		selected = await getElementByText( element, text );
	}
	return Boolean( selected );
};

export {
	uiUnblocked,
	verifyPublishAndTrash,
	getInputValue,
	getAttribute,
	getElementByText,
	getElementByAttributeAndValue,
	waitForElementByText,
	hasClass,
};
