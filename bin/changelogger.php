<?php

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/changelogger/WCAdminFormatter.php';
require_once __DIR__ . '/changelogger/WCAdminWriteCommand.php';

class_alias(WCAdminFormatter::class, Automattic\Jetpack\Changelogger\Plugins\WCAdminFormatter::class);
class_alias(WCAdminWriteCommand::class, Automattic\Jetpack\Changelogger\WriteCommand::class);

require_once __DIR__ . '/../vendor/bin/changelogger';