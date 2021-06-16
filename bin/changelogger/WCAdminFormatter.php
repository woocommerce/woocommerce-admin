<?php

use Automattic\Jetpack\Changelog\Changelog;
use Automattic\Jetpack\Changelog\KeepAChangelogParser;
use Automattic\Jetpack\Changelogger\FormatterPlugin;
use Automattic\Jetpack\Changelogger\PluginTrait;

function dd($x) {
	print_r($x);exit;
}

/**
 * Jetpack Changelogger Formatter for WC Admin
 *
 * Class WCAdminFormatter
 */
class WCAdminFormatter extends KeepAChangelogParser implements FormatterPlugin {
	use PluginTrait;



	/**
	 * Bullet for changes.
	 *
	 * @var string
	 */
	private $bullet = '-';

	/**
	 * Output date format.
	 *
	 * @var string
	 */
	private $dateFormat = 'Y-m-d';

	/**
	 * String used as the date for an unreleased version.
	 *
	 * @var string
	 */
	private $unreleased = 'unreleased';

	/**
	 * If true, try to parse authors from entries.
	 *
	 * @var bool
	 */
	private $parseAuthors = false;

	/**
	 * Test if there's a link at the end of a string.
	 *
	 * @param string $s String.
	 * @return array|null Match data.
	 */
	private function endsInLink( $s ) {
		if ( preg_match( '/^\[([^]]+)\]: *(\S+(?: +(?:"(?:[^"]|\\\\.)*"|\'(?:[^\']|\\\\.)*\'|\((?:[^()]|\\\\.)*\)))?)\s*\Z/m', $s, $m ) ) {
			return array(
				'match' => $m[0],
				'id'    => $m[1],
				'link'  => $m[2],
			);
		}
		return null;
	}

	/**
	 * Split a string in two at the first occurrence of a substring.
	 *
	 * @param string   $haystack String to split.
	 * @param string[] ...$needles Strings to split on. Earliest match in $haystack wins.
	 * @return string[] Two elements: The part before $needles and the part after, both trimmed.
	 */
	private function split( $haystack, ...$needles ) {
		$i = false;
		foreach ( $needles as $needle ) {
			$j = strpos( $haystack, $needle );
			if ( false !== $j ) {
				$i = false === $i ? $j : min( $i, $j );
			}
		}
		if ( false === $i ) {
			return array( trim( $haystack, "\n" ), '' );
		}
		return array(
			trim( substr( $haystack, 0, $i ), "\n" ),
			trim( substr( $haystack, $i ), "\n" ),
		);
	}

	/**
	 * Parse changelog data into a Changelog object.
	 *
	 * This does not handle all markdown! In particular, it makes the following assumptions:
	 *
	 * - All level-2 ATX headings with no indentation are changelog entry headings.
	 * - Changelog entry headings consist of either a bare version number or a version number as
	 *   link text with no destination or title, followed by a spaced ASCII hyphen, followed by a timestamp.
	 * - All level-3 ATX headings with no indentation are changelog entry subheadings.
	 * - All change entries are formatted as lists starting with the configured bullet followed by a space,
	 *   and do not make use of lazy continuation. Indentation of continued
	 *   lines is equal to the length of the bullet plus the space.
	 * - All link definitions come at the end of the document, with no intervening blank lines or
	 *   other content, and are not indented and do not contain newlines. Link definitions for
	 *   changelog entries have no titles.
	 *
	 * @param string $changelog Changelog contents.
	 * @return Changelog
	 * @throws InvalidArgumentException If the changelog data cannot be parsed.
	 */
	public function parse( $changelog ) {
		$ret = new Changelog();

		$bullet = $this->bullet . ' ';
		$len    = strlen( $bullet );

		// Fix newlines and expand tabs.
		$changelog = strtr( $changelog, array( "\r\n" => "\n" ) );
		$changelog = strtr( $changelog, array( "\r" => "\n" ) );
		while ( strpos( $changelog, "\t" ) !== false ) {
			$changelog = preg_replace_callback(
				'/^([^\t\n]*)\t/m',
				function ( $m ) {
					return $m[1] . str_repeat( ' ', 4 - ( mb_strlen( $m[1] ) % 4 ) );
				},
				$changelog
			);
		}

		// Entries make up the rest of the document.
		$entries = array();
		while ( '' !== $changelog ) {
			// Extract the first entry from the changelog file, then extract the heading from it.
			list( $content, $changelog ) = $this->split( $changelog, "\n## " );
			list( $heading, $content )   = $this->split( $content, "\n" );

			// Parse the heading and create a ChangelogEntry for it.
			if ( ! preg_match( '/^## +(\[?[^] ]+\]?) - (.+?) *$/', $heading, $m ) ) {
				throw new InvalidArgumentException( "Invalid heading: $heading" );
			}
			$version   = $m[1];
			$timestamp = $m[2];
			if ( '[' === $version[0] && ']' === substr( $version, -1 ) ) {
				$version = substr( $version, 1, -1 );
				if ( ! isset( $links[ $version ] ) ) {
					throw new InvalidArgumentException( "Heading seems to have a linked version, but link was not found: $heading" );
				}
				$usedlinks[ $version ] = true;
			}
			if ( $timestamp === $this->unreleased ) {
				$timestamp      = null;
				$entryTimestamp = new DateTime( 'now', new DateTimeZone( 'UTC' ) );
			} else {
				try {
					$timestamp = new DateTime( $timestamp, new DateTimeZone( 'UTC' ) );
				} catch ( \Exception $ex ) {
					throw new InvalidArgumentException( "Heading has an invalid timestamp: $heading", 0, $ex );
				}
				if ( strtotime( $m[2], 0 ) !== strtotime( $m[2], 1000000000 ) ) {
					throw new InvalidArgumentException( "Heading has a relative timestamp: $heading" );
				}
				$entryTimestamp = $timestamp;
			}
			$entry     = $this->newChangelogEntry(
				$version,
				array(
					'timestamp' => $timestamp,
				)
			);
			$entries[] = $entry;

			if ( '' === $content ) {
				// Huh, no changes.
				continue;
			}

			// Now parse all the subheadings and changes.
			while ( '' !== $content ) {
				$changes                      = array();
				$section                      = explode( "\n", $content );
				foreach ($section as $row) {
					$row = trim($row);
					//remove bullet
					$row = str_replace($this->bullet, '', $row);
					$row_segments = explode(':', $row);

					array_push($changes, array(
						'subheading' => trim($row_segments[0]),
						'content' => trim($row_segments[1])
					));
				}

				foreach ( $changes as $change ) {
					$entry->appendChange(
						$this->newChangeEntry(
							array(
								'subheading' => $change['subheading'],
								'content'    => $change['content'],
								'timestamp'  => $entryTimestamp,
							)
						)
					);
				}
				$content = '';
			}
		}
		print_r($entries);
		$ret->setEntries( $entries );

		return $ret;
	}

	public function format( Changelog $changelog ) {
		$ret = '';
		$dateFormat = 'm/d/Y';
		$bullet = '- ';
		$indent = str_repeat( ' ', strlen( $bullet ) );

		foreach ( $changelog->getEntries() as $entry ) {
			$timestamp = $entry->getTimestamp();
			$ret .= '## ' . $entry->getVersion() . ' - '.$timestamp->format($dateFormat)."\n\n";

			$prologue = trim( $entry->getPrologue() );
			if ( '' !== $prologue ) {
				$ret .= "\n$prologue\n\n";
			}

			foreach ( $entry->getChangesBySubheading() as $heading => $changes ) {
				foreach ( $changes as $change ) {
					$text = trim( $change->getContent() );
					if ( '' !== $text ) {
						$ret    .= $bullet . $heading.': '.str_replace( "\n", "\n$indent", $text ) . "\n";
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