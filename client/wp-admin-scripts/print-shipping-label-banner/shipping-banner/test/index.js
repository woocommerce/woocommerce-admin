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
				activatedPlugins={ [] }
				installedPlugins={ [] }
				wcsPluginSlug={ 'woocommerce-services' }
				activationErrors={ [] }
				installationErrors={ [] }
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

describe( 'Create shipping label button', () => {
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
				activationErrors={ [] }
				installationErrors={ [] }
				isRequesting={ false }
			/>
		);
	} );

	it( 'should install WooCommerce Services when button is clicked', () => {
		const createShippingLabelButton = shippingBannerWrapper.find( Button );
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

	it( 'should show a busy loading state when installing or activating ', () => {
		shippingBannerWrapper.setProps( {
			isRequesting: true,
		} );
		const createShippingLabelButton = shippingBannerWrapper.find( Button );
		expect( createShippingLabelButton.length ).toBe( 1 );
		expect( createShippingLabelButton.prop( 'disabled' ) ).toBe( true );
		expect( createShippingLabelButton.prop( 'isBusy' ) ).toBe( true );
	} );
} );

describe( 'In the process of installing or activating WooCommerce Service', () => {
	let shippingBannerWrapper;
	const activePlugins = {
		includes: jest.fn().mockReturnValue( true ),
	};

	beforeEach( () => {
		shippingBannerWrapper = shallow(
			<ShippingBanner
				isJetpackConnected={ jest.fn() }
				activatePlugins={ jest.fn() }
				activePlugins={ activePlugins }
				activatedPlugins={ [] }
				installPlugins={ jest.fn() }
				installedPlugins={ [] }
				wcsPluginSlug={ 'woocommerce-services' }
				activationErrors={ [] }
				installationErrors={ [] }
				isRequesting={ true }
			/>
		);
	} );

	it( 'should show a busy loading state on "Create shipping label"', () => {
		const createShippingLabelButton = shippingBannerWrapper.find( Button );
		expect( createShippingLabelButton.length ).toBe( 1 );
		expect( createShippingLabelButton.prop( 'disabled' ) ).toBe( true );
		expect( createShippingLabelButton.prop( 'isBusy' ) ).toBe( true );
	} );

	it( 'should disable the dismiss button ', () => {
		const dismissButton = shippingBannerWrapper.find( '.notice-dismiss' );
		expect( dismissButton.length ).toBe( 1 );
		expect( dismissButton.prop( 'disabled' ) ).toBe( true );
	} );
} );

describe( 'Setup error message', () => {
	let shippingBannerWrapper;
	const activePlugins = {
		includes: jest.fn().mockReturnValue( true ),
	};

	beforeEach( () => {
		shippingBannerWrapper = shallow(
			<ShippingBanner
				isJetpackConnected={ jest.fn() }
				activatePlugins={ jest.fn() }
				activePlugins={ activePlugins }
				activatedPlugins={ [] }
				installPlugins={ jest.fn() }
				installedPlugins={ [] }
				wcsPluginSlug={ 'woocommerce-services' }
				activationErrors={ [] }
				installationErrors={ [] }
			/>
		);
	} );

	it( 'should not show if there is no error', () => {
		expect( shippingBannerWrapper.instance().isSetupError() ).toBe( false );
		expect( shippingBannerWrapper.instance().hasActivationError() ).toBe(
			false
		);
		expect( shippingBannerWrapper.instance().hasInstallationError() ).toBe(
			false
		);
	} );

	it( 'should show if there is activation error', () => {
		shippingBannerWrapper.setProps( {
			activationErrors: [ 'Can not activate' ],
		} );
		expect( shippingBannerWrapper.instance().isSetupError() ).toBe( true );
		expect( shippingBannerWrapper.instance().hasActivationError() ).toBe(
			true
		);
		expect( shippingBannerWrapper.instance().hasInstallationError() ).toBe(
			false
		);
	} );

	it( 'should show if there is installation error', () => {
		shippingBannerWrapper.setProps( {
			installationErrors: [ 'Can not activate' ],
		} );
		expect( shippingBannerWrapper.instance().isSetupError() ).toBe( true );
		expect( shippingBannerWrapper.instance().hasActivationError() ).toBe(
			false
		);
		expect( shippingBannerWrapper.instance().hasInstallationError() ).toBe(
			true
		);
	} );
} );
