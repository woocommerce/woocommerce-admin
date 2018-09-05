```jsx
import { DateRange } from '@woocommerce/components';

class MyDateRange extends Component {
	onSelect: function() {},

	render: function() {
		return (
			<DateRange
				start={ moment( 2018-01-01 ) }
				end={ moment( 2020-01-01 ) }
				onSelect={ this.onSelect }
				invalidDays="past"
			/>
		);
	}
}
```
