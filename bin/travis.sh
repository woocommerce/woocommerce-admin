#!/usr/bin/env bash
# usage: travis.sh before|after

if [ $1 == 'before' ]; then

	# composer global require "phpunit/phpunit=6.*"

	if [[ ${RUN_PHPCS} == 1 ]]; then
		composer install
	fi

	if [[ ${RUN_JS} == 1 ]]; then
		sudo rm -rf ~/.nvm
  		curl -sL "https://deb.nodesource.com/setup_${NODE_RELEASE}" | sudo -E bash -
  		sudo apt-get install -y nodejs
  		npm install
	fi

fi
