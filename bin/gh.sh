cd "$WP_CORE_DIR/wp-content/plugins/woocommerce-admin/"
npm run build:feature-config	
composer install --no-dev
	
# phpunit ^7 is not supported in php 7.0
if [[ "$PHPUNIT" == "6" ]]; then
  curl -fsSL -o vendor/bin/phpunit https://phar.phpunit.de/phpunit-6.5.9.phar --create-dirs && chmod +x vendor/bin/phpunit
fi
