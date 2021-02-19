/**
 * Internal dependencies
 */
import { getMappedItemsCategories, sortMenuItems } from '../';

describe( 'sortMenuItems', () => {
	it( 'should get a map of all categories', () => {
		const menuItems = [
			{ id: 'second', title: 'second', order: 2 },
			{ id: 'first', title: 'three', order: 1 },
			{ id: 'third', title: 'four', order: 3 },
		];

		const sortedItems = sortMenuItems( menuItems );

		expect( sortedItems[ 0 ].id ).toBe( 'first' );
		expect( sortedItems[ 1 ].id ).toBe( 'second' );
		expect( sortedItems[ 2 ].id ).toBe( 'third' );
	} );

	it( 'should sort alphabetically if order is the same', () => {
		const menuItems = [
			{ id: 'third', title: 'z', order: 2 },
			{ id: 'first', title: 'first', order: 1 },
			{ id: 'second', title: 'a', order: 2 },
		];

		const sortedItems = sortMenuItems( menuItems );

		expect( sortedItems[ 0 ].id ).toBe( 'first' );
		expect( sortedItems[ 1 ].id ).toBe( 'second' );
		expect( sortedItems[ 2 ].id ).toBe( 'third' );
	} );
} );

describe( 'getMappedItemsCategories', () => {
	it( 'should get the default category when none are provided', () => {
		const menuItems = [
			{
				id: 'child-one',
				title: 'child-one',
				isCategory: false,
				parent: 'woocommerce',
				menuId: 'plugins',
			},
		];
		const { categories, items } = getMappedItemsCategories( menuItems );

		expect( items.woocommerce ).toBeDefined();
		expect( items.woocommerce.plugins ).toBeDefined();
		expect( items.woocommerce.plugins.length ).toBe( 1 );

		expect( Object.keys( categories ).length ).toBe( 1 );
		expect( categories.woocommerce ).toBeDefined();
	} );

	it( 'should get a map of all items and categories', () => {
		const menuItems = [
			{
				id: 'child-one',
				title: 'child-one',
				isCategory: false,
				parent: 'parent',
				menuId: 'plugins',
			},
			{
				id: 'child-two',
				title: 'child-two',
				isCategory: false,
				parent: 'parent',
				menuId: 'plugins',
			},
			{
				id: 'parent',
				title: 'parent',
				isCategory: true,
				parent: 'woocommerce',
				menuId: 'plugins',
			},
		];
		const { categories, items } = getMappedItemsCategories( menuItems );

		expect( items.woocommerce ).toBeDefined();
		expect( items.woocommerce.plugins ).toBeDefined();
		expect( items.woocommerce.plugins.length ).toBe( 1 );

		expect( items.parent ).toBeDefined();
		expect( items.parent.plugins ).toBeDefined();
		expect( items.parent.plugins.length ).toBe( 2 );

		expect( Object.keys( categories ).length ).toBe( 2 );
		expect( categories.parent ).toBeDefined();
		expect( categories.woocommerce ).toBeDefined();
	} );

	it( 'should handle multiple depths', () => {
		const menuItems = [
			{
				id: 'grand-child',
				title: 'grand-child',
				isCategory: false,
				parent: 'child',
				menuId: 'plugins',
			},
			{
				id: 'child',
				title: 'child',
				isCategory: true,
				parent: 'grand-parent',
				menuId: 'plugins',
			},
			{
				id: 'grand-parent',
				title: 'grand-parent',
				isCategory: true,
				parent: 'woocommerce',
				menuId: 'plugins',
			},
		];
		const { categories, items } = getMappedItemsCategories( menuItems );

		expect( items[ 'grand-parent' ] ).toBeDefined();
		expect( items[ 'grand-parent' ] ).toBeDefined();
		expect( items[ 'grand-parent' ].plugins.length ).toBe( 1 );

		expect( items.child ).toBeDefined();
		expect( items.child ).toBeDefined();
		expect( items.child.plugins.length ).toBe( 1 );

		expect( items[ 'grand-child' ] ).not.toBeDefined();

		expect( Object.keys( categories ).length ).toBe( 3 );
	} );

	it( 'should group by menuId', () => {
		const menuItems = [
			{
				id: 'parent',
				title: 'parent',
				isCategory: true,
				parent: 'woocommerce',
				menuId: 'primary',
			},
			{
				id: 'primary-one',
				title: 'primary-one',
				isCategory: false,
				parent: 'parent',
				menuId: 'primary',
			},
			{
				id: 'primary-two',
				title: 'primary-two',
				isCategory: false,
				parent: 'parent',
				menuId: 'primary',
			},
		];
		const { items } = getMappedItemsCategories( menuItems );

		expect( items.parent ).toBeDefined();
		expect( items.parent.primary ).toBeDefined();
		expect( items.parent.primary.length ).toBe( 2 );
	} );

	it( 'should group children only if their menuId matches parent', () => {
		const menuItems = [
			{
				id: 'plugin-one',
				title: 'plugin-one',
				isCategory: false,
				parent: 'parent',
				menuId: 'plugins',
			},
			{
				id: 'plugin-two',
				title: 'plugin-two',
				isCategory: false,
				parent: 'parent',
				menuId: 'plugins',
			},
			{
				id: 'parent',
				title: 'parent',
				isCategory: true,
				parent: 'woocommerce',
				menuId: 'plugins',
			},
			{
				id: 'primary-one',
				title: 'primary-one',
				isCategory: false,
				parent: 'parent',
				menuId: 'primary',
			},
			{
				id: 'primary-two',
				title: 'primary-two',
				isCategory: false,
				parent: 'parent',
				menuId: 'primary',
			},
		];
		const { items } = getMappedItemsCategories( menuItems );

		expect( items.parent ).toBeDefined();
		expect( items.parent.plugins ).toBeDefined();
		expect( items.parent.plugins.length ).toBe( 2 );

		expect( items.primary ).not.toBeDefined();
	} );

	it( 'should ignore bad menu IDs', () => {
		const menuItems = [
			{
				id: 'parent',
				title: 'parent',
				isCategory: false,
				parent: 'woocommerce',
				menuId: 'badId',
			},
			{
				id: 'primary-one',
				title: 'primary-one',
				isCategory: false,
				parent: 'woocommerce',
				menuId: 'primary',
			},
			{
				id: 'primary-two',
				title: 'primary-two',
				isCategory: false,
				parent: 'woocommerce',
				menuId: 'primary',
			},
		];
		const { categories, items } = getMappedItemsCategories( menuItems );

		expect( items.woocommerce ).toBeDefined();
		expect( items.woocommerce.primary ).toBeDefined();
		expect( items.woocommerce.primary.length ).toBe( 2 );

		expect( items.woocommerce ).toBeDefined();
		expect( items.woocommerce.badId ).not.toBeDefined();

		expect( Object.keys( categories ).length ).toBe( 1 );
	} );
} );
