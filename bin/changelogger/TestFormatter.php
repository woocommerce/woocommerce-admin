<?php

use Automattic\Jetpack\Changelogger\FormatterPlugin;
use Automattic\Jetpack\Changelogger\PluginTrait;
require_once 'WCAdminFormatter.php';

class TestFormatter extends WCAdminFormatter {
    /**
	 * Bullet for changes.
	 *
	 * @var string
	 */
	private $bullet = '<----TEST BULLET---->';
}