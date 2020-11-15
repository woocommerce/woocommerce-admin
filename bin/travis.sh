#!/usr/bin/env bash
# usage: travis.sh before|after

if [ "$1" == 'before' ]; then
	cd "$WP_CORE_DIR/wp-content/plugins/woocommerce-admin/"
	npm run build:feature-config
	
	# Jetpack Autoloader breaks in composer 2.0.7, until thats
	# resolved we need to temporarily fix the composer version
	# to 2.0.6
	composer self-update 2.0.6
	if [[ "$COMPOSER_DEV" == "1" ]]; then
		composer install
	else
		composer install --no-dev
	fi
fi
