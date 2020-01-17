#!/bin/sh

# Output colorized strings
#
# Color codes:
# 0 - black
# 1 - red
# 2 - green
# 3 - yellow
# 4 - blue
# 5 - magenta
# 6 - cian
# 7 - white
output() {
	echo "$(tput setaf "$1")$2$(tput sgr0)"
}

if [ ! -d "vendor/" ]; then
	output 1 "./vendor doesn't exist!"
	output 1 "run \"composer install\" before proceeding."
fi


# Convert textdomains
output 3 "Updating package textdomains..."

# Replace text domains within packages with woocommerce
find ./vendor/action-scheduler -iname '*.php' -exec sed -i.bak -e "s/'action-scheduler' /'woocommerce-admin' /g" -e "s/\"action-scheduler\" /'woocommerce-admin' /g" {} \;

# Cleanup backup files
find ./vendor/action-scheduler -name "*.bak" -type f -delete
output 2 "Done!"
