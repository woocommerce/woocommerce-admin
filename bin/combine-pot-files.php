<?php
/**
 * Command line script for merging two .pot files.
 *
 * @package WooCommerce Admin
 */

/**
 * Get the two file names from the command line.
 */
if ( $argc < 2 ) {
	echo "Usage: php -f {$argv[0]} source-file.pot destination-file.pot\n";
	exit;
}

for ( $index = 1; $index <= 2; $index++ ) {
	if ( ! is_file( $argv[ $index ] ) ) {
		echo "File not found: {$argv[ $index ]}\n";
		exit;
	}
}

/**
 * Parse a .pot file into an array.
 *
 * @param string $file_name Pot file name.
 * @return array
 */
function woocommerce_admin_parse_pot( $file_name ) {
	$fh         = fopen( $file_name, 'r' );
	$originals  = array();
	$references = array();
	$messages   = array();
	$have_msgid = false;

	while ( ! feof( $fh ) ) {
		$line = trim( fgets( $fh ) );
		if ( ! $line ) {
			$message               = implode( "\n", $messages );
			$originals[ $message ] = $references;
			$references            = array();
			$messages              = array();
			$have_msgid            = false;
			$message               = '';
			continue;
		}

		if ( 'msgid' == substr( $line, 0, 5 ) ) {
			$have_msgid = true;
		}

		if ( $have_msgid ) {
			$messages[]   = $line;
		} else {
			$references[] = $line;
		}
	}

	fclose( $fh );

	$message               = implode( "\n", $messages );
	$originals[ $message ] = $references;
	return $originals;
}

$originals_1 = woocommerce_admin_parse_pot( $argv[1] );
$originals_2 = woocommerce_admin_parse_pot( $argv[2] );
array_shift( $originals_1 );

$fh = fopen( $argv[2], 'w' );
foreach ( $originals_2 as $message => $original ) {
	// Use the complete message section to match strings to be translated.
	if ( isset( $originals_1[ $message ] ) ) {
		$original = array_merge( $original, $originals_1[ $message ] );
		unset( $originals_1[ $message ] );
	}

	fwrite( $fh, implode( "\n", $original ) );
	fwrite( $fh, "\n" . $message ."\n\n" );
}

foreach ( $originals_1 as $message => $original ) {
	fwrite( $fh, implode( "\n", $original ) );
	fwrite( $fh, "\n" . $message ."\n\n" );
}

fclose( $fh );
unlink( $argv[1] );
