<?php

use Automattic\Jetpack\Changelog\ChangeEntry;
use Automattic\Jetpack\Changelog\Changelog;
use Automattic\Jetpack\Changelogger\Config;
use Automattic\Jetpack\Changelogger\FormatterPlugin;
use Automattic\Jetpack\Changelogger\Utils;
use Automattic\Jetpack\Changelogger\VersioningPlugin;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Exception\MissingInputException;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\ConfirmationQuestion;
use function Wikimedia\quietCall;

/**
 * This class was copied from Jetpack Changelogger package
 * to override writeChangelog method() as it is not currecntly
 * possible to extend the class.
 *
 * "Write" command for the changelogger tool CLI.
 */
class WCAdminWriteCommand extends Command {

	const OK_EXIT            = 0;
	const NO_CHANGE_EXIT     = 1;
	const ASKED_EXIT         = 2;
	const FATAL_EXIT         = 3;
	const DELETE_FAILED_EXIT = 4;

	/**
	 * The default command name.
	 *
	 * @var string|null
	 */
	protected static $defaultName = 'write';

	/**
	 * The FormatterPlugin in use.
	 *
	 * @var FormatterPlugin
	 */
	protected $formatter;

	/**
	 * The VersioningPlugin in use.
	 *
	 * @var VersioningPlugin
	 */
	protected $versioning;

	/**
	 * Whether we already asked about there being no changes.
	 *
	 * @var bool
	 */
	protected $askedNoChanges = false;

	/**
	 * Modified Write the changelog for WC Admin.
	 *
	 * @param InputInterface  $input InputInterface.
	 * @param OutputInterface $output OutputInterface.
	 * @param Changelog       $changelog Changelog.
	 * @return int
	 */
	protected function writeChangelog( InputInterface $input, OutputInterface $output, Changelog $changelog ) {
		$file = __DIR__ . "/../../readme.txt";

		$output->writeln( "Writing changelog to $file...", OutputInterface::VERBOSITY_DEBUG );
		try {
			$contents = $this->formatter->format( $changelog );
		} catch ( InvalidArgumentException $ex ) {
			$output->writeln( "<error>Failed to write the changelog: {$ex->getMessage()}</>" );
			return self::FATAL_EXIT;
		}

		$pattern = '/^\=\= Unreleased \=\=((?:(?!^\=\=).)+)/ms';
		$replacement = "== Unreleased ==\n\n" . $contents . "\n";

		$readme = file_get_contents( $file );
		$newReadme = preg_replace( $pattern, $replacement, $readme );
		if ( strlen( $newReadme ) === strlen( $readme ) || null === $newReadme ) {
			$output->writeln( "Failed to write the changelog: please check readme.txt format." );
			return self::FATAL_EXIT;
		}

		Utils::error_clear_last();
		quietCall( 'file_put_contents', $file, $newReadme );

		return self::OK_EXIT;
	}

	/**
	 * Configures the command.
	 */
	protected function configure() {
		$this->setDescription( 'Updates the changelog from change files' )
			->addOption( 'release-date', null, InputOption::VALUE_REQUIRED, 'Release date, as a valid PHP date or "unreleased"', 'now' )
			->addArgument( 'version', InputArgument::REQUIRED, "Version to use for the release." );

		try {
			$this->getDefinition()->addOptions( Config::formatterPlugin()->getOptions() );
		} catch ( \Exception $ex ) { // phpcs:ignore Generic.CodeAnalysis.EmptyStatement.DetectedCatch
			// Will handle later.
		}
		try {
			$this->getDefinition()->addOptions( Config::versioningPlugin()->getOptions() );
		} catch ( \Exception $ex ) { // phpcs:ignore Generic.CodeAnalysis.EmptyStatement.DetectedCatch
			// Will handle later.
		}
	}

	/**
	 * Ask to continue.
	 *
	 * @param InputInterface  $input InputInterface.
	 * @param OutputInterface $output OutputInterface.
	 * @param string          $msg Situation being asked about.
	 * @return bool
	 */
	private function askToContinue( InputInterface $input, OutputInterface $output, $msg ) {
		if ( ! $input->isInteractive() ) {
			$output->writeln( "<error>$msg</>" );
			return false;
		}
		try {
			$question = new ConfirmationQuestion( "$msg Proceed? [Y/n] ", null );
			return $this->getHelper( 'question' )->ask( $input, $output, $question );
		} catch ( MissingInputException $ex ) { // @codeCoverageIgnore
			$output->writeln( 'Got EOF when attempting to query user, aborting.', OutputInterface::VERBOSITY_VERBOSE ); // @codeCoverageIgnore
			return false; // @codeCoverageIgnore
		}
	}

	/**
	 * Add the entry to the changelog.
	 *
	 * @param InputInterface  $input InputInterface.
	 * @param OutputInterface $output OutputInterface.
	 * @param Changelog       $changelog Changelog.
	 * @param string          $version Version.
	 * @param ChangeEntry[]   $changes Changes.
	 * @return int
	 */
	protected function addEntry( InputInterface $input, OutputInterface $output, Changelog $changelog, $version, array $changes ) {
		$output->writeln( 'Creating new changelog entry.', OutputInterface::VERBOSITY_DEBUG );
		$data = array(
			'changes'   => $changes,
			'timestamp' => (string) $input->getOption( 'release-date' ),
		);
		if ( 'unreleased' === $data['timestamp'] ) {
			$data['timestamp'] = null;
		}
		try {
			$changelog->addEntry( $this->formatter->newChangelogEntry( $version, $data ) );
		} catch ( InvalidArgumentException $ex ) {
			$output->writeln( "<error>Failed to create changelog entry: {$ex->getMessage()}</>" );
			return self::FATAL_EXIT;
		}
		return self::OK_EXIT;
	}

	/**
	 * Delete the change files.
	 *
	 * @param InputInterface  $input InputInterface.
	 * @param OutputInterface $output OutputInterface.
	 * @param array           $files Files returned from `loadChanges()`.
	 * @return int
	 */
	protected function deleteChanges( InputInterface $input, OutputInterface $output, array $files ) {
		$dir = Config::changesDir();
		$ret = self::OK_EXIT;
		foreach ( $files as $name => $flag ) {
			if ( $flag >= 2 ) {
				continue;
			}
			Utils::error_clear_last();
			$ok = quietCall( 'unlink', $dir . DIRECTORY_SEPARATOR . $name );
			if ( $ok ) {
				$output->writeln( "Deleted change file $name.", OutputInterface::VERBOSITY_DEBUG );
			} else {
				$err = error_get_last();
				$output->writeln( "<warning>Failed to delete $name: {$err['message']}" );
				$ret = self::DELETE_FAILED_EXIT;
			}
		}
		return $ret;
	}

	/**
	 * Load the changes.
	 *
	 * @param InputInterface  $input InputInterface.
	 * @param OutputInterface $output OutputInterface.
	 * @return array Array of [ $code, $changes, $files ].
	 */
	protected function loadChanges( InputInterface $input, OutputInterface $output ) {
		$dir = Config::changesDir();
		if ( ! is_dir( $dir ) ) {
			$this->askedNoChanges = true;
			if ( ! $this->askToContinue( $input, $output, 'Changes directory does not exist, so there are no changes to write!' ) ) {
				return array( self::NO_CHANGE_EXIT, null, null );
			}
			return array( self::OK_EXIT, array(), array() );
		}

		$output->writeln( "Reading changes from $dir...", OutputInterface::VERBOSITY_DEBUG );
		$files   = null; // Make phpcs happy.
		$changes = Utils::loadAllChanges( $dir, Config::types(), $this->formatter, $output, $files );
		$max     = $files ? max( $files ) : 0;
		if ( $max > 0 && ! $this->askToContinue( $input, $output, ( $max > 1 ? 'Errors' : 'Warnings' ) . ' were encountered while reading changes!' ) ) {
			return array( self::ASKED_EXIT, null, null );
		}
		if ( ! $changes && ! $this->askedNoChanges ) {
			$this->askedNoChanges = true;
			if ( ! $this->askToContinue( $input, $output, 'No changes were found!' ) ) {
				return array( self::NO_CHANGE_EXIT, null, null );
			}
		}
		return array( self::OK_EXIT, $changes, $files );
	}

	/**
	 * Deduplicate changes.
	 *
	 * @param InputInterface  $input InputInterface.
	 * @param OutputInterface $output OutputInterface.
	 * @param Changelog       $changelog Changelog.
	 * @param ChangeEntry[]   $changes Changes.
	 * @return int
	 */
	protected function deduplicateChanges( InputInterface $input, OutputInterface $output, Changelog $changelog, array &$changes ) {
		// Deduplicate changes.
		if ( ! $changes ) {
			$output->writeln( 'Skipping deduplication, there are no changes.', OutputInterface::VERBOSITY_DEBUG );
			return self::OK_EXIT;
		}

		$depth = (int) $input->getOption( 'deduplicate' );
		if ( 0 === $depth ) {
			$output->writeln( 'Skipping deduplication, --deduplicate is 0.', OutputInterface::VERBOSITY_DEBUG );
			return self::OK_EXIT;
		}

		$output->writeln( "Deduplicating changes from the last $depth version(s)...", OutputInterface::VERBOSITY_DEBUG );
		$dedup = array();
		foreach ( array_slice( $changelog->getEntries(), 0, $depth ) as $entry ) {
			foreach ( $entry->getChanges() as $change ) {
				$dedup[ $change->getContent() ] = true;
			}
		}
		unset( $dedup[''] );
		if ( $dedup ) {
			$changes = array_filter(
				$changes,
				function ( $change, $name ) use ( $dedup, $output ) {
					if ( isset( $dedup[ $change->getContent() ] ) ) {
						$output->writeln( "Found duplicate change in $name.", OutputInterface::VERBOSITY_DEBUG );
						return false;
					}
					return true;
				},
				ARRAY_FILTER_USE_BOTH
			);
		}
		if ( ! $changes && ! $this->askedNoChanges ) {
			$this->askedNoChanges = true;
			if ( ! $this->askToContinue( $input, $output, 'All changes were duplicates.' ) ) {
				return self::NO_CHANGE_EXIT;
			}
		}
		return self::OK_EXIT;
	}

	/**
	 * Sort changes.
	 *
	 * @param ChangeEntry[] $changes Changes.
	 * @return array
	 */
	protected function sortChanges( array $changes ) {
		$sortConfig = array(
			'ordering'         => Config::ordering(),
			'knownSubheadings' => Config::types(),
		);
		$changes    = array_values( $changes );
		usort(
			$changes,
			function ( $a, $b ) use ( $sortConfig, $changes ) {
				$ret = ChangeEntry::compare( $a, $b, $sortConfig );
				if ( 0 === $ret ) {
					// Stability.
					$ret = array_search( $a, $changes, true ) - array_search( $b, $changes, true );
				}
				return $ret;
			}
		);
		return $changes;
	}

	/**
	 * Executes the command.
	 *
	 * @param InputInterface  $input InputInterface.
	 * @param OutputInterface $output OutputInterface.
	 * @return int 0 If everything went fine, or an exit code.
	 */
	protected function execute( InputInterface $input, OutputInterface $output ) {
		try {
			$this->formatter = Config::formatterPlugin();
			$this->formatter->setIO( $input, $output );
			$this->versioning = Config::versioningPlugin();
			$this->versioning->setIO( $input, $output );
		} catch ( \Exception $ex ) {
			$output->writeln( "<error>{$ex->getMessage()}</>" );
			return self::FATAL_EXIT;
		}
		$this->askedNoChanges = false;

		// Get the changelog.
		$changelog = new Changelog();
		if ( is_int( $changelog ) ) {
			return $changelog;
		}

		// Get the changes.
		list( $ret, $changes, $files ) = $this->loadChanges($input ,$output);
		if ( self::OK_EXIT !== $ret ) {
			return $ret;
		}
		$ret = $this->deduplicateChanges( $input, $output, $changelog, $changes );
		if ( self::OK_EXIT !== $ret ) {
			return $ret;
		}

		if ( self::OK_EXIT !== $ret ) {
			return $ret; // @codeCoverageIgnore
		}
		$changes = $this->sortChanges( $changes );
		$version = $input->getArgument('version');

		// Add the new changelog entry.
		$ret = $this->addEntry( $input, $output, $changelog, $version, $changes );
		if ( self::OK_EXIT !== $ret ) {
			return $ret;
		}

		// Write the changelog.
		$ret = $this->writeChangelog( $input, $output, $changelog );
		if ( self::OK_EXIT !== $ret ) {
			return $ret;
		}

		// Delete change files and return.
		return $this->deleteChanges( $input, $output, $files );
	}
}
