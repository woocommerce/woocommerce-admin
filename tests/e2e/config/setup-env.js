const puppeteer = require( 'puppeteer' );

beforeAll( () => {
	puppeteer.registerCustomQueryHandler( ':text', {
		queryOne: async ( element, text ) => {
			console.log( text );
			const els = await page.$x(
				`//${ element }[contains(text(), '${ text }')]`
			);
			return els[ 0 ];
		},
		queryAll: async ( element, text ) => {
			const els = await page.$x(
				`//${ element }[contains(text(), '${ text }')]`
			);
			return els;
		},
	} );
} );
