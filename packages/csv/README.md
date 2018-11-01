# CSV

WooCommerce utility library to convert data to CSV files.

## Installation

Install the module

```bash
npm install @woocommerce/csv --save
```

## Usage

```js
onClick = () => {
	// Triggers a browser UI to save a file, named the first argument, with the contents of
	// the second argument.
	downloadCSVFile(
		// Create a file name based on the report title and optional query. Will return a
		// timestamped name, for example: revenue-2018-11-01-interval-month.csv
		generateCSVFileName( title, query ),
		// Create a string of CSV data, `headers` is an array of row headers, put at the top
		// of the file. `rows` is a 2 dimensional array. Each array is a line in the file,
		// separated by newlines. The second-level arrays are the data points in each row.
		generateCSVDataFromTable( headers, rows )
	);
}
```
