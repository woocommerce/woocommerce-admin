# Data

WooCommerce Admin data store and utilities.

## Installation

Install the module

```bash
npm install @woocommerce/data --save
```

_This package assumes that your code will run in an **ES2015+** environment. If you're using an environment that has limited or no support for ES2015+ such as lower versions of IE then using [core-js](https://github.com/zloirock/core-js) or [@babel/polyfill](https://babeljs.io/docs/en/next/babel-polyfill) will add support for these methods. Learn more about it in [Babel docs](https://babeljs.io/docs/en/next/caveats)._

## Usage

```JS
import { SETTINGS_STORE_NAME } from '@woocommerce/data';
import { withSelect } from '@wordpress/data';

function Settings( { settings } ) {
	return (
		<ul>
			{ settings.map( setting => (
				<li>{ setting.name }</li>
			) ) }
		</ul>
	);
}

const MySettings = withSelect( select => {
	const { getSettings } = select( SETTINGS_STORE_NAME );

	return {
		settings: getSettings(),
	};
} )( Settings );

// Rendered in the application:
//
//  <MySettings />
```
