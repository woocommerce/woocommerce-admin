```jsx
import { TableCard } from '@woocommerce/components';

const MyTableCard = () => (
	<TableCard
		title="Revenue Last Week"
		rows={ rows }
		headers={ headers }
		onQueryChange={ this.onQueryChange }
		query={ query }
		summary={ summary }
	/>
);
```
