/**
 * External dependencies
 */
import { ElementHandle, Page } from 'puppeteer';

/**
 * Internal dependencies
 */
import { DropdownField } from '../elements/DropdownField';
import { DropdownTypeaheadField } from '../elements/DropdownTypeaheadField';
import { FormToggle } from '../elements/FormToggle';
import { getElementByText, waitForTimeout } from '../utils/actions';

/* eslint-disable @typescript-eslint/no-var-requires */
const config = require( 'config' );
/* eslint-enable @typescript-eslint/no-var-requires */
const baseUrl = config.get( 'url' );

// Represents a page that can be navigated to
export abstract class BasePage {
	protected page: Page;
	protected url = '';
	protected baseUrl: string = baseUrl;

	// cache of elements that have been setup, note that they are unique "per page/per selector"
	private dropDownElements: Record< string, DropdownField > = {};
	private dropDownTypeAheadElements: Record<
		string,
		DropdownTypeaheadField
	> = {};
	private formToggleElements: Record< string, FormToggle > = {};

	constructor( page: Page ) {
		this.page = page;
	}

	getDropdownField( selector: string ) {
		if ( ! this.dropDownElements[ selector ] ) {
			this.dropDownElements[ selector ] = new DropdownField(
				page,
				selector
			);
		}

		return this.dropDownElements[ selector ];
	}

	getDropdownTypeahead( selector: string ) {
		if ( ! this.dropDownTypeAheadElements[ selector ] ) {
			this.dropDownTypeAheadElements[
				selector
			] = new DropdownTypeaheadField( page, selector );
		}

		return this.dropDownTypeAheadElements[ selector ];
	}

	getFormToggle( selector: string ) {
		if ( ! this.formToggleElements[ selector ] ) {
			this.formToggleElements[ selector ] = new FormToggle(
				page,
				selector
			);
		}

		return this.formToggleElements[ selector ];
	}

	async click( selector: string ) {
		await this.page.waitForSelector( selector );
		await this.page.click( selector );
	}

	async clickButtonWithText( text: string ) {
		const el = await getElementByText( 'button', text );
		await el?.click();
	}

	async clickElementWithText( element: string, text: string ) {
		const el = await getElementByText( element, text );
		await el?.click();
	}

	async setCheckboxWithText( text: string ) {
		let checkbox = await getElementByText( 'label', text );

		if ( ! checkbox ) {
			checkbox = await getElementByText( 'span', text );
		}

		if ( checkbox ) {
			const checkboxStatus = await (
				await checkbox.getProperty( 'checked' )
			 ).jsonValue();

			if ( checkboxStatus !== true ) {
				await checkbox.click();
			}
		} else {
			throw new Error( `Could not find checkbox with text "${ text }"` );
		}
	}

	async unsetAllCheckboxes( selector: string ) {
		const checkboxes = await page.$$( selector );
		// Uncheck all checkboxes, to avoid installing plugins
		for ( const checkbox of checkboxes ) {
			await this.toggleCheckbox( checkbox, false );
			await waitForTimeout( 200 );
		}
	}

	async setAllCheckboxes( selector: string ) {
		const checkboxes = await page.$$( selector );
		// Uncheck all checkboxes, to avoid installing plugins
		for ( const checkbox of checkboxes ) {
			await this.toggleCheckbox( checkbox, true );
			await waitForTimeout( 200 );
		}
	}

	// Set or unset a checkbox based on `checked` value passed.
	async toggleCheckbox(
		checkbox: ElementHandle< Element >,
		checked: boolean
	) {
		const checkboxStatus = await (
			await checkbox.getProperty( 'checked' )
		 ).jsonValue();

		if ( checkboxStatus !== checked ) {
			await checkbox.click();
		}
	}

	async navigate() {
		if ( ! this.url ) {
			throw new Error( 'You must define a url for the page object' );
		}

		await this.goto( this.url );
	}

	protected async goto( url: string ) {
		const fullUrl = baseUrl + url;
		try {
			await this.page.goto( fullUrl, {
				waitUntil: 'networkidle0',
				timeout: 10000,
			} );
		} catch ( e ) {
			if ( e instanceof Error ) {
				throw new Error(
					`Could not navigate to url: ${ fullUrl } with error: ${ e.message }`
				);
			}
		}
	}
}
