`Section` and `H`
=================

These components are pulled from `components/section`, and are used to frame out the page content for accessible heading hierarchy. Instead of defining fixed heading levels (`h2`, `h3`, …) you can use `<H />` to create "section headings", which look to the parent `<Section />`s for the appropriate heading level.

For example…

```jsx
<H>My important title</H>
<Section>
	<H>This subtitle</H>
	<p>Some content</p>
	<H>Another subtitle</H>
	<p>More content</p>
</Section>
```

will render as

```html
<h2>My important title</h2>
<div>
	<h3>This subtitle</h3>
	<p>Some content</p>
	<h3>Another subtitle</h3>
	<p>More content</p>
</div>
```

Note that H starts at level 2, since there should be only 1 `h1` on each page and we set that separately in `<Header />`.

## Props for `<H />`

Any props passed to `H` will pass down to the `h*` element, so be sure to use only valid HTML properties.

## Props for `<Section />`

- `component`: The wrapper component for this section. Optional, defaults to `div`. If passed false, no wrapper is used.
- `children`: The children inside this section, rendered in the `component`. This increases the context level for the next heading used.
- `...props`: All other props are passed to the wrapper component, or ignored if `component === false`.
