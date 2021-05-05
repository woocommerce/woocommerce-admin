ErrorBoundary
===

A component useful to catch errors that might happen down in the tree.  
When an error is caught, the consumer of this component can decide to render a fallback message or a fallback component.

## Usage

```jsx
<ErrorBoundary>
  { ( { error } ) =>
    error ? (
      error.message
    ) : (
      <ComponentTreeThatMightBeThrowingAnError />
    )
  }
</ErrorBoundary>
```

### Props

Name | Type | Default | Description
--- | --- | --- | ---
`children` | Function | `undefined` | (required) A function that receives an object with 2 attributes: `error` and `info`. `error` represents the error that was thrown; `info` represents an object with a `componentStack` key containing [information about which component threw the error](https://reactjs.org/docs/error-boundaries.html#component-stack-traces). 
