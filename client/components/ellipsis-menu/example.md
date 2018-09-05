```jsx
import { EllipsisMenu, MenuItem, MenuTitle } from '@woocommerce/components';

const MyEllipsisMenu = () => (
	<EllipsisMenu label="Choose which analytics to display">
		<MenuTitle>Display Stats</MenuTitle>
		<MenuItem onInvoke={ this.toggle }>
			<ToggleControl
				label="Show Customers"
				checked={ this.state.showCustomers }
				onChange={ this.toggle }
			/>
		</MenuItem>
		…
	</EllipsisMenu>
);
```
