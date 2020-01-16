#!/usr/bin/env bash
# usage: travis.sh before|after

if [ "$1" == 'before' ]; then
	cd "$WP_CORE_DIR/wp-content/plugins/woocommerce-admin/"
	npm run build:feature-config
	# Load PHPUnit version in dev dependencies for PHP ^7.2 until WP unit tests support PHPUnit 8.X
	if [[ "$COMPOSE_DEV" == "1" ]]; then
		composer install
	else
		composer install --no-dev
	fi

fi
