Tabs & TabItem
===

`Tabs` is a basic component that outputs a list of tabs, usually to be used with a `Card` component. It is made up of multiple `TabItem` components.

## Usage

```jsx
const Tabs = () => {
	return (
		<Tabs selectedTab={ period } onSelect={ this.selectPeriod }>
			<TabItem name="day">Today</TabItem>
			<TabItem name="week">This Week</TabItem>
			<TabItem name="month">This Month</TabItem>
		</Tabs>
	);
}
```

### Tab Props

Name | Type | Default | Description
--- | --- | --- | ---
`className` | `string` | none | Additional classNames
`selectedTab` | `string` | none | The name of the selected tab.
`onSelect` | `function` | noop | Callback to be executed after selection

### Tab Props

Required props are marked with `*`.

Name | Type | Default | Description
--- | --- | --- | ---
`name`* | `string` | none | Name to identify the tab.

All other props are automatically passed down by `Tabs`.