import { BasePage } from './BasePage';

// Section represents a "page" from a single page app perspective, it is not necessarily navigable via URL.
export abstract class BaseSection extends BasePage {
	async navigate() {
		throw new Error( 'Sections are not navigable by URL' );
	}
}
