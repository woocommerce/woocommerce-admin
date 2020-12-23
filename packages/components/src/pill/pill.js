/**
 * External dependencies
 */
import {
	__experimentalText,
	Text as TextComponent,
} from '@wordpress/components';

const Text = TextComponent || __experimentalText;

export function Pill( { children } ) {
	return (
		<Text className="woocommerce-pill" variant="caption" as="span">
			{ children }
		</Text>
	);
}
