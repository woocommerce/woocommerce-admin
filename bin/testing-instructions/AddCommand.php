<?php

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\Question;

class AddCommand extends Command {

	/**
	 * The default command name
	 *
	 * @var string|null
	 */
	protected static $defaultName = 'add';

	private $config;

	public function __construct(array $config) {
		parent::__construct();
	    $this->config = $config;
	}

	/**
	 * Configures the command.
	 */
	protected function configure() {
		$this->setDescription( 'Adds a change file' );
	}


	/**
	 * Executes the command.
	 *
	 * @param InputInterface $input InputInterface.
	 * @param OutputInterface $output OutputInterface.
	 *
	 * @return int
	 */
	protected function execute( InputInterface $input, OutputInterface $output ) {
		$question_helper = $this->getHelper( 'question' );

		$name_question = new Question( 'Name your testing instruction: ' );
		$name = $question_helper->ask( $input, $output, $name_question );
		if ( null === $name ) {
			$output->writeln( 'Got EOF when attempting to query user, aborting.');
			return 1;
		}

		$pr_question = new Question( 'What is the PR #? ' );
		$pr_number = $question_helper->ask( $input, $output, $pr_question );

		if ( ! is_dir( $this->config['segment_file_dir'] ) ) {
			$output->writeln( "Semgent file directory `{$this->config['segment_file_dir']} does not exist, aborting" );
			return 1;
		}

		$segment_filename = "{$pr_number}.md";
		$content = "### {$name} #{$pr_number}\n\n";

		file_put_contents( $this->config['segment_file_dir'] . '/' . $segment_filename, $content );

		$output->writeln( "\n". $segment_filename . ' has been created. Please fill out your testing instructions.' );
	}
}
