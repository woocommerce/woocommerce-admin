#!/usr/bin/env bash
composer install --no-dev

if [ "$CHANGED_FILES" != "" ]; then
	echo "Running Code Sniffer."
	./vendor/bin/phpcs --encoding=utf-8 -n -p $CHANGED_FILES
else
	echo "No changed files detected, sniffer not run."
fi

