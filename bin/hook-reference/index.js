const createData = require( './data' );
const { promisify } = require( 'util' );
const { resolve } = require( 'path' );
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

const writeJSONFile = ( data ) => {
	// Make JSON File here
	console.log( data );
};

getFiles( 'client' )
	.then( ( fileNames ) => createData( fileNames ) )
	.then( ( data ) => writeJSONFile( data ) )
	.catch( ( e ) => console.error( e ) );
