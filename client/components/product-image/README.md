```jsx
import { ProductImage } from '@woocommerce/components';

class MyProductImage extends Component {
	render: function() {
		return (
			<div>
				<ProductImage product={ null } />
				<ProductImage product={ { images: [] } } />
				<ProductImage product={ { images: [
					{
						src: 'https://i.cloudup.com/pt4DjwRB84-3000x3000.png',
					},
				] } } />
			</div>
		);
	}
}
```
