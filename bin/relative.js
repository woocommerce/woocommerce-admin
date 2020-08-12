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

getFiles( 'client' )
	.then( ( files ) => {
		files.forEach( ( file ) => makeRelativePath( file ) );
	} )
	.catch( ( e ) => console.error( e ) );

const makeRelativePath = ( file ) => {
	const root =
		'/Users/psealock/vagrant-local/www/tangaroa/public_html/wp-content/plugins/wc-admin/';

	fs.readFile( file, 'utf8', function ( err, data ) {
		if ( err ) {
			return console.log( err );
		}
		const rx = /'(.*?)'/;
		const lines = data.split( /\r?\n/ );

		let result = data;

		lines.forEach( ( line ) => {
			if ( line.includes( "from 'client/" ) ) {
				const importPath = rx.exec( line )[ 1 ];
				const fullImportPath = root + importPath;
				const relativePath = path.relative( file, fullImportPath );
				const improvedRelativePath = relativePath.substring( 3 );
				const newLine = line.replace(
					rx,
					"'" + improvedRelativePath + "'"
				);
				result = result.replace( line, newLine );
			}
		} );

		fs.writeFile( file, result, 'utf8', function ( err ) {
			if ( err ) return console.log( err );
		} );
	} );
};
