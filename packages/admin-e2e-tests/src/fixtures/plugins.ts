/**
 * Internal dependencies
 */
import { httpClient } from './http-client';

const wpPluginsEndpoint = '/wp/v2/plugins';

type Plugin = {
	author: string;
	name: string;
	plugin: string;
	plugin_uri: string;
	status: 'active' | 'inactive';
	version: string;
	description: {
		raw: string;
		rendered: string;
	};
};

export async function getPlugins(): Promise< Plugin[] > {
	const response = await httpClient.get( wpPluginsEndpoint );
	expect( response.statusCode ).toEqual( 200 );
	return response.data;
}

export async function deletePlugin( pluginName: string ) {
	const response = await httpClient.delete(
		wpPluginsEndpoint + '/' + pluginName
	);
	expect( response.statusCode ).toEqual( 200 );
}

export async function deactivatePlugin( pluginName: string ) {
	const response = await httpClient.post(
		wpPluginsEndpoint + '/' + pluginName,
		{
			status: 'inactive',
		}
	);
	expect( response.statusCode ).toEqual( 200 );
}

async function deactivateAndDeletePlugin( pluginName: string ) {
	await deactivatePlugin( pluginName );
	await deletePlugin( pluginName );
}
export async function deactivateAndDeleteAllPlugins( except: string[] = [] ) {
	let plugins = await getPlugins();
	const promises = [];
	for ( const plugin of plugins ) {
		const splitPluginName = plugin.plugin.split( '/' );
		const slug = splitPluginName[ 1 ] || splitPluginName[ 0 ];
		if ( ! except.includes( slug ) ) {
			promises.push( deactivateAndDeletePlugin( plugin.plugin ) );
		}
	}
	await Promise.all( promises );
	plugins = await getPlugins();
	expect( plugins.length ).toEqual( except.length );
}
