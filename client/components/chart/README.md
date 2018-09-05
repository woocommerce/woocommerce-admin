```jsx
import { D3Chart, Legend } from '@woocommerce/components';

class MyChart extends Component {
	render: function() {
		return (
			<div>
				<Legend
					className="woocommerce-legend"
					data={ data }
					handleLegendHover={ this.handleLegendHover }
					handleLegendToggle={ this.handleLegendToggle }
					legendDirection={ legendDirection }
				/>
				<D3Chart
					data={ timeseries }
					height={ 200 }
					margin={ { bottom: 30, left: 40, right: 0, top: 20 } }
					type={ 'bar' }
					width={ 600 }
				/>
			</div>
		);
	}
}
```
