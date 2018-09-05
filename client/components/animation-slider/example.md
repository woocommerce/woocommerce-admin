```jsx
import { AnimationSlider } from '@woocommerce/components';

class MyAnimationSlider extends Component {
	constructor() {
		super();
		this.state = {
			pages: [ 44, 55, 66, 77, 88 ],
			page: 0,
			animate: null,
		};
		this.forward = this.forward.bind( this );
		this.back = this.forward.back( this );
	}

	forward() {
		this.setState( state => ( {
			page: state.page + 1,
			animate: 'left',
		} ) );
	}

	back() {
		this.setState( state => ( {
			page: state.page - 1,
			animate: 'right',
		} ) );
	}

	render() {
		const { page, pages, animate } = this.state;
		return (
			<div>
				<button onClick={ this.back } disabled={ page === 0 }>
					Back
				</button>
				<button onClick={ this.forward } disabled={ page === pages.length + 1 }>
					Forward
				</button>
				<AnimationSlider animationKey={ page } animate={ animate }>
					{ status => (
						<img
							className={ `my-slider my-slider-${ status }` }
							src={ `/pages/${ pages[ page ] }` }
							alt={ pages[ page ] }
						/>
					) }
				</AnimationSlider>
			</div>
		);
	}
}
```
