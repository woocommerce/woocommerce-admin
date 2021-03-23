# ABTest

This packages includes a component and utility functions that can be used to run A/B Tests in WooCommerce dashboard and reports pages.

## Installation

Install the module

```bash
npm install @woocommerce/abtest --save
```

This package assumes that your code will run in an ES2015+ environment. If you're using an environment that has limited or no support for ES2015+ such as lower versions of IE then using core-js or @babel/polyfill will add support for these methods. Learn more about it in Babel docs.

## Usage

```javascript
import ABTest from '@woocommerce/abtest';

...

const Control = () => <div>Hello World</div>;
const Experiment = () => <div>Hello Dolly</div>;

<ABTest
	name="abtest_name"
	control={ <Control /> }
	experiment={ <Experiment /> }
/>

...
```

Depending on the context in which the ABTest component is rendered, group assignment may be asynchrounous. In these cases, you may want to render a loading state. You can do this by using the optional `onComplete` callback.

```javascript

...

const [ isLoading, setIsLoading ] = useState( true );

...

const Loading = () => <div>Loading...</div>;

if isLoading {
	return <Loading />
}

return <ABTest
	name="abtest_name"
	control={ <Control /> }
	experiment={ <Experiment /> }
	onComplete={ () => setIsLoading( false ) }
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
`size` | Number | `50` | Optional. Percentage size of experiment group.
`start` | Number | `0` | Optional. Start timestamp for A/B Test. If not supplied, A/B Test begins immediately.
`end` | Number | `Infinity` | Optional. End timestamp for A/B Test. If not supplied, A/B Test will continue indefinitely.
