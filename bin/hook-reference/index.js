const fs = require( 'fs' );
const { stat, readdir, writeFile } = require( 'fs/promises' );
const { resolve } = require( 'path' );
const createData = require( './data' );

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

const writeJSONFile = async ( data ) => {
	const fileName = 'bin/hook-reference/data.json';
	const stringifiedData = JSON.stringify( data, null, 4 );
	await writeFile( fileName, stringifiedData );
};

getFiles( 'client' )
	.then( ( fileNames ) => createData( fileNames ) )
	.then( ( data ) => writeJSONFile( data ) )
	.catch( ( e ) => console.error( e ) );
