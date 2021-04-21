<?php

use Automattic\Jetpack\Changelog\Changelog;
use Automattic\Jetpack\Changelog\KeepAChangelogParser;
use Automattic\Jetpack\Changelogger\FormatterPlugin;
use Automattic\Jetpack\Changelogger\PluginTrait;

/**
 * Jetpack Changelogger Formatter for WC Admin
 *
 * Class WCAdminFormatter
 */
class WCAdminFormatter extends KeepAChangelogParser implements FormatterPlugin {
	use PluginTrait;

	public function format( Changelog $changelog ) {
		$ret = '';
		$dateFormat = 'm/d/Y';
		$bullet = '- ';
		$indent = str_repeat( ' ', strlen( $bullet ) );

		foreach ( $changelog->getEntries() as $entry ) {
			$timestamp = $entry->getTimestamp();
			$ret .= '== ' . $entry->getVersion() . ' '.$timestamp->format($dateFormat).' =='."\n\n";

			$prologue = trim( $entry->getPrologue() );
			if ( '' !== $prologue ) {
				$ret .= "\n$prologue\n\n";
			}

			foreach ( $entry->getChangesBySubheading() as $heading => $changes ) {
				$post = '';
				foreach ( $changes as $change ) {
					$text = trim( $change->getContent() );
					if ( '' !== $text ) {
						if ( $change->getAuthor() !== '' ) {
							$text .= " ({$change->getAuthor()})";
						}
						$ret    .= $bullet . $heading.': '.str_replace( "\n", "\n$indent", $text ) . "\n";
						$heading = '';
						$post    = "\n";
					}
				}
				$ret .= $post;
			}

			$ret = trim( $ret ) . "\n\n";
		}

		$ret = trim( $ret ) . "\n";

		return $ret;
	}
}