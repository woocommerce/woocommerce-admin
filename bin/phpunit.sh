#!/usr/bin/env bash
WORKING_DIR="$PWD"
cd "$WP_CORE_DIR/wp-content/plugins/woocommerce-admin/"
./vendor/bin/phpunit --version

if [[ ${RANDOM_ORDER} == 1 ]]; then
	./vendor/bin/phpunit -c phpunit.xml.dist --order-by=random
else
	./vendor/bin/phpunit -c phpunit.xml.dist
fi
TEST_RESULT=$?
cd "$WORKING_DIR"
exit $TEST_RESULT
