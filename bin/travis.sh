#!/usr/bin/env bash
# usage: travis.sh before|after

if [ "$1" == 'before' ]; then
	cd "$WP_CORE_DIR/wp-content/plugins/woocommerce-admin/"
	npm run build:feature-config
<<<<<<< HEAD
	# This is a temporary solution for a breaking change in composer 2.0.7
	# to the Jetpack autoloader. Remove this once this has been resolved.
=======
>>>>>>> origin/main
	composer self-update 2.0.6
	if [[ "$COMPOSER_DEV" == "1" ]]; then
		composer install
	else
		composer install --no-dev
	fi
fi
