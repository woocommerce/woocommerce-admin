/**
 * External dependencies
 */
import { __experimentalText as Text } from '@wordpress/components';
export function Pill( { children } ) {
	return (
		<span className="woocommerce-pill">
			<Text variant="caption">{ children }</Text>
		</span>
	);
}
