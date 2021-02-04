# WooCommerce Docker Setup with WP-ENV

Docker development setup for WooCommerce Admin with WP-ENV.

## Prerequisites

Please install WP-ENV before getting started. You can find more about WP-ENV on [here](https://github.com/WordPress/gutenberg/tree/master/packages/env).

The following command installs WP-ENV globally.

`npm -g i @wordpress/env`


## Getting Started

1. Navigate to the root of WooCommerce Admin source code.
2. Start the docker container by running `wp-env start`

You should see the following output

```
WordPress development site started at http://localhost:8888/
WordPress test site started at http://localhost:8889/
MySQL is listening on port 55003
```

The port # might be different depending on your `.wp-env.override.json` configuration.

## Overriding the Default Configuration

The default configuration comes with PHP 7.4, WooCommerce 5.0, and a few WordPress config values.

You can create `.wp-env.override.json` file and override the default configuration values.

You can find more about `.wp-env.override.json` configuration [here](https://github.com/WordPress/gutenberg/tree/master/packages/env#wp-envoverridejson).

**Example: Overriding PHP version to 8.0**

Create `.wp-env.override.json` in the root directory with the following content.


```json
{
	"phpVersion": "8.0"
}
```

Once you have the file, restart the container with `wp-env restart` command.

## Getting Started with Developing

The current WP-ENV does not support creating a custom `Dockerfile`. Due to the limitation, we need to install node and composer manually. There is a [draft PR](https://github.com/WordPress/gutenberg/pull/26047) to improve the limitation. You need to run this command every time you stop and start the container, but this won't take a minute.

`npm run docker-dev -- install`


### Using Docker for Backend Only

Since you already have node on your client, you can use WC Admin Docker setup just for the backend.

Run the following commands in your client.

1. `npm install`
2. `npm run dev`

Run the following command to install composer packages for the backend (PHP).

`npm run docker-dev -- composer-install`


### Using Docker for Both Backend and Frontend

Run `npm run docker-dev -- setup`.

The command runs `npm install`, `npm run dev`, and `composer install` in the Docker container.


## Accessing Mysql

The Mysql port can change when you restart your container.

You can get the current Mysql port with `npm run docker-env -- mysql-port` command.


1. Open your choice of Mysql tool.
2. Use the following values to access the Mysql container.
3. You can omit the username and password.


| Name | Value |
|--------|-----|
|  Host  | 127.0.0.1 |
| Username |  |
| Password |  |
| Port | Port from the command |

## Available Commands

The following commands can be used to interact with the WP-ENV Docker container.

`npm run docker-dev -- {command}`

| Command | Description |
|---------|------------|
| help | Display list of avaialble commands and options|
| ssh | SSH into the container|
| mysql-port | Outputs the current Mysql port|
| composer-install | Run `composer install` in the container|
| npm-start| Run `npm start` in the container|
|setup | Run `npm install`, `npm run dev`, and `composer install` in the container|
|install| Install node and composer in the container|