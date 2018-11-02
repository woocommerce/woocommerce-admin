# CSV Export

A set of functions to convert data into CSV values, and enable a browser download of the CSV data.

## Installation

Install the module

```bash
npm install @woocommerce/csv-export --save
```

## Usage

```js
onClick = () => {
	// Create a file name based on a title and optional query. Will return a timestamped
	// name, for example: revenue-2018-11-01-interval-month.csv
	const name = generateCSVFileName( 'revenue', { interval: 'month' } );

	// Create a string of CSV data, `headers` is an array of row headers, put at the top
	// of the file. `rows` is a 2 dimensional array. Each array is a line in the file,
	// separated by newlines. The second-level arrays are the data points in each row.
	// For header format, see https://woocommerce.github.io/wc-admin/#/components/table?id=headers-2
	// For rows format, see https://woocommerce.github.io/wc-admin/#/components/table?id=rows-1
	const data = generateCSVDataFromTable( headers, rows );

	// Triggers a browser UI to save a file, named the first argument, with the contents of
	// the second argument.
	downloadCSVFile( name, data );
}
```
