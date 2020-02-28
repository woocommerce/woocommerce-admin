LinkButton
===

A button that resembles a link while still being semantically a button. This is preferred over just using a link with an onclick handler and a `href="#"` because it is more accessible.

## Usage

```jsx
<LinkButton
	onClick={this.onCLickLinkButton}
>
	Activate feature
</LinkButton>
```

### Props

Name      | Type     | Default | Description
--------- | -------- | ------- | -----------
`onClick` | Function | `null`  | (required) The callback to execute when the button is clicked

