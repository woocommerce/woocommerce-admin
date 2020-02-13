#!/usr/bin/env bash

TMPDIR=${TMPDIR-/tmp}
TMPDIR=$(echo $TMPDIR | sed -e "s/\/$//")
WP_CORE_DIR=${WP_CORE_DIR-$TMPDIR/wordpress/}

install_deps() {

	# Script Variables
	WORKING_DIR="$PWD"

	# Activate WooCommerce using wp-cli
	cd "$WP_CORE_DIR"

	curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
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
		php wp-cli.phar plugin activate woocommerce-admin

	fi

	# Back to original dir
	cd "$WORKING_DIR"

}

install_deps
