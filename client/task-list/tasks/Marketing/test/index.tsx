/**
 * Internal dependencies
 */
import {
	Extension,
	transformExtensionToPlugin,
	getMarketingExtensionLists,
} from '../';

const basicPlugins: Extension[] = [
	{
		key: 'basic-plugin',
		name: 'Basic Plugin',
		description: 'Basic plugin description',
		manage_url: '#',
		image_url: 'basic.jpeg',
	},
];

const reachPlugins: Extension[] = [
	{
		key: 'reach-plugin',
		name: 'Reach Plugin',
		description: 'Reach plugin description',
		manage_url: '#',
		image_url: 'reach.jpeg',
	},
];

const growPlugins: Extension[] = [
	{
		key: 'grow-plugin',
		name: 'Grow Plugin',
		description: 'Grow plugin description',
		manage_url: '#',
		image_url: 'grow.jpeg',
	},
	{
		key: 'grow-plugin-two:extra',
		name: 'Grow Plugin 2',
		description: 'Grow plugin 2 description',
		manage_url: '#',
		image_url: 'grow2.jpeg',
	},
];

const extensionLists = [
	{
		key: 'basics',
		plugins: basicPlugins,
		title: 'Basics',
	},
	{
		key: 'reach',
		plugins: reachPlugins,
		title: 'Reach',
	},
	{
		key: 'grow',
		plugins: growPlugins,
		title: 'Grow',
	},
];

describe( 'transformExtensionToPlugin', () => {
	test( 'should return the formatted extension', () => {
		const plugin = transformExtensionToPlugin( basicPlugins[ 0 ], [], [] );
		expect( plugin ).toEqual( {
			description: 'Basic plugin description',
			slug: 'basic-plugin',
			imageUrl: 'basic.jpeg',
			isActive: false,
			isInstalled: false,
			manageUrl: '#',
			name: 'Basic Plugin',
		} );
	} );

	test( 'should get the plugin slug when a colon exists', () => {
		const plugin = transformExtensionToPlugin( growPlugins[ 1 ], [], [] );
		expect( plugin.slug ).toEqual( 'grow-plugin-two' );
	} );

	test( 'should mark the plugin as active when in the active plugins', () => {
		const plugin = transformExtensionToPlugin(
			basicPlugins[ 0 ],
			[ 'basic-plugin' ],
			[]
		);
		expect( plugin.isActive ).toBeTruthy();
	} );

	test( 'should mark the plugin as installed when in the installed plugins', () => {
		const plugin = transformExtensionToPlugin(
			basicPlugins[ 0 ],
			[],
			[ 'basic-plugin' ]
		);
		expect( plugin.isInstalled ).toBeTruthy();
	} );
} );

describe( 'getMarketingExtensionLists', () => {
	test( 'should only return the allowed lists', () => {
		const [ installed, lists ] = getMarketingExtensionLists(
			extensionLists,
			[],
			[]
		);

		expect( lists.length ).toBe( 2 );
		expect( lists[ 0 ].key ).toBe( 'reach' );
		expect( lists[ 1 ].key ).toBe( 'grow' );
	} );

	test( 'should separate installed plugins', () => {
		const [ installed ] = getMarketingExtensionLists(
			extensionLists,
			[],
			[ 'grow-plugin' ]
		);

		expect( installed.length ).toBe( 1 );
		expect( installed[ 0 ].slug ).toBe( 'grow-plugin' );
	} );

	test( 'should not include installed plugins in the extensions list', () => {
		const [ installed, lists ] = getMarketingExtensionLists(
			extensionLists,
			[],
			[ 'grow-plugin' ]
		);

		expect( lists[ 1 ].plugins.length ).toBe( 1 );
	} );

	test( 'should only include allowed list plugins in the installed list', () => {
		const [ installed, lists ] = getMarketingExtensionLists(
			extensionLists,
			[],
			[ 'basic-plugin' ]
		);

		expect( installed.length ).toBe( 0 );
	} );
} );
