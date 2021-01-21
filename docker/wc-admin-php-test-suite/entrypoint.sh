#!/bin/bash

# Function to install the test suite.
function install {
	# Delete previous state.
	rm -f /tmp/.INSTALLED_WC_VERSION

	# Run the install script.
	bin/install-wp-tests.sh $DB_NAME $DB_USER $DB_PASS $DB_HOST latest true

	# Remember the installed WooCommerce version.
	echo "$WC_VERSION" > /tmp/.INSTALLED_WC_VERSION
}

# Run the install script if the installed WooCommerce version is unknown.
if [ ! -f /tmp/.INSTALLED_WC_VERSION ]; then
	install
else
	# Run the install script if the WooCommerce version has changed.
	INSTALLED_WC_VERSION=`cat /tmp/.INSTALLED_WC_VERSION`
	if [ "$WC_VERSION" != "$INSTALLED_WC_VERSION" ]; then
		install
	fi
fi

# Run the install script if the WordPress directory is not found.
if [ ! -d /tmp/wordpress-tests-lib ]; then
	install
fi

exec phpunit "$@"
