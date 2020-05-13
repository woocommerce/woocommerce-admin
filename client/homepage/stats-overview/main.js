import { Suspense, lazy } from '@wordpress/element';
const LazyComponent = lazy( () => import( '../lazy-component' ) );

export default function Main() {
	return (
		<Suspense fallback="Im loading...">
			<div>Lazy loaded component is here:</div>
			<LazyComponent />
		</Suspense>
	);
}
