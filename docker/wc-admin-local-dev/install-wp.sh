#!/bin/bash -e
if [ -d "wordpress" ]; then
    echo "wordpress directory already exists. Please remove it first."
    exit 0
fi
clear
BASEDIR=$(dirname "$0")
cd $BASEDIR
curl -O https://wordpress.org/latest.tar.gz
tar -zxvf latest.tar.gz
cp wordpress/wp-config-sample.php wordpress/wp-config.php
perl -pi -e "s/database_name_here/woocommerce_dev/g" wordpress/wp-config.php
perl -pi -e "s/username_here/woocommerce_dev/g" wordpress/wp-config.php
perl -pi -e "s/password_here/woocommerce_dev/g" wordpress/wp-config.php
perl -pi -e "s/localhost/db/" wordpress/wp-config.php
perl -pi -e '/DB_COLLATE/ and $_.="define(\x27JETPACK_AUTOLOAD_DEV\x27, true);\n"' wordpress/wp-config.php
chmod 775 wordpress/wp-content
rm latest.tar.gz

cd wordpress/wp-content/plugins
wget https://github.com/woocommerce/woocommerce/releases/download/4.7.1/woocommerce.zip
unzip woocommerce.zip
rm woocommerce.zip