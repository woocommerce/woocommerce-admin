module.exports = {
	'mysql-port': {
		type: 'custom',
		describe: 'Get the current Mysql Port',
		handler: './mysql-port',
	},
	ssh: {
		type: 'docker',
		describe: 'SSH into the container',
		commands: [],
	},
	install: {
		type: 'docker',
		describe: 'Install node, composer, and git',
		commands: [
			'cd ~',
			'curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh',
			'bash nodesource_setup.sh',
			'curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - ',
			'echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list',
			'apt-get update -y',
			'apt-get install -y nodejs git',
			"php -r \"copy('https://getcomposer.org/installer', 'composer-setup.php');\"",
			'php composer-setup.php --version=1.10.16 --install-dir=/usr/local/bin --filename=composer',
		],
	},
	setup: {
		type: 'docker',
		describe: 'Run npm install, composer install, and npm run dev',
		commands: [
			'cd /var/www/html/wp-content/plugins/woocommerce-admin',
			'npm install',
			'composer install',
			'npm run dev',
		],
	},
	'composer-install': {
		type: 'docker',
		describe: 'Run composer install',
		commands: [
			'cd /var/www/html/wp-content/plugins/woocommerce-admin',
			'composer install',
		],
	},
	'npm-start': {
		type: 'docker',
		describe: 'Run npm start',
		commands: [
			'cd /var/www/html/wp-content/plugins/woocommerce-admin',
			'npm start',
		],
	},
};
