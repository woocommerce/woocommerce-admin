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
			onChange={ ( selected ) => setState( { singleSelected: selected } ) }
			options={ options }
			placeholder={ 'Single value autocomplete' }
			selected={ singleSelected }
		/>
		<Autocomplete
			multiple
			onChange={ ( selected ) => setState( { multipleSelected: selected } ) }
			options={ options }
			placeholder={ 'Autocomplete with tags and clear button' }
			selected={ multipleSelected }
			showClearButton
		/>
		<Autocomplete
			multiple
			inlineTags
			onChange={ ( selected ) => setState( { inlineSelected: selected } ) }
			options={ options }
			placeholder={ 'Autocomplete with inline tags' }
			selected={ inlineSelected }
		/>
	</div>
) );
```
