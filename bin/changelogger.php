<?php

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/changelogger/WriteCommand.php';
require_once __DIR__ . '/changelogger/WCAdminFormatter.php';
require_once __DIR__ . '/changelogger/CommandLoader.php';

class_alias(WCAdminFormatter::class, Automattic\Jetpack\Changelogger\Plugins\WCAdminFormatter::class);

$app = new Automattic\Jetpack\Changelogger\Application();
$app->setCommandLoader(new CommandLoader());
exit( $app->run() );