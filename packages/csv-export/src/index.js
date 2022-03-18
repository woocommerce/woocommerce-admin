/**
 * External dependencies
 */
import moment from 'moment';
import { saveAs } from 'browser-filesaver';

function escapeCSVValue( value ) {
	let stringValue = value.toString();

	// Prevent CSV injection.
	// See: http://www.contextis.com/resources/blog/comma-separated-vulnerabilities/
	// See: WC_CSV_Exporter::escape_data()
	if ( [ '=', '+', '-', '@' ].includes( stringValue.charAt( 0 ) ) ) {
		stringValue = '"\t' + stringValue + '"';
	} else if ( stringValue.match( /[,"\s]/ ) ) {
		stringValue = '"' + stringValue.replace( /"/g, '""' ) + '"';
	}

	return stringValue;
}

function getCSVHeaders( headers ) {
	return Array.isArray( headers )
		? headers
				.map( ( header ) => escapeCSVValue( header.label ) )
				.join( ',' )
		: [];
}

function getCSVRows( rows ) {
	return Array.isArray( rows )
		? rows
				.map( ( row ) =>
					row
						.map( ( rowItem ) => {
							if (
								undefined === rowItem.value ||
								rowItem.value === null
							) {
								return '';
							}

							return escapeCSVValue( rowItem.value );
						} )
						.join( ',' )
				)
				.join( '\n' )
		: [];
}

/**
 * Generates a CSV string from table contents
 *
 * @param {Array.<Object>}       headers Object with table header information
 * @param {Array.Array.<Object>} rows    Object with table rows information
 * @return {string}                           Table contents in a CSV format
 */
export function generateCSVDataFromTable( headers, rows ) {
	return [ getCSVHeaders( headers ), getCSVRows( rows ) ]
		.filter( ( text ) => text.length )
		.join( '\n' );
}

/**
 * Generates a file name for CSV files based on the provided name, the current date
 * and the provided params, which are all appended with hyphens.
 *
 * @param {string} [name='']   Name of the file
 * @param {Object} [params={}] Object of key-values to append to the file name
 * @return {string}                Formatted file name
 */
export function generateCSVFileName( name = '', params = {} ) {
	const fileNameSections = [
		name.toLowerCase().replace( /[^a-z0-9]/g, '-' ),
		moment().format( 'YYYY-MM-DD' ),
		Object.keys( params )
			.map(
				( key ) =>
					key.toLowerCase().replace( /[^a-z0-9]/g, '-' ) +
					'-' +
					decodeURIComponent( params[ key ] )
						.toLowerCase()
						.replace( /[^a-z0-9]/g, '-' )
			)
			.join( '_' ),
	].filter( ( text ) => text.length );

	return fileNameSections.join( '_' ) + '.csv';
}

/**
 * Downloads a CSV file with the given file name and contents
 *
 * @param {string} fileName Name of the file to download
 * @param {string} content  Contents of the file to download
 */
export function downloadCSVFile( fileName, content ) {
	// eslint-disable-next-line no-undef
	const blob = new Blob( [ content ], { type: 'text/csv;charset=utf-8' } );

	saveAs( blob, fileName );
}
