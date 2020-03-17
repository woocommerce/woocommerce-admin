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

describe( 'ShippingBanner', () => {
	describe( 'events tracking', () => {
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
					activatedPlugins={ [] }
					installedPlugins={ [] }
					wcsPluginSlug={ 'woocommerce-services' }
					hasErrors={ false }
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
			const createShippingLabelButton = shippingBannerWrapper.find(
				Button
			);
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
			const noticeDimissButton = shippingBannerWrapper.find(
				'.notice-dismiss'
			);
			expect( noticeDimissButton.length ).toBe( 1 );
			noticeDimissButton.simulate( 'click' );
			expect( recordEvent ).toHaveBeenCalledWith(
				'shipping_banner_dimiss_click',
				expectedTrackingData
			);
		} );
	} );

	describe( 'create shipping label button', () => {
		let shippingBannerWrapper;
		const installPlugins = jest.fn();
		const activatePlugins = jest.fn();
		const activePlugins = {
			includes: jest.fn().mockReturnValue( true ),
		};

		beforeEach( () => {
			shippingBannerWrapper = shallow(
				<ShippingBanner
					isJetpackConnected={ jest.fn() }
					activatePlugins={ activatePlugins }
					activePlugins={ activePlugins }
					activatedPlugins={ [] }
					installPlugins={ installPlugins }
					installedPlugins={ [] }
					wcsPluginSlug={ 'woocommerce-services' }
					hasErrors={ false }
					wcsAssetsPaths={ {
						js: '/path/to/wcs.js',
						css: '/path/to/wcs.css',
					} }
					orderId={ 'ORDER_ID' }
				/>
			);
		} );

		it( 'should install WooCommerce Services when button is clicked', () => {
			const createShippingLabelButton = shippingBannerWrapper.find(
				Button
			);
			expect( createShippingLabelButton.length ).toBe( 1 );
			createShippingLabelButton.simulate( 'click' );
			expect( installPlugins ).toHaveBeenCalledWith( [
				'woocommerce-services',
			] );
		} );

		it( 'should activate WooCommerce Services when installation finishes', () => {
			// Cause a 'componentDidUpdate' by changing the props.
			shippingBannerWrapper.setProps( {
				installedPlugins: [ 'woocommerce-services' ],
			} );
			expect( activatePlugins ).toHaveBeenCalledWith( [
				'woocommerce-services',
			] );
		} );

		beforeEach( () => {} );

		it.todo(
			'should perform a request to accept the TOS and get WCS assets to load'
		);

		it.todo( 'should load WCS assets when a path is provided' );

		it( 'should open WCS modal', () => {
			window.wcsGetAppStore = jest.fn();
			const getState = jest.fn();
			const dispatch = jest.fn();
			window.wcsGetAppStore.mockReturnValueOnce( { getState, dispatch } );
			getState.mockReturnValueOnce( {
				ui: {
					selectedSiteId: 'SITE_ID',
				},
			} );
			shippingBannerWrapper.instance().openWcsModal();
			expect( window.wcsGetAppStore ).toHaveBeenCalledWith(
				'wc-connect-create-shipping-label'
			);
			expect( getState ).toHaveBeenCalledTimes( 1 );
			expect( dispatch ).toHaveBeenCalledWith( {
				type: 'WOOCOMMERCE_SERVICES_SHIPPING_LABEL_OPEN_PRINTING_FLOW',
				orderId: 'ORDER_ID',
				siteId: 'SITE_ID',
			} );
		} );
	} );
} );
