<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ( 2 < count( $argv ) ) {
	echo "Incorrect # of arguments.\nUsage: php sort-pr-by-date.php 7273,2737,7273\n";
	exit;
}

$command = 'git log --pretty=format:"%ad,%s" --all --date=local --author-date-order --reverse --grep ":prs" | sort -u | grep -o "\(#[0-9]\+\)"';
$prs = array_map( function( $pr ) {
	return '(#' . trim($pr) . ')';
}, explode( ',', $argv[1] ) );

$prs = implode( '\\|', $prs );
$command = str_replace( ':prs', $prs, $command );
$output = str_replace( '#', '', shell_exec( $command ) );

echo $output;
