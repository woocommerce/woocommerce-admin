<?php

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/changelogger/WCAdminFormatter.php';

class_alias(WCAdminFormatter::class, Automattic\Jetpack\Changelogger\Plugins\WCAdminFormatter::class);

require_once __DIR__ .'/../vendor/bin/changelogger';