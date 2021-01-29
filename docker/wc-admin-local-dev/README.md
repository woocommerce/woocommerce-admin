# WooCommerce Local Docker Setup

This is PHP + Nginx + Mysql Docker setup for local WooCommerce Admin development.

You should have the latest Docekr and NPM installed to get started.

## Getting Started

1. From the root of WC Admin directory, run `npm run docker-dev:config`. You can choose Nginx and Mysql port during the config process.
2. Run `npm run docker-dev:up`. This will run the docker containers.
3. Run `npm run docker-dev:setup`. This will run npm install, composer install, and the initial build process.
4. Step #3 might take over 10+ minutes if it's your first time running it. Grab a cup of coffee :coffee: 
5. Once the setup part is done, access http://localhost:8888 to get started.

## Developing

Unless you run `npm run docker-dev:stop` to shut down the docekr containers, you don't have to run the `npm run *` commands next time you want to access http://localhost:8888. 

If you are working on the frontend files, run the file watcher `npm run docker-dev:npm-start`. 

If you want to SSH to the PHP container, run `npm run docker-dev:ssh`.


## Accessing Mysql

1. Open your choice of Mysql tool.
2. Use the following values to access the Mysql container 


| Name | Value |
|--------|-----|
|  Host  | 127.0.0.1 |
| Username | woocommerce_dev |
| Password | woocommerce_dev |
| Port | 3307 |


## Changing PHP Version

It comes with PHP 7.4 by default. If you want to change the version, you can change it during the configuration process.

1. Grab a tag you want to use from [PHP Docker](https://hub.docker.com/_/php). You want to grab a tag that contains `fpm` in it.
2. Run `npm docker-dev:config` again and paste the tag from step #1 for the first question.
3. Stop the currently running containers by executing `npm run docker-dev:stop`
4. Rebuild the containers by executing `npm run docker-dev:build`
5. Run the containers again by executing `npm run docker-dev:up`
