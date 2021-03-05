# ABTest

This packages includes a component and utility functions that can be used to run A/B Tests in WooCommerce dashboard and reports pages.

## Installation

Install the module

```bash
npm install @woocommerce/abtest --save
```
## Usage

```javascript
import { ABTest } from '@woocommerce/abtest';

...

const control = <p>Hello World</p>;
const experiment = <p>Hello Dolly</p>;

<ABTest
	name='abtest_name'
	control={ control }
	experiment={ experiment }
/>

...
```
