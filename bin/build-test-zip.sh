#!/bin/sh
#
# Build a test zip from current branch for uploading to test site
#
npm run build
composer install
rm woocommerce-admin.zip
zip -r woocommerce-admin.zip ./ -x@\.zipignore
