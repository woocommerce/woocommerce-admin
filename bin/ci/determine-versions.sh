if awk 'BEGIN {exit !('$PHP_VERSION' < '7.1')}'; then
    $PHPUNIT_VERSION = '6.5.9'
fi

# Strip the last number. e.g. 4.9.1 becomes 4.9
$WC_VERSION_MAJOR = ${WC_VERSION%.*}

if awk 'BEGIN {exit !('$WC_VERSION' < '4.8')}'; then
    $COMPOSER_VERSION = '1.10.19'
fi

