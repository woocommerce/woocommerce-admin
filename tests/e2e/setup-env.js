/**
 * WordPress dependencies
 */
import {
	setBrowserViewport,
	enablePageDialogAccept,
} from '@wordpress/e2e-test-utils';
/**
 * Environment variables
 */
const { E2E_DEBUG, E2E_TIMEOUT } = process.env;

// The Jest timeout is increased because these tests are a bit slow
jest.setTimeout( E2E_TIMEOUT || 300000 );
if ( E2E_DEBUG ) {
	jest.setTimeout( 2147483647 ); // max 32-bit signed integer
}

function setupConsoleLogs() {
	page.on( 'pageerror', function ( err ) {
		const theTempValue = err.toString();
		console.log( 'Page error: ' + theTempValue );
	} );
	page.on( 'error', function ( err ) {
		const theTempValue = err.toString();
		console.log( 'Error: ' + theTempValue );
	} );
}

async function setUserAgent() {
	let userAgent = await page.evaluate( () => navigator.userAgent );
	const userAgentSuffix = 'wp-e2e-tests';
	const e2eUserAgent = `${ userAgent } ${ userAgentSuffix }`;

	// Reset context as a workaround to set a custom user agent
	await jestPlaywright.resetContext( {
		userAgent: e2eUserAgent,
	} );

	userAgent = await page.evaluate( () => navigator.userAgent );
	// logger.info( `User agent updated to: ${ userAgent }` );
}

// Before every test suite run, delete all content created by the test. This ensures
// other posts/comments/etc. aren't dirtying tests and tests don't depend on
// each other's side-effects.
beforeAll( async () => {
	await setUserAgent();

	// Handles not saved changed dialog in block editor
	await enablePageDialogAccept();
	setupConsoleLogs();
} );
