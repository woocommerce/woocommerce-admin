/**
 * Internal dependencies
 */
import Text from '../text';

export function Pill( { children } ) {
	return (
		<Text className="woocommerce-pill" variant="caption" as="span">
			{ children }
		</Text>
	);
}
