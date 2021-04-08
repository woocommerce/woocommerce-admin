/**
 * External dependencies
 */
import { render } from '@testing-library/react';

/**
 * Internal dependencies
 */
import { EmbeddedBodyLayout } from '../embedded-body-layout';

jest.mock( '@woocommerce/data', () => ( {
	useUser: () => ( {
		currentUserCan: jest.fn(),
	} ),
} ) );
jest.mock( '../page-registry', () => ( {
	embeddedPageRegistry: {
		registerPage: jest.fn(),
		getPages: () => {
			return [
				{ path: 'settings_test', container: () => <>settings_test</> },
				{
					path: 'settings_anothertest',
					container: () => <>settings_anothertest</>,
				},
			];
		},
	},
} ) );

const stubLocation = ( location: string ) => {
	jest.spyOn( window, 'location', 'get' ).mockReturnValue( {
		...window.location,
		search: location,
	} );
};

describe( 'Embedded layout', () => {
	it( 'should render the page with path correctly', async () => {
		stubLocation( '?page=settings&tab=test' );
		const { queryByText } = render( <EmbeddedBodyLayout /> );

		expect( queryByText( 'settings_test' ) ).toBeInTheDocument();
	} );

	it( 'should not render the page if path does not match correctly', async () => {
		stubLocation( '?page=settings&tab=test&section=section' );
		const { queryByText } = render( <EmbeddedBodyLayout /> );

		expect( await queryByText( 'settings_test' ) ).not.toBeInTheDocument();
	} );
} );
