<?php


use Automattic\Jetpack\Changelog\Changelog;
use Automattic\Jetpack\Changelogger\Config;
use Automattic\Jetpack\Changelogger\Utils;
use Automattic\Jetpack\Changelogger\WriteCommand as JetpackWriteCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use function Wikimedia\quietCall;

/**
 * This class was copied from Jetpack Changelogger package
 * to override writeChangelog method() as it is not currecntly
 * possible to extend the class.
 *
 * "Write" command for the changelogger tool CLI.
 */
class WriteCommand extends JetpackWriteCommand {

	/**
	 * The default command name.
	 *
	 * @var string|null
	 */
	protected static $defaultName = 'write';

	/**
	 * Modified Write the changelog for WC Admin.
	 *
	 * @param InputInterface  $input InputInterface.
	 * @param OutputInterface $output OutputInterface.
	 * @param Changelog       $changelog Changelog.
	 * @return int
	 */
	protected function writeChangelog( InputInterface $input, OutputInterface $output, Changelog $changelog ) {
		$file = Config::changelogFile();
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

}
