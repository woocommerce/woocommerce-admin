#!/bin/sh
#
# Build a test zip from current branch for uploading to test site
#
WC_ADMIN_PHASE=plugin npm run build
composer install --no-dev
rm woocommerce-admin.zip
./bin/make-zip.sh woocommerce-admin.zip
