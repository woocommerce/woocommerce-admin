/**
 * External dependencies
 */
import { render } from '@testing-library/react';
import { Fill } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { EmbeddedBodyLayout } from '../embedded-body-layout';
import { PaymentRecommendationsSlot } from '../../payments';

jest.mock( '@woocommerce/data', () => ( {
	useUser: () => ( {
		currentUserCan: jest.fn(),
	} ),
} ) );
jest.mock( '../../payments', () => ( {
	PaymentRecommendationsSlot: jest.fn(),
} ) );

const stubLocation = ( location: string ) => {
	jest.spyOn( window, 'location', 'get' ).mockReturnValue( {
		...window.location,
		search: location,
	} );
};

describe( 'Embedded layout', () => {
	it( 'should render a fill component with matching name, and provide query params', async () => {
		( PaymentRecommendationsSlot as jest.Mock ).mockReturnValue(
			<Fill name="embedded-body-layout">
				{ ( {
					page,
					tab,
					section,
				}: {
					page: string;
					tab: string;
					section?: string;
				} ) => (
					<div>
						payment_recommendations
						<span>page:{ page }</span>
						<span>tab:{ tab }</span>
						<span>section:{ section || '' }</span>
					</div>
				) }
			</Fill>
		);
		stubLocation( '?page=settings&tab=test' );
		const { queryByText } = render( <EmbeddedBodyLayout /> );

		expect( queryByText( 'payment_recommendations' ) ).toBeInTheDocument();
		expect( queryByText( 'page:settings' ) ).toBeInTheDocument();
		expect( queryByText( 'tab:test' ) ).toBeInTheDocument();
		expect( queryByText( 'section:' ) ).toBeInTheDocument();
	} );
} );
