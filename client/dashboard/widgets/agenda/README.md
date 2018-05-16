Agenda
============

This widget displays agenda items for WooCommerce (i.e. orders that need fulfilled, reviews to moderate, etc).

An `Agenda` widget is made up of multiple `AgendaAccordion` components, each with their own `AgendaItem`.

`Agenda` acts as a wrapper widget, and will be responsible for pulling in agenda data from the API.

`AgendaAccordion` displays multiple `AgendaItem` child components. All `AgendaItem`s under an `AgendaAccordion` should relate to the same task at hand (example: "Orders to fulfill").

`AgendaItem` contains information to each individual item (i.e. order number, date, etc). It will output an action button for acting on each item.

## How to use `Agenda`:

```jsx
import { Agenda } from 'dashboard/widgets/agenda';

render: function() {
	return (
		<div>
			<Agenda />
		</div>
	);
}
```

## How to use `AgendaAccordion` and `AgendaItem`:

```jsx
import { AgendaAccordion } from 'dashboard/widgets/agenda/accordion';
import { AgendaItem } from 'dashboard/widgets/agenda/item';

render: function() {
	return (
		<AgendaAccordion count={ 2 } title="Orders need to be fulfilled">
			<AgendaItem actionLabel={ __( 'Fulfill', 'woo-dash' ) }>
				Order #99
			</AgendaItem>
			<AgendaItem actionLabel={ __( 'Fulfill', 'woo-dash' ) }>
				Order #101
			</AgendaItem>
		</AgendaAccordion>
	);
}
```


## `AgendaAccordion` Props

* `title` (required): A title that describes the associated agenda items.
* `count` (required): Number of agenda items that need taken care of.
* `children`: A list of AgendaItem components
* `className`: Optional extra CSS.
* `initialOpen` (default: false): Initial open status of the accordion.

## `AgendaItem` Props

* `action` (required): A function called when the action button is clicked.
* `actionLabel` (required): A string to be used for the action button.
* `className`: Optional extra CSS.
