const fsPromises = require( 'fs' ).promises;
const exec = require( 'await-exec' );
const { parse } = require( 'comment-parser/lib' );

const getHooks = ( parsedData ) =>
	parsedData.filter( ( docBlock ) =>
		docBlock.tags.some( ( tag ) => tag.tag === 'hook' )
	);

const getSourceFile = ( file, commit, { source } ) => {
	const first = source[ 0 ].number + 1;
	const last = source[ source.length - 1 ].number + 1;

	return `https://github.com/woocommerce/woocommerce-admin/blob/${ commit }/${ file }#L${ first }-L${ last }`;
};

const addSourceFiles = async ( hooks, fileName ) => {
	const { stdout } = await exec( 'git log --pretty="format:%H" -1' );
	const commit = stdout.trim();

	return hooks.map( ( hook ) => {
		hook.sourceFile = getSourceFile( fileName, commit, hook );
		return hook;
	} );
};

const prepareHooks = async ( fileName ) => {
	const data = await fsPromises
		.readFile( fileName, 'utf-8' )
		.catch( ( err ) => console.error( 'Failed to read file', err ) );

	const parsed = parse( data );
	const rawHooks = getHooks( parsed );
	return await addSourceFiles( rawHooks, fileName );
};

const makeDocObject = async ( fileName ) => {
	const hooks = await prepareHooks( fileName );
	return hooks.map( ( { description, tags, sourceFile } ) => {
		const example = tags.find( ( tag ) => tag.tag === 'example' );
		const hook = tags.find( ( tag ) => tag.tag === 'hook' );
		return {
			description,
			sourceFile,
			name: hook ? hook.name : '',
			example: example ? example.description : '',
		};
	} );
};

const makeJSONFile = async ( docObjects ) => {
	// Make JSON File here
	console.log( docObjects );
};

const makeDocument = async ( fileNames ) => {
	const docObjects = await Promise.all(
		fileNames.map( async ( f ) => {
			return await makeDocObject( f );
		} )
	);
	makeJSONFile( docObjects.flat() );
};

module.exports = makeDocument;
