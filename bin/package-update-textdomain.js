const wpTextdomain = require( 'wp-textdomain' );

wpTextdomain( 'external/**/*.php', {
	domain: 'woocommerce-admin',
	fix: true,
	missingDomain: true,
	variableDomain: true,
} );
