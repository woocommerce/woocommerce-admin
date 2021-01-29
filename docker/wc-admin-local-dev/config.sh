#!/bin/bash
BASEDIR=$(dirname "$0")

replace() {
    find=$1
    replace=$2
    filename=$3
    sed -i.bak "s~$find~$replace~" $filename
    rm $filename.bak
}

deleteLineStartingWith() {
    sed "/^$1/d" "$2" > "$2.tmp"
    mv "$2.tmp" "$2"
}

insertAtFirstLine() {
    cat <(echo "$1") "$2" > "$2.tmp"
    mv "$2.tmp" "$2"
}

cp "$BASEDIR/sample.env" "$BASEDIR/.env"
cp "$BASEDIR/Dockerfile.sample" "$BASEDIR/Dockerfile"

read -p "PHP Version (default: php:7.4-fpm):" php_version
php_version=${php_version:-7.4-fpm}
replace ":php_version" "php:$php_version" "$BASEDIR/Dockerfile";

read -p "Nginx Port (default: 8888): " nginx_port
nginx_port=${nginx_port:-8888}
replace ":nginx_port" "$nginx_port" "$BASEDIR/.env"

read -p "Mysql Port (default: 3307): " mysql_port
mysql_port=${mysql_port:-3307}
replace ":mysql_port" "$mysql_port" "$BASEDIR/.env"

replace ":home_dir" "$HOME" "$BASEDIR/.env"

chmod +x "$BASEDIR/install-wp.sh";
bash "$BASEDIR/install-wp.sh";