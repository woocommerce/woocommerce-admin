/**
 * External dependencies
 */
import { Slot, Fill } from '@wordpress/components';

/**
 * Create a Fill for extensions to add items to the WooCommerce Admin header.
 *
 * @slotFill WooHeaderItem
 * @example
 * const MyHeaderItem = () => (
 * 	<WooHeaderItem>My header item</WooHeaderItem>
 * );
 *
 * registerPlugin( 'my-extension', {
 * 	render: MyHeaderItem,
 * 	scope: 'woocommerce-admin',
 * } );
 * @param {Object} param0
 * @param {Array} param0.children - Node children.
 */
export const WooHeaderItem = ( { children } ) => {
	return <Fill name={ 'woocommerce_header_item' }>{ children }</Fill>;
};

WooHeaderItem.Slot = ( { fillProps } ) => (
	<Slot name={ 'woocommerce_header_item' } fillProps={ fillProps } />
);

/**
 * Create a Fill for extensions to add custom page titles.
 *
 * @slotFill WooHeaderPageTitle
 * @example
 * const MyPageTitle = () => (
 * 	<WooHeaderPageTitle>My page title</WooHeaderPageTitle>
 * );
 *
 * registerPlugin( 'my-page-title', {
 * 	render: MyPageTitle,
 * 	scope: 'woocommerce-admin',
 * } );
 * @param {Object} param0
 * @param {Array} param0.children - Node children.
 */
export const WooHeaderPageTitle = ( { children } ) => {
	return <Fill name={ 'woocommerce_header_page_title' }>{ children }</Fill>;
};

WooHeaderPageTitle.Slot = ( { fillProps } ) => (
	<Slot name={ 'woocommerce_header_page_title' } fillProps={ fillProps } />
);
