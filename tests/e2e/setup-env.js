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

	setupConsoleLogs();
} );
