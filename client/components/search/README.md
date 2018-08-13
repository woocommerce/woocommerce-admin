Search
=============

A search box for tokenized form field

## Usage

```jsx
import Search from 'components/search';

class MySearchBox extends Component {
	constructor(){
		this.state = {
			value: [],
			search: '',
		};
	}
	
	render() {
		return (
			<Search
				value={ value }
				onChange={ value => this.setState( { value } ) }
				placeholder="Add a thing"
				onInputChange={ search => this.setState( { search } ) }
				search={ this.state.search }
				searchFn="getThing"
				requestingFn="isThingRequesting"
				errorFn="isThingError"
				getPath="property.myInfo.label"
				perPage={ 20 }
            	orderby="popularity"
			/>
		);
	}
}
```

- `value`: Token values passed through to `FormTokenField`
- `onChange`: Changed token values passed through to `FormTokenField`
- `placeholder`: Placeholder passed through to `FormTokenField`
- `onInputChange`: onInputChange passed through to `FormTokenField`
- `search`: Search term used as query argument to selector 
- `searchFn`: Name of selector used to gather suggestions
- `requestingFn`: Name of selector used to determine if request is in progress
- `errorFn`: Name of selector used to determine if request is an error
- `getPath`: String passed to lodash `get` function on each returned object in the results array. This path should point to a label or string
- `perPage`: query parameter in request for suggestions
- `orderby`: query parameter in request for suggestions
