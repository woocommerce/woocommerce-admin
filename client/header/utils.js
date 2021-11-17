/**
 * External dependencies
 */
import { Slot, Fill } from '@wordpress/components';
import { cloneElement } from '@wordpress/element';

/**
 * Ordered header item.
 *
 * @param {Node} children - Node children.
 * @param {number} order - Node order.
 * @param {Array} props - Fill props.
 * @return {Node} Node.
 */
const createOrderedChildren = ( children, order, props ) => {
	return typeof children === 'function'
		? cloneElement( children( props ), { order } )
		: cloneElement( children, { ...props, order } );
};

/**
 * Create a Fill for extensions to add items to the WooCommerce Admin header.
 *
 * @slotFill WooHeaderItem
 * @example
 * const MyHeaderItem = () => (
 * <WooHeaderItem>My header item</WooHeaderItem>
 * );
 *
 * registerPlugin( 'my-extension', {
 * render: MyHeaderItem,
 * scope: 'woocommerce-admin',
 * } );
 * @param {Object} param0
 * @param {Array} param0.children - Node children.
 * @param {Array} param0.order - Node order.
 */
export const WooHeaderItem = ( { children, order = 1 } ) => {
	return (
		<Fill name={ 'woocommerce_header_item' }>
			{ createOrderedChildren.bind( null, children, order ) }
		</Fill>
	);
};

WooHeaderItem.Slot = ( { fillProps } ) => (
	<Slot name={ 'woocommerce_header_item' } fillProps={ fillProps }>
		{ ( fills ) => {
			return fills.sort( ( a, b ) => {
				return a[ 0 ].props.order - b[ 0 ].props.order;
			} );
		} }
	</Slot>
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
