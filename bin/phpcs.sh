#!/usr/bin/env bash
composer install

PHP_FILES_CHANGED=""

for FILE in $(echo $CHANGED_FILES | tr ',' '\n')
do
	if [[ $string =~ ".php" ]]; then
		PHP_FILES_CHANGED += "$FILE,"
	fi	
done

if [ "$CHANGED_FILES" != "" ]; then
	echo "Running Code Sniffer."
	./vendor/bin/phpcs --encoding=utf-8 -n -p $PHP_FILES_CHANGED
else
	echo "No changed files detected, sniffer not run."
fi

