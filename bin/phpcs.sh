#!/usr/bin/env bash
composer install --no-dev

PHP_FILES_CHANGED=""

for FILE in $(echo $CHANGED_FILES | tr ',' '\n')
do
	if [[ $string =~ ".php" ]]; then
		PHP_FILES_CHANGED += "$FILE,"
	fi	
done

if [ "$CHANGED_FILES" != "" ]; then
	echo "Running Code Sniffer."
	./vendor/bin/phpcs --encoding=utf-8 -n -p $CHANGED_FILES
else
	echo "No changed files detected, sniffer not run."
fi

