#!/usr/bin/env bash

DB_NAME=$1
DB_USER=$2
DB_PASS=$3
DB_HOST=${4-localhost}
TMPDIR=${TMPDIR-/tmp}
TMPDIR=$(echo $TMPDIR | sed -e "s/\/$//")
WP_CORE_DIR=${WP_CORE_DIR-$TMPDIR/wordpress/}

install_deps() {

	# Script Variables
	WP_SITE_URL="http://local.wordpress.test"
	WORKING_DIR="$PWD"

	# Set up WordPress using wp-cli
	mkdir -p "$WP_CORE_DIR"
	cd "$WP_CORE_DIR"

	curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
	php wp-cli.phar core config --dbname=$DB_NAME --dbuser=$DB_USER --dbpass=$DB_PASS --dbhost=$DB_HOST --dbprefix=wptests_
	php wp-cli.phar core install --url="$WP_SITE_URL" --title="Example" --admin_user=admin --admin_password=password --admin_email=info@example.com --path=$WP_CORE_DIR --skip-email

	# Activate WooCommerce using wp-cli
	php wp-cli.phar plugin activate woocommerce

	# Install woocommerce-admin, the correct branch, if running from Travis CI.
	if [ "${TRAVIS}" = "true" ]; then
		# Default to the pull request branch if this is a PR, otherwise pushed branch.
		BRANCH=${TRAVIS_PULL_REQUEST_BRANCH:-$TRAVIS_BRANCH}
		# Default to the pull request repo if this is a PR, otherwise default.
		REPO=${TRAVIS_PULL_REQUEST_SLUG:-$TRAVIS_REPO_SLUG}
		BRANCH="$(sed 's/#/%23/' <<<$BRANCH)"
		# Checkout plugin via Git so all files are gathered.
		cd "$WP_CORE_DIR/wp-content/plugins"
		git clone https://github.com/$REPO.git
		cd woocommerce-admin
		git fetch origin $BRANCH
		git checkout -B $BRANCH origin/$BRANCH
		# Activate the plugin
		cd "$WP_CORE_DIR"
		php wp-cli.phar plugin activate woocommerce-admin --path=$WP_CORE_DIR

	fi

	# Back to original dir
	cd "$WORKING_DIR"

}

install_deps
