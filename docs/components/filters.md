`ReportFilters` (component)
===========================

Add a collection of report filters to a page. This uses `DatePicker` & `FilterPicker` for the "basic" filters, and `AdvancedFilters`
or a comparison card if "advanced" or "compare" are picked from `FilterPicker`.



Props
-----

### `advancedConfig`

- Type: Object
- Default: `{}`


Config option passed through to `AdvancedFilters`


### `filters`

- Type: Array
- Default: `[]`


Config option passed through to `FilterPicker` - if not used, `FilterPicker` is not displayed.


### `path`

- **Required**
- Type: String
- Default: null


The `path` parameter supplied by React-Router


### `query`

- Type: Object
- Default: `{}`


The query string represented in object form

`AdvancedFilters` (component)
=============================

Displays a configurable set of filters which can modify query parameters.

Props
-----

### `config`

- **Required**
- Type: Object 
  - label: String
  - addLabel: String
  - rules: Array 
Object
  - input: Object
- Default: null


The configuration object required to render filters.


### `filterTitle`

- **Required**
- Type: String
- Default: null


Name of this filter, used in translations.


### `path`

- **Required**
- Type: String
- Default: null


The `path` parameter supplied by React-Router.


### `query`

- Type: Object
- Default: `{}`


The query string represented in object form.

`DatePicker` (component)
========================

Select a range of dates or single dates.

Props
-----

### `path`

- **Required**
- Type: String
- Default: null


The `path` parameter supplied by React-Router.


### `query`

- Type: Object
- Default: `{}`


The query string represented in object form.

`FilterPicker` (component)
==========================

Modify a url query parameter via a dropdown selection of configurable options.
This component manipulates the `filter` query parameter.

Props
-----

### `filters`

- **Required**
- Type: Array 
  - component: String
  - label: String
  - path: String
  - subFilters: Array
  - value: String
- Default: null


An array of filters and subFilters to construct the menu.


### `path`

- **Required**
- Type: String
- Default: null


The `path` parameter supplied by React-Router.


### `query`

- Type: Object
- Default: `{}`


The query string represented in object form.

