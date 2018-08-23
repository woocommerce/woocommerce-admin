Search
=============

A search box for tokenized form field

## Usage

```jsx
import Search from 'components/search';
import { select } from '@wordpress/data';

class MySearchBox extends Component {
	constructor(){
		this.state = {
			value: [],
			search: '',
		};
	}
	
	render() {
		const { getThings, isRequesting, isError } = select( 'wc-admin' );
		return (
			<Search
				value={ value }
				onChange={ value => this.setState( { value } ) }
				placeholder="Add a thing"
				onInputChange={ search => this.setState( { search } ) }
				query={ { search: this.state.search } }
				selector={ getThings }
				isRequesting={ isThingsRequesting }
				isError={ isThingsError }
				getSuggestions={ thing => thing.info.name }
			/>
		);
	}
}
```

- `value`: Token values passed through to `FormTokenField`
- `onChange`: Changed token values passed through to `FormTokenField`
- `placeholder`: Placeholder passed through to `FormTokenField`
- `onInputChange`: onInputChange passed through to `FormTokenField`
- `query`: query argument to selector 
- `selector`: Name of selector used to gather suggestions
- `isRequesting`: Name of selector used to determine if request is in progress
- `isError`: Name of selector used to determine if request is an error
- `getSuggestions`: function to map request results to suggestion strings
