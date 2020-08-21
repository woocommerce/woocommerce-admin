/**
 * External dependencies
 */
import { render, fireEvent } from '@testing-library/react';

/**
 * Internal dependencies
 */
import { Header } from '../index.js';

const encodedBreadcrumb = [
	[ 'admin.php?page=wc-settings', 'Settings' ],
	'Accounts &amp; Privacy',
];

describe( 'Header', () => {
	beforeEach( () => {
		// Mock RAF to be synchronous for testing
		jest.spyOn( window, 'requestAnimationFrame' ).mockImplementation(
			( cb ) => {
				cb();
			}
		);

		// Disable the ActivityPanel so it isn't tested here
		window.wcAdminFeatures[ 'activity-panels' ] = false;
	} );

	afterEach( () => {
		window.requestAnimationFrame.mockRestore();
	} );

	it( 'should render decoded breadcrumb name', () => {
		const { queryByText } = render(
			<Header sections={ encodedBreadcrumb } isEmbedded={ true } />
		);
		expect( queryByText( 'Accounts &amp; Privacy' ) ).toBe( null );
		expect( queryByText( 'Accounts & Privacy' ) ).not.toBe( null );
	} );

	it( 'should only have the is-scrolled class if the page is scrolled', () => {
		const { container } = render(
			<Header sections={ encodedBreadcrumb } isEmbedded={ false } />
		);

		const topLevelElement = container.firstChild;
		expect( topLevelElement.classList ).not.toContain( 'is-scrolled' );
		fireEvent.scroll( window, { target: { scrollY: 200 } } );
		expect( topLevelElement.classList ).toContain( 'is-scrolled' );
	} );
} );
