/**
 * External dependencies
 */
import { shallow } from 'enzyme';
import { recordEvent } from 'lib/tracks';
import { ExternalLink, Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { ShippingBanner } from '../index.js';

jest.mock( 'lib/tracks' );
jest.mock( '@woocommerce/wc-admin-settings' );

describe( 'Tracking events in shippingBanner', () => {
	const expectedTrackingData = {
		jetpack_connected: true,
		jetpack_installed: true,
		wcs_installed: true,
	};
	const isJetpackConnected = true;
	const activePlugins = {
		includes: jest.fn().mockReturnValue( true ),
	};
	let shippingBannerWrapper;

	beforeEach( () => {
		shippingBannerWrapper = shallow(
			<ShippingBanner
				isJetpackConnected={ isJetpackConnected }
				activePlugins={ activePlugins }
			/>
		);
	} );

	it( 'should record an event when user sees banner loaded', () => {
		expect( recordEvent ).toHaveBeenCalledTimes( 1 );
		expect( recordEvent ).toHaveBeenCalledWith(
			'shipping_banner_show',
			expectedTrackingData
		);
	} );

	it( 'should record an event when user clicks "Create shipping label"', () => {
		const createShippingLabelButton = shippingBannerWrapper.find( Button );
		expect( createShippingLabelButton.length ).toBe( 1 );
		createShippingLabelButton.simulate( 'click' );
		expect( recordEvent ).toHaveBeenCalledWith(
			'shipping_banner_create_label_click',
			expectedTrackingData
		);
	} );

	it( 'should record an event when user clicks "WooCommerce Service"', () => {
		const links = shippingBannerWrapper.find( ExternalLink );
		expect( links.length ).toBe( 2 );
		const wcsLink = links.first();
		wcsLink.simulate( 'click' );
		expect( recordEvent ).toHaveBeenCalledWith(
			'shipping_banner_woocommerce_service_link_click',
			expectedTrackingData
		);
	} );

	it( 'should record an event when user clicks "x" to dismiss the banner', () => {
		const learnMoreLink = shippingBannerWrapper.find( '.notice-dismiss' );
		expect( learnMoreLink.length ).toBe( 1 );
		learnMoreLink.simulate( 'click' );
		expect( recordEvent ).toHaveBeenCalledWith(
			'shipping_banner_dimiss_click',
			expectedTrackingData
		);
	} );
} );
