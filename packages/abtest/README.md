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
	name="abtest_name"
	control={ control }
	experiment={ experiment }
/>

...
```

## Props


Name | Type | Default | Description
--- | --- | --- | ---
`name` | String | `undefined` | A/B Test name.
`control` | Object | `undefined` | React component to show to control group.
`experiment` | Object | `undefined` | React component to show to experiment group.
`onComplete` | Function | `undefined` | Optional. A callback fired after A/B Test selects group.
`start` | `int` | 0 | Optional. Start timestamp for A/B Test. If not supplied, A/B Test begins immediately.
`end` | `int` | Infinity | Optional. End timestamp for A/B Test. If not supplied, A/B Test will continue indefinitely.
