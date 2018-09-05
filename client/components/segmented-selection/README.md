```jsx
import { SegmentedSelection } from '@woocommerce/components';

const MySegmentedSelection = () => {
	return (
		<SegmentedSelection
			options={ [
				{ value: 'one', label: 'One' },
				{ value: 'two', label: 'Two' },
				{ value: 'three', label: 'Three' },
				{ value: 'four', label: 'Four' },
			] }
			selected={ 'two' }
			legend="Select a number"
			onSelect={ data => { /* manipulate data here */ } }
			name="numbers"
		/>
	);
};
```
