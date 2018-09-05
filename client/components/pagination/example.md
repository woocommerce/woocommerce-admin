```jsx
import { Pagination } from '@woocommerce/components';

const MyPagination = () => (
	<Pagination
		page={ this.state.page }
		perPage={ this.state.perPage }
		total={ 5000 }
		onPageChange={ this.onPageChange }
		onPerPageChange={ this.onPerPageChange }
	/>
);
```
