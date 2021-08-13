<?php // phpcs:ignore WordPress.Files.FileName.NotHyphenatedLowercase

use Automattic\Jetpack\Changelog\ChangeEntry;
use Automattic\Jetpack\Changelog\Changelog;
use Automattic\Jetpack\Changelog\ChangelogEntry;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * "Add" command for the changelogger tool CLI.
 * @property Config config
 */
class WriteCommand extends Command {


	/**
	 * The default command name
	 *
	 * @var string|null
	 */
	protected static $defaultName = 'write';

	/**
	 * Bullet for changes.
	 *
	 * @var string
	 */
	protected $bullet = '-';

	/**
	 * Github username and personal token.
	 * @var array
	 */
	protected $githubCredentials;

	/**
	 * Jetpack Changelog formatter for WCA changelog.
	 *
	 * @var WCAdminFormatter
	 */
	protected $changeloggerFormatter;

	/**
	 * WriteCommand constructor.
	 *
	 * @param Config $config
	 */
	public function __construct(Config $config) {
	    $this->config = $config;
	    $this->changeloggerFormatter = new WCAdminFormatter();
		parent::__construct();
	}

	/**
	 * Configures the command.
	 */
	protected function configure() {
		$this->setDescription( 'Generate test instructions from a given version.' )
			->addArgument( 'version', InputArgument::REQUIRED, 'Release version from changelog.txt.' )
			->addOption( 'save-to', null, InputOption::VALUE_REQUIRED, 'Specificity a file path to save the output.' );
	}

	/**
	 * Executes the command.
	 *
	 * @param InputInterface $input InputInterface.
	 * @param OutputInterface $output OutputInterface.
	 *
	 * @return bool
	 * @throws Exception
	 */
	protected function execute( InputInterface $input, OutputInterface $output ) {
		$version = $input->getArgument( 'version' );
		$saveTo = $input->getOption( 'save-to' );
		if ( null === $saveTo ) {
			$saveTo = $this->config->getOutputFilePath();
		}

		$changelog = $this->changeloggerFormatter->parse( file_get_contents( $this->config->getChangelogFilepath() ) );
		$this->githubCredentials = $this->config->getGithubCredentials();

		if ( null === $this->githubCredentials['token'] ) {
			$output->writeln("
				<error>Github token is missing. Please refer to the README.md to set Github credentials.</>
			");
			return 1;
		}

		if ( null === $this->githubCredentials['username'] ) {
			$output->writeln("
				<error>Github username is missing. Please refer to the README.md to set Github credentials.</>
			");
			return 1;
		}

		$entry = $this->getChangelogEntryByVersion( $changelog, $version );

		if ( null === $entry ) {
			$output->writeln( "<error>{$version} does not exist.</>" );
			return 1;
		}
		
		$prs = $this->extractPrNumbers( $entry->getChanges() );
		$prContents = $this->getPrContents( $prs );

		if ( count($prContents) === 0 ) {
			$output->writeln("<error>PRs in version {$version} doesn't have any test instructions</>");
			return 0;
		}

		$testingInstructionsPath = $this->config->getOutputFilePath();
		$testingInstructions = $this->buildTestInstructions( $testingInstructionsPath, $prContents, $version );


		file_put_contents( $saveTo, $testingInstructions );
		$output->writeln( "Successfully saved to {$saveTo}" );

		return 0;
	}

	/**
	 * Build new TESTING-INSTRUCTIONS.md content by inserting $prContents.
	 *
	 * @param string $testingInstructionsPath Path of TESTING-INSTRUCTIONS.md
	 * @param array $prContents Array of PR content
	 * @param string $version Target version
	 *
	 * @return string
	 */
	protected function buildTestInstructions( $testingInstructionsPath, $prContents, $version ) {
		// Get the content of the existing TESTING-INSTRUCTIONS.md.
		$testingInstructions = file( $testingInstructionsPath );

		$output = array();

		// Get the first line (heading) from the TESTING-INSTRUCTIONS.md.
		array_push( $output, array_shift( $testingInstructions ) );

		// Put the version.
		array_push( $output, '## '.$version );

		foreach ( $prContents as $pr => $prContent ) {
			if ( empty( $prContent['testInstructions'] ) ) {
				continue;
			}
			array_push( $output, '### '.$prContent[ 'title' ].' #'.$pr );
			array_push( $output, $prContent[ 'testInstructions' ] );
		}

		// Put the remaining contents from TESTING-INSTRUCTIONS.md.
		foreach ( $testingInstructions as $testingInstruction ) {
			array_push( $output, $testingInstruction );
		}

		return implode( "\n", $output);
	}

	/**
	 * Get ChangelogEntry by the given version.
	 * 
	 * @param Changelog $changelog
	 * @param $version
	 *
	 * @return ChangelogEntry|null
	 */
	protected function getChangelogEntryByVersion( Changelog $changelog, $version ) {
		foreach ( $changelog->getEntries() as $entry ) {
			if ( $entry->getVersion() === $version ) {
				return $entry;
			}
		}

		return null;
	}

	/**
	 * Extract testing instructions from the PR description.
	 *
	 * @param string $body PR description body.
	 *
	 * @return string Testing instructions.
	 */
	protected function getTestInstructions( $body ) {
		// add additinal ### to make the regex working.
		$body   .= "\n###";
		$pattern = '/### (Detailed test instructions:)\R+(.+?)(?=\R+###)/s';
		preg_match( $pattern, $body, $matches );

		if ( 3 === count( $matches ) ) {
			$matches[2] = strtr($matches[2], array(
				'No changelog required.' => '',
				'No changelog required' => '',
				'- [x] Include test instructions in the release' => '',
				'- [ ] Include test instructions in the release' => ''
			));

			//Remove <!-- --> or <!--- ---> comments.
			return preg_replace('/(?=<!--)([\s\S]*?)-->/', '', $matches[2]);
		}

		return '';
	}

	/**
	 * Extract PR #s from the change entries.
	 *
	 * @param ChangeEntry[] $changeEntires
	 *
	 * @return array
	 * @throws Exception
	 */
	protected function extractPrNumbers( $changeEntires = [] ) {
		$prs = [];
		foreach ( $changeEntires as $changeEntry ) {
			preg_match( "/#[0-9]+/", $changeEntry->getContent(), $matches );
			if ( count( $matches ) ) {
				array_push( $prs, str_replace( "#", "", $matches[0] ) );
			} else {
				throw new Exception( "Unable to find a PR # in '{$changeEntry->getContent()}'" );
			}
		}

		return $prs;
	}

	/**
	 * Get the PR contents.
	 *
	 * @param array $prs PR numbers.
	 *
	 * @return array
	 * @throws Exception
	 */
	protected function getPrContents( array $prs ) {
		$authorization = 'Basic '. base64_encode(
			$this->githubCredentials['username'].':'.$this->githubCredentials['token']
		);

		$prs = array_map( function( $pr ) use ( $authorization ) {
			return array(
				'url' => "https://api.github.com/repos/" . $this->config->getRepositoryPath() . "/pulls/{$pr}",
				'headers' => array (
					'Authorization' => $authorization
				)
			);
		}, $prs );

		$responses = array();
		foreach ( array_chunk( $prs, 5 ) as $chunk ) {
			$chunk_responses = Requests::request_multiple( $chunk );
			foreach ( $chunk_responses as $chunk_response ) {
				array_push( $responses, $chunk_response );
			}
		}

		$contents = array();

		foreach ( $responses as $response ) {

			if ( 200 !== $response->status_code ) {
				throw new Exception("Unable to retrieve content for the PR from {$response->url}");
			}

			$body = json_decode ($response->body );
			if ( false === $this->shouldIncludeTestInstructions($body) ) {
				continue;
			}

			$testInstruction = $this->getTestInstructions( $body->body );
			if ( '' == $testInstruction ) {
				continue;
			}

			$contents[ $body->number ] = array(
				'title' => $body->title,
				'number' => $body->number,
				'testInstructions' => $testInstruction
			);
		}

		return $contents;
	}

	protected function shouldIncludeTestInstructions( $body ) {
		foreach ( $body->labels as $label ) {
			if ( 'no release testing instructions' === $label->name ) {
				return false;
			}
		}

		return true;
	}
}
