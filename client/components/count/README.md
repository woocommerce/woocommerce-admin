Count
===

Display a number with a styled border

## Usage

```jsx
import Count from 'components/count';

export default function myCount() {
	return (
		<Count count={ 33 } />
	);
}
```

### Props

* Marks required props

Name | Type | Default | Description
--- | --- | --- | ---
`count`* | `number` | none | Value of the number to be displayed
`label` | `string` | "Total" | Label for this number, read by screen readers (hidden visually)
