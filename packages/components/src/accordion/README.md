# Accordion

A component designed for use in the `Home` screen. It returns an accordion with the panels it receives.

## Usage

```jsx
const panels = [
	{
		className: 'class-name',
		count: 15,
		initialOpen: true,
		panel: <div>Panel 1 content</div>,
		title: 'Panel 1',
	},
	{
		className: 'class-name',
		count: 20,
		initialOpen: false,
		panel: <div>Panel 2 content</div>,
		title: 'Panel 2',
	},
	];

}

<div>
	<Accordion panels={ panels }/>
</div>
```

### Props

| Name     | Type  | Default | Description                                    |
| -------- | ----- | ------- | ---------------------------------------------- |
| `panels` | Array | `null`  | A list of objects with data to set the panels. |

Each object in the `panels` array has the following structure:

-   `className` | String | `null` | Additional CSS classes
-   `count`: Number - Number of unread elements in the panel that will be shown next to the panel's title.
-   `initialOpen`: Boolean - Whether or not the panel will start open. Default: true.
-   `panel`: ReactNode - Content displayed in the panel.
-   `title`: String - The panel title.
