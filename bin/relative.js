const { promisify } = require( 'util' );
const { resolve } = require( 'path' );
const path = require( 'path' );
const fs = require( 'fs' );
const readdir = promisify( fs.readdir );
const stat = promisify( fs.stat );

async function getFiles( dir ) {
	const subdirs = await readdir( dir );
	const files = await Promise.all(
		subdirs.map( async ( subdir ) => {
			const res = resolve( dir, subdir );
			return ( await stat( res ) ).isDirectory() ? getFiles( res ) : res;
		} )
	);
	return files.reduce( ( a, f ) => a.concat( f ), [] );
}

// getFiles( 'client' )
// 	.then( ( files ) => console.log( files ) )
// 	.catch( ( e ) => console.error( e ) );

const filePath =
	'/Users/psealock/vagrant-local/www/tangaroa/public_html/wp-content/plugins/wc-admin/client/analytics/report/revenue/index.js';

const importPath = './client/analytics/components/report-filters';
const fullImportPath =
	'/Users/psealock/vagrant-local/www/tangaroa/public_html/wp-content/plugins/wc-admin/client/analytics/components/report-filters';

const answer = path.relative( filePath, fullImportPath );

console.log( answer );
