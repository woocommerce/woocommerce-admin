QueryBoundaryError (In Progress)
============

This component is an [Error Boundary](https://reactjs.org/docs/error-boundaries.html) introduced in React 16 used to catch errors in query parameters that don't make sense and will likely break components downstream. By catching errors, we can choose what to render.

## How to use:

```jsx
import QueryBoundaryError from 'components/query-boundary-error';
import { QueryException } from 'components/query-boundary-error/exceptions';

render: function() {
  return (
    <QueryBoundaryError key={ window.location.search }>
      <div>
      	{ throw new QueryException( { msg: 'Hello World', resetQuery: {}, params: [] } ) }
      </div>
    </QueryBoundaryError>
  );
}
```

## `QueryBoundaryError` Props

Required props are marked with `*`.

Name | Type | Default | Description
--- | --- | --- | ---
`query`* | `object` | none | The query string represented in object form
`path`* | `string` | none | `path` parameter supplied by React-Router
`key`| `*` | none |  Force a recalculation or reset of internal state when this key changes. Useful for a url change, for instance


## `QueryException`

A function used to describe error thrown and supply details on how to handle the error
