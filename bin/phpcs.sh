#!/usr/bin/env bash
cd "$WP_CORE_DIR/wp-content/plugins/woocommerce-admin/"
CHANGED_FILES=`git diff --name-only --diff-filter=ACMR $COMMIT_START...$COMMIT_END | grep \\\\.php | awk '{print}' ORS=' '`

if [ "$CHANGED_FILES" != "" ]; then
	echo "Running Code Sniffer."
	cd "$WP_CORE_DIR/wp-content/plugins/woocommerce-admin/"
	./vendor/bin/phpcs --encoding=utf-8 -n -p $CHANGED_FILES
fi

