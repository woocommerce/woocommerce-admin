# Style Build Helper

This is a [Webpack](https://webpack.js.org/) config generator for building WooCommece component styles using base styles from Gutenberg. It replaces the [`bin/packages/build.js`](https://github.com/woocommerce/woocommerce-admin/blob/6859249/bin/packages/build.js) script.


## Usage

***Note:*** Your package's main style entry must be `src/style.scss`.

Create a `webpack.config.js` and pass the root directory of your package into the generator:

```js
// packages/<package-name>/webpack.config.js

import { webpackConfig } from '@woocommerce/style-build';

module.exports = webpackConfig( __dirname );
```
