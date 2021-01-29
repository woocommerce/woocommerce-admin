docker-up: 
	docker-compose up -d
docker-stop:
	docker-compose stop
docker-logs:
	docker-compose logs -f
docker-build:
	docker-compose build
docker-ssh: 
	docker-compose exec php /bin/bash

npm-start:
	docker-compose exec php /bin/bash -c "cd /opt/wordpress/wp-content/plugins/woocommerce-admin; npm run start"
composer-install:
	docker-compose exec php /bin/bash -c \
	"cd /opt/wordpress/wp-content/plugins/woocommerce-admin; composer install"
build-run: 
	docker-compose exec php /bin/bash -c \
	"cd /opt/wordpress/wp-content/plugins/woocommerce-admin; npm run build"
dev: 
	docker-compose exec php /bin/bash -c \
	"cd /opt/wordpress/wp-content/plugins/woocommerce-admin; npm run dev"

npm-install: 
	docker-compose exec php /bin/bash -c \
	"cd /opt/wordpress/wp-content/plugins/woocommerce-admin; npm install --prefer-offline --no-audit"

setup: npm-install composer-install dev 