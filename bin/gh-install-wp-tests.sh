#!/usr/bin/env bash

if [ $# -lt 3 ]; then
	echo "usage: $0 <db-name> <db-user> <db-pass> [db-host] [wp-version] [skip-database-creation]"
	exit 1
fi

DB_NAME=$1
DB_USER=$2
DB_PASS=$3
DB_HOST=${4-localhost}
SKIP_DB_CREATE=${5-false}

TMPDIR=${TMPDIR-/tmp}
TMPDIR=$(echo $TMPDIR | sed -e "s/\/$//")
WP_TESTS_DIR=${WP_TESTS_DIR-$TMPDIR/wordpress-tests-lib}
WP_CORE_DIR=${WP_CORE_DIR-$TMPDIR/wordpress/}

download() {
    if [ `which curl` ]; then
        curl -s "$1" > "$2";
    elif [ `which wget` ]; then
        wget -nv -O "$2" "$1"
    fi
}

if [[ $WP_VERSION =~ ^[0-9]+\.[0-9]+$ ]]; then
	WP_TESTS_TAG="branches/$WP_VERSION"
elif [[ $WP_VERSION =~ [0-9]+\.[0-9]+\.[0-9]+ ]]; then
	if [[ $WP_VERSION =~ [0-9]+\.[0-9]+\.[0] ]]; then
		# version x.x.0 means the first release of the major version, so strip off the .0 and download version x.x
		WP_TESTS_TAG="tags/${WP_VERSION%??}"
	else
		WP_TESTS_TAG="tags/$WP_VERSION"
	fi
fi

set -ex

install_wp() {

	if [ -d $WP_CORE_DIR ]; then
		return;
	fi

	mkdir -p $WP_CORE_DIR
	download https://api.wordpress.org/core/version-check/1.7/ $TMPDIR/wp-latest.json
	if [[ $WP_VERSION =~ [0-9]+\.[0-9]+\.[0] ]]; then
		# version x.x.0 means the first release of the major version, so strip off the .0 and download version x.x
		LATEST_VERSION=${WP_VERSION%??}
	else
		# otherwise, scan the releases and get the most up to date minor version of the major release
		local VERSION_ESCAPED=`echo $WP_VERSION | sed 's/\./\\\\./g'`
		LATEST_VERSION=$(grep -o '"version":"'$VERSION_ESCAPED'[^"]*' $TMPDIR/wp-latest.json | sed 's/"version":"//' | head -1)
	fi
			
	if [[ -z "$LATEST_VERSION" ]]; then
		local ARCHIVE_NAME="wordpress-$WP_VERSION"
	else
		local ARCHIVE_NAME="wordpress-$LATEST_VERSION"
	fi

	download https://wordpress.org/${ARCHIVE_NAME}.tar.gz  $TMPDIR/wordpress.tar.gz
	tar --strip-components=1 -zxmf $TMPDIR/wordpress.tar.gz -C $WP_CORE_DIR
	download https://raw.github.com/markoheijnen/wp-mysqli/master/db.php $WP_CORE_DIR/wp-content/db.php
}

install_test_suite() {
	# portable in-place argument for both GNU sed and Mac OSX sed
	if [[ $(uname -s) == 'Darwin' ]]; then
		local ioption='-i .bak'
	else
		local ioption='-i'
	fi

	# removes testing suite
	rm -rf $WP_TESTS_DIR

	# set up testing suite if it doesn't yet exist
	if [ ! -d $WP_TESTS_DIR ]; then
		# set up testing suite
		mkdir -p $WP_TESTS_DIR
		svn co  https://develop.svn.wordpress.org/${WP_TESTS_TAG}/tests/phpunit/includes/ $WP_TESTS_DIR/includes
		svn co  https://develop.svn.wordpress.org/${WP_TESTS_TAG}/tests/phpunit/data/ $WP_TESTS_DIR/data
	fi

	if [ ! -f wp-tests-config.php ]; then
		download https://develop.svn.wordpress.org/${WP_TESTS_TAG}/wp-tests-config-sample.php "$WP_TESTS_DIR"/wp-tests-config.php
		# remove all forward slashes in the end
		WP_CORE_DIR=$(echo $WP_CORE_DIR | sed "s:/\+$::")
		sed $ioption "s:dirname( __FILE__ ) . '/src/':'$WP_CORE_DIR/':" "$WP_TESTS_DIR"/wp-tests-config.php
		sed $ioption "s/youremptytestdbnamehere/$DB_NAME/" "$WP_TESTS_DIR"/wp-tests-config.php
		sed $ioption "s/yourusernamehere/$DB_USER/" "$WP_TESTS_DIR"/wp-tests-config.php
		sed $ioption "s/yourpasswordhere/$DB_PASS/" "$WP_TESTS_DIR"/wp-tests-config.php
		sed $ioption "s|localhost|${DB_HOST}|" "$WP_TESTS_DIR"/wp-tests-config.php
	fi

}

install_db() {
	# drop existing database
	echo "DROP DATABASE IF EXISTS $DB_NAME" | mysql -uroot -e --password="$DB_PASS"
	# mysqladmin drop -f $DB_NAME --user="$DB_USER" --password="$DB_PASS"$EXTRA 2>/dev/null || true

	# create database
  echo "CREATE DATABASE IF NOT EXISTS $DB_NAME" | mysql -uroot -e --password="$DB_PASS" $EXTRA	
}

install_deps() {

	# Script Variables
	WP_SITE_URL="http://local.wordpress.test"
	WORKING_DIR="$PWD"

	# Set up WordPress using wp-cli
	mkdir -p "$WP_CORE_DIR"
	cd "$WP_CORE_DIR"

	curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar

	# delete existing wp-config and woocommerce repository
	rm -f wp-config.php
	rm -rf wp-content/plugins/woocommerce

	php wp-cli.phar core config --dbname=$DB_NAME --dbuser=root --dbpass=$DB_PASS --dbhost=localhost --dbprefix=wptests_ --allow-root
	php wp-cli.phar core install --url="$WP_SITE_URL" --title="Example" --admin_user=admin --admin_password=password --admin_email=info@example.com --path=$WP_CORE_DIR --skip-email --allow-root

	# Install WooCommerce (latest non-hyphenated (beta, RC) tag)
	if [[ "$WC_VERSION" == "" ]]; then
		LATEST_WC_TAG="$(git ls-remote --tags https://github.com/woocommerce/woocommerce.git | awk '{print $2}' | sed 's/^refs\/tags\///' | grep -E '^[0-9]\.[0-9]\.[0-9]$' | sort -V | tail -n 1)"
	else
		LATEST_WC_TAG="$WC_VERSION"
	fi
	cd "wp-content/plugins/"
	# As zip file does not include tests, we have to get it from git repo.
	git clone --depth 1 --branch $LATEST_WC_TAG https://github.com/woocommerce/woocommerce.git

	# Bring in WooCommerce Core dependencies
	cd "woocommerce"
 	composer install --no-dev

	cd "$WP_CORE_DIR"
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

install_wp
install_test_suite
install_db
install_deps
