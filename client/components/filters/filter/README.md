Filter Picker
=============

Modify a url query parameter via a dropdown selection of configurable options. This component manipulates the `filter` query parameter.

## Usage

```jsx
import { FilterPicker } from '@woocommerce/components';

const renderFilterPicker = () => {
	const filters = [
		{ label: 'Breakfast', value: 'breakfast' },
		{
			label: 'Lunch',
			value: 'lunch',
			subFilters: [
				{ label: 'Meat', value: 'meat', path: [ 'lunch' ] },
				{ label: 'Vegan', value: 'vegan', path: [ 'lunch' ] },
				{
					label: 'Pescatarian',
					value: 'fish',
					path: [ 'lunch' ],
					subFilters: [
						{ label: 'Snapper', value: 'snapper', path: [ 'lunch', 'fish' ] },
						{ label: 'Cod', value: 'cod', path: [ 'lunch', 'fish' ] },
						// Specify a custom component to render (Work in Progress)
						{
							label: 'Other',
							value: 'other_fish',
							path: [ 'lunch', 'fish' ],
							component: 'OtherFish',
						},
					],
				},
			],
		},
		{ label: 'Dinner', value: 'dinner' },
	];

	return <FilterPicker filters={ filters } path={ path } query={ query } />;
};
```

### Props

* `filters` (required): An array of filters and subFilters to construct the menu
* `path` (required): The `path` parameter supplied by React-Router
* `query`: The query string represented in object form
