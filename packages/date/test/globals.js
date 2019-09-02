/** @format */
/**
 * External dependencies
 */
import moment from 'moment';

/**
 * Internal dependencies
 */
import {
	loadLocaleData,
} from '../src';

jest.mock( '@woocommerce/settings', () => ( {
	LOCALE: {
		siteLocale: 'en_US',
		userLocale: 'fr_FR',
		weekdaysShort: [ 'dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam' ],
	},
} ) );

describe( 'loadLocaleData', () => {
	it( 'should load locale data on user locale', () => {
		// initialize locale. Gutenberg normaly does this, but not in test environment.
		moment.locale( 'fr_FR', {} );

		loadLocaleData();
		expect( moment.localeData().weekdaysMin() ).toEqual( [ 'dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam' ] );
	} );
} );
