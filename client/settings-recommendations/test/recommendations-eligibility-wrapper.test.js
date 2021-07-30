/**
 * External dependencies
 */
import { render, screen } from '@testing-library/react';
import { useUser } from '@woocommerce/data';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import RecommendationsEligibilityWrapper from '../recommendations-eligibility-wrapper';

jest.mock( '@wordpress/data', () => ( {
	...jest.requireActual( '@wordpress/data' ),
	useSelect: jest.fn(),
} ) );
jest.mock( '@woocommerce/data', () => ( {
	...jest.requireActual( '@woocommerce/data' ),
	useUser: jest.fn(),
} ) );

const RecommendationsEligibilityMock = () => (
	<RecommendationsEligibilityWrapper>
		<span>mocked children</span>
	</RecommendationsEligibilityWrapper>
);

describe( 'RecommendationsEligibilityWrapper', () => {
	beforeEach( () => {
		useUser.mockReturnValue( {
			currentUserCan: () => true,
		} );

		useSelect.mockImplementation( ( fn ) =>
			fn( () => ( {
				getOption: () => 'yes',
				isResolving: () => false,
			} ) )
		);
	} );

	it( 'should not render its children when the user cannot install plugins', () => {
		const currentUserCanMock = jest.fn().mockReturnValue( false );
		useUser.mockReturnValue( {
			currentUserCan: currentUserCanMock,
		} );

		const { rerender } = render( <RecommendationsEligibilityMock /> );

		expect(
			screen.queryByText( 'mocked children' )
		).not.toBeInTheDocument();
		expect( currentUserCanMock ).toHaveBeenCalledWith( 'install_plugins' );

		// changing the "currentUserCanMock" to return `true` will render the children
		currentUserCanMock.mockReturnValue( true );
		rerender( <RecommendationsEligibilityMock /> );
		expect( screen.queryByText( 'mocked children' ) ).toBeInTheDocument();
	} );

	it( 'should not render its children when the marketplace suggestions are being loaded', () => {
		useSelect.mockImplementation( ( fn ) =>
			fn( () => ( {
				getOption: () => 'yes',
				isResolving: () => true,
			} ) )
		);

		const { rerender } = render( <RecommendationsEligibilityMock /> );

		expect(
			screen.queryByText( 'mocked children' )
		).not.toBeInTheDocument();

		// changing the "isResolving" to return `false` will render the children
		useSelect.mockImplementation( ( fn ) =>
			fn( () => ( {
				getOption: () => 'yes',
				isResolving: () => false,
			} ) )
		);
		rerender( <RecommendationsEligibilityMock /> );
		expect( screen.queryByText( 'mocked children' ) ).toBeInTheDocument();
	} );

	it( 'should render its children', () => {
		useSelect.mockImplementation( ( fn ) =>
			fn( () => ( {
				getOption: () => 'yes',
				isResolving: () => false,
			} ) )
		);
		useUser.mockReturnValue( {
			currentUserCan: () => true,
		} );

		render( <RecommendationsEligibilityMock /> );

		expect( screen.queryByText( 'mocked children' ) ).toBeInTheDocument();
	} );
} );
