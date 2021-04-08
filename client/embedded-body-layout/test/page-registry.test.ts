/**
 * Internal dependencies
 */
import { PageRegistry } from '../page-registry';

describe( 'Page registry', () => {
	it( 'should allow us to register a page, and retrieve the pages', async () => {
		const registry = new PageRegistry();
		const testPage = {
			container: () => null,
			path: 'wc-settings_checkout',
		};
		registry.registerPage( 'test', testPage );

		const pages = registry.getPages();
		expect( pages.length ).toEqual( 1 );
		expect( pages[ 0 ] ).toEqual( testPage );
	} );
} );
