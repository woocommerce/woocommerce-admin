# Shared Settings

Exports global, shared settings from WooCommerce. All settings registered through the `woocommerce_shared_settings` filter are added to the `wcSettings` global and then exported by this package.

Some commonly used settings are handled directly by this package, for example `currency`. Others must be handled by your all.

## Installation

Install the module

```bash
npm install @woocommerce/shared-settings --save
```

_This package assumes that your code will run in an **ES2015+** environment. If you're using an environment that has limited or no support for ES2015+ such as lower versions of IE then using [core-js](https://github.com/zloirock/core-js) or [@babel/polyfill](https://babeljs.io/docs/en/next/babel-polyfill) will add support for these methods. Learn more about it in [Babel docs](https://babeljs.io/docs/en/next/caveats)._

## Usage

```JS
import settings from '@woocommerce/shared-settings';
```
