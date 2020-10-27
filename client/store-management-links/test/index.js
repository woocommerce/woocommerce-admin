jest.mock( '@woocommerce/tracks', () => ( {
	...jest.requireActual( '@woocommerce/tracks' ),
	recordEvent: jest.fn(),
} ) );

jest.mock( '@woocommerce/wc-admin-settings', () => ( {
	...jest.requireActual( '@woocommerce/wc-admin-settings' ),
	getSetting: jest.fn(),
} ) );

/**
 * External dependencies
 */
import { recordEvent } from '@woocommerce/tracks';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/**
 * Internal dependencies
 */
import {
	StoreManagementLinks,
	getLinkTypeAndHref,
	getItemsByCategory,
} from '..';

// expect.extend( { toHaveAttribute } );

// describe( 'QuickLinks', () => {
// 	it( 'should build href correctly for a `wc-admin` item', () => {
// 		render( <QuickLinks /> );

// 		const marketingItem = screen.getByRole( 'menuitem', {
// 			name: 'Market my store',
// 		} );

// 		expect( marketingItem ).toHaveAttribute(
// 			'href',
// 			'admin.php?page=wc-admin&path=%2Fmarketing'
// 		);
// 	} );

// 	it( 'should build href correctly for a `wp-admin` item', () => {
// 		render( <QuickLinks /> );

// 		const addProductsItem = screen.getByRole( 'menuitem', {
// 			name: 'Add products',
// 		} );

// 		expect( addProductsItem ).toHaveAttribute(
// 			'href',
// 			'post-new.php?post_type=product'
// 		);
// 	} );

// 	it( 'should build href correctly for a `wc-settings` item', () => {
// 		render( <QuickLinks /> );

// 		const shippingSettingsItem = screen.getByRole( 'menuitem', {
// 			name: 'Shipping settings',
// 		} );

// 		expect( shippingSettingsItem ).toHaveAttribute(
// 			'href',
// 			'admin.php?page=wc-settings&tab=shipping'
// 		);
// 	} );

// 	it( 'should call `recordEvent` when a `wc-admin` item is clicked', () => {
// 		render( <QuickLinks /> );

// 		userEvent.click(
// 			screen.getByRole( 'menuitem', { name: 'Market my store' } )
// 		);

// 		const homeQuickLinksClickEventName = 'home_quick_links_click';
// 		const propsWithMarketingTaskName = { task_name: 'marketing' };

// 		expect( recordEvent ).toHaveBeenCalledWith(
// 			homeQuickLinksClickEventName,
// 			propsWithMarketingTaskName
// 		);
// 	} );

// 	it( 'should call `recordEvent` when a `wp-admin` item is clicked', () => {
// 		render( <QuickLinks /> );

// 		userEvent.click(
// 			screen.getByRole( 'menuitem', { name: 'Add products' } )
// 		);

// 		const homeQuickLinksClickEventName = 'home_quick_links_click';
// 		const propsWithAddProductsTaskName = { task_name: 'add-products' };

// 		expect( recordEvent ).toHaveBeenCalledWith(
// 			homeQuickLinksClickEventName,
// 			propsWithAddProductsTaskName
// 		);
// 	} );

// 	it( 'should call `recordEvent` when a `wc-settings` item is clicked', () => {
// 		render( <QuickLinks /> );

// 		userEvent.click(
// 			screen.getByRole( 'menuitem', { name: 'Shipping settings' } )
// 		);

// 		const homeQuickLinksClickEventName = 'home_quick_links_click';
// 		const propsWithShippingSettingsTaskName = {
// 			task_name: 'shipping-settings',
// 		};

// 		expect( recordEvent ).toHaveBeenCalledWith(
// 			homeQuickLinksClickEventName,
// 			propsWithShippingSettingsTaskName
// 		);
// 	} );

// 	it( 'should call `recordEvent` when an `external` item is clicked', () => {
// 		render( <QuickLinks /> );

// 		userEvent.click(
// 			screen.getByRole( 'menuitem', { name: 'Get support' } )
// 		);

// 		const homeQuickLinksClickEventName = 'home_quick_links_click';
// 		const propsWithSupportTaskName = { task_name: 'support' };

// 		expect( recordEvent ).toHaveBeenCalledWith(
// 			homeQuickLinksClickEventName,
// 			propsWithSupportTaskName
// 		);
// 	} );

// 	it( 'should call `getSetting` to determine the frontend url', () => {
// 		render( <QuickLinks /> );

// 		expect( getSetting ).toHaveBeenCalledWith( 'siteUrl' );
// 	} );
// } );

describe( 'getLinkTypeAndHref', () => {
	it( 'generates the correct link for wc-admin links', () => {
		const result = getLinkTypeAndHref( {
			type: 'wc-admin',
			path: 'foo/bar',
		} );

		expect( result.linkType ).toEqual( 'wc-admin' );
		expect( result.href ).toEqual(
			'admin.php?page=wc-admin&path=%2Ffoo/bar'
		);
	} );

	it( 'generates the correct link for wp-admin links', () => {
		const result = getLinkTypeAndHref( {
			type: 'wp-admin',
			path: '/foo/bar',
		} );

		expect( result.linkType ).toEqual( 'wp-admin' );
		expect( result.href ).toEqual( '/foo/bar' );
	} );

	it( 'generates the correct link for wc-settings links', () => {
		const result = getLinkTypeAndHref( {
			type: 'wc-settings',
			tab: 'foo',
		} );

		expect( result.linkType ).toEqual( 'wp-admin' );
		expect( result.href ).toEqual( 'admin.php?page=wc-settings&tab=foo' );
	} );

	it( 'generates the an external link if there is no provided type', () => {
		const result = getLinkTypeAndHref( {
			href: 'http://example.com',
		} );

		expect( result.linkType ).toEqual( 'external' );
		expect( result.href ).toEqual( 'http://example.com' );
	} );
} );

describe( 'StoreManagementLinks', () => {
	it( 'records a track when a link is clicked', () => {
		const { queryByText } = render( <StoreManagementLinks /> );
		const linkDetails = getItemsByCategory( 'fakeUrl' )[ 0 ].items[ 0 ];

		userEvent.click( queryByText( linkDetails.title ) );

		expect( recordEvent ).toHaveBeenCalledWith( 'home_quick_links_click', {
			listItemTag: linkDetails.listItemTag,
		} );
	} );
} );
