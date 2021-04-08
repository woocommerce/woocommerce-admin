/**
 * External dependencies
 */
import { render, fireEvent, waitFor } from '@testing-library/react';
import { useSelect, useDispatch } from '@wordpress/data';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import PaymentRecommendations from '../payment-recommendations';
import { isWCPaySupported } from '../../task-list/tasks/payments/wcpay';
import { getAdminLink } from '../../wc-admin-settings';
import { createNoticesFromResponse } from '~/lib/notices';

jest.mock( '@woocommerce/data', () => ( {} ) );
jest.mock( '@woocommerce/tracks', () => ( { recordEvent: jest.fn() } ) );

jest.mock( '@wordpress/data', () => ( {
	useSelect: jest.fn(),
	useDispatch: jest.fn().mockImplementation( () => ( {
		updateOptions: jest.fn(),
		installAndActivatePlugins: jest.fn(),
	} ) ),
} ) );
jest.mock( '@woocommerce/components', () => ( {
	EllipsisMenu: ( {
		renderContent: Content,
	}: {
		renderContent: React.FunctionComponent;
	} ) => <Content />,
	List: ( {
		items,
	}: {
		items: { key: string; title: string; after?: React.Component }[];
	} ) => (
		<div>
			{ items.map( ( item ) => (
				<div key={ item.key }>
					<span>{ item.title }</span>
					{ item.after }
				</div>
			) ) }
		</div>
	),
} ) );
jest.mock( '../../task-list/tasks/payments/wcpay', () => ( {
	isWCPaySupported: jest.fn(),
} ) );

jest.mock( '../../wc-admin-settings', () => ( {
	getAdminLink: jest
		.fn()
		.mockImplementation( ( link: string ) => 'https://test.ca/' + link ),
} ) );
jest.mock( '../../lib/notices', () => ( {
	createNoticesFromResponse: jest.fn().mockImplementation( () => {
		// do nothing
	} ),
} ) );

const baseSelectValues = {
	recommendedPlugins: undefined,
	loading: false,
	country: undefined,
	isHidden: undefined,
	isRequestingOptions: false,
	showMarketplaceSuggestion: 'yes',
};

describe( 'Payment recommendations', () => {
	it( 'should render nothing with no recommendedPlugins and country not defined', () => {
		( useSelect as jest.Mock ).mockReturnValue( { ...baseSelectValues } );
		const { container } = render( <PaymentRecommendations /> );

		expect( container.firstChild ).toBe( null );
	} );

	it( 'should render nothing if the country is not supported', () => {
		( isWCPaySupported as jest.Mock ).mockReturnValue( false );
		( useSelect as jest.Mock ).mockReturnValue( {
			...baseSelectValues,
			country: 'FR',
			recommendedPlugins: [ { title: 'test', slug: 'test' } ],
		} );
		const { container } = render( <PaymentRecommendations /> );

		expect( container.firstChild ).toBe( null );
	} );

	it( 'should render the list if country is supported', () => {
		( isWCPaySupported as jest.Mock ).mockReturnValue( true );
		( useSelect as jest.Mock ).mockReturnValue( {
			...baseSelectValues,
			country: 'US',
			recommendedPlugins: [ { title: 'test', slug: 'test' } ],
		} );
		const { container, getByText } = render( <PaymentRecommendations /> );

		expect( container.firstChild ).not.toBeNull();
		expect( getByText( 'test' ) ).toBeInTheDocument();
	} );

	it( 'should render nothing if isHidden is set to true', () => {
		( isWCPaySupported as jest.Mock ).mockReturnValue( true );
		( useSelect as jest.Mock ).mockReturnValue( {
			...baseSelectValues,
			country: 'US',
			recommendedPlugins: [ { title: 'test', slug: 'test' } ],
			isHidden: true,
		} );
		const { container } = render( <PaymentRecommendations /> );

		expect( container.firstChild ).toBeNull();
	} );

	it( 'should render the list if isHidden is not defined', () => {
		( isWCPaySupported as jest.Mock ).mockReturnValue( true );
		( useSelect as jest.Mock ).mockReturnValue( {
			...baseSelectValues,
			isHidden: undefined,
			country: 'US',
			recommendedPlugins: [ { title: 'test', slug: 'test' } ],
		} );
		const { container, getByText } = render( <PaymentRecommendations /> );

		expect( container.firstChild ).not.toBeNull();
		expect( getByText( 'test' ) ).toBeInTheDocument();
	} );

	it( 'should trigger event payments_recommendations_pageview, when first rendered', () => {
		( isWCPaySupported as jest.Mock ).mockReturnValue( true );
		( useSelect as jest.Mock ).mockReturnValue( {
			...baseSelectValues,
			isHidden: undefined,
			country: 'US',
			recommendedPlugins: [ { title: 'test', slug: 'test' } ],
		} );
		const { container } = render( <PaymentRecommendations /> );

		expect( container.firstChild ).not.toBeNull();
		expect( recordEvent ).toHaveBeenCalledWith(
			'payments_recommendations_pageview',
			{}
		);
	} );

	it( 'should not render anything if loading is true or still requesting options', () => {
		( isWCPaySupported as jest.Mock ).mockReturnValue( true );
		( useSelect as jest.Mock ).mockReturnValueOnce( {
			...baseSelectValues,
			isHidden: undefined,
			isRequestingOptions: true,
			country: 'US',
			recommendedPlugins: [ { title: 'test', slug: 'test' } ],
		} );
		const { container } = render( <PaymentRecommendations /> );

		expect( container.firstChild ).toBeNull();

		( useSelect as jest.Mock ).mockReturnValueOnce( {
			...baseSelectValues,
			isHidden: undefined,
			loading: true,
			country: 'US',
			recommendedPlugins: [ { title: 'test', slug: 'test' } ],
		} );
		const { container: container2 } = render( <PaymentRecommendations /> );

		expect( container2.firstChild ).toBeNull();
	} );

	it( 'should not trigger event payments_recommendations_pageview, when it is not rendered', () => {
		( recordEvent as jest.Mock ).mockClear();
		( isWCPaySupported as jest.Mock ).mockReturnValue( true );
		( useSelect as jest.Mock ).mockReturnValue( {
			...baseSelectValues,
			isHidden: true,
			country: 'US',
			recommendedPlugins: [ { title: 'test', slug: 'test' } ],
		} );
		const { container } = render( <PaymentRecommendations /> );

		expect( container.firstChild ).toBeNull();
		expect( recordEvent ).not.toHaveBeenCalledWith(
			'payments_recommendations_pageview',
			{}
		);
	} );

	it( 'should not render if showMarketplaceSuggestion is set to "no"', () => {
		( isWCPaySupported as jest.Mock ).mockReturnValue( true );
		( useSelect as jest.Mock ).mockReturnValue( {
			...baseSelectValues,
			country: 'US',
			recommendedPlugins: [ { title: 'test', slug: 'test' } ],
			showMarketplaceSuggestion: 'no',
		} );
		const { container } = render( <PaymentRecommendations /> );

		expect( container.firstChild ).toBeNull();
	} );

	it( 'should not render if there are no recommendedPlugins', () => {
		( isWCPaySupported as jest.Mock ).mockReturnValue( true );
		( useSelect as jest.Mock ).mockReturnValue( {
			...baseSelectValues,
			country: 'US',
			recommendedPlugins: [],
		} );
		const { container } = render( <PaymentRecommendations /> );

		expect( container.firstChild ).toBeNull();
	} );

	describe( 'interactions', () => {
		let oldLocation: Location;
		const mockLocation = {
			href: 'test',
		} as Location;
		const updateOptionsMock = jest.fn();
		const installAndActivateMock = jest
			.fn()
			.mockImplementation( () => Promise.resolve() );
		beforeEach( () => {
			( isWCPaySupported as jest.Mock ).mockReturnValue( true );
			( useDispatch as jest.Mock ).mockReturnValue( {
				updateOptions: updateOptionsMock,
				installAndActivatePlugins: installAndActivateMock,
			} );
			( useSelect as jest.Mock ).mockReturnValue( {
				...baseSelectValues,
				country: 'US',
				recommendedPlugins: [
					{
						title: 'test',
						slug: 'test',
						product: 'test-product',
						'button-text': 'install',
						'setup-link': '/wp-admin/random-link',
					},
					{
						title: 'another',
						slug: 'another',
						product: 'another-product',
						'button-text': 'install2',
						'setup-link': '/wp-admin/random-link',
					},
				],
			} );

			oldLocation = global.window.location;
			mockLocation.href = 'test';
			Object.defineProperty( global.window, 'location', {
				value: mockLocation,
			} );
		} );

		afterEach( () => {
			Object.defineProperty( global.window, 'location', oldLocation );
		} );

		it( 'should install plugin and trigger event and redirect when finished, when clicking the action button', async () => {
			const { container, getByText } = render(
				<PaymentRecommendations />
			);

			expect( container.firstChild ).not.toBeNull();
			fireEvent.click( getByText( 'install' ) );
			expect( installAndActivateMock ).toHaveBeenCalledWith( [
				'test-product',
			] );
			expect( recordEvent ).toHaveBeenCalledWith(
				'settings_payments_recommendations_setup',
				{
					extension_selected: 'test-product',
				}
			);
			await waitFor( () => {
				expect( getAdminLink ).toHaveBeenCalledWith( 'random-link' );
			} );
			expect( mockLocation.href ).toEqual(
				'https://test.ca/random-link'
			);
		} );

		it( 'should call create notice if install and activate failed', async () => {
			installAndActivateMock.mockClear();
			installAndActivateMock.mockImplementation(
				() =>
					new Promise( ( resolve, reject ) => {
						throw {
							code: 500,
							message: 'failed to install plugin',
						};
					} )
			);
			const { container, getByText } = render(
				<PaymentRecommendations />
			);

			expect( container.firstChild ).not.toBeNull();
			fireEvent.click( getByText( 'install' ) );
			expect( installAndActivateMock ).toHaveBeenCalledWith( [
				'test-product',
			] );
			expect( recordEvent ).toHaveBeenCalledWith(
				'settings_payments_recommendations_setup',
				{
					extension_selected: 'test-product',
				}
			);
			await waitFor( () => {
				expect( createNoticesFromResponse ).toHaveBeenCalled();
			} );
			expect( mockLocation.href ).toEqual( 'test' );
		} );
	} );
} );
