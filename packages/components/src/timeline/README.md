Timeline
===

This is a timeline for displaying data, such as events, in chronological order.
It accepts `items` for the timeline content and will order the data for you.

## Usage

```jsx
import Timeline from './Timeline';
import { orderByOptions, groupByOptions } from './Timeline';

const items = [
  {
    datetime: new Date( 2019, 9, 28, 9, 0 )
    gridicon: 'checkmark',
    headline: 'A payment of $90.00 was successfully charged',
    body: [
      'Fee: $2.91 ( 2.9% + $0.30 )',
      'Net deposit: $87.09',
    ],
  },
  {
    datetime: new Date( 2019, 9, 28, 9, 32 ),
    gridicon: 'plus',
    headline: '$94.16 was added to your October 29, 2019 deposit',
    body: [],
  },
  {
    datetime: new Date( 2019, 9, 27, 20, 9 ),
    gridicon: 'checkmark',
    headline: 'A payment of $90.00 was successfully authorized',
    body: [],
  },
]

<Timeline
  items={ items }
  groupBy={ groupByOptions.DAY }
  orderBy={ orderByOptions.ASC }
/>
```

### Props

Name | Type | Default | Description
--- | --- | --- | ---
`className` | String | `''` | Additional class names that can be applied for styling purposes
`items` | Array | `[]` | An array of items to be displayed on the timeline
`orderBy` | String | `'asc'` | How the items should be ordered, either `'asc'` or `'desc'`
`groupBy` | String | `'day'` | How the items should be grouped, one of `'day'`, `'week'`, or `'month'`


### `items` structure

A list of items with properties:

- `datetime`: int - Unix timestamp
- `gridicon`: String - The name of the gridicon associated with this item
- `headline`: String - The title text of this item
- `body`: Array - Detail text associated with this item
