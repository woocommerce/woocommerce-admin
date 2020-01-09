#!/usr/bin/env bash
# usage: travis.sh before|after

if [ $1 == 'before' ]; then
	cd "$WP_CORE_DIR/wp-content/plugins/woocommerce-admin/"
	npm run build:feature-config
	composer install

	if [[ ${RANDOM_ORDER} == 1 ]]; then
		composer require phpunit/phpunit:~7.4
	fi
fi
