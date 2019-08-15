```jsx
import { Autocomplete } from '@woocommerce/components';

const options = [
    {
        key: 'apple',
		label: 'Apple',
		value: { id: 'apple' },
	},
	{
        key: 'banana',
		label: 'Banana',
		keywords: ['best', 'fruit'],
		value: { id: 'banana' }
	},
	{
        key: 'blueberry',
		label: 'Blueberry',
		value: { id: 'blueberry' }
	},
	{
        key: 'cherry',
		label: 'Cherry',
		value: { id: 'cherry' }
    },
];
const onChange = (selected) => {
	console.log( selected );
}

const MyAutocomplete = withState( {
	singleSelected: [],
	multipleSelected: [],
	inlineSelected: [],
} )( ( { singleSelected, multipleSelected, inlineSelected, setState } ) => (
	<div>
		<Autocomplete
			label='Single value autocomplete'
			onChange={ ( selected ) => setState( { singleSelected: selected } ) }
			options={ options }
			placeholder='Start typing to filter options...'
			selected={ singleSelected }
		/>
		<Autocomplete
			label='Autocomplete with tags and clear button'
			multiple
			onChange={ ( selected ) => setState( { multipleSelected: selected } ) }
			options={ options }
			placeholder='Start typing to filter options...'
			selected={ multipleSelected }
			showClearButton
		/>
		<Autocomplete
			label='Autocomplete with inline tags'
			multiple
			inlineTags
			onChange={ ( selected ) => setState( { inlineSelected: selected } ) }
			options={ options }
			placeholder='Start typing to filter options...'
			selected={ inlineSelected }
		/>
	</div>
) );
```
