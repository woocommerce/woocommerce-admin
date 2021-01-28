#!/usr/bin/env bash
CHANGED_FILES=`git diff --name-only --diff-filter=ACMR $TRAVIS_COMMIT_RANGE | grep \\\\.php | awk '{print}' ORS=' '`

if [ "$CHANGED_FILES" != "" ]; then
	echo "Running Code Sniffer."
	cd "$WP_CORE_DIR/wp-content/plugins/woocommerce-admin/"
	./vendor/bin/phpcs --encoding=utf-8 -n -p $CHANGED_FILES
fi

